import { openDb } from '../db/client.js';

/** Sanity + first-look queries over the ingested data. `npm run report` */
const conn = await openDb();
const q = async (sql: string) => (await conn.runAndReadAll(sql)).getRowObjectsJson();

console.log('\n=== integrity: ADP must be decimal, not rank (PLAN.md §0.3) ===');
console.table(
  await q(`
  SELECT source, count(*) AS n,
         round(min(adp),2) AS lo, round(max(adp),1) AS hi,
         round(100.0*sum(CASE WHEN adp != floor(adp) THEN 1 ELSE 0 END)/count(*),1) AS pct_decimal
  FROM adp_snapshots GROUP BY source ORDER BY source`),
);

console.log('=== resolution tier distribution (fuzzy should stay ~0) ===');
console.table(
  await q(`
  SELECT source, resolve_tier, count(*) AS n
  FROM player_xref GROUP BY 1,2 ORDER BY source, n DESC`),
);

console.log('=== A. cross-platform arbitrage: ESPN vs Sleeper (PPR/1QB) ===');
// DIRECTION MATTERS AND IS EASY TO INVERT: ADP is a draft *position*, so a
// HIGHER number means the player lasts LONGER, i.e. he is CHEAPER there.
// Never surface a bare signed gap — name the platform explicitly. A reader
// (or an LLM narrating this table) will otherwise read the sign backwards.
console.table(
  await q(`
  WITH w AS (
    SELECT player_id,
           max(adp) FILTER (WHERE source='ESPN')    AS espn,
           max(adp) FILTER (WHERE source='SLEEPER') AS sleeper
    FROM adp_snapshots GROUP BY 1)
  SELECT p.display_name AS player, p.position AS pos,
         round(w.espn,1) AS espn_adp, round(w.sleeper,1) AS sleeper_adp,
         CASE WHEN w.espn > w.sleeper THEN 'ESPN' ELSE 'SLEEPER' END AS cheaper_on,
         round(abs(w.espn - w.sleeper)/12.0,2) AS rounds_cheaper,
         CASE WHEN w.espn > w.sleeper THEN 'lasts ' || round((w.espn-w.sleeper)/12.0,1) || ' rds longer on ESPN'
              ELSE 'lasts ' || round((w.sleeper-w.espn)/12.0,1) || ' rds longer on Sleeper' END AS reading
  FROM w JOIN players p USING (player_id)
  WHERE w.espn IS NOT NULL AND w.sleeper IS NOT NULL
    AND least(w.espn, w.sleeper) < 130
  ORDER BY abs(w.espn - w.sleeper) DESC LIMIT 8`),
);

console.log('=== C. experts vs market: biggest ECR/ADP disagreements ===');
// ⚠️ K and DEF are EXCLUDED deliberately. FantasyPros ranks them at the bottom
// of the overall expert list (Brandon Aubrey: ECR 179) while they are actually
// drafted around pick 85. That gap is an artifact of how ECR orders those
// positions, not a real expert/market disagreement — including them swamps the
// signal with 6 kickers and defenses. Compare skill positions only.
console.table(
  await q(`
  WITH a AS (SELECT player_id, min(adp) AS adp FROM adp_snapshots GROUP BY 1),
       e AS (SELECT player_id, rank_ecr, rank_std FROM ecr_snapshots WHERE ecr_format='PPR')
  SELECT p.display_name AS player, p.position AS pos,
         round(a.adp,1) AS adp, e.rank_ecr AS ecr,
         round(a.adp - e.rank_ecr,1) AS ecr_minus_adp, e.rank_std AS expert_std
  FROM a JOIN e USING (player_id) JOIN players p USING (player_id)
  WHERE a.adp < 150 AND p.position NOT IN ('K','DEF')
  ORDER BY abs(a.adp - e.rank_ecr) DESC LIMIT 8`),
);

console.log('=== superflex: ESPN rank shift for QBs (FORMATS.md §1) ===');
console.table(
  await q(`
  WITH r AS (
    SELECT player_id,
           max(rank) FILTER (WHERE rank_type='PPR')       AS ppr,
           max(rank) FILTER (WHERE rank_type='SUPERFLEX') AS sflex
    FROM rank_snapshots GROUP BY 1)
  SELECT p.display_name AS player, r.ppr, r.sflex, r.ppr - r.sflex AS moves_up
  FROM r JOIN players p USING (player_id)
  WHERE p.position='QB' AND r.ppr IS NOT NULL AND r.sflex IS NOT NULL
  ORDER BY r.sflex LIMIT 6`),
);

console.log('=== unresolved (surfaced, never dropped) ===');
console.table(await q(`SELECT source, source_name, position FROM unresolved`));
