import type { LeagueConfig } from './league-config.js';

export type ProjectedPlayer = {
  playerId: string;
  pos: 'QB' | 'RB' | 'WR' | 'TE' | 'K' | 'DEF';
  points: number;
};

export type ReplacementLevel = {
  /** How many players at this position are rostered as starters league-wide. */
  startersUsed: number;
  /** Projected points of the last starter — the replacement baseline. */
  points: number;
};

const FLEX_ELIGIBLE = ['RB', 'WR', 'TE'] as const;
const SUPERFLEX_ELIGIBLE = ['QB', 'RB', 'WR', 'TE'] as const;

/**
 * Replacement level per position, derived from projections and a league
 * config — never hardcoded. Ported from replacement-levels.mjs, which
 * verified this against real 2026 projections (FORMATS.md §3): a 10-team
 * league raises replacement level at every position, but less at QB/TE
 * because those talent pools are thin, which is what actually drives the
 * "prioritize onesies in shallow leagues" heuristic — not a rule to encode,
 * a number that falls out of this function.
 *
 * Algorithm: fill each position's mandatory starter slots, then greedily
 * assign FLEX slots to whichever remaining RB/WR/TE has the most points, then
 * SUPERFLEX slots to whichever remaining QB/RB/WR/TE has the most points.
 * Replacement level is the next player after the last one drafted.
 */
export function replacementLevels(
  players: readonly ProjectedPlayer[],
  cfg: LeagueConfig,
): Record<string, ReplacementLevel> {
  const byPos: Record<string, ProjectedPlayer[]> = {};
  for (const p of players) (byPos[p.pos] ??= []).push(p);
  for (const arr of Object.values(byPos)) arr.sort((a, b) => b.points - a.points);

  const { teams, starters: s } = cfg;
  const used: Record<string, number> = {
    QB: teams * s.qb, RB: teams * s.rb, WR: teams * s.wr, TE: teams * s.te,
    K: teams * s.k, DEF: teams * s.dst,
  };

  const fillGreedy = (slots: number, eligible: readonly string[]) => {
    for (let i = 0; i < slots; i++) {
      let bestPos: string | null = null;
      let bestPts = -Infinity;
      for (const pos of eligible) {
        const next = byPos[pos]?.[used[pos]!];
        if (next && next.points > bestPts) {
          bestPts = next.points;
          bestPos = pos;
        }
      }
      if (bestPos) used[bestPos]!++;
      else break; // ran out of projected players at every eligible position
    }
  };

  fillGreedy(teams * s.flex, FLEX_ELIGIBLE);
  fillGreedy(teams * s.superflex, SUPERFLEX_ELIGIBLE);

  const out: Record<string, ReplacementLevel> = {};
  for (const pos of ['QB', 'RB', 'WR', 'TE', 'K', 'DEF']) {
    const arr = byPos[pos] ?? [];
    const idx = used[pos]!;
    out[pos] = { startersUsed: idx, points: arr[idx]?.points ?? arr.at(-1)?.points ?? 0 };
  }
  return out;
}
