# Fantasy Football ADP Comparison Tool

Pulls Average Draft Position from multiple fantasy platforms, reconciles them onto one player identity, and surfaces where the platforms disagree — so you can find players who are systematically cheaper wherever you happen to be drafting.

## Quickstart

```bash
npm install
npm run ingest      # fetch all sources -> DuckDB + Parquet  (~5-10s)
npm run report      # sanity checks + cross-platform arbitrage
npm run values RB 6 10   # value board: position + round range
npm run tiers TE          # ADP-clustered tiers with cliffs
npm run sos RB            # strength of schedule: regular season vs playoffs
```

`npm run ingest:dry` fetches and resolves without writing to the database — good for checking a source hasn't broken before it touches anything.

A GitHub Actions workflow runs `npm run ingest` daily and commits the day's Parquet back to the repo automatically — see [Automation](#automation) below. The commands above work identically against that history or a fresh local clone.

## What it finds

**`npm run values POS ROUND_MIN ROUND_MAX`** — players in that range whose projected production is a real outlier for their draft slot, graded within their own position:

```
league: 12-team PPR, 1QB/2RB/2WR/1TE/1FLEX

replacement level:
  QB   QB13 baseline, 290 pts
  RB   RB26 baseline, 184 pts
  ...

RB · rounds 6-8 · A/B value plays, alphabetical:

┌─────────┬───────────────────────┬──────┬─────┬───────┬────────────┬───────────────┬───────┬──────────┬─────────────┐
│ (index) │ player                │ pos  │ adp │ round │ drafted_as │ produces_like │ grade │ espn_pts │ sleeper_pts │
├─────────┼───────────────────────┼──────┼─────┼───────┼────────────┼───────────────┼───────┼──────────┼─────────────┤
│ 0       │ 'Rhamondre Stevenson' │ 'RB' │ 85  │ 8     │ 'RB29'     │ 'RB25'        │ 'B'   │ '203'    │ '169'       │
└─────────┴───────────────────────┴──────┴─────┴───────┴────────────┴───────────────┴───────┴──────────┴─────────────┘
```

`drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge (production above what a player at his draft slot typically produces — points, not rank spots, because a 2-spot move at the top of a position is worth far more than a 6-spot move at the bottom; see `metrics/vorp.ts`) within his own position (A/B = top ~30%), and **only A/B players make the board at all** — there's no fixed row count. A short or empty section for a given range is the finding, not a bug: at the top of a position, ADP and production already agree closely, so there's often no real value to surface there. `espn_pts`/`sleeper_pts` are each source's own number, not an average — deliberately shown raw rather than folded into a single "confidence" label, so a disagreement between the two models is something you see directly rather than something a computed flag claims on your behalf.

Players need **2+ real projection sources** to appear on this board at all, the same rule ADP consensus already uses. A player only ESPN or only Sleeper projects isn't a confirmed number, and the gap between the two sources can itself be a signal something changed — Jayden Higgins showed as a "value" WR purely because ESPN had dropped his projection after a season-ending injury while Sleeper's pre-injury number hadn't caught up yet, with nothing to check it against.

**`npm run tiers POS`** — clusters a position by ADP, not raw projected points, and shows the point cliff between tiers. Points alone don't tier the way people draft: elite RB projections form an uneven staircase where each of the top few backs sits 20+ points clear of the next, so clustering on points puts every elite back in his own tier of one — ADP matches how real drafters group them instead:

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

**`npm run sos [POS]`** — opens with the five easiest playoff schedules at each position, then the 24 most-drafted players at a position with how hard their schedule is in the fantasy regular season versus the fantasy playoffs:

```
┌─────────┬──────┬────────────────────────┬─────────────────────────┬───────────────────────┐
│ (index) │ pos  │ 1st                    │ 2nd                     │ 3rd                   │
├─────────┼──────┼────────────────────────┼─────────────────────────┼───────────────────────┤
│ 1       │ 'RB' │ 'Jeremiyah Love (ARI)' │ 'Jonathan Taylor (IND)' │ 'Travis Etienne (NO)' │
│ 2       │ 'WR' │ 'Malik Nabers (NYG)'   │ 'Justin Jefferson (MIN)'│ "Ja'Marr Chase (CIN)" │
└─────────┴──────┴────────────────────────┴─────────────────────────┴───────────────────────┘
```

That summary is deduplicated by team, one player per schedule. Teammates share a schedule, so an undeduplicated top five at WR would spend two slots on Chase and Higgins describing the same Bengals draw — four facts in five slots. The most-drafted player on each team stands in for it.


```
RB:
┌─────────┬───────────────────────┬───────┬─────┬──────┬────────────────────┬────────────────────┬───────────────┐
│ (index) │ player                │ team  │ bye │ adp  │ weeks 1-14         │ weeks 15-17        │ playoff shift │
├─────────┼───────────────────────┼───────┼─────┼──────┼────────────────────┼────────────────────┼───────────────┤
│ 0       │ 'Jeremiyah Love'      │ 'ARI' │ 14  │ 26.7 │ 'F · 3rd hardest'  │ 'A · 2nd easiest'  │ 'much easier' │
│ 21      │ 'Saquon Barkley'      │ 'PHI' │ 10  │ 13.8 │ 'A · 2nd easiest'  │ 'D · 4th hardest'  │ 'much harder' │
│ 23      │ 'Christian McCaffrey' │ 'SF'  │ 8   │ 5.8  │ 'C · 16th easiest' │ 'F · 2nd hardest'  │ 'much harder' │
└─────────┴───────────────────────┴───────┴─────┴──────┴────────────────────┴────────────────────┴───────────────┘
```

Each cell is a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by the exact placing, counted from whichever end is nearer — "2nd hardest" rather than "31st easiest", because nobody counts a bad schedule from the good end. The letter is for scanning a column at a glance; the placing is what separates the 2nd-easiest playoff draw from the 6th, which a letter alone buckets together. Both are computed *within* a position, because a defense that stuffs the run while leaking to tight ends is not "good" in a way that means anything until you say good against whom.

`playoff shift` is the column worth reading. Barkley has the 2nd-easiest RB schedule over weeks 1-14 and the 4th-hardest over 15-17 — a real cost that a single full-season number averages into nothing.

⚠️ These are placings, not magnitudes. Three playoff games swing much wider than fourteen regular-season ones (the 2026 spread is 74.7-130.7 against 91.5-112.6), so 2nd-easiest over weeks 15-17 is a bigger real edge than 2nd-easiest over weeks 1-14 — and Love's regular-season F is only about 4% below average, because over fourteen games the whole league converges toward it.

The ratings price the 2026 schedule using **2025** defensive results, because in August no 2026 defensive snap has happened. That is the method every public SOS table uses, and computing it independently from raw play-by-play reproduced Yahoo's published 2026 WR playoff numbers to about a point (CLE 114.7 vs their 114.4). It is still last year's defenses — personnel turns over hard — so it belongs in a tiebreak between similar players, not in a decision to move someone across tiers.

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

Also checks integrity (does each source's ADP still look like a real average, not a leaked rank column) and resolution quality per source.

## Data sources

All unauthenticated — no API keys, no OAuth, nothing to configure.

| Source | Provides | Notes |
|---|---|---|
| **ESPN** | ADP, projections, auction values, per-format ranks | Undocumented API. ADP is one global series; only *ranks* vary by format |
| **Sleeper** | Player identity + ADP + projections | Direct from Sleeper's API — no scraping |
| **Yahoo** | ADP + auction values | Yahoo's public `pub-api-ro` host, the same one their own site calls — no login. Doesn't publish projected points; that's why `values` only shows ESPN and Sleeper's |
| **nflverse** | NFL schedule + weekly player stats | Static, versioned release files on GitHub — the open-source data layer behind most public NFL analytics. Feeds `sos` only; no ADP |

Every source above is a real, unauthenticated API — nothing here is a page scrape. That wasn't always true: earlier versions pulled Sleeper ADP and FantasyPros ADP/expert rankings through a third-party scrape (beatadp.com) and FantasyPros' own pages. Both broke in production and were replaced. FantasyPros expert rankings had no key-free replacement, so that signal is gone; its 18 days of history are kept as a frozen archive in `data/silver/ecr_snapshots.parquet` rather than deleted.

Projections are blended across ESPN and Sleeper (simple average). ESPN alone compresses the middle of every position too much to be useful for tiering or grading — e.g. six starting-caliber RBs within a single projected point of each other — so a second, independent source is load-bearing, not optional.

## Automation

Two workflows, both in `.github/workflows/`:

**`ingest.yml`** runs `npm run ingest` daily (11:15 UTC), then commits the resulting Parquet and a freshly generated `REPORT.md` back to the repo. That's what makes the history usable at all: none of these sources publish historical daily ADP, so a day that isn't captured is gone for good. `workflow_dispatch` lets you trigger a run by hand from the Actions tab.

**`ci.yml`** runs typecheck and the test suite on every pull request and every push to `main`.

### Reading the report without cloning anything

Two routes. Both show the same content — the integrity checks, cross-platform arbitrage, the value board, and strength of schedule for QB/RB/WR/TE.

**1. [REPORT.md](./REPORT.md) — today's report, no account needed**

Regenerated and committed on every run, so it's one click from the repo front page and renders straight in GitHub. Its git history doubles as a day-by-day record of how the market moved: `git log -p REPORT.md` walks you back through the season.

**2. GitHub Actions — any past day**

Every run keeps its own copy, so you can read a specific day without digging through commits:

1. Open the **Actions** tab
2. Pick **Daily ADP ingest** from the left sidebar
3. Click any run (they're titled `data: ADP snapshot YYYY-MM-DD`)
4. The full report is rendered on that run's **Summary** page

> **Note:** GitHub only shows run summaries and logs to signed-in users. Any GitHub account works — it doesn't need to be yours, and the repo is public — but a logged-out visitor will just see "Sign in to view logs". If you want a link to send someone without an account, use `REPORT.md` above.

Both routes come from `npm run report:md`, `npm run values:md`, and `npm run sos:md` — the same `report`, `values`, and `sos` you'd run locally, with Markdown tables instead of terminal box-drawing. Identical numbers, same code path.

### When it breaks

A failed run isn't only a red X: a missed day is a permanent hole, because ADP can't be backfilled. So a failure opens a GitHub issue (reusing one open issue rather than filing a new one daily) and attaches the raw payloads as an artifact for 14 days, which is usually enough to tell a source outage apart from a parser that needs updating.

The ingest is also guarded against overwriting good history with something worse — see the first two items below.

## Layout

```
src/
  ingest/     one module per source (espn, sleeper, sleeper-projections, yahoo, nflverse)
  resolve/    entity resolution (name normalization, aliases, crosswalk)
  metrics/    replacement level, VORP, tiers, strength of schedule, projection blending, source-agreement checks
  lib/        http + retry, bronze archival, ingest-time guards
  db/         DuckDB schema and client, including the history-loss guard
  scripts/    daily-ingest, report, values, tiers, sos
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
