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

export type ExpertStdInput = { playerId: string; pos: string; adp: number; rankStd: number | null };

/**
 * Flags LOW confidence when experts disagree far more than typical for a
 * player at that position AND draft depth — not a fixed cutoff.
 *
 * Disagreement scales with depth: measured medians run from ~6 (round 1-3) to
 * ~31 (round 12+), so a flat threshold would flag almost every deep player.
 * Bucketed to `teams` so it stays correct for any league size, not just 12.
 *
 * This is deliberately a FLAG, not a filter: unlike a censored/single-source
 * ADP (bad input, dropped by buildConsensusAdp above), expert disagreement is
 * real information — a player nobody agrees on is a legitimate high-variance
 * outcome, not corrupted data. Hiding it would be worse than showing it.
 */
export function expertConfidence(
  players: readonly ExpertStdInput[],
  teams: number,
): Map<string, 'OK' | 'LOW'> {
  const bucketOf = (adp: number) =>
    adp < teams * 3 ? 0 : adp < teams * 7 ? 1 : adp < teams * 11 ? 2 : 3;

  const stdsByGroup = new Map<string, number[]>();
  for (const p of players) {
    if (p.rankStd === null) continue;
    const key = `${p.pos}:${bucketOf(p.adp)}`;
    let arr = stdsByGroup.get(key);
    if (!arr) stdsByGroup.set(key, (arr = []));
    arr.push(p.rankStd);
  }
  const medianOf = (arr: number[]) => {
    const s = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid]! : (s[mid - 1]! + s[mid]!) / 2;
  };
  const groupMedian = new Map([...stdsByGroup].map(([k, v]) => [k, medianOf(v)]));

  const out = new Map<string, 'OK' | 'LOW'>();
  for (const p of players) {
    if (p.rankStd === null) {
      out.set(p.playerId, 'OK'); // no ECR coverage isn't itself a red flag
      continue;
    }
    const med = groupMedian.get(`${p.pos}:${bucketOf(p.adp)}`) ?? p.rankStd;
    out.set(p.playerId, p.rankStd > med * 1.5 ? 'LOW' : 'OK');
  }
  return out;
}
