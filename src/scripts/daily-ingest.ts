import { SILVER } from '../config.js';
import { today } from '../lib/bronze.js';
import { Crosswalk } from '../resolve/crosswalk.js';
import { fetchState, ingestSleeperSpine } from '../ingest/sleeper.js';
import { fetchEspn, parseEspn } from '../ingest/espn.js';
import { fetchYahoo, parseYahoo } from '../ingest/yahoo.js';
import {
  fetchSleeperProjections, parseSleeperProjections, parseSleeperAdp,
} from '../ingest/sleeper-projections.js';
import { refreshSosRatings } from '../ingest/nflverse.js';
import {
  assertExportSafe, exportParquet, hydrateFromParquet, hydrateReference, openDb,
  replaceAll, replaceDay,
} from '../db/client.js';
import { table } from '../lib/render.js';
import type { UnresolvedRow } from '../types.js';

/**
 * Time series — accumulate one row set per capture date, and must be reloaded
 * from Parquet on a fresh machine or history is lost.
 *
 * player_xref and unresolved belong here too: they record HOW each source's id
 * mapped onto the spine and who failed to map at all. Without them in history
 * there is no way to see when matching quality started to slip — and August
 * rookie churn is exactly when it does. They must be hydrated as well as
 * exported, or CI would write a single day over the whole series.
 *
 * ecr_snapshots is deliberately ABSENT. FantasyPros ECR came from a page
 * scrape that was removed with beatadp; nothing writes ECR any more. The table
 * and its committed Parquet are kept as a frozen archive of 2026-07-27..08-16
 * rather than deleted — that history is real and cannot be re-collected — but
 * it is neither hydrated nor exported, so the file is never rewritten.
 */
const TIME_SERIES_TABLES = [
  'adp_snapshots', 'rank_snapshots', 'projections',
  'player_xref', 'unresolved',
] as const;

/**
 * `players` is a dimension table, NOT a time series: it has a PRIMARY KEY and
 * is rebuilt in full from Sleeper every run. It is therefore replaced wholesale
 * and deliberately NOT hydrated — hydrating it would reload yesterday's rows
 * and collide with today's insert.
 */
/**
 * Tables that are current-state rather than history, and so are exempt from
 * the history-loss guard.
 *
 * The exemption is not cosmetic: assertNoHistoryLoss compares capture dates
 * via a `captured_at` column, and neither of these is keyed that way —
 * `sos_ratings` records `computed_at` precisely because it is NOT a series, so
 * guarding it would fail to bind rather than pass a check. That would have
 * survived the first CI run (no Parquet on disk yet means nothing to lose) and
 * broken the second.
 *
 * `sos_ratings` is seasonal reference data: exported so a fresh clone and CI
 * both inherit it without re-downloading ~11MB of nflverse CSV, but hydrated
 * through hydrateReference (empty-or-nothing) rather than the per-date merge,
 * which would keep two complete rating sets differing only in computed_at.
 */
const REFERENCE_TABLES = ['players', 'sos_ratings'] as const;

const EXPORTED_TABLES = [...REFERENCE_TABLES, ...TIME_SERIES_TABLES] as const;

const DRY = process.argv.includes('--dry-run');

/** Recompute SOS even though ratings for the season already exist. */
const REFRESH_SOS = process.argv.includes('--refresh-sos');

/** Fail the run if a top-N player can't be resolved — catches August rookie churn. */
const COVERAGE_GATE_TOP_N = 200;

async function main() {
  const captureDate = today();
  const t0 = Date.now();
  console.log(`fantasy-adp daily ingest — ${captureDate}${DRY ? ' (dry run, no DB writes)' : ''}\n`);

  const state = await fetchState();
  console.log(`season ${state.season} (${state.seasonType}, week ${state.week})`);

  // 1. Spine first — everything else resolves against it.
  const spine = await ingestSleeperSpine(captureDate);
  const xwalk = new Crosswalk(spine);
  console.log(`spine: ${spine.length} players`);

  // 2. Sources. ESPN first so the crosswalk learns proTeamId -> abbrev before
  //    the others need it (defenses join on team).
  const espnRaw = await fetchEspn(state.season, captureDate);
  const espn = parseEspn(espnRaw, xwalk, state.season);
  console.log(`espn team map: ${xwalk.espnTeamCount} teams derived`);

  // Third platform. Replaces the beatadp scrape that supplied FantasyPros ADP:
  // a real API, and the only source here that also carries auction values.
  const yahoo = parseYahoo(await fetchYahoo(captureDate), xwalk);
  console.log(`yahoo: ${yahoo.adp.length} adp from ${yahoo.rowsSeen} rows`);

  // Second projection source. Keyed by Sleeper player_id, so it joins to the
  // spine directly with no crosswalk. ESPN alone compresses the middle of each
  // position too much to tier on — see ingest/sleeper-projections.ts.
  const spineIds = new Set(spine.map((p) => p.playerId));
  // One fetch serves both projections and ADP.
  const sleeperBody = await fetchSleeperProjections(state.season, captureDate);
  const sleeperProj = parseSleeperProjections(sleeperBody, spineIds);
  const sleeperAdp = parseSleeperAdp(sleeperBody, spineIds);
  console.log(`sleeper projections: ${sleeperProj.seen} players (PPR), ${sleeperProj.projections.length} rows across scorings`);
  console.log(`sleeper adp: ${sleeperAdp.seen} players (${sleeperAdp.sentinelsDropped} undrafted sentinels dropped)`);

  // 3. Report resolution quality per source.
  const unresolved: UnresolvedRow[] = [...espn.unresolved, ...yahoo.unresolved];
  const rate = (ok: number, total: number) => (total ? ((100 * ok) / total).toFixed(1) : '—');
  console.log('\nresolution:');
  console.log(`  espn    ${espn.adp.length} adp / ${espn.ranks.length} ranks / ${espn.projections.length} proj  (${espn.unresolved.length} unresolved)`);
  console.log(`  yahoo   ${yahoo.adp.length} adp from ${yahoo.rowsSeen} rows  → ${rate(yahoo.rowsSeen - yahoo.unresolved.length, yahoo.rowsSeen)}%  (${yahoo.unresolved.length} unresolved)`);
  console.log(`  sleeper ${sleeperAdp.adp.length} adp (id-keyed, no resolution needed)`);
  if (unresolved.length) {
    console.log(`\n  unresolved (${unresolved.length}): ` +
      unresolved.slice(0, 10).map((u) => `${u.sourceName}[${u.pos ?? '?'}]`).join(', ') +
      (unresolved.length > 10 ? ` …+${unresolved.length - 10}` : ''));
  }

  // 4. Coverage gate on the players that actually matter.
  const topAdp = [...yahoo.adp, ...espn.adp, ...sleeperAdp.adp].sort((a, b) => a.adp - b.adp).slice(0, COVERAGE_GATE_TOP_N);
  const gateFails = topAdp.filter((r) => !r.playerId).length;
  if (gateFails > 0) {
    throw new Error(`coverage gate: ${gateFails} of the top ${COVERAGE_GATE_TOP_N} players by ADP are unresolved`);
  }

  if (DRY) {
    console.log(`\ndry run complete in ${((Date.now() - t0) / 1000).toFixed(1)}s — nothing written to the DB.`);
    return;
  }

  // 5. Persist. Append-only, idempotent per capture date.
  const conn = await openDb();

  // On a fresh machine (CI) the DB is empty but the committed Parquet holds all
  // prior days — reload it first or this run would export a single day over the
  // entire history. See hydrateFromParquet().
  const hydrated = await hydrateFromParquet(conn, TIME_SERIES_TABLES, SILVER);
  if (Object.keys(hydrated).length) {
    console.log('\nhydrated from parquet: ' +
      Object.entries(hydrated).map(([t, n]) => `${t}=${n}`).join(' '));
  }

  const d = captureDate;
  const withDate = <T extends object>(rows: T[]) => rows.map((r) => ({ ...r, captured_at: d }));

  const counts: Record<string, number> = {};
  // dimension table — wholesale replace, see replaceAll()
  counts.players = await replaceAll(conn, 'players',
    ['player_id', 'display_name', 'position', 'team', 'espn_id', 'search_rank', 'active', 'captured_at'],
    spine.map((p) => ({
      player_id: p.playerId, display_name: p.displayName, position: p.pos, team: p.team,
      espn_id: p.espnId, search_rank: p.searchRank, active: p.active, captured_at: d,
    })));

  const allAdp = [...espn.adp, ...yahoo.adp, ...sleeperAdp.adp];
  counts.adp_snapshots = await replaceDay(conn, 'adp_snapshots',
    ['player_id', 'source', 'adp_format', 'adp', 'auction_value', 'captured_at'],
    allAdp.map((r) => ({
      player_id: r.playerId, source: r.source, adp_format: r.adpFormat,
      adp: r.adp, auction_value: r.auctionValue, captured_at: d,
    })), d);

  counts.rank_snapshots = await replaceDay(conn, 'rank_snapshots',
    ['player_id', 'source', 'rank_type', 'rank', 'auction_value', 'captured_at'],
    espn.ranks.map((r) => ({
      player_id: r.playerId, source: r.source, rank_type: r.rankType,
      rank: r.rank, auction_value: r.auctionValue, captured_at: d,
    })), d);

  counts.projections = await replaceDay(conn, 'projections',
    ['player_id', 'source', 'scoring', 'proj_points', 'captured_at'],
    [...espn.projections, ...sleeperProj.projections].map((r) => ({
      player_id: r.playerId, source: r.source, scoring: r.scoring,
      proj_points: r.projPoints, captured_at: d,
    })), d);

  counts.player_xref = await replaceDay(conn, 'player_xref',
    ['player_id', 'source', 'source_id', 'source_name', 'resolve_tier', 'captured_at'],
    [...allAdp, ...espn.ranks].map((r) => ({
      player_id: r.playerId, source: r.source, source_id: r.sourceId,
      source_name: r.sourceName, resolve_tier: r.resolveTier, captured_at: d,
    })), d);

  counts.unresolved = await replaceDay(conn, 'unresolved',
    ['source', 'source_id', 'source_name', 'position', 'team', 'reason', 'captured_at'],
    withDate(unresolved).map((u) => ({
      source: u.source, source_id: u.sourceId, source_name: u.sourceName,
      position: u.pos, team: u.team, reason: u.reason, captured_at: d,
    })), d);

  console.log('\nwritten:');
  for (const [t, n] of Object.entries(counts)) console.log(`  ${t.padEnd(16)} ${n}`);

  // 6. Strength of schedule. Seasonal reference data rather than part of the
  //    daily series, so it is hydrated empty-or-nothing and normally skips the
  //    download entirely — see refreshSosRatings and db/schema.sql.
  await hydrateReference(conn, 'sos_ratings', SILVER);
  const sos = await refreshSosRatings(conn, state.season, captureDate, { force: REFRESH_SOS });
  console.log(
    `\nstrength of schedule: ${sos.rows} ratings for ${state.season} on ${sos.basisSeason} defenses` +
      `${sos.refreshed ? ' (recomputed)' : ' (cached, no download)'}`,
  );

  // Ranked 1-32 within each position, so these are the teams whose players
  // draw the softest defenses in weeks 15-17 — the three weeks that decide a
  // title, and the reason this is split out from the full-season number.
  const softest = (await conn.runAndReadAll(`
    SELECT position AS pos,
           string_agg(team || ' ' || round(sos_index) :: INTEGER, '  ' ORDER BY sos_rank) AS easiest_playoff_matchups
    FROM sos_ratings
    WHERE season = ${state.season} AND split = 'playoffs' AND sos_rank <= 4
    GROUP BY 1 ORDER BY 1
  `)).getRowObjectsJson();
  table(softest);

  // Guarded: the export overwrites the committed history wholesale, so it must
  // refuse to drop a capture date. REFERENCE_TABLES are exempt — they are
  // current-state by design (see replaceAll), not a series to lose days from.
  //
  // knownDates is the set of dates this database actually holds, taken from
  // adp_snapshots as the anchor. Without it, a table that is legitimately EMPTY
  // for a date reads as that date having been deleted — `unresolved` is empty
  // whenever every player resolves, which is the goal, not a fault.
  const knownDates = (
    (await conn.runAndReadAll('SELECT DISTINCT captured_at AS d FROM adp_snapshots'))
      .getRowObjectsJson() as { d: string }[]
  ).map((r) => r.d);

  // Check them ALL before writing ANY — a refusal must leave the committed
  // Parquet untouched, not half-rewritten.
  await assertExportSafe(conn, TIME_SERIES_TABLES, SILVER, { knownDates });
  for (const t of EXPORTED_TABLES) {
    const isReference = (REFERENCE_TABLES as readonly string[]).includes(t);
    await exportParquet(conn, t, SILVER, { guardHistory: !isReference, knownDates });
  }

  const days = await conn.runAndReadAll(
    'SELECT count(DISTINCT captured_at) AS d, min(captured_at) AS lo, max(captured_at) AS hi FROM adp_snapshots',
  );
  console.log('\nhistory: ' + JSON.stringify(days.getRowObjectsJson()[0]));
  console.log(`\nparquet exported to ${SILVER}`);
  console.log(`done in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

main().catch((err) => {
  console.error(`\ningest FAILED: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
