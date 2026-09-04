export interface InstrumentGuideEntry {
  label: string;
  descriptions: string[];
}

export const instruments: InstrumentGuideEntry[] = [
  {
    label: "Chord-capable",
    descriptions: ["Any chord voicing of G"],
  },
  {
    label: "Single-note",
    descriptions: ["Either concert or written G"],
  },
  {
    label: "Voice",
    descriptions: ["Sing the pitch G in any comfortable octave"],
  },
  {
    label: "Percussion",
    descriptions: ["A flam, crash, or your own interpretation"],
  },
  {
    label: "Electronic",
    descriptions: [
      "Play or trigger a G using your synth, sampler, sequencer, or modular system",
      "A sound or sequence without a particular pitch is welcome, too",
    ],
  },
];
