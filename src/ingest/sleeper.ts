import { z } from 'zod';
import { SOURCES } from '../config.js';
import { get, getJson } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import { normName, normPos } from '../resolve/normalize.js';
import type { CanonPlayer } from '../types.js';

/**
 * Sleeper is the canonical player spine: this module supplies identity, not
 * prices. Sleeper's ADP and projections both come from its projections
 * endpoint instead — see ingest/sleeper-projections.ts.
 *
 * (The players endpoint genuinely has no ADP — verified across 238 GraphQL
 * query fields, and absent from the docs — which is why it lives elsewhere.)
 *
 * Position-filtered fetches are 1/3 the bytes of the 14.6MB full dump with
 * full field parity (53 fields either way). Docs ask for once-per-day at most.
 */

const StateSchema = z.object({
  season: z.string(),
  season_type: z.string(),
  week: z.number(),
});

// .loose() keeps the other ~45 fields from failing the parse when Sleeper adds one.
const PlayerSchema = z
  .object({
    player_id: z.string(),
    full_name: z.string().nullish(),
    first_name: z.string().nullish(),
    last_name: z.string().nullish(),
    position: z.string().nullish(),
    team: z.string().nullish(),
    espn_id: z.union([z.number(), z.string()]).nullish(),
    search_rank: z.number().nullish(),
    active: z.boolean().nullish(),
  })
  .loose();

export async function fetchState(): Promise<{ season: number; seasonType: string; week: number }> {
  const raw = await getJson(SOURCES.sleeper.state);
  const s = StateSchema.parse(raw);
  return { season: Number(s.season), seasonType: s.season_type, week: s.week };
}

export async function ingestSleeperSpine(captureDate: string): Promise<CanonPlayer[]> {
  const spine: CanonPlayer[] = [];
  const seen = new Set<string>();

  for (const pos of SOURCES.sleeper.positions) {
    const body = await get(SOURCES.sleeper.players(pos));
    await writeBronze(`sleeper/players-${pos}`, captureDate, body);

    const parsed = z.record(z.string(), PlayerSchema).parse(JSON.parse(body));
    for (const p of Object.values(parsed)) {
      if (seen.has(p.player_id)) continue;
      seen.add(p.player_id);

      // Defenses have full_name: null — first/last hold "Denver" / "Broncos".
      const display = p.full_name ?? `${p.first_name ?? ''} ${p.last_name ?? ''}`.trim();
      const name = normName(display);
      const position = normPos(p.position);
      if (!name || !position) continue;

      spine.push({
        playerId: p.player_id,
        name,
        displayName: display,
        pos: position,
        team: p.team ?? null,
        espnId: p.espn_id != null ? String(p.espn_id) : null,
        searchRank: p.search_rank ?? 99_999,
        active: p.active ?? false,
      });
    }
  }
  return spine;
}
