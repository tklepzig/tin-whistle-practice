import { useState, useRef, useCallback } from 'react';
import ABCJS from 'abcjs';

type AudioState = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

const CURSOR_COLOR = 'rgba(16, 185, 129, 0.25)';
const CURSOR_BORDER = 'rgba(16, 185, 129, 0.7)';

// Reuse a single AudioContext across plays — browsers limit how many you can create.
let sharedAudioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!sharedAudioContext || sharedAudioContext.state === 'closed') {
    sharedAudioContext = new AudioContext();
  }
  return sharedAudioContext;
}

function insertCursorRect(svg: SVGSVGElement): SVGRectElement {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('fill', CURSOR_COLOR);
  rect.setAttribute('stroke', CURSOR_BORDER);
  rect.setAttribute('stroke-width', '1.5');
  rect.setAttribute('rx', '3');
  rect.setAttribute('ry', '3');
  rect.setAttribute('x', '0');
  rect.setAttribute('y', '0');
  rect.setAttribute('width', '0');
  rect.setAttribute('height', '0');
  // Insert behind all note elements
  svg.insertBefore(rect, svg.firstChild);
  return rect;
}

export function useAudio() {
  const [audioState, setAudioState] = useState<AudioState>('idle');
  const synthRef = useRef<ABCJS.MidiBuffer | null>(null);
  const timingRef = useRef<ABCJS.TimingCallbacks | null>(null);
  const cursorRef = useRef<SVGRectElement | null>(null);

  const stop = useCallback(() => {
    if (timingRef.current) {
      timingRef.current.stop();
      timingRef.current = null;
    }
    if (synthRef.current) {
      try { synthRef.current.stop(); } catch { /* already stopped */ }
      synthRef.current = null;
    }
    if (cursorRef.current) {
      cursorRef.current.remove();
      cursorRef.current = null;
    }
    setAudioState('idle');
  }, []);

  const play = useCallback(async (
    visualObj: ABCJS.TuneObject,
    container: HTMLElement,
  ) => {
    stop();

    if (!ABCJS.synth.supportsAudio()) {
      setAudioState('error');
      return;
    }

    setAudioState('loading');

    try {
      const audioContext = getAudioContext();
      // Browsers suspend AudioContext until a user gesture — resume it here
      // since play() is always called directly from a click handler.
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      const synth = new ABCJS.synth.CreateSynth();
      await synth.init({
        audioContext,
        visualObj,
        options: {
          // GM patch 75 = Recorder (closest available to tin whistle)
          program: 75,
        },
        onEnded: () => {
          timingRef.current?.stop();
          timingRef.current = null;
          if (cursorRef.current) {
            cursorRef.current.remove();
            cursorRef.current = null;
          }
          synthRef.current = null;
          setAudioState('idle');
        },
      });
      await synth.prime();

      // Set up cursor rect in the SVG
      const svg = container.querySelector('svg');
      if (svg) {
        const cursor = insertCursorRect(svg as SVGSVGElement);
        cursorRef.current = cursor;

        const timing = new ABCJS.TimingCallbacks(visualObj, {
          eventCallback: (event) => {
            if (!event || event.type === 'end') {
              cursor.setAttribute('width', '0');
              return;
            }
            if (
              event.left != null &&
              event.top != null &&
              event.width != null &&
              event.height != null
            ) {
              cursor.setAttribute('x', String(event.left - 2));
              cursor.setAttribute('y', String(event.top));
              cursor.setAttribute('width', String(event.width + 4));
              cursor.setAttribute('height', String(event.height));
            }
          },
        });
        timingRef.current = timing;

        synthRef.current = synth;
        setAudioState('playing');

        // Start both together so they stay in sync
        synth.start();
        timing.start();
      } else {
        synthRef.current = synth;
        setAudioState('playing');
        synth.start();
      }
    } catch (error) {
      console.error('Audiofehler:', error);
      synthRef.current = null;
      setAudioState('error');
    }
  }, [stop]);

  const pause = useCallback(() => {
    if (!synthRef.current || !timingRef.current) return;
    synthRef.current.pause();
    timingRef.current.pause();
    setAudioState('paused');
  }, []);

  const resume = useCallback(() => {
    if (!synthRef.current || !timingRef.current) return;
    synthRef.current.resume();
    timingRef.current.start();
    setAudioState('playing');
  }, []);

  return { audioState, play, pause, resume, stop };
}
