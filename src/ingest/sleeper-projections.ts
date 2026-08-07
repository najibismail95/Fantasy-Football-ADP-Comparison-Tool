import { z } from 'zod';
import { SLEEPER_PTS_KEY, SOURCES } from '../config.js';
import { get } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import { assertLooksLikeAdp } from '../lib/assert.js';
import type { AdpRow, ProjectionRow } from '../types.js';

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
 *
 * The same payload also carries ADP, parsed by parseSleeperAdp() below — one
 * fetch serves both, and it lets Sleeper ADP stop depending on the beatadp
 * scrape.
 */

const StatsSchema = z
  .object({
    pts_ppr: z.number().nullish(),
    pts_half_ppr: z.number().nullish(),
    pts_std: z.number().nullish(),
    adp_ppr: z.number().nullish(),
  })
  .loose();

/**
 * Sleeper marks undrafted players with 999 rather than omitting them — 666 of
 * 742 rows in one sample. These are NOT ADP and must never reach an ADP column;
 * they'd be a worse version of the ESPN censoring bug (PLAN.md §0.3), because
 * 999 is far outside the real range and would wreck any median or comparison.
 */
const UNDRAFTED_SENTINEL = 900;

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

/** Below this, assume the ADP field moved rather than the market shrinking. */
const MIN_EXPECTED_ADP = 200;

/**
 * Sleeper ADP, from the SAME payload as the projections above — no extra fetch.
 *
 * This replaces beatadp as the Sleeper ADP source. Verified identical where
 * they overlap (mean difference 0.00 picks across all 237 shared players —
 * beatadp is simply republishing this API), but with broader coverage: 311
 * players here vs 237 there, a strict superset with none missing.
 *
 * Worth it because beatadp is a Next.js RSC scrape and the most fragile
 * dependency in the project. It still supplies FantasyPros ADP — that one has
 * no key-free route (api.fantasypros.com is 403 on every path, and the public
 * ADP page server-renders only 5 rows) — but a beatadp break now costs one
 * source instead of two.
 *
 * ⚠️ Only adp_ppr is ingested. The payload also carries adp_half_ppr, adp_std
 * and adp_2qb (superflex), which would unlock multi-format arbitrage — but
 * adding formats without updating every consumer would make adp_current return
 * several rows per player per source, i.e. exactly the join-fanout bug class
 * this project has already hit twice. Deliberate follow-up, not an oversight.
 */
export function parseSleeperAdp(
  body: string,
  spinePlayerIds: ReadonlySet<string>,
): { adp: AdpRow[]; seen: number; sentinelsDropped: number } {
  const parsed = ResponseSchema.parse(JSON.parse(body));
  const adp: AdpRow[] = [];
  let sentinelsDropped = 0;

  for (const [playerId, stats] of Object.entries(parsed)) {
    if (!stats || !spinePlayerIds.has(playerId)) continue;
    const value = stats.adp_ppr;
    if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) continue;
    if (value >= UNDRAFTED_SENTINEL) {
      sentinelsDropped++;
      continue;
    }
    adp.push({
      playerId,
      source: 'SLEEPER',
      adpFormat: 'PPR_1QB',
      adp: value,
      auctionValue: null,
      sourceId: playerId,
      sourceName: playerId,
      resolveTier: 'id',
    });
  }

  if (adp.length < MIN_EXPECTED_ADP) {
    throw new Error(
      `[sleeper/adp] only ${adp.length} real ADP values (expected >=${MIN_EXPECTED_ADP}). ` +
        `Check whether adp_ppr moved or the sentinel changed — inspect the bronze copy.`,
    );
  }
  assertLooksLikeAdp('sleeper.adp', adp.map((r) => r.adp));
  return { adp, seen: adp.length, sentinelsDropped };
}
