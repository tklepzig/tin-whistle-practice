# Tin Whistle Practice

An interactive practice tool for learning tin whistle. Works through a structured progression from basic scales up to traditional Irish tunes, with sheet music notation, fingering charts, and audio playback.

## Features

- **Structured exercises** — scales, arpeggios, and familiar melodies, organised into three levels
- **Sheet music** — rendered notation via [abcjs](https://paulrosen.github.io/abcjs/), with a live playback cursor
- **Audio playback** — built-in synthesiser with pause/resume support; tempo synced to each exercise
- **Fingering chart** — interactive reference for all notes across both octaves
- **Progress tracking** — completed exercises persist in `localStorage`

## Stack

- React 19 + TypeScript
- [abcjs](https://paulrosen.github.io/abcjs/) for notation rendering and audio synthesis
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Exercise Levels

| Level | Focus |
|-------|-------|
| 1 — Grundlagen | Lower octave, upper octave, two-octave scale |
| 2 — Bekannte Melodien | Mary Had a Little Lamb, Hot Cross Buns, Weihnachtsmann |
| 3 — Irische Tradition | Jig rhythm, The Kesh Jig |
