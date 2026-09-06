const btnBase =
  "inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300";
export const btnStart = `${btnBase} bg-lime-300 text-zinc-950 hover:bg-lime-200`;
export const btnScore = `${btnBase} border border-white/20 bg-white/5 text-white hover:bg-white/10`;
export const btnHome = btnScore;
export const btnSecondary = btnScore;
export const btnSave = `${btnStart} disabled:opacity-40 disabled:cursor-not-allowed`;
