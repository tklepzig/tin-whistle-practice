// Upper and lower diatonic neighbors for each note in the tin whistle range.
// Key signatures handle accidentals (e.g. f = F# in K:D).
const NEIGHBORS: Record<string, readonly [upper: string, lower: string]> = {
  'd':   ['e', 'c'],
  'e':   ['f', 'd'],
  'f':   ['g', 'e'],
  'g':   ['a', 'f'],
  'a':   ['b', 'g'],
  'b':   ["c'", 'a'],
  "c'":  ["d'", 'b'],
  "d'":  ["e'", "c'"],
  "e'":  ["f'", "d'"],
  "f'":  ["g'", "e'"],
  "g'":  ["a'", "f'"],
  "a'":  ["b'", "g'"],
  "b'":  ["c''", "a'"],
  "c''": ["d''", "b'"],
};

// Transforms ABC roll ornaments (~) into audio approximations:
//
//   ~Xn  →  X(n-1) {upper lower} X
//
// The main note holds for n-1 units, then upper+lower fire as a double grace
// note (very brief), and the root note closes with 1 unit. This produces
// the characteristic "held note → quick ornament flick → short close" of a roll.
//
// ~X (n=1) → {upper}X  (too short for a full roll, just a cut)
export function expandRollsForAudio(abc: string): string {
  return abc.replace(/~([a-g][',]*)(\d*)/g, (match, note: string, durationStr: string) => {
    const neighbors = NEIGHBORS[note];
    if (!neighbors) return match;

    const [upper, lower] = neighbors;
    const duration = durationStr === '' ? 1 : parseInt(durationStr, 10);

    if (duration < 2) {
      return `{${upper}}${note}`;
    }

    const closeDuration = duration - 1;
    const closeToken = closeDuration === 1 ? note : `${note}${closeDuration}`;
    return `${note}{${upper}${lower}}${closeToken}`;
  });
}
