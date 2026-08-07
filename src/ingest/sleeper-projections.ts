import { z } from 'zod';
import { SLEEPER_PTS_KEY, SOURCES } from '../config.js';
import { get } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import type { ProjectionRow } from '../types.js';

/**
 * Sleeper season projections — the second projection source.
 *
 * Added because ESPN alone could not support tiering: it compresses RB5-RB14
 * into 20 points (six RBs within ONE point of each other), so ckmeans had
 * nothing to cluster on and produced 10-player tiers. Sleeper spreads the
 * same band over 58 points. Blending the two is what makes tiers meaningful;
 * see metrics/projections.ts for how they're combined.
 *
 * ⚠️ Keyed by Sleeper player_id, which IS our canonical spine id — so unlike
 * every other source this needs no crosswalk resolution. That also means a
 * player only appears here if Sleeper knows him, which is by definition true
 * of everyone in the spine.
 */

const StatsSchema = z
  .object({
    pts_ppr: z.number().nullish(),
    pts_half_ppr: z.number().nullish(),
    pts_std: z.number().nullish(),
  })
  .loose();

const ResponseSchema = z.record(z.string(), StatsSchema.nullish());

export async function fetchSleeperProjections(season: number, captureDate: string): Promise<string> {
  const body = await get(SOURCES.sleeper.projections(season));
  await writeBronze('sleeper/projections', captureDate, body);
  return body;
}

/** Below this, assume the endpoint changed rather than the data shrinking. */
const MIN_EXPECTED = 300;

export function parseSleeperProjections(
  body: string,
  spinePlayerIds: ReadonlySet<string>,
): { projections: ProjectionRow[]; seen: number } {
  const parsed = ResponseSchema.parse(JSON.parse(body));
  const out: ProjectionRow[] = [];
  let seen = 0;

  for (const [playerId, stats] of Object.entries(parsed)) {
    if (!stats) continue;
    // Only keep players in the spine — anything else can't be joined anyway.
    if (!spinePlayerIds.has(playerId)) continue;

    for (const [scoring, key] of Object.entries(SLEEPER_PTS_KEY)) {
      const pts = stats[key as keyof typeof stats];
      if (typeof pts !== 'number' || !Number.isFinite(pts) || pts <= 0) continue;
      if (scoring === 'PPR') seen++;
      out.push({
        playerId,
        source: 'SLEEPER' as ProjectionRow['source'],
        scoring,
        projPoints: pts,
        sourceId: playerId,
        sourceName: playerId, // Sleeper ids are canonical; no separate name needed
        resolveTier: 'id',
      });
    }
  }

  if (seen < MIN_EXPECTED) {
    throw new Error(
      `[sleeper/projections] only ${seen} PPR projections (expected >=${MIN_EXPECTED}). ` +
        `The endpoint shape has probably changed — inspect the bronze copy.`,
    );
  }
  return { projections: out, seen };
}
