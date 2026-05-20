export interface Exercise {
  id: number;
  level: number;
  levelName: string;
  title: string;
  meta: string;
  abc: string;
  tips: string[];
}

export const exercises: Exercise[] = [
  {
    id: 1,
    level: 1,
    levelName: 'Stufe 1 — Grundlagen',
    title: 'Untere Oktave — Aufsteigend',
    meta: '4/4  ·  Viertelnoten  ·  60 bpm',
    abc: `X:1
T:Untere Oktave — Aufsteigend
M:4/4
L:1/4
Q:1/4=60
K:D
d e f g | a b c' d' |]`,
    tips: [
      'Jedes Loch mit dem Pad des Fingers vollständig abdichten — Quietschen bedeutet eine Lücke.',
      'Deutlich weniger Luft als bei der Querflöte. Das Mundstück übernimmt die Arbeit.',
      'D (alle Löcher zu) und E (nur das unterste Loch öffnen) sind die Ankertöne — diese zuerst festigen.',
      'Auf einen sauberen, zentrierten Ton bei jeder Note achten, bevor weitergegangen wird.',
    ],
  },
  {
    id: 2,
    level: 1,
    levelName: 'Stufe 1 — Grundlagen',
    title: 'Untere Oktave — Absteigend',
    meta: '4/4  ·  Viertelnoten  ·  60 bpm',
    abc: `X:1
T:Untere Oktave — Absteigend
M:4/4
L:1/4
Q:1/4=60
K:D
d' c' b a | g f e d |]`,
    tips: [
      'Absteigende Läufe sind schwieriger als aufsteigende — die Finger müssen präzise landen.',
      'Jeden Finger sauber zurücksetzen, um das Loch abzudichten — nicht gleiten lassen.',
      'Das tiefe D (alle zu) kann luftig klingen — fest andrücken und Ton kontrollieren.',
    ],
  },
  {
    id: 3,
    level: 1,
    levelName: 'Stufe 1 — Grundlagen',
    title: 'Untere Oktave — Auf und Ab',
    meta: '4/4  ·  Viertelnoten  ·  60 bpm',
    abc: `X:1
T:Untere Oktave — Auf und Ab
M:4/4
L:1/4
Q:1/4=60
K:D
d e f g | a b c' d' | d' c' b a | g f e d |]`,
    tips: [
      'Am höchsten Punkt (hohes d) die Richtungsänderung nahtlos gestalten — keine Pause.',
      'Den Atemdruck konstant halten — beim Aufsteigen nicht mehr Luft geben.',
    ],
  },
  {
    id: 4,
    level: 1,
    levelName: 'Stufe 1 — Grundlagen',
    title: 'Obere Oktave — Aufsteigend',
    meta: '4/4  ·  Viertelnoten  ·  70 bpm',
    abc: `X:1
T:Obere Oktave — Aufsteigend
M:4/4
L:1/4
Q:1/4=70
K:D
d' e' f' g' | a' b' c'' d'' |]`,
    tips: [
      'Dieselbe Griffweise wie in der unteren Oktave — nur der Atemfluss ändert sich, nicht die Lautstärke.',
      'An einen „schnelleren Luftstrahl" denken, nicht an „mehr Luft".',
      'Die Querflötenerfahrung hilft hier: ähnlich wie das Überblasen zu einem Flageolett.',
      'Ein Quietschen beim Oktavwechsel ist am Anfang normal — reine Atemkontrolle.',
    ],
  },
  {
    id: 5,
    level: 1,
    levelName: 'Stufe 1 — Grundlagen',
    title: 'Zweioktavige Tonleiter',
    meta: '4/4  ·  Viertelnoten  ·  60 bpm',
    abc: `X:1
T:Zweioktavige Tonleiter
M:4/4
L:1/4
Q:1/4=60
K:D
d e f g | a b c' d' | d' e' f' g' | a' b' c'' d'' |
d'' c'' b' a' | g' f' e' d' | d' c' b a | g f e d |]`,
    tips: [
      'Die Herausforderung: den Oktavbruch (c\' → d\') ohne Quietscher überwinden.',
      'An der Grenze bleibt die Griffweise gleich — nur der Atem ändert sich.',
      '60 bpm ist hier richtig, auch wenn es langsam wirkt. Sauber schlägt schnell.',
      'Das ist die wichtigste technische Übung — regelmäßig zurückkehren.',
    ],
  },
  {
    id: 6,
    level: 2,
    levelName: 'Stufe 2 — Bekannte Melodien',
    title: 'Mary had a Little Lamb',
    meta: '4/4  ·  Viertel- & Halbenoten  ·  80 bpm',
    abc: `X:1
T:Mary Had a Little Lamb
M:4/4
L:1/4
Q:1/4=80
K:D
f e d e | f f f2 | e e e2 | f a a2 |
f e d e | f f f f | e e f e | d4 |]`,
    tips: [
      'Nur vier Töne: D, E, Fis (als f notiert in K:D), A — ideal für Muskelgedächtnis.',
      'Die halbe Note beendet jede Phrase — voll ausklingen lassen, nicht abschneiden.',
      'Auf gleichmäßigen Rhythmus achten: alle Viertelnoten sollen gleich lang klingen.',
    ],
  },
  {
    id: 7,
    level: 2,
    levelName: 'Stufe 2 — Bekannte Melodien',
    title: 'Hot Cross Buns',
    meta: '4/4  ·  Viertelnoten  ·  80 bpm',
    abc: `X:1
T:Hot Cross Buns
M:4/4
L:1/4
Q:1/4=80
K:D
b a g2 | b a g2 | g g g g | a a a a | b a g2 |]`,
    tips: [
      'Nutzt den oberen Teil der unteren Oktave: G, A, H.',
      'H-Griff: nur Loch 1 geschlossen — leicht zu übereilen.',
      'Takte 3 & 4 bestehen aus vier gleichmäßigen Viertelnoten — ruhig und steady halten.',
    ],
  },
  {
    id: 8,
    level: 2,
    levelName: 'Stufe 2 — Bekannte Melodien',
    title: 'Morgen kommt der Weihnachtsmann',
    meta: '4/4  ·  Viertel- & Halbenoten  ·  80 bpm',
    abc: `X:1
T:Morgen kommt der Weihnachtsmann
M:4/4
L:1/4
Q:1/4=80
K:D
d d a a | b b a2 | g g f f | e e d2 |
a a g g | f f e2 | a a g g | f f e2 |
d d a a | b b a2 | g g f f | e e d2 |]`,
    tips: [
      'Nutzt alle 7 Töne der D-Dur-Tonleiter — das vollständige Programm der unteren Oktave.',
      'Der Sprung D→A in Takt 1 ist ein großer Griffwechsel — sauber ausführen.',
      'Tiefes D und E können luftig klingen — Finger fest andrücken.',
    ],
  },
  {
    id: 9,
    level: 3,
    levelName: 'Stufe 3 — Irische Tradition',
    title: 'Jig-Rhythmus Übung',
    meta: '6/8  ·  Achtelnoten  ·  70 bpm',
    abc: `X:1
T:Jig-Rhythmus Uebung
M:6/8
L:1/8
Q:3/8=70
K:D
d2e fed | g2a bag | a2b c'ba | d'3 d'3 |
d'2c' bag | a2g fed | e2f gfe | d3 d3 |]`,
    tips: [
      '6/8-Takt: zwei Dreiergruppen pro Takt — als 1-2-3 / 1-2-3 spüren.',
      'Im irischen Trad bekommt die erste Zählzeit jeder Gruppe ein leichtes Gewicht — kein harter Akzent.',
      'Zungenstoß ist in der Trad selten — nur zu Beginn einer Phrase einsetzen.',
      'Jig und Reel sind die beiden zentralen Melodietypen in der irischen Musik.',
    ],
  },
  {
    id: 10,
    level: 3,
    levelName: 'Stufe 3 — Irische Tradition',
    title: 'The Kesh Jig',
    meta: '6/8  ·  Achtelnoten  ·  100 bpm  ·  Tonart G',
    abc: `X:1
T:The Kesh Jig
M:6/8
L:1/8
Q:3/8=100
K:G
|:g2a bag|efg afd|g2a bag|dgg g3|
g2a bag|efg afd|geg faf|dgg g3:|
|:d'g'g' g'f'e'|d'g'g' a'g'a'|d'g'g' g'f'e'|f'd'd' d'3|
d'g'g' g'f'e'|d'g'g' a'g'a'|g'f'e' f'd'a'|e'g'g' e'3:|`,
    tips: [
      'Der erste echte Trad-Tune — gespielt in G (die zweite Naturtonart der D-Flöte).',
      'Zwei Teile: A-Teil (untere Lage) und B-Teil (obere Lage), jeder wiederholt.',
      'Erst den A-Teil alleine lernen und festigen, dann den B-Teil angehen.',
      'Bei einer Session wird ein Tune 2–3 Mal durchgespielt, bevor der nächste kommt.',
      'Ziel-Sessiontempo: ~120 bpm. Bei 80 starten und langsam steigern.',
    ],
  },
  {
    id: 11,
    level: 3,
    levelName: 'Stufe 3 — Irische Tradition',
    title: "The Connaughtman's Rambles",
    meta: '6/8  ·  Achtelnoten  ·  100 bpm  ·  Tonart D',
    abc: `X:1
T:The Connaughtman's Rambles
M:6/8
L:1/8
Q:3/8=100
K:D
|:ffd ded|fdf afd|ffd ded|efa a2b|
afa bab|faf d2e|fed efa|ddd d3:|
|:fga afd|fga afd|fga afg|edd d3|
fga afd|fga agf|gfe fed|edd d3:|`,
    tips: [
      'Einer der bekanntesten traditionellen Jigs in D-Dur — häufig in irischen Sessions gespielt.',
      'Der A-Teil dreht sich um den charakteristischen Abstieg F#–E–D und den Sprung zurück zu A.',
      'Der B-Teil wechselt zu einem laufenden F#–G–A-Motiv in der oberen Lage.',
      'Beim Übergang A→B und zurück die 6/8-Pulsation nicht unterbrechen.',
      'Traditionell: jeder Tune wird 2–3 Mal durchgespielt, bevor der nächste kommt.',
    ],
  },
  {
    id: 12,
    level: 3,
    levelName: 'Stufe 3 — Irische Tradition',
    title: 'The Irish Washerwoman',
    meta: '6/8  ·  Achtelnoten  ·  100 bpm  ·  Tonart G',
    abc: `X:1
T:The Irish Washerwoman
M:6/8
L:1/8
Q:3/8=100
K:G
|:gdg gag|bge e2d|gdg gba|bge e2d|
gdg gag|bge d2e|ged bag|bgg g3:|
|:d'g'g' g'a'g'|b'g'e' e'3|d'g'g' g'b'a'|b'g'e' e'3|
d'g'g' g'a'g'|b'g'e' d'2e'|f'g'e' d'ba|bgg g3:|`,
    tips: [
      'Einer der bekanntesten irischen Jigs weltweit — gespielt in G-Dur, der zweiten Naturtonart der D-Flöte.',
      'A-Teil in der unteren Lage um G, B-Teil eine Oktave höher — klarer Kontrast zwischen den Teilen.',
      'Das charakteristische Washerwoman-Gefühl entsteht durch den betonten Beginn jeder Dreiergruppe.',
      'B-Teil: nur Atemdruck erhöhen, Griffweise bleibt identisch zum A-Teil.',
      'Ein gutes Sessionziel: dieser Tune wird oft als erstes gespielt, wenn eine Session beginnt.',
    ],
  },
  {
    id: 13,
    level: 4,
    levelName: 'Stufe 4 — Halblöcher & Modi',
    title: 'C-Natürlich — Einführung',
    meta: '4/4  ·  Viertelnoten  ·  60 bpm',
    abc: `X:1
T:C-Natürlich — Einführung
M:4/4
L:1/4
Q:1/4=60
K:D
a b =c' d' | =c' b a g | f g a b | =c' d' =c' b |
a g f e | d e f g | a b =c' b | a4 |]`,
    tips: [
      'C-Natürlich (=c\') erfordert einen Halbloch-Griff: Loch 1 (Zeigefinger links) nur halb abdecken.',
      'Zu viel Druck → C# klingt; zu wenig → kein sauberer Ton. Das richtige Maß ist Gefühlssache.',
      'Langsam üben: H → C♮ → d\' und zurück, bis der Ton sicher und stabil sitzt.',
      'C-Natürlich erscheint in der Notation mit einem Auflösungszeichen (♮) — ein Hinweis, genau hinzuschauen.',
      'Dieser Ton öffnet die Welt der Moll-Modi und Mixolydisch — eine wichtige Technik für die Trad.',
    ],
  },
  {
    id: 14,
    level: 4,
    levelName: 'Stufe 4 — Halblöcher & Modi',
    title: 'D-Mixolydisch — Tonleiter',
    meta: '4/4  ·  Viertelnoten  ·  60 bpm',
    abc: `X:1
T:D-Mixolydisch — Tonleiter
M:4/4
L:1/4
Q:1/4=60
K:Dmix
d e f g | a b c' d' | d' c' b a | g f e d |
d e f g | a b c' d' | d' c' b a | g f e d |]`,
    tips: [
      'D-Mixolydisch = D-Dur mit C-Natürlich statt C#. Nur eine Note anders — aber der Klangcharakter verändert sich vollständig.',
      'In K:Dmix ist das C automatisch natürlich — kein Auflösungszeichen nötig, aber der Halblochgriff bleibt gleich.',
      'Mixolydisch klingt modal und leicht offen — typisch für viele irische und keltische Melodien.',
      'Die Herausforderung beim Abstieg: den Halblochgriff für C♮ treffen, bevor H folgt.',
      'Zum Vergleich: D-Dur Tonleiter (Übung 5) direkt danach spielen — den Unterschied hören.',
    ],
  },
  {
    id: 15,
    level: 4,
    levelName: 'Stufe 4 — Halblöcher & Modi',
    title: 'The Road to Lisdoonvarna',
    meta: '6/8  ·  Achtelnoten  ·  90 bpm  ·  D-Mixolydisch',
    abc: `X:1
T:The Road to Lisdoonvarna
M:6/8
L:1/8
Q:3/8=90
K:Dmix
|:c'ag a2d|c'ag a2d|c'de dag|adg ged|
c'ag a2d|c'ag a2d|c'de dag|add d3:|
|:g2a bag|agf gfe|g2a bag|age e3|
g2a bag|agf gfe|fga fed|add d3:|`,
    tips: [
      'Einer der bekanntesten Mixolydian-Jigs — ein ideales erstes Stück für den C♮-Griff in echten Tunes.',
      'Der A-Teil beginnt mit C♮ als Ankerton — der Halblochgriff muss hier von Anfang an sitzen.',
      'Das Motiv C♮–A–G wiederholt sich zweimal vor dem Aufstieg: Routine für den Halblochgriff aufbauen.',
      'Der B-Teil kommt ohne C♮ aus — eine willkommene Erholung für den Zeigefinger.',
      'Ziel-Sessiontempo: ~120 bpm. Bei 90 bpm lernen, dann schrittweise steigern.',
    ],
  },
  {
    id: 16,
    level: 3,
    levelName: 'Stufe 3 — Irische Tradition',
    title: "Morrison's Jig",
    meta: '6/8  ·  Achtelnoten  ·  100 bpm  ·  E-Dorisch',
    abc: `X:1
T:Morrison's Jig
M:6/8
L:1/8
Q:3/8=100
K:Edor
|:e3 bgb|ebe afd|e3 bab|d'c'b afd|
e3 bgb|ebe afd|gbg fab|d'ag fed:|
|:be'e' f'e'e'|a'e'e' f'e'd'|be'e' f'e'e'|a'a'g' f'e'd'|
be'e' f'e'e'|a'e'e' f'e'd'|g'f'e' d'2a|bag fed:|`,
    tips: [
      'Morrison\'s Jig ist in E-Dorisch — das charakteristische Eröffnungsmotiv: drei E\'s (e3) gefolgt von B–G–B.',
      'Der A-Teil dreht sich um E und B als Ankertöne, mit einem Abstieg über D\'–C#–B–A–F#–D am Ende.',
      'Der B-Teil springt zwischen dem tiefen H (b=B4) und dem hohen e\' (E5) — ein großer Intervallsprung.',
      'Das B-Teil-Motiv b e\'e\' | f\'e\'e\' ist der Herzschlag dieses Tunes — zuerst langsam isoliert üben.',
      'Ziel-Sessiontempo: ~130 bpm. Komponiert vom Geiger James Morrison aus Sligo.',
    ],
  },
  {
    id: 19,
    level: 6,
    levelName: 'Stufe 6 — Verzierungen',
    title: 'Einschläge — Einführung',
    meta: '4/4  ·  Achtelnoten  ·  60 bpm',
    abc: `X:1
T:Einschläge — Einführung
M:4/4
L:1/8
Q:1/4=60
K:D
{f}e4 {f}e4 | {b}a4 {b}a4 |
{f}e2 {b}a2 {f}e2 {b}a2 | {f}e4 z4 |
{f}ede {f}ede | {b}aba {b}aba |
{f}ede {b}aba | {f}e4 z4 |]`,
    tips: [
      'Ein Einschlag (Cut) ist eine kurze Verzierung von oben: den Finger über der Melodienote kurz antippen, ohne neu anzublasen.',
      'Der Finger über der Note tippt blitzschnell auf das Griffloch und hebt sich sofort wieder — der Ton der Melodienote bleibt.',
      '{f}e bedeutet: kurzer F#-Einschlag vor E. Der Einschlag hat keine eigene Zählzeit — er gehört zur E-Note.',
      '{b}a bedeutet: kurzer H-Einschlag vor A. Immer die Melodienote im Ohr behalten.',
      'Einschläge verleihen den Noten Lebendigkeit — in der irischen Trad sind sie auf betonten Zählzeiten selbstverständlich.',
    ],
  },
  {
    id: 20,
    level: 6,
    levelName: 'Stufe 6 — Verzierungen',
    title: 'Rollen — Einführung',
    meta: '6/8  ·  Achtelnoten  ·  60 bpm',
    abc: `X:1
T:Rollen — Einführung
M:6/8
L:1/8
Q:3/8=60
K:D
~e3 e3 | ~a3 a3 |
~e3 ~a3 | ~e6 |
~e3 bgb | ~a3 afd |
~e3 ~a3 | ~e6 |]`,
    tips: [
      'Eine Rolle (~) ist eine 5-nötige Verzierung auf einer punktierten Viertelnote: Note – Einschlag – Note – Unterschlag – Note.',
      'Für ~e (Rolle auf E): E – F# – E – D – E. Der F#-Einschlag kommt von oben, das D als Unterschlag von unten.',
      'Die fünf Töne füllen die drei Achtelnoten der punktierten Viertel — sehr eng gespielt, fast wie ein Triller.',
      'Erst die Rolle langsam ausschreiben üben: e f e d e. Dann das Tempo steigern, bis sie fließt.',
      'Rollen klingen nur gut wenn sie schnell und gleichmäßig sind — lieber selten und sauber als häufig und holprig.',
    ],
  },
  {
    id: 21,
    level: 6,
    levelName: 'Stufe 6 — Verzierungen',
    title: "Morrison's Jig — Mit Verzierungen",
    meta: '6/8  ·  Achtelnoten  ·  100 bpm  ·  E-Dorisch',
    abc: `X:1
T:Morrison's Jig (Mit Verzierungen)
M:6/8
L:1/8
Q:3/8=100
K:Edor
|:~e3 bgb|ebe afd|~e3 {c'}bab|d'c'b afd|
~e3 bgb|ebe afd|gbg fab|~d'ag fed:|
|:be'e' {a'}f'e'e'|{b'}a'e'e' f'e'd'|be'e' {a'}f'e'e'|~a'a'g' f'e'd'|
be'e' {a'}f'e'e'|{b'}a'e'e' f'e'd'|g'f'e' d'2a|bag fed:|`,
    tips: [
      'Diese Version baut direkt auf dem unverziertem Morrison\'s Jig auf — erst Übung 16 sicher beherrschen.',
      '~e3: Rolle auf E — der charakteristische Klang dieses Tunes entsteht durch diese Verzierung.',
      '{c\'}b: Einschlag auf H (B) mit C# von oben — tritt in Takt 3 auf, wenn die Phrase sich dreht.',
      'Im B-Teil: {a\'}f\' und {b\'}a\' sind Einschläge in der oberen Lage — dieselbe Technik, eine Oktave höher.',
      'Zuerst jeden Takt mit Verzierung einzeln üben, dann die Phrase, dann den ganzen Teil.',
    ],
  },
  {
    id: 17,
    level: 5,
    levelName: 'Stufe 5 — Artikulation',
    title: 'Bindungen — Zweitongruppen',
    meta: '4/4  ·  Achtelnoten  ·  60 bpm',
    abc: `X:1
T:Bindungen — Zweitongruppen
M:4/4
L:1/8
Q:1/4=60
K:D
(de)(ef)(fg)(ga) | (ab)(bc')(c'd') d'2 |
(d'c')(c'b)(ba)(ag) | (gf)(fe)(ed) d2 |
(de)(ef)(fg)(ga) | (ab)(bc')(c'd') d'2 |
(d'c')(c'b)(ba)(ag) | (gf)(fe) d4 |]`,
    tips: [
      'Eine Bindung (Slur) verbindet zwei Noten ohne erneuten Zungenstoß — der Ton fließt nahtlos.',
      'Nur die erste Note jeder Gruppe wird angeblasen (Tu), die zweite folgt durch reinen Fingerwechsel.',
      'Auf Gleichmäßigkeit achten: beide Noten sollen gleich lang und gleich laut klingen.',
      'Bindungen sind die Grundlage für den typisch fließenden Klang irischer Musik.',
      'Erst aufsteigend, dann absteigend — beide Richtungen brauchen gleich viel Übung.',
    ],
  },
  {
    id: 18,
    level: 5,
    levelName: 'Stufe 5 — Artikulation',
    title: 'Bindungen — Dreitongruppen',
    meta: '6/8  ·  Achtelnoten  ·  70 bpm',
    abc: `X:1
T:Bindungen — Dreitongruppen
M:6/8
L:1/8
Q:3/8=70
K:D
(def)(gab) | (c'bc')(d'c'b) |
(agf)(ede) | d3 d3 |
(efg)(abc') | (d'c'b)(age) |
(fgf)(ede) | d3 d3 |]`,
    tips: [
      'Dreitongruppen sind das Herzstück des 6/8-Jig-Rhythmus — diese Bindungen direkt auf Sessions anwendbar.',
      'Drei Noten, ein Atemzug: nur die erste Note jeder Dreiergruppe wird angeblasen.',
      'Die Zunge ist fast still — der Fingerwechsel erzeugt die Artikulation zwischen den Noten.',
      'Im 6/8-Takt fallen diese Gruppen genau auf die Zählzeiten 1 und 4 — im Puls der Musik üben.',
      'Aufsteigende und absteigende Dreiergruppen abwechseln, bis beides gleich flüssig klingt.',
    ],
  },
];

export interface FingeringNote {
  note: string;
  holes: (0 | 0.5 | 1)[];
  hint: string;
}

export const FINGERINGS: FingeringNote[] = [
  { note: 'D',  holes: [1,1,1,1,1,1], hint: 'alle zu' },
  { note: 'E',  holes: [1,1,1,1,1,0], hint: 'Loch 6 auf' },
  { note: 'F#', holes: [1,1,1,1,0,0], hint: 'Loch 5+6 auf' },
  { note: 'G',  holes: [1,1,1,0,0,0], hint: 'Loch 4–6 auf' },
  { note: 'A',  holes: [1,1,0,0,0,0], hint: 'Loch 3–6 auf' },
  { note: 'H',  holes: [1,0,0,0,0,0], hint: 'Loch 2–6 auf' },
  { note: 'C#', holes: [0,0,0,0,0,0], hint: 'alle auf' },
  { note: 'C♮', holes: [0.5,0,0,0,0,0], hint: 'Loch 1 halb' },
  { note: 'd',  holes: [1,1,1,1,1,1], hint: '↑ überblasen' },
  { note: 'e',  holes: [1,1,1,1,1,0], hint: '↑ überblasen' },
  { note: 'f♯', holes: [1,1,1,1,0,0], hint: '↑ überblasen' },
  { note: 'g',  holes: [1,1,1,0,0,0], hint: '↑ überblasen' },
  { note: 'a',  holes: [1,1,0,0,0,0], hint: '↑ überblasen' },
  { note: 'h',  holes: [1,0,0,0,0,0], hint: '↑ überblasen' },
  { note: 'c♯', holes: [0,0,0,0,0,0], hint: '↑ überblasen' },
];
