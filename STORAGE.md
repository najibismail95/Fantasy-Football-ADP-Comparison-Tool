# Database Choice

Companion to [PLAN.md](./PLAN.md) and [STACK-TYPESCRIPT.md](./STACK-TYPESCRIPT.md). DuckDB extension tests run on 2026-07-26.

*(Supersedes the earlier STORAGE-AND-SENTIMENT.md — the Reddit sentiment layer was dropped from scope.)*

---

## What DuckDB is

**"SQLite for analytics."** An embedded, in-process OLAP database — a library your app imports, not a server you run.

| | SQLite | **DuckDB** | Postgres |
|---|---|---|---|
| Runs as | In-process library | **In-process library** | Separate server |
| Storage | Row-oriented | **Column-oriented** | Row-oriented |
| Built for | Many small reads/writes (OLTP) | **Scans, aggregates, joins (OLAP)** | General purpose |
| Ops burden | None | **None** | Real (install, users, backups) |
| Reads Parquet/CSV/JSON directly | No | **Yes, natively** | Via extensions |
| Concurrent writers | Limited | **Single writer** | Many |

Column-oriented is the property that matters. `SELECT AVG(adp) FROM adp_snapshots WHERE position='QB'` reads only the two columns it needs instead of every row — the shape of nearly every query in this system.

Verified loading cleanly on `@duckdb/node-api` 1.5.5: **`httpfs`** (query Parquet over HTTPS straight from S3/R2 — no database server anywhere), **`json`**, `fts`, `vss`.

---

## The options

| Option | Ops | Good for | Why not |
|---|---|---|---|
| **DuckDB + Parquet** | None | Analytics, local-first, serverless via `httpfs` | Single writer; not a multi-user app backend |
| **SQLite / libSQL (Turso)** | None / low | Simple relational, edge replicas | Row-store — slower on the aggregate scans that dominate here |
| **Postgres (Neon / Supabase)** | Low (hosted) | Multi-user, concurrent writes | Slower on wide analytical scans; a server to manage |
| **ClickHouse** | Medium | Billions of rows | Massive overkill |
| **MongoDB** | Low | Document data | Your data is relational; you'd lose SQL joins for nothing |
| **Plain Parquet, no DB** | None | Archival | You still need a query engine — which is DuckDB |

---

## Recommendation: DuckDB + Parquet

**Do the arithmetic before optimizing.** With Reddit out of scope, the entire dataset is ADP snapshots and projections:

> ~350 tracked players × 3 sources × 365 days ≈ **380K rows/year**

That is *tiny*. Every option on the list handles it on a laptop without breaking a sweat, so the decision isn't about capacity — it's about operational cost and fit. DuckDB wins on both: zero ops, column-oriented (matching the query shape), and it reads the Parquet bronze layer natively so there's no separate load step.

**Add Postgres only on a real trigger** — multiple concurrent users writing, or a hosted app needing an always-on connection pool. Migrating later is a schema port, not a rewrite, because the queries are ordinary SQL either way.

---

## Deployment shape

> **What was planned, and what happened** — only step 1 survived. Audited 2026-08-25.

Vercel's filesystem is ephemeral, so a local DuckDB file won't persist between requests. The clean serverless arrangement:

1. **GitHub Actions** runs the daily ingest on a cron.
2. It writes Parquet snapshots to **Cloudflare R2** (or S3).
3. The app queries those Parquet files **directly over HTTPS** via `httpfs` — no database server at all.

Near-zero cost, and the append-only snapshot history stays intact. If you'd rather keep it simple, a single small VPS — or just running locally — works identically; the DuckDB file is portable.

**What shipped:** step 1, unchanged and running daily since 2026-07-27. Steps 2 and 3 never applied, because the app they'd serve was never built — see [PLAN.md §5](./PLAN.md). There is **no R2 bucket, no S3, no `httpfs` in the codebase**; the extension was verified loadable during the spike and then never needed.

Instead, the Actions run **commits the Parquet files straight back into the repo**, and `REPORT.md` — regenerated and committed on the same run — does the job the web app would have. That's closest to the "just running locally" option above, except automated. It has one property the R2 design didn't: `git log -p REPORT.md` is a free day-by-day audit trail of how the market moved, and `git log` on `data/silver/*.parquet` proves no day was silently dropped.

The tradeoff is repo weight. Committing binary Parquet daily is normally a bad idea, and it's viable here only because the files are small (~200KB for the full ADP history) and the row counts in the arithmetic below are tiny. If the dataset ever grows a decimal place, the R2 design above is the escape hatch and none of the query code has to change — DuckDB reads a local path and an `https://` URL the same way.

---

## Schema

**[`src/db/schema.sql`](./src/db/schema.sql) is authoritative.** It's the live DDL and carries the reasoning for each table inline. What follows is a map of it, current as of 2026-08-25.

```sql
-- identity
players(player_id PK, display_name, position, team,
        espn_id, search_rank, active, captured_at)
player_xref(player_id, source, source_id, source_name, resolve_tier, captured_at)
unresolved(source, source_id, source_name, position, team, reason, captured_at)

-- append-only time series, keyed by the SOURCE's own format
adp_snapshots(player_id, source, adp_format, adp, auction_value, captured_at)
rank_snapshots(player_id, source, rank_type, rank, auction_value, captured_at)
projections(player_id, source, scoring, proj_points, captured_at)
ecr_snapshots(...)   -- FROZEN ARCHIVE, nothing writes it; see below

-- seasonal reference, NOT a time series
sos_ratings(season, basis_season, team, position, split, week_lo, week_hi,
            sos_index, sos_rank, sos_grade, games, bye_week, computed_at)

-- latest-snapshot views — query these unless you specifically want history
adp_current · rank_current · projections_current · player_xref_current
ecr_current · unresolved_current
```

Idempotency key: `(source, adp_format, capture_date)` — re-running a day's ingest overwrites cleanly.

**Four things a reader coming from an older draft of this doc should know:**

**1. There is no `formats` table and no `metrics_gold`.** Format is not a stored dimension. ADP rows carry the source's own format as a string; everything computed — VORP, replacement level, tiers — is derived per run from a runtime `LeagueConfig` object and never persisted. See [FORMATS.md §4](./FORMATS.md) for why that split held even though the tables didn't.

**2. Query the `*_current` views by default.** This is the sharpest edge in the schema. The snapshot tables are append-only, so every run appends a full copy of the board — `SELECT count(*) FROM adp_snapshots` was 914 on day one and ~27,000 by day thirty. An unscoped query doesn't error, it silently returns the wrong answer, and the error compounds daily. Joins are worse (ADP × projections across two days returns four rows per player), and a filter can quietly change meaning: `n_others = 2` was written to mean "two other sources agree" and became "one source counted twice on two dates" — a source corroborating its own previous day. Aggregates hide it best of all, since an `AVG` over duplicated rows is still roughly right. The views exist so the safe query is the one you write without thinking.

**3. `sos_ratings` is deliberately not a time series.** Opponents are fixed when the schedule is released and the basis season's defensive results are final, so recomputing daily would append 256 identical rows and re-download ~11MB of nflverse CSV to learn nothing. It's keyed by `(season, basis_season)` and replaced wholesale via `npm run ingest -- --refresh-sos`. `computed_at` records when the numbers were derived and is **not** part of the key — don't read it as history. `basis_season` is stored rather than assumed because it's the single most important caveat on every number in the table: these price next season's schedule using last season's defenses.

**4. `ecr_snapshots` is a frozen archive.** FantasyPros ECR came from a page scrape that was removed along with beatadp; no key-free source publishes expert consensus ranks. Nothing writes the table and it is neither hydrated nor exported, so it holds 2026-07-27..2026-08-16 untouched. It stays defined so that history is queryable by hand — but `ecr_current` is **empty on a fresh database**, and joining it against live ADP would compare today's prices to a frozen August snapshot.

`player_xref` spans **four** ID spaces: your canonical ID, Sleeper's, ESPN's, and Yahoo's own `player_key`. See [CROSSWALK.md](./CROSSWALK.md) — the crosswalk gap was the single biggest time sink in this build.
