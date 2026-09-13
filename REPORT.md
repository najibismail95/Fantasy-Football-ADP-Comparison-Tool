# Fantasy ADP report — 2026-09-13

_Snapshot 2026-09-13 · 48 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.36 | 171.4 | 98.7 |
| SLEEPER | 2452 | 1.6 | 700.9 | 86.7 |
| YAHOO | 223 | 1.3 | 144.1 | 90.6 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2452 |
| YAHOO | exact | 203 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 115.3 | 74.8 | 83.8 | ESPN | 3 | CHEAPER on ESPN | 186 |
| Chris Godwin | WR | 127.5 | 93 | 93.5 | ESPN | 2.9 | CHEAPER on ESPN | 166 |
| Dalton Kincaid | TE | 133.8 | 88.4 | 95.6 | ESPN | 3.5 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 139.4 | 138.1 | 107.9 | YAHOO | 2.6 | pricier on YAHOO | 126 |
| Jayden Reed | WR | 141.3 | 108.6 | 112.9 | ESPN | 2.5 | CHEAPER on ESPN | 186 |
| Jordan Love | QB | 155.9 | 160.4 | 121.2 | YAHOO | 3.1 | pricier on YAHOO | 275 |
| Jordan Mason | RB | 143.1 | 109 | 110.3 | ESPN | 2.8 | CHEAPER on ESPN | 153 |
| Josh Downs | WR | 139 | 113.3 | 103.1 | ESPN | 2.6 | CHEAPER on ESPN | 165 |
| Josh Jacobs | RB | 102.7 | 47.1 | 69 | ESPN | 3.7 | CHEAPER on ESPN | 152 |
| Kyler Murray | QB | 138.1 | 151.9 | 113.8 | YAHOO | 2.6 | pricier on YAHOO | 288 |
| Makai Lemon | WR | 137.5 | 92.3 | 120.3 | SLEEPER | 3.1 | pricier on SLEEPER | 161 |
| MarShawn Lloyd | RB | 108 | 137.6 | 83.8 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 142 |
| Mike Washington | RB | 163.8 | 139.8 | 124.3 | ESPN | 2.6 | CHEAPER on ESPN | 83 |
| RJ Harvey | RB | 131.1 | 81 | 111.6 | SLEEPER | 3.4 | pricier on SLEEPER | 147 |
| Tucker Kraft | TE | 92.2 | 64.7 | 59.3 | ESPN | 2.5 | CHEAPER on ESPN | 173 |
| Tyler Shough | QB | 152.9 | 181.6 | 129.9 | SLEEPER | 3.3 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-13. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MarShawn Lloyd | RB | 110.8 | 107.7 | 159.4 | 137.8 | 93.7 | 83.8 |
| Mike Washington | RB | 163.4 | 163.7 | 160.1 | 139.3 | 123.5 | 124.3 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 83.1 | 102.4 | 38.9 | 47.1 | 51.9 | 68.9 |
| Jordan Love | QB | 155.3 | 155.8 | 153.6 | 160.6 | 122.6 | 121.2 |
| Rachaad White | RB | 126.3 | 130.4 | 133.3 | 140.2 | 124.3 | 125.8 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 294pts, RB25 182pts, WR37 182pts, TE13 160pts, K13 124pts, DEF13 89pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2292 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_6 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_43 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 105.4 | 9.7 | QB13 | QB10 | B | 306 | 296 |
| Brock Purdy | QB | 109 | 10 | QB14 | QB8 | A | 301 | 303 |
| Jaxson Dart | QB | 95.7 | 8.9 | QB11 | QB7 | B | 309 | 297 |
| Jayden Daniels | QB | 57.4 | 5.7 | QB6 | QB5 | A | 328 | 309 |
| Trevor Lawrence | QB | 102.2 | 9.4 | QB12 | QB9 | B | 299 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Rhamondre Stevenson | RB | 78.2 | 7.4 | RB28 | RB21 | A | 240 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Emeka Egbuka | WR | 46.1 | 4.8 | WR21 | WR17 | B | 229 | 224 |
| Garrett Wilson | WR | 45.3 | 4.7 | WR20 | WR13 | B | 251 | 225 |
| Jayden Reed | WR | 112.9 | 10.3 | WR43 | WR35 | B | 174 | 198 |
| Mike Evans | WR | 71.1 | 6.8 | WR29 | WR26 | B | 191 | 222 |
| Parker Washington | WR | 74.5 | 7.1 | WR30 | WR27 | B | 188 | 212 |
| Rome Odunze | WR | 67.5 | 6.5 | WR27 | WR23 | B | 213 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 117 | 10.7 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 138.1 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 94.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.2 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.7 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.9 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 54.5 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 105.4 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.6 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 57.4 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 109 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 28 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.7 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.1 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52.3 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.3 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.2 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.7 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.3 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.7 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.5 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.8 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.5 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 22.2 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.1 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.4 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 155 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.2 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69.5 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.6 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 156.3 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.7 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.8 | C · 16th easiest | F · 1st hardest | much harder |

