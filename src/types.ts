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

/** One ADP observation from one source, in that source's own format. */
export type AdpRow = {
  playerId: string | null;   // null => unresolved
  source: 'ESPN' | 'SLEEPER' | 'FANTASYPROS';
  adpFormat: string;         // e.g. 'PPR_1QB'
  adp: number;
  auctionValue: number | null;
  sourceId: string;
  sourceName: string;
  resolveTier: string;
};

/** One expert-consensus-ranking observation. ECR is NOT ADP — see PLAN.md §0.5. */
export type EcrRow = {
  playerId: string | null;
  source: 'FANTASYPROS';
  ecrFormat: string;         // PPR | HALF | STD | SUPERFLEX
  rankEcr: number;
  rankAve: number | null;
  rankStd: number | null;    // dispersion across experts
  rankMin: number | null;
  rankMax: number | null;
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
