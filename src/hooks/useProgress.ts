import { useState, useCallback } from 'react';

const STORAGE_KEY = 'wg_completed';

function loadCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as number[]) : []);
  } catch {
    return new Set();
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<number>>(loadCompleted);

  const markComplete = useCallback((id: number) => {
    setCompleted(previous => {
      const next = new Set(previous);
      next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  return { completed, markComplete };
}
