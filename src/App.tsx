import { useState, useCallback, useRef, useMemo } from 'react';

function adjustTempo(abc: string, percent: number): string {
  if (percent === 100) return abc;
  return abc.replace(/Q:(\d+\/\d+=)(\d+)/, (_, prefix, bpm) =>
    `Q:${prefix}${Math.round(parseInt(bpm) * percent / 100)}`
  );
}
import ABCJS from 'abcjs';
import { exercises } from './data/exercises';
import { useProgress } from './hooks/useProgress';
import { useAudio } from './hooks/useAudio';
import { Sidebar } from './components/Sidebar';
import { NotationDisplay } from './components/NotationDisplay';
import { FingeringChart } from './components/FingeringChart';
import './App.css';

export default function App() {
  const [currentId, setCurrentId] = useState(1);
  const [tempo, setTempo] = useState(100);
  const { completed, markComplete } = useProgress();
  const { audioState, play, pause, resume, stop } = useAudio();
  const visualObjRef = useRef<ABCJS.TuneObject | null>(null);
  const notationContainerRef = useRef<HTMLDivElement>(null);

  const exercise = exercises.find(ex => ex.id === currentId)!;
  const adjustedAbc = useMemo(() => adjustTempo(exercise.abc, tempo), [exercise.abc, tempo]);

  const handleVisualObj = useCallback((obj: ABCJS.TuneObject) => {
    visualObjRef.current = obj;
  }, []);

  const handleSelect = useCallback((id: number) => {
    stop();
    setTempo(100);
    setCurrentId(id);
  }, [stop]);

  const handlePlay = useCallback(() => {
    if (visualObjRef.current && notationContainerRef.current) {
      play(adjustedAbc, visualObjRef.current, notationContainerRef.current);
    }
  }, [play, adjustedAbc]);

  const handleMarkComplete = useCallback(() => {
    markComplete(currentId);
    if (currentId < exercises.length) {
      stop();
      setTempo(100);
      setCurrentId(currentId + 1);
    }
  }, [currentId, markComplete, stop]);

  const handleTempoChange = useCallback((value: number) => {
    if (audioState === 'paused') stop();
    setTempo(value);
  }, [audioState, stop]);

  const navigate = useCallback((delta: number) => {
    const newId = currentId + delta;
    if (newId >= 1 && newId <= exercises.length) {
      stop();
      setTempo(100);
      setCurrentId(newId);
    }
  }, [currentId, stop]);

  return (
    <div className="layout">
      <header className="header">
        <h1>Irische <em>Tin Whistle</em> — D-Flöte</h1>
        <div className="header-nav">
          <button
            className="btn btn-ghost"
            disabled={currentId === 1}
            onClick={() => navigate(-1)}
          >
            ← Zurück
          </button>
          <button
            className="btn btn-ghost"
            disabled={currentId === exercises.length}
            onClick={() => navigate(1)}
          >
            Weiter →
          </button>
        </div>
      </header>

      <div className="main">
        <Sidebar
          currentId={currentId}
          completed={completed}
          onSelect={handleSelect}
        />

        <div className="content">
          <div className="exercise-header">
            <div>
              <h2 className="exercise-title">{exercise.title}</h2>
              <div className="exercise-meta">{exercise.meta}</div>
            </div>
            <div className="controls">
              {audioState === 'playing' && (
                <>
                  <button className="btn btn-ghost" onClick={pause}>⏸ Pause</button>
                  <button className="btn btn-ghost" onClick={stop}>■ Stop</button>
                </>
              )}
              {audioState === 'paused' && (
                <>
                  <button className="btn btn-primary" onClick={resume}>▶ Weiter</button>
                  <button className="btn btn-ghost" onClick={stop}>■ Stop</button>
                </>
              )}
              {(audioState === 'idle' || audioState === 'loading') && (
                <button
                  className="btn btn-primary"
                  disabled={audioState === 'loading'}
                  onClick={handlePlay}
                >
                  {audioState === 'loading' ? 'Laden…' : '▶ Abspielen'}
                </button>
              )}
              {audioState === 'error' && (
                <span className="audio-error">Audio in diesem Browser nicht verfügbar</span>
              )}
              <div className="tempo-control">
                <input
                  type="range"
                  className="tempo-slider"
                  min={40}
                  max={150}
                  step={5}
                  value={tempo}
                  disabled={audioState === 'playing' || audioState === 'loading'}
                  onChange={event => handleTempoChange(Number(event.target.value))}
                />
                <span className="tempo-value">{tempo}%</span>
                <button
                  className="btn btn-ghost tempo-reset"
                  disabled={tempo === 100}
                  onClick={() => handleTempoChange(100)}
                  title="Tempo zurücksetzen"
                >
                  ↺
                </button>
              </div>
              <button className="btn btn-done" onClick={handleMarkComplete}>
                ✓ Erledigt
              </button>
            </div>
          </div>

          <NotationDisplay
            ref={notationContainerRef}
            abc={adjustedAbc}
            onVisualObj={handleVisualObj}
          />

          <div className="tips-section">
            <div className="tips-label">Tipps & Technik</div>
            <ul className="tips-list">
              {exercise.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FingeringChart />
    </div>
  );
}
