# Fantasy ADP report — 2026-09-05

_Snapshot 2026-09-05 · 40 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.32 | 171.8 | 99 |
| SLEEPER | 2181 | 1.9 | 700.9 | 84.7 |
| YAHOO | 226 | 1.3 | 144.1 | 90.7 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1165 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 2181 |
| YAHOO | exact | 206 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 113.6 | 74.2 | 84 | ESPN | 2.9 | CHEAPER on ESPN | 186 |
| Dalton Kincaid | TE | 131 | 88.6 | 97.5 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| Jordan Love | QB | 155.3 | 153.4 | 122.6 | YAHOO | 2.6 | pricier on YAHOO | 271 |
| Josh Jacobs | RB | 81.8 | 39.3 | 51.8 | ESPN | 3 | CHEAPER on ESPN | 126 |
| Kyler Murray | QB | 137.2 | 151.5 | 112.8 | YAHOO | 2.6 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 133 | 90.3 | 117.5 | SLEEPER | 2.9 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 111.9 | 159.6 | 93.5 | SLEEPER | 4.7 | CHEAPER on SLEEPER | 142 |
| RJ Harvey | RB | 126 | 79.3 | 109.2 | SLEEPER | 3.2 | pricier on SLEEPER | 147 |
| T.J. Hockenson | TE | 152.9 | 165.1 | 128.2 | YAHOO | 2.6 | pricier on YAHOO | 157 |
| Tyler Shough | QB | 152.4 | 187.4 | 130.1 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-05. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jonathon Brooks | RB | 113.3 | 104.3 | 106.4 | 99.6 | 95.5 | 91.4 |
| Kyler Murray | QB | 145 | 137.2 | 159.1 | 151.5 | 112 | 112.7 |
| Stefon Diggs | WR | 123 | 101.7 | 110.7 | 108 | 106.2 | 104.5 |
| Justin Herbert | QB | 103.4 | 85.6 | 82.5 | 82.5 | 70.1 | 70.3 |
| Chris Godwin | WR | 139.1 | 121.9 | 95.5 | 93.7 | 97.3 | 95.6 |
| George Kittle | TE | 89.9 | 73 | 89.6 | 83.7 | 85.8 | 82.9 |
| Tony Pollard | RB | 103.2 | 87.4 | 83.9 | 84 | 85.5 | 85.9 |
| Aaron Jones | RB | 129 | 114 | 124.2 | 127.5 | 123.4 | 124.2 |
| Kenny Gainwell | RB | 114.3 | 100.1 | 111.8 | 112.1 | 118.5 | 120 |
| Woody Marks | RB | 148.6 | 151.9 | 160.5 | 147.9 | 131 | 130.7 |
| Mike Washington | RB | 163.8 | 163.6 | 171.7 | 160.4 | 122.5 | 123.4 |
| Dak Prescott | QB | 83.1 | 71.8 | 78.4 | 77.4 | 74 | 73.2 |
| Chuba Hubbard | RB | 119.4 | 108.2 | 77.1 | 78.5 | 86.2 | 90.4 |
| Tyjae Spears | RB | 157.2 | 146.7 | 165.7 | 164.4 | 133.2 | 132.5 |
| D'Andre Swift | RB | 62.1 | 51.7 | 54.8 | 51.2 | 47.1 | 45.7 |
| RJ Harvey | RB | 135.6 | 125.7 | 79.5 | 79.4 | 104.9 | 108.8 |
| De'Zhaun Stribling | WR | 147.9 | 138.5 | 137.5 | 137.6 | 111.2 | 109 |
| Bhayshul Tuten | RB | 70.5 | 61.2 | 62.2 | 61.4 | 62.6 | 61.2 |
| Jaylen Warren | RB | 95.8 | 86.6 | 71.9 | 71.6 | 76.7 | 76.1 |
| Mike Evans | WR | 92.3 | 83.8 | 61.4 | 62.2 | 67.6 | 69.5 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 37.4 | 77.1 | 31.6 | 38.6 | 34 | 49.1 |
| Kenyon Sadiq | TE | 149.8 | 165.1 | 153.2 | 173.3 | 130 | 130 |
| Tank Dell | WR | 156 | 164.6 | 176.4 | 189.3 | — | — |
| Jakobi Meyers | WR | 114.6 | 122.6 | 115.6 | 125.3 | 129.4 | 130.3 |
| T.J. Hockenson | TE | 135.4 | 152.7 | 164.4 | 165.3 | 129.1 | 128.3 |
| Bo Nix | QB | 88.6 | 103.5 | 120 | 117.2 | 99.6 | 98.8 |
| Khalil Shakir | WR | 126.6 | 140.4 | 142.9 | 144.7 | 131.3 | 130.9 |
| Jayden Reed | WR | 126.6 | 139.6 | 112.2 | 109.6 | 118.6 | 116.5 |
| Deebo Samuel | WR | 131.9 | 143.6 | 135.4 | 130.3 | 127.4 | 127.3 |
| Matthew Stafford | QB | 82.2 | 93.3 | 96.3 | 95.2 | 100.5 | 99.7 |
| Matthew Golden | WR | 103.1 | 113 | 127.5 | 125.3 | 127.6 | 125.8 |
| Brian Thomas | WR | 104.3 | 113.7 | 73.5 | 74.4 | 84 | 84 |
| Hunter Henry | TE | 144.4 | 153.1 | 140.4 | 141.3 | 127.7 | 127.5 |
| Trevor Lawrence | QB | 93.1 | 101.2 | 100.2 | 100 | 84.5 | 83.8 |
| Xavier Worthy | WR | 123.5 | 130.9 | 140.9 | 138 | 129 | 129.1 |
| Brock Purdy | QB | 103.5 | 110.4 | 121.9 | 122.5 | 98.4 | 98.4 |
| Isiah Pacheco | RB | 162.7 | 160.7 | 185 | 191.5 | 126.3 | 125.5 |
| Jordan Addison | WR | 115 | 121.4 | 104.6 | 102.4 | 116.7 | 115.5 |
| Rashee Rice | WR | 23.1 | 29.4 | 27.8 | 29.3 | 34.8 | 35.6 |
| Jaxson Dart | QB | 77.2 | 83.3 | 91.1 | 94.6 | 89.1 | 92.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2019 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_47 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 103.6 | 9.5 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 110.2 | 10.1 | QB15 | QB8 | A | 292 | 303 |
| Jalen Hurts | QB | 56.5 | 5.6 | QB6 | QB4 | A | 320 | 311 |
| Trevor Lawrence | QB | 100.8 | 9.3 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 53.9 | 5.4 | RB23 | RB22 | B | 207 | 197 |
| Quinshon Judkins | RB | 53.7 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 78 | 7.4 | RB28 | RB24 | B | 203 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 46.5 | 4.8 | WR21 | WR14 | A | 250 | 225 |
| Jayden Reed | WR | 116.1 | 10.6 | WR45 | WR36 | A | 174 | 198 |
| Rome Odunze | WR | 65.4 | 6.4 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 82.5 | 7.8 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 70.5 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 111.5 | 10.2 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 137.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 94.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 100.8 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 92.7 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.4 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.5 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 103.6 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.5 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 55.5 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 110.2 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 27.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.2 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.9 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.1 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.1 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 53.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.7 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 20.4 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.9 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.3 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.1 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.9 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 32.4 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 46.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.5 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.6 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 152.9 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.7 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 153.9 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 82.5 | C · 16th easiest | F · 1st hardest | much harder |

