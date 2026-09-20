# Fantasy ADP report — 2026-09-20

_Snapshot 2026-09-20 · 55 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.74 | 170.8 | 99.3 |
| SLEEPER | 2475 | 1.5 | 700.9 | 84.3 |
| YAHOO | 222 | 1.2 | 143.9 | 91 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2475 |
| YAHOO | exact | 204 |
| YAHOO | team | 18 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 144.3 | 100.6 | 100 | ESPN | 3.7 | CHEAPER on ESPN | 147 |
| Brian Thomas | WR | 135 | 74.4 | 84 | ESPN | 4.6 | CHEAPER on ESPN | 186 |
| Chris Godwin | WR | 139.9 | 93.4 | 93.5 | ESPN | 3.9 | CHEAPER on ESPN | 170 |
| De'Zhaun Stribling | WR | 155.1 | 137.4 | 108.3 | YAHOO | 3.2 | pricier on YAHOO | 128 |
| J.K. Dobbins | RB | 134.3 | 91 | 94.1 | ESPN | 3.5 | CHEAPER on ESPN | 168 |
| Jayden Reed | WR | 149.8 | 107.7 | 113 | ESPN | 3.3 | CHEAPER on ESPN | 186 |
| Jaylen Warren | RB | 112.2 | 70.8 | 75.3 | ESPN | 3.3 | CHEAPER on ESPN | 182 |
| Jordan Love | QB | 155.7 | 159.6 | 120.8 | YAHOO | 3.1 | pricier on YAHOO | 275 |
| Jordan Mason | RB | 158.1 | 109.2 | 110.5 | ESPN | 4 | CHEAPER on ESPN | 160 |
| Josh Downs | WR | 144.3 | 113.4 | 103.2 | ESPN | 3 | CHEAPER on ESPN | 165 |
| Josh Jacobs | RB | 120.3 | 50.1 | 70.1 | ESPN | 5 | CHEAPER on ESPN | 152 |
| KC Concepcion | WR | 160.5 | 119.5 | 121.9 | ESPN | 3.3 | CHEAPER on ESPN | 156 |
| Kyler Murray | QB | 151.7 | 149.2 | 113.9 | YAHOO | 3 | pricier on YAHOO | 288 |
| Luther Burden | WR | 97.2 | 56.8 | 56.7 | ESPN | 3.4 | CHEAPER on ESPN | 208 |
| MarShawn Lloyd | RB | 130.9 | 137.5 | 84.2 | YAHOO | 4.2 | pricier on YAHOO | 142 |
| Quentin Johnston | WR | 149.9 | 112 | 105.2 | ESPN | 3.4 | CHEAPER on ESPN | 165 |
| Rico Dowdle | RB | 126.7 | 86 | 87.7 | ESPN | 3.3 | CHEAPER on ESPN | 175 |
| TreVeyon Henderson | RB | 105.2 | 59.3 | 70.6 | ESPN | 3.4 | CHEAPER on ESPN | 162 |
| Tucker Kraft | TE | 104.8 | 64.7 | 59.2 | ESPN | 3.6 | CHEAPER on ESPN | 173 |
| Tyler Shough | QB | 149.7 | 181 | 129.2 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-20. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Caleb Williams | QB | 86.5 | 72.1 | 70.2 | 71 | 65.3 | 64.7 |
| Jalen Coker | WR | 155 | 141.2 | 149.3 | 147.5 | 133.4 | 130.9 |
| Isaiah Likely | TE | 124.2 | 112.2 | 107.8 | 106.8 | 109.1 | 108.4 |
| Patrick Mahomes | QB | 109.9 | 100.2 | 110.6 | 110.2 | 106.1 | 105.7 |
| Deebo Samuel | WR | 146 | 137.6 | 129.2 | 130.6 | 126.8 | 125.1 |
| Lamar Jackson | QB | 32.4 | 25.6 | 31.7 | 31.3 | 39 | 38.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rico Dowdle | RB | 99.9 | 125.7 | 86.4 | 86 | 87.4 | 87.7 |
| Jadarian Price | RB | 68.3 | 93.2 | 62.5 | 61.2 | 62.5 | 62.5 |
| Courtland Sutton | WR | 84.5 | 109.2 | 79.7 | 79.1 | 109 | 109.3 |
| Marvin Harrison | WR | 81.7 | 105.9 | 76.6 | 76.2 | 78.1 | 78.4 |
| Tony Pollard | RB | 88.3 | 112.1 | 84 | 84.2 | 86.3 | 86.7 |
| Jaylen Warren | RB | 87.6 | 111.4 | 71.8 | 70.9 | 75.2 | 75.3 |
| TreVeyon Henderson | RB | 81.9 | 105.1 | 60.2 | 60.3 | 70.2 | 70.5 |
| Matthew Stafford | QB | 94.4 | 117.5 | 94.1 | 94.5 | 98.9 | 99.1 |
| Alec Pierce | WR | 106.6 | 129.5 | 95.9 | 96 | 97.9 | 98.2 |
| MarShawn Lloyd | RB | 107.7 | 130.2 | 137.8 | 137.6 | 83.8 | 84.1 |
| Justin Herbert | QB | 86.9 | 108.3 | 83.5 | 83.7 | 69.8 | 70 |
| Carnell Tate | WR | 83.1 | 103.7 | 69.3 | 69 | 83.1 | 83.4 |
| Kenny Gainwell | RB | 102.3 | 122.3 | 111.7 | 111.8 | 121.3 | 121.4 |
| J.K. Dobbins | RB | 113.7 | 133.7 | 91.3 | 91.1 | 94 | 94.1 |
| Luther Burden | WR | 76.6 | 96.6 | 55.7 | 56.3 | 56.5 | 56.7 |
| Terry McLaurin | WR | 62.4 | 82 | 55.1 | 55.5 | 55.5 | 55.8 |
| Brian Thomas | WR | 115.1 | 134.5 | 74.6 | 74.5 | 83.8 | 84 |
| Kyle Pitts | TE | 69.3 | 88.3 | 67.6 | 67.4 | 71.5 | 71.9 |
| Jaylen Waddle | WR | 55 | 73.6 | 44.3 | 44.3 | 38.5 | 38.6 |
| Jonathon Brooks | RB | 107.5 | 125.9 | 98.3 | 98.4 | 89.5 | 89.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 294pts, RB25 182pts, WR37 182pts, TE13 159pts, K13 124pts, DEF13 89pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2317 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_44 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.2 | 10.6 | QB15 | QB10 | B | 306 | 296 |
| Brock Purdy | QB | 104.2 | 9.6 | QB13 | QB8 | B | 301 | 303 |
| Jalen Hurts | QB | 58.4 | 5.8 | QB6 | QB4 | B | 329 | 311 |
| Trevor Lawrence | QB | 102 | 9.4 | QB12 | QB9 | B | 299 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Quinshon Judkins | RB | 54.7 | 5.5 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 77.2 | 7.4 | RB28 | RB21 | A | 240 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Courtland Sutton | WR | 109.2 | 10 | WR39 | WR33 | B | 205 | 174 |
| Emeka Egbuka | WR | 47 | 4.8 | WR21 | WR17 | B | 228 | 224 |
| Garrett Wilson | WR | 45.1 | 4.7 | WR20 | WR13 | A | 252 | 225 |
| Jayden Reed | WR | 113 | 10.3 | WR43 | WR35 | B | 174 | 198 |
| Michael Pittman | WR | 111.2 | 10.2 | WR40 | WR36 | B | 197 | 171 |
| Mike Evans | WR | 70.8 | 6.8 | WR29 | WR26 | B | 192 | 222 |
| Parker Washington | WR | 74.1 | 7.1 | WR30 | WR27 | B | 188 | 212 |
| Rome Odunze | WR | 67.7 | 6.6 | WR28 | WR23 | B | 213 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 73 | 7 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 117.8 | 10.7 | TE14 | TE12 | B | 167 | 160 |
| Travis Kelce | TE | 95.1 | 8.8 | TE11 | TE9 | B | 178 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 149.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 149.7 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.4 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.2 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.6 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 57.7 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 104.2 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 28.9 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.9 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.8 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.2 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.8 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52.1 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.5 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.2 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.6 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.4 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.6 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.4 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.6 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.8 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.1 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.7 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 157.2 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 156.5 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.3 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.5 | C · 16th easiest | F · 1st hardest | much harder |

