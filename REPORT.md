# Fantasy ADP report — 2026-09-07

_Snapshot 2026-09-07 · 42 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.32 | 171.6 | 98.3 |
| SLEEPER | 2311 | 1.3 | 700.9 | 83 |
| YAHOO | 224 | 1.3 | 144.2 | 89.7 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1165 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 2311 |
| YAHOO | exact | 204 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 113.1 | 74.4 | 83.8 | ESPN | 2.8 | CHEAPER on ESPN | 186 |
| Chris Godwin | WR | 124.1 | 93.1 | 94.4 | ESPN | 2.5 | CHEAPER on ESPN | 165 |
| Dalton Kincaid | TE | 131.6 | 88.9 | 96.5 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 137.5 | 139.4 | 108.1 | YAHOO | 2.5 | pricier on YAHOO | 144 |
| Jordan Love | QB | 155.4 | 161.9 | 121.8 | YAHOO | 3.1 | pricier on YAHOO | 271 |
| Jordan Mason | RB | 140.2 | 109.1 | 111 | ESPN | 2.5 | CHEAPER on ESPN | 153 |
| Josh Jacobs | RB | 100.4 | 46.9 | 59.1 | ESPN | 3.9 | CHEAPER on ESPN | 126 |
| Kyler Murray | QB | 136.7 | 151.2 | 113.2 | YAHOO | 2.6 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 134.9 | 91.3 | 118.8 | SLEEPER | 3 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 102.1 | 138 | 87.1 | SLEEPER | 3.6 | CHEAPER on SLEEPER | 142 |
| Mike Washington | RB | 162.7 | 140.8 | 123.8 | ESPN | 2.5 | CHEAPER on ESPN | 82 |
| RJ Harvey | RB | 128.1 | 80.2 | 110.2 | SLEEPER | 3.2 | pricier on SLEEPER | 147 |
| T.J. Hockenson | TE | 154.2 | 164.1 | 127.8 | YAHOO | 2.6 | pricier on YAHOO | 157 |
| Tyler Shough | QB | 152.6 | 183.1 | 130 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-07. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MarShawn Lloyd | RB | 152.9 | 106.3 | 168.5 | 152.3 | 125.5 | 90.4 |
| Woody Marks | RB | 150.1 | 152.1 | 159.9 | 147 | 130.8 | 130.6 |
| George Kittle | TE | 82.8 | 71 | 86.5 | 83.2 | 84.9 | 82 |
| Tony Pollard | RB | 97 | 86.5 | 84.4 | 84.2 | 85.6 | 86 |
| Stefon Diggs | WR | 113.1 | 102.7 | 109.3 | 107.8 | 105.2 | 105.5 |
| Justin Herbert | QB | 95.5 | 85.5 | 82.3 | 82.8 | 70.2 | 70.2 |
| Mike Washington | RB | 163.5 | 163.1 | 162.5 | 153.6 | 122.6 | 123.6 |
| Kenny Gainwell | RB | 108.5 | 99.8 | 112.2 | 111.3 | 118.9 | 120.4 |
| Kyler Murray | QB | 141.9 | 137 | 159.7 | 151.1 | 112.3 | 113 |
| Chris Godwin | WR | 131.3 | 123.1 | 94.8 | 93.2 | 96.9 | 94.9 |
| Juwan Johnson | TE | 160.5 | 157.4 | 186.1 | 178.6 | 125.6 | 122.5 |
| Jaylen Warren | RB | 92.6 | 85.8 | 71.9 | 71.9 | 76.7 | 75.8 |
| De'Zhaun Stribling | WR | 144.4 | 138 | 138.2 | 138.2 | 109.8 | 108.5 |
| Aaron Jones | RB | 121.8 | 115.4 | 124.9 | 127.7 | 123.7 | 124.5 |
| Jonathon Brooks | RB | 109.6 | 104.3 | 105.5 | 99.2 | 94.2 | 90.7 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 43 | 90.7 | 33 | 41.9 | 35.2 | 55.1 |
| Kenyon Sadiq | TE | 156.3 | 165.6 | 163.1 | 173.3 | 130 | 130.1 |
| T.J. Hockenson | TE | 142.7 | 153.5 | 164.3 | 164.8 | 128.9 | 128 |
| Bo Nix | QB | 94.9 | 103.9 | 118.7 | 117.2 | 99.3 | 98.6 |
| Tank Dell | WR | 159.5 | 165 | 181.3 | 190.2 | — | — |
| Jakobi Meyers | WR | 119 | 121.8 | 120.2 | 127.5 | 129.7 | 130.6 |
| Deebo Samuel | WR | 137 | 144.2 | 130 | 130.5 | 127.3 | 127.3 |
| Trevor Lawrence | QB | 95.6 | 102.6 | 100.8 | 101.2 | 84.2 | 83.1 |
| Jayden Reed | WR | 133 | 139.5 | 110.7 | 108.9 | 118.1 | 115.4 |
| Jordan Love | QB | 156.6 | 155.3 | 150 | 156.4 | 123.7 | 122.3 |
| Matthew Golden | WR | 107.6 | 114 | 127.3 | 125.2 | 127 | 125.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2151 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_6 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_44 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 104.2 | 9.6 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 109.2 | 10 | QB14 | QB8 | B | 292 | 303 |
| Jayden Daniels | QB | 56.4 | 5.6 | QB6 | QB5 | B | 317 | 309 |
| Trevor Lawrence | QB | 102.1 | 9.4 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Quinshon Judkins | RB | 53.3 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 76.8 | 7.3 | RB28 | RB24 | B | 203 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Emeka Egbuka | WR | 45.1 | 4.7 | WR21 | WR18 | B | 229 | 224 |
| Garrett Wilson | WR | 44.9 | 4.7 | WR20 | WR14 | A | 250 | 225 |
| Jayden Reed | WR | 114.4 | 10.5 | WR44 | WR36 | B | 174 | 198 |
| Rome Odunze | WR | 66.9 | 6.5 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 81.3 | 7.7 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 70.7 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 114.4 | 10.5 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 136.7 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 94.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 94.1 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 55.5 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 104.2 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.6 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 56.4 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 109.2 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 28.9 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.5 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.8 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.1 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 53.1 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.6 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.8 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.1 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.4 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.5 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.4 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.8 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21.4 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.9 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 49.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 154.2 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.3 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.8 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 152.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 156.3 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 81.3 | C · 16th easiest | F · 1st hardest | much harder |

