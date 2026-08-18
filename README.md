# Fantasy Football ADP Comparison Tool

Pulls Average Draft Position from multiple fantasy platforms, reconciles them onto one player identity, and surfaces where the platforms disagree — so you can find players who are systematically cheaper wherever you happen to be drafting.

## Quickstart

```bash
npm install
npm run ingest      # fetch all sources -> DuckDB + Parquet  (~5-10s)
npm run report      # sanity checks + cross-platform arbitrage
npm run values RB 6 10   # value board: position + round range
npm run tiers TE          # ADP-clustered tiers with cliffs
```

`npm run ingest:dry` fetches and resolves without writing to the database — good for checking a source hasn't broken before it touches anything.

A GitHub Actions workflow runs `npm run ingest` daily and commits the day's Parquet back to the repo automatically — see [Automation](#automation) below. The commands above work identically against that history or a fresh local clone.

## What it finds

**`npm run values POS ROUND_MIN ROUND_MAX`** — every player's own PPR projection from each source, side by side, plus how far the blend of the two beats or misses what a typical player at his draft slot produces:

```
league: 12-team PPR, 1QB/2RB/2WR/1TE/1FLEX

replacement level:
  QB   QB13 baseline, 289 pts
  RB   RB26 baseline, 184 pts
  ...

RB · rounds 6-8 · sorted by value score:

┌─────────┬───────────────────────┬──────┬──────┬───────┬────────────┬───────────────┬──────────┬─────────────┬──────────┐
│ (index) │ player                │ pos  │ adp  │ round │ drafted_as │ produces_like │ espn_pts │ sleeper_pts │ edge_pts │
├─────────┼───────────────────────┼──────┼──────┼───────┼────────────┼───────────────┼──────────┼─────────────┼──────────┤
│ 0       │ 'Rhamondre Stevenson' │ 'RB' │ 86.1 │ 8.1   │ 'RB29'     │ 'RB26'        │ '203'    │ '166'       │ '+11.1'  │
│ 1       │ 'Rico Dowdle'         │ 'RB' │ 88.4 │ 8.3   │ 'RB31'     │ 'RB29'        │ '186'    │ '161'       │ '+3.3'   │
└─────────┴───────────────────────┴──────┴──────┴───────┴────────────┴───────────────┴──────────┴─────────────┴──────────┘
```

`drafted_as`/`produces_like` are his rank by ADP vs. by production, per position. `espn_pts`/`sleeper_pts` are each source's own number, not an average — deliberately shown raw rather than folded into a single "confidence" label, so a disagreement between the two models is something you see directly rather than something a computed flag claims on your behalf.

**`npm run tiers POS`** — clusters a position by ADP (not raw projected points — see *Things that will bite you* below) and shows the point cliff between tiers:

```
TE tiers — 12-team PPR, 28 of 128 players in 8 tiers (drafted only)
tiered on: ADP only   ·   replacement level TE13 at 159 pts

Tier 1  (adp 20-22, 238–247 pts, 2 players)
  Trey McBride             238 pts   adp   19.8
  Brock Bowers             247 pts   adp   21.6

Tier 2  (adp 41-47, 205–211 pts, 2 players)
  ...
```

Tier count scales to the draftable pool automatically — it's not a settable knob, because forcing a small tier count silently produces tiers that span 100+ points and stop meaning anything.

**`npm run report`** — cross-platform sanity checks and arbitrage:

```
=== A. cross-platform arbitrage: LEAVE-ONE-OUT MEDIAN (PPR/1QB) ===
┌─────────┬────────────────┬──────┬──────────┬─────────────┬───────────┬────────────────┬────────┬───────────────────┬──────────┐
│ (index) │ player         │ pos  │ espn_adp │ sleeper_adp │ yahoo_adp │ outlier_source │ rounds │ verdict            │ proj_pts │
├─────────┼────────────────┼──────┼──────────┼─────────────┼───────────┼────────────────┼────────┼───────────────────┼──────────┤
│ 0       │ 'Chris Godwin' │ 'WR' │ 148.7    │ 93          │ 98.2      │ 'ESPN'         │ 4.4    │ 'CHEAPER on ESPN'  │ 166      │
└─────────┴────────────────┴──────┴──────────┴─────────────┴───────────┴────────────────┴────────┴───────────────────┴──────────┘
```

Each source's own ADP is shown raw, per platform — not collapsed into a summary — so you can see which two sources actually agree and by how much, not just trust a computed spread. A source is flagged as the outlier only when the *other two* independently agree within 25 picks of each other; a lone pairwise gap isn't enough, since it can't tell you which side moved.

Also checks integrity (does each source's ADP still look like a real average, not a leaked rank column), resolution quality per source, and ESPN's rank shift for QBs in superflex leagues.

## Data sources

All unauthenticated — no API keys, no OAuth, nothing to configure.

| Source | Provides | Notes |
|---|---|---|
| **ESPN** | ADP, projections, auction values, per-format ranks | Undocumented API. ADP is one global series; only *ranks* vary by format |
| **Sleeper** | Player identity + ADP + projections | Direct from Sleeper's API — no scraping |
| **Yahoo** | ADP + auction values | Yahoo's public `pub-api-ro` host, the same one their own site calls — no login. Doesn't publish projected points; that's why `values` only shows ESPN and Sleeper's |

Every source above is a real, unauthenticated API — nothing here is a page scrape. That wasn't always true: earlier versions pulled Sleeper ADP and FantasyPros ADP/expert rankings through a third-party scrape (beatadp.com) and FantasyPros' own pages. Both broke in production and were replaced. FantasyPros expert rankings had no key-free replacement, so that signal is gone; its 18 days of history are kept as a frozen archive in `data/silver/ecr_snapshots.parquet` rather than deleted.

Projections are blended across ESPN and Sleeper (simple average). ESPN alone compresses the middle of every position too much to be useful for tiering or grading — e.g. six starting-caliber RBs within a single projected point of each other — so a second, independent source is load-bearing, not optional.

## Automation

Two workflows, both in `.github/workflows/`:

**`ingest.yml`** runs `npm run ingest` daily (11:15 UTC), then commits the resulting Parquet and a freshly generated `REPORT.md` back to the repo. That's what makes the history usable at all: none of these sources publish historical daily ADP, so a day that isn't captured is gone for good. `workflow_dispatch` lets you trigger a run by hand from the Actions tab.

**`ci.yml`** runs typecheck and the test suite on every pull request and every push to `main`.

### Reading the report without cloning anything

Two routes. Both show the same content — the integrity checks, cross-platform arbitrage, and the value board for QB/RB/WR/TE.

**1. [REPORT.md](./REPORT.md) — today's report, no account needed**

Regenerated and committed on every run, so it's one click from the repo front page and renders straight in GitHub. Its git history doubles as a day-by-day record of how the market moved: `git log -p REPORT.md` walks you back through the season.

**2. GitHub Actions — any past day**

Every run keeps its own copy, so you can read a specific day without digging through commits:

1. Open the **Actions** tab
2. Pick **Daily ADP ingest** from the left sidebar
3. Click any run (they're titled `data: ADP snapshot YYYY-MM-DD`)
4. The full report is rendered on that run's **Summary** page

> **Note:** GitHub only shows run summaries and logs to signed-in users. Any GitHub account works — it doesn't need to be yours, and the repo is public — but a logged-out visitor will just see "Sign in to view logs". If you want a link to send someone without an account, use `REPORT.md` above.

Both routes come from `npm run report:md` and `npm run values:md` — the same `report` and `values` you'd run locally, with Markdown tables instead of terminal box-drawing. Identical numbers, same code path.

### When it breaks

A failed run isn't only a red X: a missed day is a permanent hole, because ADP can't be backfilled. So a failure opens a GitHub issue (reusing one open issue rather than filing a new one daily) and attaches the raw payloads as an artifact for 14 days, which is usually enough to tell a source outage apart from a parser that needs updating.

The ingest is also guarded against overwriting good history with something worse — see the first two items below.

## Things that will bite you

Each of these caused a real bug during development and is now guarded in code:

- **Not every "ADP" column is ADP.** A source's ADP field can quietly turn out to be a rank column (a beatadp column and an ESPN `SUPERFLEX` rank both were), and undrafted-player sentinels in Sleeper's raw feed look numeric but aren't real ADP. Every ADP field is asserted mostly-non-integer over its top 300 values on ingest — scoped to the top of the board on purpose, since a swapped-in rank column shows up there first, while the deep bench naturally has more whole-number ADPs as sample sizes thin out.
- **History can only grow, never shrink.** The daily export overwrites the committed Parquet wholesale, so a stale local database — one that missed a day the scheduled run already captured — would silently commit a *shorter* history than what's already saved. The export refuses to write if it would drop a capture date that's already committed.
- **An empty result for today isn't the same as no result for today.** A view built as "whatever the latest date in this table is" breaks the moment that table can legitimately have zero rows for today (e.g. every player resolved cleanly, so there's nothing to log) — it silently falls back to the last day that *did* have rows, which can be arbitrarily stale. Anchor "today" on a table that's always populated, not on the one that might be empty.
- **ADP can't be backfilled.** Nobody publishes historical daily ADP. A missed day is gone permanently — which is why raw payloads are archived to `data/bronze/` before anything is parsed, and why the guard above exists at all.
- **Higher ADP means cheaper.** It's a draft *position*, so a bigger number means the player lasts longer. Arbitrage output names the cheaper platform explicitly rather than emitting a signed gap that's easy to read backwards.
- **Position vocabulary isn't shared.** Sleeper says `DEF`, ESPN says `16`; Sleeper lists some backs as `FB`. Position is a blocking key during matching, so every mismatch is a silent miss until normalized.
- **A team ID of zero isn't a team.** ESPN uses `proTeamId: 0` for free agents. Left unguarded, a free agent whose name happened to match a real player got miscounted as a vote for that player's team, teaching the resolver a phantom 33rd "team." Free agents are now excluded from that vote.
- **Projected points alone don't tier the way people draft.** Elite RB projections form an uneven staircase — each of the top few backs sits 20+ points clear of the next — so clustering on points put every elite back in his own tier of one, when real drafters treat them as a single "tier 1." Tiers cluster on ADP instead, which matches actual draft behavior; projections still drive VORP.
- **A raw spread between two sources isn't a quality judgment on the player.** Two models disagreeing by 40 points on a locked-in elite receiver isn't a reason to doubt him — it just means the number is a guess at a midpoint between two big projections, not a corroborated one. `values` shows both raw numbers rather than a "confidence" label, so that distinction is visible instead of implied.

## Layout

```
src/
  ingest/     one module per source (espn, sleeper, sleeper-projections, yahoo)
  resolve/    entity resolution (name normalization, aliases, crosswalk)
  metrics/    replacement level, VORP, tiers, projection blending, source-agreement checks
  lib/        http + retry, bronze archival, ingest-time guards
  db/         DuckDB schema and client, including the history-loss guard
  scripts/    daily-ingest, report, values, tiers
data/
  bronze/     raw payloads, gzipped, partitioned by source + date
  silver/     Parquet exports — the committed, append-only history
  gold/       DuckDB database (gitignored, rebuilt from silver/ on a fresh checkout)
```

Storage is append-only and idempotent per capture date — re-running a day replaces that day rather than duplicating it, and the export guard refuses to let a run delete a day that's already committed.

## Docs

| | |
|---|---|
| [PLAN.md](./PLAN.md) | Original architecture and analytical method — background, not a live status doc |
| [CROSSWALK.md](./CROSSWALK.md) | Entity resolution: how it gets to 99%+ |
| [FORMATS.md](./FORMATS.md) | League formats, replacement levels, strategy by config |
| [STORAGE.md](./STORAGE.md) | Why DuckDB, and the alternatives considered |
| [STACK-TYPESCRIPT.md](./STACK-TYPESCRIPT.md) | Stack verification and the normalization correction |

## Status

Ingest, entity resolution, and the metrics layer (VORP, tiers, cross-platform arbitrage) all work end to end and run daily on a schedule. `values`, `tiers`, and `report` are the interface — deliberately CLI-only, no web UI and no natural-language layer; an earlier direction toward a chat-style query interface was tried and dropped in favor of keeping this simple and scriptable.

Personal research tool. The sources are undocumented or unofficial — fine for private use, but check licensing before redistributing anything.
