/** A player in the canonical spine (Sleeper). */
export type CanonPlayer = {
  playerId: string;          // Sleeper player_id — canonical
  name: string;              // normalized
  displayName: string;
  pos: string;               // normalized vocabulary
  team: string | null;
  espnId: string | null;
  searchRank: number;
  active: boolean;
};

/**
 * One ADP observation from one source, in that source's own format.
 *
 * FANTASYPROS is no longer ingested — its ADP came via the beatadp scrape,
 * which was removed in favour of real APIs. The value stays in the union
 * because adp_snapshots is an append-only time series: 2026-07-27..2026-08-16
 * still holds FANTASYPROS rows, and narrowing this would make reading that
 * history a type error.
 */
export type AdpRow = {
  playerId: string | null;   // null => unresolved
  source: 'ESPN' | 'SLEEPER' | 'YAHOO' | 'FANTASYPROS';
  adpFormat: string;         // e.g. 'PPR_1QB', 'YAHOO_DEFAULT'
  adp: number;
  auctionValue: number | null;
  sourceId: string;
  sourceName: string;
  resolveTier: string;
};

/** Per-format draft rank from ESPN (STANDARD / PPR / SUPERFLEX). Also not ADP. */
export type RankRow = {
  playerId: string | null;
  source: 'ESPN';
  rankType: string;
  rank: number;
  auctionValue: number | null;
  sourceId: string;
  sourceName: string;
  resolveTier: string;
};

export type ProjectionRow = {
  playerId: string | null;
  /** ESPN compresses the middle of each position; SLEEPER spreads it. Both are
   *  ingested and blended — see metrics/projections.ts. */
  source: 'ESPN' | 'SLEEPER';
  /** PPR | HALF | STD. ESPN supplies PPR only; Sleeper supplies all three. */
  scoring: string;
  projPoints: number;
  sourceId: string;
  sourceName: string;
  resolveTier: string;
};

/** Anything the resolver could not map to the spine — surfaced, never dropped. */
export type UnresolvedRow = {
  source: string;
  sourceId: string;
  sourceName: string;
  pos: string | null;
  team: string | null;
  reason: string;
};
