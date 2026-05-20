import { exercises, type Exercise } from '../data/exercises';

interface Props {
  currentId: number;
  completed: Set<number>;
  onSelect: (id: number) => void;
}

interface Level {
  name: string;
  items: Exercise[];
}

function groupByLevel(list: Exercise[]): Level[] {
  const map = new Map<number, Level>();
  for (const exercise of list) {
    if (!map.has(exercise.level)) {
      map.set(exercise.level, { name: exercise.levelName, items: [] });
    }
    map.get(exercise.level)!.items.push(exercise);
  }
  return [...map.values()];
}

export function Sidebar({ currentId, completed, onSelect }: Props) {
  const levels = groupByLevel(exercises);

  return (
    <aside className="sidebar">
      {levels.map(level => (
        <div key={level.name} className="level-group">
          <div className="level-label">{level.name}</div>
          {level.items.map(exercise => (
            <button
              key={exercise.id}
              className={[
                'exercise-btn',
                exercise.id === currentId ? 'active' : '',
              ].join(' ')}
              onClick={() => onSelect(exercise.id)}
            >
              <span className="ex-num">{exercise.id}</span>
              <span className="ex-title">{exercise.title}</span>
              <span className="check">{completed.has(exercise.id) ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}
