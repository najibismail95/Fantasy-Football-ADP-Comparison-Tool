# League Formats & Strategy

Extends the [PLAN.md §0](./PLAN.md) spike. All findings measured live on 2026-07-26. Working calculator: [`src/metrics/replacement.ts`](./src/metrics/replacement.ts).

> **§1–§3 describe the shipped system. §4 does not** — it proposes a persisted config schema and an NL layer, neither of which was built. See the banner on §4. *Audited 2026-08-25.*

The original plan pinned one canonical format (12-team PPR 1QB) and treated format as a tag on ADP rows. That's too thin: format doesn't just shift prices, **it changes which strategy is correct**. This document reworks the model around that.

---

## 1. What formats we can actually get

Original spike results below (2026-07-26) measured this against ESPN, Sleeper-via-beatadp, and FantasyPros — the only sources available at the time. Sleeper ADP now comes directly from Sleeper's own API instead of beatadp, and Yahoo has since been added; both are still PPR/1QB only, so the shape of the finding hasn't changed even though beatadp and FantasyPros ECR are gone. Current sources:

| Format | ESPN ADP | ESPN rank | Sleeper | Yahoo ADP |
|---|---|---|---|---|
| **PPR, 1QB** | ✅ | ✅ `PPR` | ✅ | ✅ (unlabeled — see below) |
| **Standard** | ⚠️ *same series* | ✅ `STANDARD` | ❌ | ❌ |
| **Half PPR** | ⚠️ *same series* | ❌ | ❌ | ❌ |
| **Superflex** | ⚠️ *same series* | ✅ `SUPERFLEX` | ❌ | ❌ |
| TE premium / 2QB / dynasty | ❌ | ❌ | ❌ | ❌ |

### ⚠️ ESPN's ADP is a single global series

`leaguedefaults/1` and `leaguedefaults/3` return **byte-identical ADP** (Gibbs 1.66, Bijan 2.60, Nacua 3.65 in both). The `leaguedefaults` ID does *not* select a scoring-specific ADP.

What *is* format-specific is `draftRanksByRankType`, which carries four variants: `STANDARD`, `PPR`, `ELIMINATION`, **`SUPERFLEX`**.

**So for any non-PPR format, ESPN gives you ranks, not ADP** — the same rank-vs-ADP unit distinction as [PLAN.md §0.3](./PLAN.md). Don't let a superflex rank enter an ADP column.

### Sleeper and Yahoo ADP are PPR/1QB only

Originally probed against beatadp — `?scoring=HALF_PPR`, `?format=SUPERFLEX`, `?qb=SUPERFLEX`, `?teams=10` were **all ignored**, identical payload every time. That's still the practical constraint even now that Sleeper ADP comes from Sleeper's own endpoint directly: it exposes one series, no format parameter. Yahoo's `pub-api-ro` is the same shape — no scoring metadata in the response to select or even confirm against, so its ADP is captured as `YAHOO_DEFAULT` rather than asserted to be any specific format. **Sleeper and Yahoo ADP exist for PPR/1QB (Yahoo: presumed) and nothing else.**

### ESPN's superflex ranks are real — and dramatic

| Player | PPR rank | SUPERFLEX rank | Δ |
|---|---|---|---|
| Joe Burrow | 108 | **11** | +97 |
| Lamar Jackson | 88 | **6** | +82 |
| Drake Maye | 89 | **7** | +82 |
| Jalen Hurts | 90 | **10** | +80 |
| Josh Allen | 36 | **5** | +31 |
| *Jahmyr Gibbs (control)* | *1* | *8* | *−7* |

This confirms the "superflex moves QBs 3+ rounds" claim with measured data, and it means **superflex is genuinely supported** — via ESPN ranks, just not via ADP. (Originally also corroborated by FantasyPros' superflex ECR page; that signal is gone along with FantasyPros — see [README.md](./README.md#data-sources).)

---

## 2. The architectural split that resolves this

Format-sensitivity divides into two classes with completely different data requirements. Conflating them is why the original plan felt stuck.

| | **ADP-dependent** | **Config-derived** |
|---|---|---|
| Features | Cross-platform arbitrage, ADP trends | VORP, replacement levels, tiers, positional scarcity, strategy guidance |
| Needs | Format-matched ADP *from each source* | Projections + a roster config |
| Constraint | **Limited to what sources publish** (PPR/1QB for the full three-source set) | **Works for any configuration you can describe** |

The second column is the important one. **Replacement level is computed, not sourced.** Given projections and a roster config, you can produce correct VORP for 10-team 2-flex no-kicker half-PPR TE-premium — a format no source publishes and never will.

That covers nearly everything in your examples. Two-flex, no-kicker, league size, superflex roster math: all config-derived. Only the *cross-platform arbitrage* view stays pinned to PPR/1QB.

**Design consequence:** stop modelling `format_id` as a tag on ADP rows. Model a **league configuration** as a first-class object, and let replacement levels derive from it.

```ts
type LeagueConfig = {
  teams: number;                       // 8, 10, 12, 14
  scoring: 'STD' | 'HALF' | 'PPR';
  tePremium: number;                   // bonus PPR for TE, usually 0 or 0.5
  starters: {
    qb: number; rb: number; wr: number; te: number;
    flex: number;                      // RB/WR/TE
    superflex: number;                 // QB/RB/WR/TE
    k: number; dst: number;            // 0 disables the position entirely
  };
  benchSize: number;
};
```

✅ **Shipped essentially verbatim** as `LeagueConfigSchema` in [`src/metrics/league-config.ts`](./src/metrics/league-config.ts) — a Zod schema rather than a bare type, so a config is validated at the boundary like any source payload, with `starters` defaulting to 1QB/2RB/2WR/1TE/1FLEX/1K/1DST.

⚠️ **But there is no way to set one from the CLI** (2026-08-25). Every script — `values`, `tiers`, `sos`, `rising` — imports `DEFAULT_CONFIG` (12-team PPR, 1QB) and uses it unchanged; no flag overrides it. So the claim in the table above is precise but easy to over-read: the **metrics layer** genuinely works for any config you can describe, and `replacement.ts` will correctly return QB24 for a superflex config if you hand it one. Nothing hands it one. Making superflex or 10-team actually reachable is a CLI flag threaded through four scripts, not new analysis — the arithmetic underneath is already config-general and tested.

---

## 3. Testing your strategy hypothesis

You proposed: *10-team → prioritize elite onesies (QB/TE), because every roster is stacked so positional advantage is the remaining edge.*

I ran it against real ESPN 2026 projections (342 players) using greedy starter-fill to derive replacement level per config. "Elite-onesie edge" = `(QB1 + TE1 VORP) / (RB1 + WR1 VORP)` — higher means onesies matter more relative to flex positions.

```
config                     QB              RB              WR              TE
10-team  1QB 1flex    QB10   80pt    RB23  160pt    WR27  151pt    TE10   82pt
12-team  1QB 1flex    QB12   83pt    RB27  174pt    WR33  168pt    TE12   89pt
12-team  1QB 2flex    QB12   83pt    RB32  189pt    WR40  182pt    TE12   89pt
12-team  SUPERFLEX    QB24  132pt    RB27  174pt    WR33  168pt    TE12   89pt

elite-onesie edge:
  10-team  1QB 1flex    0.520   #####################
  12-team  1QB 1flex    0.504   ####################
  12-team  1QB 2flex    0.465   ###################
  12-team  SUPERFLEX    0.645   ##########################
```

**Your intuition is directionally correct — 10-team does favor onesies more than 12-team (0.520 vs 0.504).** But the honest read is that it's the *weakest* of the three levers tested:

| Lever | Effect on onesie edge |
|---|---|
| 12-team → 10-team | **+3%** |
| 1-flex → 2-flex | **−8%** (adding a flex meaningfully *devalues* onesies) |
| 1QB → superflex | **+28%** |

Two things worth internalizing:

1. **Roster construction dominates league size.** Going from one flex to two moves the needle nearly 3× as much as dropping two teams. If you're building strategy guidance, weight flex/superflex configuration far above team count.
2. **Even in a 10-team, elite RB/WR VORP (160/151) is roughly double elite QB/TE (80/82).** The onesie heuristic is a real *relative* shift, not a reason to invert the draft board. Presenting it as "take elite QB/TE early in 10-team" would overstate what the numbers support.

**The mechanism, stated properly:** shallower leagues raise replacement level at *every* position, which shrinks VORP everywhere. It shrinks *less* at QB/TE because those talent pools are thin — there's one elite tier regardless of league size — while RB/WR pools are deep enough that the next man up is nearly as good. That's why the ratio moves. It's not that onesies gain value; it's that flex positions lose more.

**And the payoff:** none of this needs hardcoded heuristics. Correct replacement levels *derive* the strategy. Feed the config in, and "10-team favors onesies slightly, superflex favors them enormously" falls out of the arithmetic — which also means it stays correct for configs nobody wrote a heuristic for.

---

## 4. What this changes in the build

> ⚠️ **This section is a proposal that was not implemented as written.** The *reasoning* held and drove the design; the *mechanism* did not. Each part is annotated below with what actually shipped. Audited 2026-08-25.

**Schema** — replace the flat `formats` table:

```sql
league_configs(config_id PK, teams, scoring, te_premium,
               qb, rb, wr, te, flex, superflex, k, dst, bench)
replacement_levels(config_id, position, repl_index, repl_points, computed_at)
metrics_gold(player_id, config_id, vorp, value_score, tier, ...)   -- keyed by config
adp_snapshots(player_id, source, adp_format, adp, ...)             -- source's own format
```

Note `metrics_gold` is keyed by **config**, while `adp_snapshots` is keyed by the **source's** format. That asymmetry is the split from §2 made concrete.

**What shipped instead:** only the last line. `adp_snapshots` exists and is keyed by the source's own format exactly as written. The first three tables were never created — there is no `league_configs`, no `replacement_levels`, no `metrics_gold` in [`src/db/schema.sql`](./src/db/schema.sql).

The asymmetry survived anyway, in a different shape: the config is a **runtime object, not a stored row**, and everything keyed by it is recomputed per run rather than persisted. For a few hundred players that costs milliseconds, and it removes a whole class of bug — a stored `replacement_levels` row goes stale the moment projections update, and nothing in a daily pipeline would tell you it had. Persisting metrics only pays off once something needs to read them without recomputing, which for a CLI that recomputes in under a second is not yet true.

The one real cost of not persisting: there's no history of how VORP or tiers moved over the season, only how *ADP* moved (`rising` reads `adp_snapshots`). Recovering that later means either backfilling from the projection history — which *is* captured, in `projections` — or starting to store computed metrics from that day forward.

**Scoring affects projections, not just replacement level.** ESPN's projections come from `leaguedefaults/3` and are PPR. For half-PPR/standard you must re-derive from component stats (receptions × delta) rather than reusing the PPR total. Half-PPR is *not* the midpoint of two rank lists.

> **Still true, still unbuilt** (2026-08-25) — and it's the reason the config flag in §2 is less trivial than it looks. `LeagueConfigSchema` accepts `scoring: 'STD' | 'HALF' | 'PPR'`, but only PPR projections are ingested, and `values.ts` filters on `pr.scoring = <config scoring>`. So a `HALF` config wouldn't produce *wrong* numbers — it would match zero projection rows and produce an empty board. Any CLI config flag needs to either reject non-PPR scoring outright or re-derive projections from component stats first; silently accepting the flag is the one option that isn't safe.

~~**The NL layer must know the user's league.**~~ **Moot — there is no NL layer** (see [PLAN.md §5](./PLAN.md)). The argument is kept because it transfers directly to the CLI, where it's still unresolved:

> *"Find me value QBs in the late rounds"* has genuinely different answers in 1QB vs superflex — the same player is a reach in one and a steal in the other. Three options, in order of preference:
>
> 1. **Store a league config per user** and apply it silently. Best UX.
> 2. **Ask once at session start**, then remember it.
> 3. **Default to 12-team PPR 1QB and state the assumption in every answer** — the weakest, because a superflex user gets confidently wrong answers.

**The CLI landed on option 3**, and does the "state the assumption" half properly — every command prints its league line (`league: 12-team PPR, 1QB/2RB/2WR/1TE/1FLEX`) and its replacement levels above the table, so the frame is never implicit. What it can't do is the other half: there's no flag to change the config, so a superflex drafter can *see* that the numbers are 1QB but can't ask for anything else. See the note in §2.

**Coverage caveat on the numbers above.** The 342-player projection pool is ESPN's top 350; QB and TE depth (49/50) is adequate for 12-team superflex (QB24) but thin for deeper configs. Production should pull a wider projection set before computing replacement levels for 14-team or deep-bench formats.

> **Unchanged, and still the binding constraint** (2026-08-25). `src/config.ts` still requests ESPN's top 350. What did change is that projections are now **blended across ESPN and Sleeper** (`metrics/projections.ts`), which deepened the pool without widening the ESPN request — Sleeper projects players ESPN's top 350 cuts off. It also fixed a separate problem: ESPN alone compresses the middle of every position so hard that six startable RBs land within a projected point of each other, which makes tiering and grading meaningless regardless of pool depth. The blend is load-bearing, not a redundancy.
