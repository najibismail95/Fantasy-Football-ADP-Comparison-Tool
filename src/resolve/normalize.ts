/**
 * Position vocabulary is NOT shared across sources, and position is used as a
 * blocking key — so every mismatch becomes a silent miss rather than a bad match.
 * This single map is what took ESPN from 92% -> 99.4%. See CROSSWALK.md.
 *
 *   defense : Sleeper DEF | ESPN 16 | FantasyPros DST | beatadp DEF
 *   fullback: Sleeper FB  | everyone else RB
 */
const POSITION_MAP: Record<string, string> = {
  DST: 'DEF', 'D/ST': 'DEF', DEF: 'DEF', DST1: 'DEF',
  FB: 'RB', HB: 'RB', RB: 'RB',
  PK: 'K', K: 'K',
  QB: 'QB', WR: 'WR', TE: 'TE',
  // NOTE: FantasyPros' superflex page carries position_id "OP" (offensive
  // player) at the LIST level only — verified that player_position_id is
  // always QB/RB/WR/TE. Deliberately NOT mapped: guessing a position for "OP"
  // would silently mislabel every player on that list.
};

export const normPos = (p: string | null | undefined): string | null =>
  p ? (POSITION_MAP[String(p).toUpperCase()] ?? String(p).toUpperCase()) : null;

/**
 * Genuine nicknames — unfixable by any string metric. Jaro-Winkler correctly
 * scores "hollywood brown" vs "marquise brown" near zero. Expect to add a few
 * each preseason; keep this in version control.
 */
export const ALIASES: Record<string, string> = {
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
