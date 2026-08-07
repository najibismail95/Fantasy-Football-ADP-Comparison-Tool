import { SILVER } from '../config.js';
import { today } from '../lib/bronze.js';
import { Crosswalk } from '../resolve/crosswalk.js';
import { fetchState, ingestSleeperSpine } from '../ingest/sleeper.js';
import { fetchEspn, parseEspn } from '../ingest/espn.js';
import { fetchBeatAdp, parseBeatAdp } from '../ingest/beatadp.js';
import { fetchFantasyPros, parseFantasyPros, type FantasyProsFormat } from '../ingest/fantasypros.js';
import {
  fetchSleeperProjections, parseSleeperProjections, parseSleeperAdp,
} from '../ingest/sleeper-projections.js';
import { exportParquet, hydrateFromParquet, openDb, replaceAll, replaceDay } from '../db/client.js';
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
 */
const TIME_SERIES_TABLES = [
  'adp_snapshots', 'ecr_snapshots', 'rank_snapshots', 'projections',
  'player_xref', 'unresolved',
] as const;

/**
 * `players` is a dimension table, NOT a time series: it has a PRIMARY KEY and
 * is rebuilt in full from Sleeper every run. It is therefore replaced wholesale
 * and deliberately NOT hydrated — hydrating it would reload yesterday's rows
 * and collide with today's insert.
 */
const EXPORTED_TABLES = ['players', ...TIME_SERIES_TABLES] as const;

const DRY = process.argv.includes('--dry-run');
const FP_FORMATS: FantasyProsFormat[] = ['ppr', 'superflex'];

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

  const beat = parseBeatAdp(await fetchBeatAdp(captureDate), xwalk);

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

  const fpResults = [];
  for (const fmt of FP_FORMATS) {
    const r = parseFantasyPros(await fetchFantasyPros(fmt, captureDate), fmt, xwalk);
    fpResults.push(r);
    console.log(`fantasypros/${fmt}: ${r.ecr.length} rows, scoring=${r.scoring}, experts=${r.totalExperts ?? '?'}`);
  }

  // 3. Report resolution quality per source.
  const unresolved: UnresolvedRow[] = [
    ...espn.unresolved, ...beat.unresolved, ...fpResults.flatMap((r) => r.unresolved),
  ];
  const rate = (ok: number, total: number) => (total ? ((100 * ok) / total).toFixed(1) : '—');
  console.log('\nresolution:');
  console.log(`  espn          ${espn.adp.length} adp / ${espn.ranks.length} ranks / ${espn.projections.length} proj  (${espn.unresolved.length} unresolved)`);
  console.log(`  beatadp/fpros ${beat.adp.length} adp from ${beat.rowsSeen} rows  → ${rate(beat.rowsSeen - beat.unresolved.length, beat.rowsSeen)}%  (${beat.unresolved.length} unresolved)`);
  for (const [i, r] of fpResults.entries()) {
    const total = r.ecr.length + r.unresolved.length;
    console.log(`  fantasypros/${FP_FORMATS[i]}  ${r.ecr.length} ecr  → ${rate(r.ecr.length, total)}%  (${r.unresolved.length} unresolved)`);
  }
  if (unresolved.length) {
    console.log(`\n  unresolved (${unresolved.length}): ` +
      unresolved.slice(0, 10).map((u) => `${u.sourceName}[${u.pos ?? '?'}]`).join(', ') +
      (unresolved.length > 10 ? ` …+${unresolved.length - 10}` : ''));
  }

  // 4. Coverage gate on the players that actually matter.
  const topAdp = [...beat.adp, ...espn.adp, ...sleeperAdp.adp].sort((a, b) => a.adp - b.adp).slice(0, COVERAGE_GATE_TOP_N);
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

  const allAdp = [...espn.adp, ...beat.adp, ...sleeperAdp.adp];
  counts.adp_snapshots = await replaceDay(conn, 'adp_snapshots',
    ['player_id', 'source', 'adp_format', 'adp', 'auction_value', 'captured_at'],
    allAdp.map((r) => ({
      player_id: r.playerId, source: r.source, adp_format: r.adpFormat,
      adp: r.adp, auction_value: r.auctionValue, captured_at: d,
    })), d);

  counts.ecr_snapshots = await replaceDay(conn, 'ecr_snapshots',
    ['player_id', 'source', 'ecr_format', 'rank_ecr', 'rank_ave', 'rank_std', 'rank_min', 'rank_max', 'captured_at'],
    fpResults.flatMap((f) => f.ecr).map((r) => ({
      player_id: r.playerId, source: r.source, ecr_format: r.ecrFormat, rank_ecr: r.rankEcr,
      rank_ave: r.rankAve, rank_std: r.rankStd, rank_min: r.rankMin, rank_max: r.rankMax, captured_at: d,
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
    [...allAdp, ...espn.ranks, ...fpResults.flatMap((f) => f.ecr)].map((r) => ({
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

  for (const t of EXPORTED_TABLES) await exportParquet(conn, t, SILVER);

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
