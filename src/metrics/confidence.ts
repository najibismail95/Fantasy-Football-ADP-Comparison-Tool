import { detectCensoring } from '../lib/assert.js';

export type RawAdpRow = { playerId: string; source: string; adp: number };
export type ConsensusAdp = { playerId: string; adp: number; nSources: number };

/**
 * Consensus ADP, built to survive the two failures found investigating a false
 * "A" grade on a deep-round TE (Pat Freiermuth):
 *
 *  1. ESPN censors ADP above a ceiling — 51% of its values pile up at the max
 *     it ranks to (PLAN.md §0.3 / lib/assert.ts detectCensoring). Those values
 *     mean "very late", not a real average, so they are dropped per source
 *     using the SAME detection the arbitrage table already relies on — not a
 *     hardcoded threshold, since the ceiling can move as ESPN's pool changes.
 *  2. A "consensus" built from a single surviving source isn't a consensus.
 *     Freiermuth's median(168.9, 240.6) looked like real triangulation but was
 *     two numbers 72 picks apart with no Sleeper coverage at all. Requiring at
 *     least 2 sources AFTER censoring removes players like him rather than
 *     quietly grading them on thin data.
 */
export function buildConsensusAdp(rows: readonly RawAdpRow[]): ConsensusAdp[] {
  const bySource = new Map<string, RawAdpRow[]>();
  for (const r of rows) {
    let arr = bySource.get(r.source);
    if (!arr) bySource.set(r.source, (arr = []));
    arr.push(r);
  }

  const clean: RawAdpRow[] = [];
  for (const [, sourceRows] of bySource) {
    const ceiling = detectCensoring(sourceRows.map((r) => r.adp));
    for (const r of sourceRows) if (ceiling === null || r.adp <= ceiling) clean.push(r);
  }

  const byPlayer = new Map<string, number[]>();
  for (const r of clean) {
    let arr = byPlayer.get(r.playerId);
    if (!arr) byPlayer.set(r.playerId, (arr = []));
    arr.push(r.adp);
  }

  const out: ConsensusAdp[] = [];
  for (const [playerId, adps] of byPlayer) {
    if (adps.length < 2) continue; // one surviving source is not a consensus
    const sorted = [...adps].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2;
    out.push({ playerId, adp: median, nSources: adps.length });
  }
  return out;
}
