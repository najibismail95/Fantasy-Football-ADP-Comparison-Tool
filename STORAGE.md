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

Vercel's filesystem is ephemeral, so a local DuckDB file won't persist between requests. The clean serverless arrangement:

1. **GitHub Actions** runs the daily ingest on a cron.
2. It writes Parquet snapshots to **Cloudflare R2** (or S3).
3. The app queries those Parquet files **directly over HTTPS** via `httpfs` — no database server at all.

Near-zero cost, and the append-only snapshot history stays intact. If you'd rather keep it simple, a single small VPS — or just running locally — works identically; the DuckDB file is portable.

---

## Schema

```sql
players(player_id PK, full_name, position, team, birthdate, rookie_year)
player_xref(player_id, source, source_player_id, confidence, method)
adp_snapshots(player_id, source, format_id, adp, sample_size,
              auction_value, captured_at)      -- append-only, never overwrite
formats(format_id PK, teams, scoring, superflex, is_dynasty)
projections(player_id, source, format_id, proj_points, captured_at)
metrics_gold(player_id, format_id, norm_adp_by_source, arb_gap_rounds,
             vorp, value_score, tier, computed_at)
```

Idempotency key: `(source, format_id, capture_date)` — re-running a day's ingest overwrites cleanly.

`player_xref` now spans **four** ID spaces: your canonical ID, Sleeper's, ESPN's, and beatadp's own `player.id`. See [PLAN.md §0.5](./PLAN.md) — the crosswalk gap is the single biggest time sink in this build.
