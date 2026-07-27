# Fantasy Football ADP Comparison Tool

Pulls Average Draft Position from multiple fantasy platforms, reconciles them onto one player identity, and surfaces where the platforms disagree — so you can find players who are systematically cheaper wherever you happen to be drafting.

## Quickstart

```bash
npm install
npm run ingest      # fetch all sources -> DuckDB + Parquet  (~5s)
npm run report      # sanity checks + first-look queries
```

`npm run ingest:dry` fetches and resolves without writing to the database.

## What it finds

Three independent signals, deliberately kept separate:

| | Question | Needs |
|---|---|---|
| **Market arbitrage** | Same player, different price across platforms | Format-matched ADP from each source |
| **Value vs projection** | Is he worth his cost at all? (VORP) | Projections + your league config |
| **Experts vs market** | Do analysts and drafters disagree? | ECR vs ADP |

The best signal is the intersection: cheap on your platform, underpriced against projections, *and* ranked above his cost by experts.

## Data sources

All unauthenticated — no API keys, no OAuth, nothing to configure.

| Source | Provides | Notes |
|---|---|---|
| **ESPN** | ADP, projections, auction values, per-format ranks | Undocumented API. ADP is one global series; only *ranks* vary by format |
| **Sleeper** | Canonical player identity | Its own API has **no ADP** |
| **beatadp.com** | Sleeper + FantasyPros ADP | A scrape, not an API — the most fragile dependency here |
| **FantasyPros** | Expert consensus rankings + dispersion | Official API is key-gated; public pages are open |

### Things that will bite you

Each of these caused a real bug during development and is now guarded in code:

- **Not every "ADP" column is ADP.** beatadp's ESPN column and ESPN's `SUPERFLEX` rank type are *ranks*. Mixing a rank series into a price comparison is silently wrong, so every ADP field is asserted ≥80% non-integer on ingest.
- **ECR is not ADP.** Expert rankings are what analysts *say*; ADP is what drafters *do*. Stored in separate tables, never averaged together.
- **Higher ADP means cheaper.** It's a draft *position*, so a bigger number means the player lasts longer. Arbitrage output names the cheaper platform explicitly rather than emitting a signed gap that's easy to read backwards.
- **Position vocabulary isn't shared.** Sleeper says `DEF`, FantasyPros says `DST`, ESPN says `16`; Sleeper lists some backs as `FB`. Position is a blocking key during matching, so every mismatch is a silent miss until normalized.
- **ADP can't be backfilled.** Nobody publishes historical daily ADP. A missed day is gone permanently — which is why raw payloads are archived to `data/bronze/` before anything is parsed.

## Layout

```
src/
  ingest/     one module per source
  resolve/    entity resolution (name normalization, aliases, crosswalk)
  lib/        http + retry, bronze archival, ingest-time guards
  db/         DuckDB schema and client
  scripts/    daily-ingest, report
data/
  bronze/     raw payloads, gzipped, partitioned by source + date
  silver/     Parquet exports
  gold/       DuckDB database
```

Storage is append-only and idempotent per capture date — re-running a day replaces that day rather than duplicating it.

## Docs

| | |
|---|---|
| [PLAN.md](./PLAN.md) | Architecture, the analytical method, phased delivery |
| [CROSSWALK.md](./CROSSWALK.md) | Entity resolution: how it gets to 99.4–100% |
| [FORMATS.md](./FORMATS.md) | League formats, replacement levels, strategy by config |
| [STORAGE.md](./STORAGE.md) | Why DuckDB, and the alternatives considered |
| [STACK-TYPESCRIPT.md](./STACK-TYPESCRIPT.md) | Stack verification and the normalization correction |

## Status

Ingest pipeline works end to end. Not yet built: the metrics layer (VORP, tiers, isotonic normalization), the natural-language query interface, and any UI. See [PLAN.md §6](./PLAN.md).

Personal research tool. The sources are undocumented or unofficial — fine for private use, but check licensing before redistributing anything.
