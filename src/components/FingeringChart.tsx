import { FINGERINGS } from '../data/exercises';

export function FingeringChart() {
  return (
    <div className="fingering-bar">
      <div className="fingering-label">
        Grifftabelle — beide Oktaven &nbsp;·&nbsp; ● geschlossen &nbsp;◑ halb &nbsp;○ offen &nbsp;·&nbsp; Löcher 1–6 &nbsp;·&nbsp; Kleinbuchstaben = obere Oktave (↑ überblasen)
      </div>
      <div className="fingering-chart">
        {FINGERINGS.map(({ note, holes, hint }) => (
          <div key={note} className="note-fingering">
            <div className="note-name">{note}</div>
            <div className="holes">
              {holes.map((state, index) => (
                <div key={index} className={`hole ${state === 1 ? 'closed' : state === 0.5 ? 'half' : 'open'}`} />
              ))}
            </div>
            <div className="fingering-hint">{hint}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
