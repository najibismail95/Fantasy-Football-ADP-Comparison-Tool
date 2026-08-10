import jaro from 'talisman/metrics/jaro-winkler.js';
import type { CanonPlayer } from '../types.js';
import { normName, normPos } from './normalize.js';

export type ResolveInput = {
  sourceId: string;
  name: string;          // raw; normalized internally
  pos: string | null;    // raw; normalized internally
  team?: string | null;
};

export type ResolveResult = {
  player: CanonPlayer | null;
  tier: 'team' | 'id' | 'exact' | 'fuzzy' | 'MISS';
  score?: number;
};

/**
 * Threshold verified against the dangerous cases:
 *   Kenneth Walker III ~ Kenneth Walker = 0.956  (accept)
 *   Josh Allen         ~ Keenan Allen   = 0.589  (reject)
 */
const FUZZY_THRESHOLD = 0.92;

export class Crosswalk {
  private byName = new Map<string, CanonPlayer[]>();
  private byPos = new Map<string, CanonPlayer[]>();
  private byEspnId = new Map<string, CanonPlayer>();
  private defByTeam = new Map<string, CanonPlayer>();
  /** ESPN returns proTeamId (8), not "DET". Derived from data, never hardcoded. */
  private espnTeam = new Map<number, string>();

  constructor(public readonly spine: CanonPlayer[]) {
    for (const c of spine) {
      let n = this.byName.get(c.name);
      if (!n) this.byName.set(c.name, (n = []));
      n.push(c);

      let p = this.byPos.get(c.pos);
      if (!p) this.byPos.set(c.pos, (p = []));
      p.push(c);

      if (c.espnId) this.byEspnId.set(c.espnId, c);
      if (c.pos === 'DEF' && c.team) this.defByTeam.set(c.team, c);
    }
  }

  /** Most fantasy-relevant candidate when a normalized name collides. */
  private static best(arr: CanonPlayer[]): CanonPlayer {
    return arr.reduce((a, b) =>
      a.searchRank !== b.searchRank ? (a.searchRank < b.searchRank ? a : b) : a.active ? a : b,
    );
  }

  /**
   * Learn ESPN's proTeamId -> team abbreviation by matching players on
   * name+position first, then taking the modal Sleeper team per id.
   * Measured: 32 teams, agreement 1.00 (unanimous). Survives ESPN renumbering.
   *
   * proTeamId 0 is ESPN's "free agent / no team" marker, not a real franchise.
   * Left in the vote, a free agent who happens to share a normalized name with
   * a real player got counted as a vote for THAT player's team, producing a
   * phantom `0 -> WAS` mapping (33 "teams" instead of 32). Harmless for the
   * one case seen so far (a free-agent WR, which resolves on name+position,
   * not team) but would silently mis-team a DEF-position row with id 0.
   */
  learnEspnTeams(rows: { name: string; pos: string | null; proTeamId: number }[]): void {
    const votes = new Map<number, Map<string, number>>();
    for (const r of rows) {
      if (r.proTeamId === 0) continue; // not a real team — see above
      const pos = normPos(r.pos);
      const cands = (this.byName.get(normName(r.name)) ?? []).filter((c) => c.pos === pos);
      if (!cands.length) continue;
      const team = Crosswalk.best(cands).team;
      if (!team) continue;
      let t = votes.get(r.proTeamId);
      if (!t) votes.set(r.proTeamId, (t = new Map()));
      t.set(team, (t.get(team) ?? 0) + 1);
    }
    for (const [id, tally] of votes) {
      const top = [...tally].sort((a, b) => b[1] - a[1])[0];
      if (top) this.espnTeam.set(id, top[0]);
    }
  }

  espnTeamAbbrev(proTeamId: number): string | null {
    return this.espnTeam.get(proTeamId) ?? null;
  }

  get espnTeamCount(): number {
    return this.espnTeam.size;
  }

  /** Tiered resolution, cheapest first. See CROSSWALK.md for measured rates. */
  resolve(input: ResolveInput, opts: { useEspnId?: boolean } = {}): ResolveResult {
    const name = normName(input.name);
    const pos = normPos(input.pos);
    const team = input.team ?? null;

    // Tier 1 — defenses join on team. Three irreconcilable naming conventions
    // ("Broncos D/ST" / "Denver Broncos" / full_name:null) but every source
    // knows the team, and Sleeper keys defenses by abbreviation.
    if (pos === 'DEF' && team) {
      const d = this.defByTeam.get(team);
      if (d) return { player: d, tier: 'team' };
    }

    // Tier 2 — deterministic crosswalk id (only ~44% populated, hence the rest)
    if (opts.useEspnId) {
      const byId = this.byEspnId.get(input.sourceId);
      if (byId) return { player: byId, tier: 'id' };
    }

    // Tier 3 — exact normalized name, constrained by position
    const exact = (this.byName.get(name) ?? []).filter((c) => !pos || c.pos === pos);
    if (exact.length) return { player: Crosswalk.best(exact), tier: 'exact' };

    // Tier 4 — fuzzy within the position block. In practice this fires zero
    // times once names are normalized; it exists for in-season roster churn.
    const pool = pos ? (this.byPos.get(pos) ?? []) : this.spine;
    let hit: CanonPlayer | null = null;
    let hitScore = 0;
    for (const c of pool) {
      const s = jaro(name, c.name) as number;
      if (s < FUZZY_THRESHOLD) continue;
      const score = s + (team && c.team === team ? 0.03 : 0) + (c.searchRank < 400 ? 0.01 : 0);
      if (score > hitScore) {
        hitScore = score;
        hit = c;
      }
    }
    return hit ? { player: hit, tier: 'fuzzy', score: hitScore } : { player: null, tier: 'MISS' };
  }
}
