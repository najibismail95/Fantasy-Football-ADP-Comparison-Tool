# Fantasy ADP report — 2026-09-17

_Snapshot 2026-09-17 · 52 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.7 | 170.9 | 99.3 |
| SLEEPER | 2473 | 1.5 | 700.9 | 86.3 |
| YAHOO | 221 | 1.2 | 143.9 | 89.1 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2473 |
| YAHOO | exact | 203 |
| YAHOO | team | 18 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 143.1 | 100.9 | 100 | ESPN | 3.6 | CHEAPER on ESPN | 147 |
| Brian Thomas | WR | 132.8 | 74.6 | 83.9 | ESPN | 4.5 | CHEAPER on ESPN | 186 |
| Chris Godwin | WR | 139 | 93.6 | 93.6 | ESPN | 3.8 | CHEAPER on ESPN | 170 |
| Christian Watson | WR | 105 | 66.2 | 67.6 | ESPN | 3.2 | CHEAPER on ESPN | 198 |
| Dalton Kincaid | TE | 135.1 | 88.9 | 95.3 | ESPN | 3.6 | CHEAPER on ESPN | 159 |
| De'Zhaun Stribling | WR | 153.6 | 138.7 | 108.3 | YAHOO | 3.2 | pricier on YAHOO | 128 |
| J.K. Dobbins | RB | 132.4 | 90.7 | 94.1 | ESPN | 3.3 | CHEAPER on ESPN | 168 |
| Jacory Croskey-Merritt | RB | 146.8 | 115.2 | 104.6 | ESPN | 3.1 | CHEAPER on ESPN | 143 |
| Jayden Reed | WR | 149.1 | 108.6 | 112.9 | ESPN | 3.2 | CHEAPER on ESPN | 186 |
| Jaylen Warren | RB | 109.7 | 70 | 75.3 | ESPN | 3.1 | CHEAPER on ESPN | 182 |
| Jordan Love | QB | 156.4 | 160.1 | 121.1 | YAHOO | 3.1 | pricier on YAHOO | 275 |
| Jordan Mason | RB | 156.3 | 109.4 | 110.5 | ESPN | 3.9 | CHEAPER on ESPN | 160 |
| Josh Jacobs | RB | 118.4 | 50.2 | 69.8 | ESPN | 4.9 | CHEAPER on ESPN | 152 |
| KC Concepcion | WR | 159.1 | 120.8 | 121.9 | ESPN | 3.1 | CHEAPER on ESPN | 156 |
| Luther Burden | WR | 95.1 | 56 | 56.6 | ESPN | 3.2 | CHEAPER on ESPN | 208 |
| MarShawn Lloyd | RB | 128.5 | 137.8 | 83.8 | YAHOO | 4.1 | pricier on YAHOO | 142 |
| Quentin Johnston | WR | 148.4 | 111.7 | 105.3 | ESPN | 3.3 | CHEAPER on ESPN | 165 |
| TreVeyon Henderson | RB | 104.3 | 60.9 | 70.4 | ESPN | 3.2 | CHEAPER on ESPN | 162 |
| Tucker Kraft | TE | 102.2 | 64.9 | 59.2 | ESPN | 3.3 | CHEAPER on ESPN | 173 |
| Tyler Shough | QB | 152.3 | 181.9 | 129.5 | SLEEPER | 3.4 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-17. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

_(no rows)_


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TreVeyon Henderson | RB | 79.2 | 97.2 | 60.1 | 60.3 | 69.6 | 70.4 |
| Rico Dowdle | RB | 98 | 115.2 | 86.6 | 86.5 | 87.2 | 87.6 |
| Jadarian Price | RB | 66.6 | 83 | 62.6 | 61.5 | 62.6 | 62.6 |
| MarShawn Lloyd | RB | 105 | 121.3 | 137.3 | 137.5 | 84.3 | 83.8 |
| Courtland Sutton | WR | 82.7 | 99 | 79.5 | 79.5 | 108.6 | 109.2 |
| Alec Pierce | WR | 105 | 121.2 | 96.6 | 96.1 | 97.3 | 98.1 |
| Marvin Harrison | WR | 80 | 96 | 76.7 | 76.6 | 78.1 | 78.2 |
| Jaylen Warren | RB | 85.9 | 101.9 | 71.4 | 70.2 | 75.3 | 75.3 |
| Tony Pollard | RB | 86.6 | 102.2 | 84 | 83.5 | 86.1 | 86.5 |
| J.K. Dobbins | RB | 112 | 126.2 | 91.2 | 91.4 | 94 | 94.1 |
| Kenny Gainwell | RB | 100.6 | 113.9 | 111.4 | 111.4 | 121.1 | 121.4 |
| Jonathon Brooks | RB | 105.7 | 118.8 | 98 | 97.8 | 89.6 | 89.6 |
| Luther Burden | WR | 75.2 | 88.2 | 56 | 56.2 | 56.6 | 56.6 |
| Rome Odunze | WR | 68.6 | 81.6 | 65.5 | 65.4 | 67.3 | 67.6 |
| Michael Wilson | WR | 105.8 | 118.7 | 87.3 | 87.5 | 100.7 | 101 |
| Matthew Stafford | QB | 93.6 | 106.3 | 94.5 | 94.3 | 99.1 | 99 |
| Carnell Tate | WR | 81.7 | 94.3 | 69.3 | 69.4 | 82.8 | 83.2 |
| Brian Thomas | WR | 113.6 | 126.2 | 74.5 | 74.5 | 83.7 | 83.9 |
| Parker Washington | WR | 91.1 | 103.6 | 73.3 | 71.9 | 74.8 | 74.4 |
| Justin Herbert | QB | 85.8 | 98.1 | 83.1 | 83.5 | 69.8 | 69.9 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 294pts, RB25 182pts, WR37 182pts, TE13 159pts, K13 124pts, DEF13 89pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2315 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_44 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.5 | 10.6 | QB15 | QB10 | B | 306 | 296 |
| Brock Purdy | QB | 104 | 9.6 | QB13 | QB8 | B | 301 | 303 |
| Jalen Hurts | QB | 57.6 | 5.7 | QB6 | QB4 | B | 329 | 311 |
| Trevor Lawrence | QB | 102.3 | 9.4 | QB12 | QB9 | B | 299 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Quinshon Judkins | RB | 54.6 | 5.5 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 78.1 | 7.4 | RB28 | RB21 | A | 240 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Courtland Sutton | WR | 106.9 | 9.8 | WR38 | WR33 | B | 205 | 174 |
| Emeka Egbuka | WR | 47 | 4.8 | WR21 | WR17 | B | 228 | 224 |
| Garrett Wilson | WR | 45.2 | 4.7 | WR20 | WR13 | A | 252 | 225 |
| Jayden Reed | WR | 112.9 | 10.3 | WR43 | WR35 | B | 174 | 198 |
| Michael Pittman | WR | 107.8 | 9.9 | WR39 | WR36 | B | 197 | 171 |
| Mike Evans | WR | 70.9 | 6.8 | WR29 | WR26 | B | 192 | 222 |
| Parker Washington | WR | 74.3 | 7.1 | WR30 | WR27 | B | 188 | 212 |
| Rome Odunze | WR | 67.6 | 6.5 | WR28 | WR23 | B | 213 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 73.2 | 7 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 117.8 | 10.7 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 148.3 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.5 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.3 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 57.6 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 142.3 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 57.5 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 104 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 29.2 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.1 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.7 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.8 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.9 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52.2 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.5 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.1 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.2 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.6 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.5 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.8 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.2 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.1 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.9 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.2 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.4 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.5 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 157.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 71.7 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.6 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 156.3 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.2 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.6 | C · 16th easiest | F · 1st hardest | much harder |

