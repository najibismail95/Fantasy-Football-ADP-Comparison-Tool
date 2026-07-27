import { z } from 'zod';
import { ESPN_POSITION, SOURCES } from '../config.js';
import { get } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import { assertLooksLikeAdp } from '../lib/assert.js';
import type { Crosswalk } from '../resolve/crosswalk.js';
import type { AdpRow, ProjectionRow, RankRow, UnresolvedRow } from '../types.js';

/**
 * ESPN is the richest source: real decimal ADP, full-season projections, and
 * auction values in one payload.
 *
 * Two traps encoded here:
 *  1. ADP is a single GLOBAL series — identical across leaguedefaults/1 and /3.
 *     Only draftRanksByRankType varies by format. (FORMATS.md §1)
 *  2. draftRanksByRankType values are RANKS, not ADP. They go in rank rows.
 *
 * The `leagues/0` recipe widely posted online now 404s; `leaguedefaults/{id}`
 * is the current path.
 */

const RankSchema = z.object({
  rank: z.number(),
  auctionValue: z.number().nullish(),
});

const StatSchema = z
  .object({
    statSourceId: z.number(),
    statSplitTypeId: z.number(),
    seasonId: z.number(),
    appliedTotal: z.number().nullish(),
  })
  .loose();

const PlayerSchema = z
  .object({
    id: z.number(),
    fullName: z.string(),
    defaultPositionId: z.number(),
    proTeamId: z.number(),
    ownership: z.object({ averageDraftPosition: z.number().nullish() }).loose().nullish(),
    draftRanksByRankType: z.record(z.string(), RankSchema).nullish(),
    stats: z.array(StatSchema).nullish(),
  })
  .loose();

const ResponseSchema = z.object({
  players: z.array(z.object({ player: PlayerSchema }).loose()),
});

export type EspnResult = {
  adp: AdpRow[];
  ranks: RankRow[];
  projections: ProjectionRow[];
  unresolved: UnresolvedRow[];
  /** Raw name/pos/team triples used to teach the crosswalk ESPN's team ids. */
  teamHints: { name: string; pos: string | null; proTeamId: number }[];
};

export async function fetchEspn(season: number, captureDate: string) {
  const body = await get(SOURCES.espn.url(season), {
    headers: {
      accept: 'application/json',
      'x-fantasy-filter': JSON.stringify({
        players: {
          limit: SOURCES.espn.limit,
          sortDraftRanks: { sortPriority: 100, sortAsc: true, value: 'PPR' },
        },
      }),
    },
  });
  await writeBronze('espn', captureDate, body);
  return ResponseSchema.parse(JSON.parse(body)).players.map((p) => p.player);
}

export function parseEspn(
  players: z.infer<typeof PlayerSchema>[],
  xwalk: Crosswalk,
  season: number,
): EspnResult {
  const out: EspnResult = { adp: [], ranks: [], projections: [], unresolved: [], teamHints: [] };

  for (const p of players) {
    const pos = ESPN_POSITION[p.defaultPositionId] ?? null;
    out.teamHints.push({ name: p.fullName, pos, proTeamId: p.proTeamId });
  }
  // Learn proTeamId -> abbrev before resolving, so defenses can join on team.
  xwalk.learnEspnTeams(out.teamHints);

  for (const p of players) {
    const pos = ESPN_POSITION[p.defaultPositionId] ?? null;
    const team = xwalk.espnTeamAbbrev(p.proTeamId);
    const sourceId = String(p.id);
    const r = xwalk.resolve({ sourceId, name: p.fullName, pos, team }, { useEspnId: true });

    if (!r.player) {
      out.unresolved.push({
        source: 'ESPN', sourceId, sourceName: p.fullName, pos, team,
        reason: 'no match in spine',
      });
      continue;
    }
    const base = { playerId: r.player.playerId, sourceId, sourceName: p.fullName, resolveTier: r.tier };
    const pprRank = p.draftRanksByRankType?.['PPR'];

    const adp = p.ownership?.averageDraftPosition;
    if (typeof adp === 'number' && adp > 0) {
      out.adp.push({
        ...base, source: 'ESPN', adpFormat: 'PPR_1QB', adp,
        auctionValue: pprRank?.auctionValue ?? null,
      });
    }

    // Ranks (incl. SUPERFLEX) are deliberately NOT written as ADP.
    for (const [rankType, v] of Object.entries(p.draftRanksByRankType ?? {})) {
      out.ranks.push({
        ...base, source: 'ESPN', rankType, rank: v.rank,
        auctionValue: v.auctionValue ?? null,
      });
    }

    // statSourceId 1 = projected, statSplitTypeId 0 = full season.
    const proj = (p.stats ?? []).find(
      (s) => s.statSourceId === 1 && s.statSplitTypeId === 0 && s.seasonId === season,
    );
    if (proj?.appliedTotal) {
      out.projections.push({
        ...base, source: 'ESPN', scoring: 'PPR', projPoints: proj.appliedTotal,
      });
    }
  }

  assertLooksLikeAdp('ESPN.adp', out.adp.map((r) => r.adp));
  return out;
}
