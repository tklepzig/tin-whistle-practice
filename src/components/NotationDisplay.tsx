import { useEffect, useRef, forwardRef } from 'react';
import ABCJS from 'abcjs';

interface Props {
  abc: string;
  onVisualObj: (obj: ABCJS.TuneObject) => void;
}

export const NotationDisplay = forwardRef<HTMLDivElement, Props>(
  function NotationDisplay({ abc, onVisualObj }, ref) {
    const internalRef = useRef<HTMLDivElement>(null);

    // Merge the forwarded ref with our internal one
    const containerRef = (node: HTMLDivElement | null) => {
      internalRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    useEffect(() => {
      if (!internalRef.current) return;

      const visualObjs = ABCJS.renderAbc(internalRef.current, abc, {
        responsive: 'resize',
        add_classes: true,
        paddingleft: 0,
        paddingright: 0,
        paddingbottom: 0,
      });

      if (visualObjs[0]) {
        onVisualObj(visualObjs[0]);
      }
    }, [abc, onVisualObj]);

    return <div className="notation-container" ref={containerRef} />;
  }
);
