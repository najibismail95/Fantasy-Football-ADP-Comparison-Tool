import { z } from 'zod';
import { SOURCES } from '../config.js';
import { get } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import { assertLooksLikeAdp, num } from '../lib/assert.js';
import type { Crosswalk } from '../resolve/crosswalk.js';
import type { AdpRow, UnresolvedRow } from '../types.js';

/**
 * Yahoo ADP — the third platform, and the only one here that also publishes
 * auction values alongside its ADP.
 *
 * Served by pub-api-ro, the public read-only host Yahoo's own web frontend
 * calls. No OAuth: the 3-legged flow gates PRIVATE league data, not the
 * game-wide draft analysis. Undocumented, in the same category as the ESPN
 * endpoint this project already depends on — so it can move without notice,
 * which is what the row-count guard below is for.
 *
 * ⚠️ Every numeric is a JSON STRING ("1.5"), so a naive typeof check reads the
 * whole series as non-numeric. Coerced through num(), same as FantasyPros was.
 *
 * ⚠️ The payload carries BOTH `average_pick` and `preseason_average_pick`.
 * They are different series — preseason is frozen, average_pick tracks live
 * drafts and is the one that moves day to day. Taking the wrong one would look
 * fine and quietly stop updating.
 *
 * ⚠️ Team abbreviations are mixed case ("Hou", "Jax") while the Sleeper spine
 * is upper ("HOU", "JAX"). Uppercased before resolving or every defense misses,
 * since defenses resolve on team (crosswalk tier 1). Verified all 32 match
 * Sleeper's set exactly once uppercased.
 *
 * Defenses arrive as bare nicknames ("Texans", pos DEF, team "Hou") with no
 * city, which is precisely why the crosswalk resolves DEF by team rather than
 * by name.
 *
 * ⚠️ SCORING: Yahoo's public draft analysis reflects Yahoo's own default league
 * settings, which are NOT verified to match the PPR that ESPN and Sleeper are
 * labelled with here — the API exposes no scoring metadata to check against.
 * Labelled YAHOO_DEFAULT rather than asserting a format we have not confirmed.
 * The effect is a few picks on pass-catching backs, well inside the ~30-pick
 * threshold the arbitrage report uses, but it is a real caveat and consumers
 * currently do not filter on adp_format at all.
 */

const DraftAnalysis = z
  .object({
    average_pick: z.union([z.string(), z.number()]).nullish(),
    average_cost: z.union([z.string(), z.number()]).nullish(),
    percent_drafted: z.union([z.string(), z.number()]).nullish(),
  })
  .loose();

const YahooPlayer = z
  .object({
    player_id: z.union([z.string(), z.number()]),
    name: z.object({ full: z.string() }).loose(),
    display_position: z.string().nullish(),
    editorial_team_abbr: z.string().nullish(),
    draft_analysis: DraftAnalysis.nullish(),
  })
  .loose();

const ResponseSchema = z.object({
  fantasy_content: z
    .object({
      game: z
        .object({
          players: z.array(z.object({ player: YahooPlayer }).loose()).nullish(),
        })
        .loose(),
    })
    .loose(),
});

/** Below this, assume the field moved rather than the market shrinking. */
const MIN_EXPECTED_ROWS = 150;

export type YahooResult = { adp: AdpRow[]; unresolved: UnresolvedRow[]; rowsSeen: number };

export async function fetchYahoo(captureDate: string): Promise<string[]> {
  const pages: string[] = [];
  const { pageSize, maxPages } = SOURCES.yahoo;

  for (let page = 0; page < maxPages; page++) {
    const body = await get(SOURCES.yahoo.players(page * pageSize, pageSize));
    await writeBronze(`yahoo/page-${page}`, captureDate, body);
    pages.push(body);

    // Stop early when Yahoo runs out of players rather than paging into empty
    // responses — coverage depth moves through the season.
    const parsed = ResponseSchema.parse(JSON.parse(body));
    const n = parsed.fantasy_content.game.players?.length ?? 0;
    if (n < pageSize) break;
  }
  return pages;
}

export function parseYahoo(pages: readonly string[], xwalk: Crosswalk): YahooResult {
  const out: YahooResult = { adp: [], unresolved: [], rowsSeen: 0 };
  const seen = new Set<string>();

  for (const body of pages) {
    const parsed = ResponseSchema.parse(JSON.parse(body));
    for (const entry of parsed.fantasy_content.game.players ?? []) {
      const p = entry.player;
      const sourceId = String(p.player_id);
      if (seen.has(sourceId)) continue; // pages can overlap if depth shifts mid-fetch
      seen.add(sourceId);
      out.rowsSeen++;

      // Undrafted players are still listed, just with no pick. Not an error.
      const adp = num(p.draft_analysis?.average_pick);
      if (adp === null || adp <= 0) continue;

      const team = p.editorial_team_abbr ? p.editorial_team_abbr.toUpperCase() : null;
      const r = xwalk.resolve({
        sourceId,
        name: p.name.full,
        pos: p.display_position ?? null,
        team,
      });
      if (!r.player) {
        out.unresolved.push({
          source: 'YAHOO',
          sourceId,
          sourceName: p.name.full,
          pos: p.display_position ?? null,
          team,
          reason: 'no match in spine',
        });
        continue;
      }

      out.adp.push({
        playerId: r.player.playerId,
        source: 'YAHOO',
        adpFormat: 'YAHOO_DEFAULT',
        adp,
        auctionValue: num(p.draft_analysis?.average_cost),
        sourceId,
        sourceName: p.name.full,
        resolveTier: r.tier,
      });
    }
  }

  if (out.adp.length < MIN_EXPECTED_ROWS) {
    throw new Error(
      `[yahoo] only ${out.adp.length} ADP values from ${out.rowsSeen} rows ` +
        `(expected >=${MIN_EXPECTED_ROWS}). Check whether average_pick moved or the ` +
        `pub-api-ro path changed — inspect the bronze copy before trusting this run.`,
    );
  }
  assertLooksLikeAdp('yahoo.adp', out.adp.map((r) => r.adp));
  return out;
}
