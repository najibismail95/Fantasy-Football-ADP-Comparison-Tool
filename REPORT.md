# Fantasy ADP report — 2026-09-22

_Snapshot 2026-09-22 · 57 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.78 | 170.7 | 99.3 |
| SLEEPER | 2480 | 1 | 700.9 | 85.3 |
| YAHOO | 222 | 1.2 | 143.9 | 89.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2480 |
| YAHOO | exact | 203 |
| YAHOO | team | 19 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 144.3 | 100.1 | 100 | ESPN | 3.7 | CHEAPER on ESPN | 137 |
| Brian Thomas | WR | 135.3 | 74 | 84.2 | ESPN | 4.7 | CHEAPER on ESPN | 179 |
| Chris Godwin | WR | 140.1 | 92.5 | 93.5 | ESPN | 3.9 | CHEAPER on ESPN | 156 |
| De'Zhaun Stribling | WR | 155.5 | 138.2 | 108.3 | YAHOO | 3.2 | pricier on YAHOO | 128 |
| J.K. Dobbins | RB | 135.6 | 91.3 | 94.2 | ESPN | 3.6 | CHEAPER on ESPN | 165 |
| Jayden Reed | WR | 151.1 | 107.8 | 113 | ESPN | 3.4 | CHEAPER on ESPN | 169 |
| Jaylen Warren | RB | 112.5 | 70.5 | 75.3 | ESPN | 3.3 | CHEAPER on ESPN | 183 |
| Jordan Love | QB | 156.8 | 158.3 | 120.6 | YAHOO | 3.1 | pricier on YAHOO | 260 |
| Jordan Mason | RB | 160.4 | 109.4 | 110.5 | ESPN | 4.2 | CHEAPER on ESPN | 138 |
| Josh Jacobs | RB | 120.6 | 52.8 | 70.2 | ESPN | 4.9 | CHEAPER on ESPN | 153 |
| Justin Herbert | QB | 112.3 | 83.6 | 70.2 | ESPN | 3 | CHEAPER on ESPN | 266 |
| KC Concepcion | WR | 160.6 | 119.3 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 157 |
| Kyler Murray | QB | 152.3 | 151.3 | 113.9 | YAHOO | 3.2 | pricier on YAHOO | 280 |
| Luther Burden | WR | 98 | 55.3 | 56.8 | ESPN | 3.5 | CHEAPER on ESPN | 192 |
| MarShawn Lloyd | RB | 131.3 | 137.3 | 84.5 | YAHOO | 4.1 | pricier on YAHOO | 114 |
| Quentin Johnston | WR | 150.5 | 111.8 | 105.2 | ESPN | 3.5 | CHEAPER on ESPN | 159 |
| Rico Dowdle | RB | 128.6 | 86.6 | 87.8 | ESPN | 3.5 | CHEAPER on ESPN | 156 |
| TreVeyon Henderson | RB | 102.2 | 61.9 | 70.6 | ESPN | 3 | CHEAPER on ESPN | 167 |
| Tucker Kraft | TE | 108.1 | 63.3 | 59.3 | ESPN | 3.9 | CHEAPER on ESPN | 162 |
| Tyler Shough | QB | 144.6 | 179.2 | 128.8 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-22. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 125.4 | 102.6 | 107.1 | 105.5 | 109 | 108.2 |
| Jalen Coker | WR | 154.2 | 134.7 | 148.7 | 146.7 | 133 | 130 |
| Dalton Kincaid | TE | 134.8 | 118.3 | 88.1 | 88.3 | 95.5 | 94.9 |
| Patrick Mahomes | QB | 110.4 | 94.2 | 110.5 | 110.5 | 106 | 105.5 |
| Caleb Williams | QB | 87.2 | 72 | 71.1 | 71.3 | 65.2 | 64.5 |
| Deebo Samuel | WR | 145.9 | 137.4 | 130.2 | 130.5 | 126.4 | 124.5 |
| Lamar Jackson | QB | 31.8 | 24.8 | 31.6 | 31.7 | 38.9 | 38.7 |
| Brock Purdy | QB | 109.2 | 102.7 | 122.3 | 122.8 | 97.7 | 97 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rico Dowdle | RB | 102.9 | 127.7 | 86.6 | 86.4 | 87.5 | 87.7 |
| Courtland Sutton | WR | 87.3 | 111.5 | 79.7 | 79.7 | 109.1 | 109.3 |
| Jadarian Price | RB | 71.1 | 94.6 | 61.9 | 60.6 | 62.6 | 62.5 |
| Marvin Harrison | WR | 84.5 | 107.4 | 76.7 | 76 | 78.2 | 78.6 |
| Tony Pollard | RB | 90.8 | 113.5 | 84 | 84.9 | 86.4 | 86.8 |
| Justin Herbert | QB | 89.1 | 111.4 | 83.5 | 83.6 | 69.9 | 70.1 |
| Jaylen Warren | RB | 90.3 | 112.5 | 70.9 | 70.2 | 75.2 | 75.3 |
| Kyle Pitts | TE | 70.8 | 91.8 | 67.5 | 67.1 | 71.5 | 72.2 |
| MarShawn Lloyd | RB | 110.3 | 131.1 | 137.6 | 137.4 | 83.8 | 84.4 |
| Alec Pierce | WR | 109.5 | 130.3 | 96.2 | 95.7 | 98 | 98.2 |
| Matthew Stafford | QB | 97.1 | 117.8 | 94.2 | 94.2 | 98.9 | 99.1 |
| Carnell Tate | WR | 85.2 | 105.1 | 69.7 | 69.5 | 83.2 | 83.5 |
| Kenny Gainwell | RB | 104.4 | 123.3 | 111.6 | 111.8 | 121.3 | 121.4 |
| J.K. Dobbins | RB | 116.1 | 135 | 91.3 | 91 | 94 | 94.2 |
| Luther Burden | WR | 78.7 | 97.5 | 55.7 | 55.8 | 56.5 | 56.8 |
| Terry McLaurin | WR | 64.5 | 83.1 | 55.3 | 55.5 | 55.6 | 56 |
| Michael Pittman | WR | 94 | 112.4 | 105 | 105.9 | 122 | 122.1 |
| Brian Thomas | WR | 116.9 | 135.3 | 74.3 | 74.2 | 83.8 | 84.1 |
| Jaylen Waddle | WR | 56.8 | 75.1 | 44.3 | 44.3 | 38.5 | 38.6 |
| Harold Fannin | TE | 72.5 | 90.6 | 73.3 | 73.4 | 69.9 | 70.4 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 273pts, RB27 168pts, WR35 169pts, TE13 156pts, K13 116pts, DEF13 86pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2321 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_8 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_47 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.7 | 10.6 | QB15 | QB11 | B | 262 | 296 |
| Brock Purdy | QB | 100.7 | 9.3 | QB12 | QB5 | A | 283 | 303 |
| Jalen Hurts | QB | 58.1 | 5.8 | QB6 | QB4 | B | 288 | 311 |
| Patrick Mahomes | QB | 105.4 | 9.7 | QB14 | QB9 | B | 274 | 287 |
| Trevor Lawrence | QB | 102.1 | 9.4 | QB13 | QB8 | B | 266 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 52.1 | 5.3 | RB20 | RB15 | A | 246 | 197 |
| Chuba Hubbard | RB | 91 | 8.5 | RB31 | RB25 | B | 205 | 148 |
| D'Andre Swift | RB | 49.2 | 5 | RB19 | RB18 | B | 197 | 208 |
| Jaylen Warren | RB | 75.3 | 7.2 | RB27 | RB23 | B | 195 | 171 |
| Rhamondre Stevenson | RB | 78.3 | 7.4 | RB28 | RB24 | B | 184 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 67.2 | 6.5 | WR27 | WR22 | B | 205 | 208 |
| Garrett Wilson | WR | 45.4 | 4.7 | WR20 | WR14 | B | 217 | 225 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR24 | B | 179 | 222 |
| Parker Washington | WR | 73.9 | 7.1 | WR30 | WR16 | A | 229 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94.8 | 8.8 | TE10 | TE9 | B | 172 | 164 |
| George Kittle | TE | 79 | 7.5 | TE9 | TE7 | B | 184 | 169 |
| Isaiah Likely | TE | 105.2 | 9.7 | TE12 | TE8 | A | 191 | 157 |
| Travis Kelce | TE | 95 | 8.8 | TE11 | TE6 | A | 185 | 171 |
| Tyler Warren | TE | 48 | 4.9 | TE4 | TE3 | B | 181 | 201 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 151.3 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 144.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.1 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.7 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.9 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 57.8 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 100.7 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 29.7 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.6 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.2 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52.1 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.2 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.2 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.6 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.1 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.9 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.4 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 157.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.4 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.3 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 165.1 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 156 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79 | C · 16th easiest | F · 1st hardest | much harder |

