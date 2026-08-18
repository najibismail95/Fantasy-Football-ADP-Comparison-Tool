/**
 * Position vocabulary is NOT shared across sources, and position is used as a
 * blocking key — so every mismatch becomes a silent miss rather than a bad match.
 * This single map is what took ESPN from 92% -> 99.4%. See CROSSWALK.md.
 *
 * Current sources:
 *   defense : Sleeper DEF | ESPN 16 (mapped in config.ts) | Yahoo DEF
 *   fullback: Sleeper FB  | everyone else RB
 *
 * Some aliases below (DST, D/ST, DST1, PK, HB) no longer match anything the
 * live sources emit — they're left in deliberately. A stale alias costs one
 * map entry; a missing one costs a silent resolution failure, which is the
 * failure mode this whole map exists to prevent.
 */
const POSITION_MAP: Record<string, string> = {
  DST: 'DEF', 'D/ST': 'DEF', DEF: 'DEF', DST1: 'DEF',
  FB: 'RB', HB: 'RB', RB: 'RB',
  PK: 'K', K: 'K',
  QB: 'QB', WR: 'WR', TE: 'TE',
  // A source that lumps everything under one label ("OP" for offensive player,
  // as one now-removed source did) is deliberately NOT mapped: guessing a
  // position would silently mislabel every player carrying it.
};

export const normPos = (p: string | null | undefined): string | null =>
  p ? (POSITION_MAP[String(p).toUpperCase()] ?? String(p).toUpperCase()) : null;

/**
 * Genuine nicknames — unfixable by any string metric. Jaro-Winkler correctly
 * scores "hollywood brown" vs "marquise brown" near zero. Expect to add a few
 * each preseason; keep this in version control.
 */
const ALIASES: Record<string, string> = {
  'hollywood brown': 'marquise brown',
  'kenneth gainwell': 'kenny gainwell',
  'cameron ward': 'cam ward',
  'bam knight': 'zonovan knight',
};

const SUFFIX = /\b(jr|sr|ii|iii|iv|v)\b/g;

/** Lowercase, de-accent, drop punctuation and generational suffixes, then alias. */
export function normName(name: string | null | undefined): string {
  const n = String(name ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\bd\/st\b|\bdst\b|\bdefense\b/g, '')
    .replace(/[.'’`]/g, '')
    .replace(/[-_]/g, ' ')
    .replace(SUFFIX, '')
    .replace(/\s+/g, ' ')
    .trim();
  return ALIASES[n] ?? n;
}
