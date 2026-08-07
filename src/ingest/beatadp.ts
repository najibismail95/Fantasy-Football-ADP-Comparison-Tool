import { SOURCES } from '../config.js';
import { get } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import { assertLooksLikeAdp } from '../lib/assert.js';
import type { Crosswalk } from '../resolve/crosswalk.js';
import type { AdpRow, UnresolvedRow } from '../types.js';

/**
 * The only source of FantasyPros ADP.
 *
 * ⚠️ This is a scrape, not an API. No /api/ route exists (verified: no /api/,
 * supabase, trpc, or fetch() references in the page). The dataset ships inside
 * the Next.js RSC payload, so a redeploy on their side can break this parse.
 *
 * ⚠️ Its SLEEPER column is no longer used. Sleeper ADP now comes straight from
 * Sleeper's own API (ingest/sleeper-projections.ts): verified byte-identical
 * where they overlap — mean difference 0.00 picks across all 237 shared
 * players, because beatadp is simply republishing that API — but with 311
 * players instead of 237. Dropping it here means a beatadp outage costs one
 * source rather than two.
 *
 * FantasyPros ADP has no key-free alternative: api.fantasypros.com returns 403
 * on every path (including with a key header), and the public ADP page
 * server-renders only 5 rows before loading the rest client-side.
 *
 * ⚠️ The page's "ESPN" column is ESPN's draft RANK, not ADP (every value is an
 * integer; ESPN's true ADP is 1.66/2.58/3.65 for the same players). It is
 * DISCARDED here — ESPN ADP comes from the ESPN ingester. Likewise the page's
 * `consensus` field averages a rank series with two ADP series and is meaningless.
 *
 * Format: PPR / 1QB only. Query params (?scoring, ?format, ?teams) are ignored.
 */

const ROW_RE =
  /\{"player":\{"id":(\d+),"fullName":"([^"]+)","position":"([^"]*)","teamId":"([^"]*)"\},"adps":\{([^}]*)\}/g;

/** Below this, assume the parse broke rather than the data shrank. */
const MIN_EXPECTED_ROWS = 200;

export type BeatAdpResult = { adp: AdpRow[]; unresolved: UnresolvedRow[]; rowsSeen: number };

export async function fetchBeatAdp(captureDate: string): Promise<string> {
  const body = await get(SOURCES.beatadp.url);
  await writeBronze('beatadp', captureDate, body, 'html');
  return body;
}

export function parseBeatAdp(html: string, xwalk: Crosswalk): BeatAdpResult {
  const payload = html.replace(/\\"/g, '"');
  const out: BeatAdpResult = { adp: [], unresolved: [], rowsSeen: 0 };

  for (const m of payload.matchAll(ROW_RE)) {
    const [, sourceId, fullName, position, teamId, adps] = m;
    if (!sourceId || !fullName) continue;
    out.rowsSeen++;

    const team = teamId || null;
    const r = xwalk.resolve({ sourceId, name: fullName, pos: position ?? null, team });
    if (!r.player) {
      out.unresolved.push({
        source: 'BEATADP', sourceId, sourceName: fullName,
        pos: position ?? null, team, reason: 'no match in spine',
      });
      continue;
    }

    // FantasyPros only now: ESPN's column here is a rank, and Sleeper comes
    // from Sleeper's own API with better coverage. See the header note.
    for (const key of ['FANTASYPROS'] as const) {
      const hit = new RegExp(`"${key}":([0-9.]+)`).exec(adps ?? '');
      const value = hit?.[1] ? Number(hit[1]) : NaN;
      if (!Number.isFinite(value)) continue;
      out.adp.push({
        playerId: r.player.playerId,
        source: key,
        adpFormat: 'PPR_1QB',
        adp: value,
        auctionValue: null,
        sourceId,
        sourceName: fullName,
        resolveTier: r.tier,
      });
    }
  }

  if (out.rowsSeen < MIN_EXPECTED_ROWS) {
    throw new Error(
      `[beatadp] parsed only ${out.rowsSeen} rows (expected >=${MIN_EXPECTED_ROWS}). ` +
        `The RSC payload shape has probably changed — inspect the bronze copy before trusting this run.`,
    );
  }
  assertLooksLikeAdp('beatadp.FANTASYPROS', out.adp.map((r) => r.adp));
  return out;
}
