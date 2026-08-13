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

/**
 * Shared machinery for both confidence checks below: flag LOW when a metric
 * (expert std, or projection-source spread) is unusually high relative to
 * OTHER PLAYERS AT THE SAME POSITION AND DRAFT DEPTH — never a flat cutoff.
 *
 * Depth matters because both disagreement metrics scale with it. Measured for
 * expert std: medians run ~6 (round 1-3) up to ~31 (round 12+). A flat
 * threshold would flag almost every deep player as low-confidence, which
 * defeats the point — "unusual" has to mean unusual FOR THAT DEPTH.
 * Bucketed to `teams` so it stays correct for any league size, not just 12.
 *
 * Null/missing metric values are treated as OK, never LOW: a player with no
 * ECR coverage or only one projection source hasn't been shown to be
 * disagreed-about, he just hasn't been checked. Absence of evidence isn't
 * evidence of a problem, so don't flag it as one.
 */
function depthRelativeConfidence<T extends { playerId: string; pos: string; adp: number }>(
  players: readonly T[],
  teams: number,
  metricOf: (p: T) => number | null,
  threshold: number,
): Map<string, 'OK' | 'LOW'> {
  const bucketOf = (adp: number) =>
    adp < teams * 3 ? 0 : adp < teams * 7 ? 1 : adp < teams * 11 ? 2 : 3;

  const byGroup = new Map<string, number[]>();
  for (const p of players) {
    const m = metricOf(p);
    if (m === null) continue;
    const key = `${p.pos}:${bucketOf(p.adp)}`;
    let arr = byGroup.get(key);
    if (!arr) byGroup.set(key, (arr = []));
    arr.push(m);
  }
  const medianOf = (arr: number[]) => {
    const s = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid]! : (s[mid - 1]! + s[mid]!) / 2;
  };
  const groupMedian = new Map([...byGroup].map(([k, v]) => [k, medianOf(v)]));

  const out = new Map<string, 'OK' | 'LOW'>();
  for (const p of players) {
    const m = metricOf(p);
    if (m === null) {
      out.set(p.playerId, 'OK');
      continue;
    }
    const med = groupMedian.get(`${p.pos}:${bucketOf(p.adp)}`) ?? m;
    out.set(p.playerId, m > med * threshold ? 'LOW' : 'OK');
  }
  return out;
}

export type ExpertStdInput = { playerId: string; pos: string; adp: number; rankStd: number | null };

/**
 * Flags LOW confidence when FANTASYPROS EXPERTS disagree far more than
 * typical for a player at that position and draft depth.
 *
 * This is a FLAG, not a filter: unlike a censored/single-source ADP (bad
 * input, dropped by buildConsensusAdp above), expert disagreement is real
 * information — a player nobody agrees on is a legitimate high-variance
 * outcome, not corrupted data. Hiding it would be worse than showing it.
 */
export function expertConfidence(
  players: readonly ExpertStdInput[],
  teams: number,
): Map<string, 'OK' | 'LOW'> {
  return depthRelativeConfidence(players, teams, (p) => p.rankStd, 1.5);
}

export type ProjectionSpreadInput = {
  playerId: string;
  pos: string;
  adp: number;
  /** max - min projected points across sources, in POINTS (see projections.ts). */
  spread: number;
  sources: number;
};

/**
 * Flags LOW confidence when ESPN and Sleeper's PROJECTIONS disagree far more
 * than typical for a player at that position and draft depth.
 *
 * Found investigating Tyjae Spears, who topped the value board after the
 * rank-vs-points fix — his "edge" was substantially ESPN (149pts) and Sleeper
 * (115pts) disagreeing by 34 points, not a real signal either model actually
 * agreed on. `expertConfidence` above catches disagreement about a player's
 * RANK; this catches disagreement about his raw PRODUCTION, which is a
 * different failure mode and can flag a different set of players.
 *
 * Players with only one surviving projection source have spread=0 by
 * construction (nothing to disagree with) — excluded via `sources < 2`
 * rather than compared, the same way a null rankStd is excluded above.
 */
export function projectionConfidence(
  players: readonly ProjectionSpreadInput[],
  teams: number,
): Map<string, 'OK' | 'LOW'> {
  return depthRelativeConfidence(players, teams, (p) => (p.sources >= 2 ? p.spread : null), 1.5);
}
