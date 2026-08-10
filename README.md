# Fantasy Football ADP Comparison Tool

Pulls Average Draft Position from multiple fantasy platforms, reconciles them onto one player identity, and surfaces where the platforms disagree — so you can find players who are systematically cheaper wherever you happen to be drafting.

## Quickstart

```bash
npm install
npm run ingest      # fetch all sources -> DuckDB + Parquet  (~5s)
npm run report      # sanity checks + first-look queries
npm run values RB 6 10   # graded value board: position + round range
npm run tiers TE          # ADP-clustered tiers with cliffs
```

`npm run ingest:dry` fetches and resolves without writing to the database.

## What it finds

**`npm run values POS ROUND_MIN ROUND_MAX`** — value board for a position and round range, each player graded A–F against a replacement-level baseline computed from your league config:

```
league: 12-team PPR, 1QB/2RB/2WR/1TE/1FLEX
replacement level:
  QB   QB13 baseline, 289 pts
  RB   RB26 baseline, 182 pts
  ...
QB · rounds 9-16 · sorted by value score:
```

Grades are curved *within position* (an A at QB and an A at RB mean the same thing) and come with a confidence flag — thin ADP data or heavy source disagreement downgrades confidence rather than silently reporting a shaky grade as certain.

**`npm run tiers POS`** — clusters a position by ADP (not raw projected points — see *Things that will bite you* below) and shows the point cliff between tiers:

```
TE tiers — 12-team PPR, 24 of 127 players in 7 tiers (drafted only)
tiered on: ADP only   ·   replacement level TE13 at 160 pts

Tier 1  (adp 19-20, 238–247 pts, 2 players)
  Trey McBride             238 pts   adp   19.3
  Brock Bowers             247 pts   adp   20.2

Tier 2  (adp 38-50, 205–211 pts, 2 players)
  ...
```

Tier count scales to the draftable pool automatically — it's not a settable knob, because forcing a small tier count silently produces tiers that span 100+ points and stop meaning anything.

**`npm run report`** — three independent signals, deliberately kept separate:

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
| **Sleeper** | Player identity + ADP + projections | Direct from Sleeper's API — no scraping. Its own ADP field only surfaced once we went looking; earlier assumed it didn't exist |
| **beatadp.com** | FantasyPros ADP | A scrape, not an API — the most fragile dependency here. Used to also supply Sleeper ADP; dropped once we found Sleeper's own endpoint had it, with better coverage |
| **FantasyPros** | Expert consensus rankings + dispersion | Official API is key-gated; public pages are open |

Projections are blended across ESPN and Sleeper (simple average). ESPN alone compresses the middle of every position too much to be useful for tiering or grading — e.g. six starting-caliber RBs within a single projected point of each other — so a second, independent source is load-bearing, not optional.

### Things that will bite you

Each of these caused a real bug during development and is now guarded in code:

- **Not every "ADP" column is ADP.** beatadp's ESPN column and ESPN's `SUPERFLEX` rank type are *ranks*. Sleeper's raw feed also mixes in a sentinel value for undrafted players that looks numeric but isn't real ADP. Mixing any of these into a price comparison is silently wrong, so every ADP field is asserted ≥80% non-integer on ingest, and sentinels are filtered before that check ever runs.
- **ECR is not ADP.** Expert rankings are what analysts *say*; ADP is what drafters *do*. Stored in separate tables, never averaged together.
- **Higher ADP means cheaper.** It's a draft *position*, so a bigger number means the player lasts longer. Arbitrage output names the cheaper platform explicitly rather than emitting a signed gap that's easy to read backwards.
- **Position vocabulary isn't shared.** Sleeper says `DEF`, FantasyPros says `DST`, ESPN says `16`; Sleeper lists some backs as `FB`. Position is a blocking key during matching, so every mismatch is a silent miss until normalized.
- **A team ID of zero isn't a team.** ESPN uses `proTeamId: 0` for free agents. Left unguarded, a free agent whose name happened to match a real player got miscounted as a vote for that player's team, teaching the resolver a phantom 33rd "team." Free agents are now excluded from that vote.
- **Projected points alone don't tier the way people draft.** Elite RB projections form an uneven staircase — each of the top few backs sits 20+ points clear of the next — so clustering on points put every elite back in his own tier of one, when real drafters treat them as a single "tier 1." Tiers cluster on ADP instead, which matches actual draft behavior; projections still drive VORP and grading.
- **ADP can't be backfilled.** Nobody publishes historical daily ADP. A missed day is gone permanently — which is why raw payloads are archived to `data/bronze/` before anything is parsed.

## Layout

```
src/
  ingest/     one module per source (espn, sleeper, sleeper-projections, fantasypros, beatadp)
  resolve/    entity resolution (name normalization, aliases, crosswalk)
  metrics/    replacement level, VORP, value grading, tiers, projection blending
  lib/        http + retry, bronze archival, ingest-time guards
  db/         DuckDB schema and client
  scripts/    daily-ingest, report, values, tiers
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

Ingest, entity resolution, and the metrics layer (VORP, value grading, tiers) all work end to end — `values` and `tiers` are usable today from the CLI. Not yet built: isotonic normalization for cross-platform arbitrage, the natural-language query interface, and any UI. See [PLAN.md §6](./PLAN.md).

Personal research tool. The sources are undocumented or unofficial — fine for private use, but check licensing before redistributing anything.
