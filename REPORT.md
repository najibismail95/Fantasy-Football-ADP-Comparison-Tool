# Fantasy ADP report — 2026-09-04

_Snapshot 2026-09-04 · 39 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.32 | 171.8 | 99.7 |
| SLEEPER | 2164 | 1 | 700.9 | 83 |
| YAHOO | 227 | 1.3 | 144.1 | 91.2 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 2164 |
| YAHOO | exact | 207 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 113.6 | 74 | 84 | ESPN | 2.9 | CHEAPER on ESPN | 186 |
| Dalton Kincaid | TE | 130.8 | 87.4 | 97.6 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| Jordan Love | QB | 155.2 | 153.5 | 122.7 | YAHOO | 2.6 | pricier on YAHOO | 271 |
| Josh Jacobs | RB | 77.4 | 38.1 | 49.5 | ESPN | 2.8 | CHEAPER on ESPN | 126 |
| Kyler Murray | QB | 137.2 | 151.8 | 112.6 | YAHOO | 2.7 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 132.5 | 89.3 | 117.1 | SLEEPER | 3 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 115.5 | 159.3 | 96.9 | SLEEPER | 4.4 | CHEAPER on SLEEPER | 142 |
| RJ Harvey | RB | 125.6 | 79.7 | 108.9 | SLEEPER | 3.1 | pricier on SLEEPER | 147 |
| T.J. Hockenson | TE | 152.7 | 165.3 | 128.4 | YAHOO | 2.6 | pricier on YAHOO | 157 |
| Travis Hunter | WR | 118.7 | 169.7 | 125.4 | SLEEPER | 4 | CHEAPER on SLEEPER | 102 |
| Tyler Shough | QB | 152.4 | 188.1 | 130 | SLEEPER | 3.9 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-04. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 92.2 | 73.9 | 90.2 | 83.5 | 86 | 83.3 |
| Jonathon Brooks | RB | 114.7 | 104.6 | 107 | 100.2 | 96 | 91.8 |
| Kyler Murray | QB | 145.9 | 137.5 | 159.2 | 151.5 | 111.9 | 112.6 |
| Stefon Diggs | WR | 125.4 | 102 | 111 | 108 | 106.6 | 104.4 |
| Chris Godwin | WR | 141.3 | 122 | 95.6 | 93.7 | 97.5 | 95.8 |
| Justin Herbert | QB | 105.3 | 86.1 | 82.6 | 82.4 | 70 | 70.3 |
| Aaron Jones | RB | 131 | 114 | 124.4 | 126.9 | 123.3 | 124.1 |
| Tony Pollard | RB | 105 | 88.1 | 84.3 | 84.1 | 85.5 | 85.9 |
| Kenny Gainwell | RB | 116 | 100.6 | 111.7 | 112.7 | 118.4 | 119.8 |
| Chuba Hubbard | RB | 121 | 108.1 | 77.5 | 78.4 | 85.6 | 90.1 |
| Tyjae Spears | RB | 159 | 146.4 | 166 | 164.5 | 133.2 | 132.7 |
| Dak Prescott | QB | 84.4 | 72 | 78.1 | 77.5 | 74 | 73.3 |
| Sam Darnold | QB | 162.2 | 162.4 | 175.3 | 163.3 | 122.8 | 122.5 |
| Mike Washington | RB | 164.2 | 163.9 | 171.6 | 160 | 122.5 | 123.3 |
| Woody Marks | RB | 148.5 | 151.9 | 160.1 | 148.7 | 131.1 | 130.7 |
| RJ Harvey | RB | 137.1 | 125.7 | 79.6 | 79.4 | 104.6 | 108.3 |
| D'Andre Swift | RB | 63.3 | 52 | 55.3 | 51.4 | 47.2 | 45.8 |
| Bhayshul Tuten | RB | 71.6 | 61.4 | 62.4 | 61.4 | 62.5 | 61.4 |
| De'Zhaun Stribling | WR | 149.2 | 139 | 143.4 | 137.5 | 112.2 | 109.2 |
| Jaylen Warren | RB | 97 | 87.1 | 71.9 | 71.4 | 76.7 | 76.3 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 37.1 | 71.7 | 31.4 | 37.9 | 33.7 | 46.2 |
| Kenyon Sadiq | TE | 148.1 | 164.5 | 152.2 | 173.3 | 130 | 130 |
| Tank Dell | WR | 155.5 | 164.4 | 175.4 | 189 | — | — |
| Jakobi Meyers | WR | 113.6 | 122.7 | 113 | 124.8 | 129.3 | 130.2 |
| T.J. Hockenson | TE | 133.7 | 152 | 164.2 | 165.5 | 129.2 | 128.4 |
| Bo Nix | QB | 87.3 | 103 | 120 | 117.3 | 99.6 | 98.9 |
| Khalil Shakir | WR | 125 | 140.5 | 142.1 | 144.3 | 131.4 | 130.9 |
| Jayden Reed | WR | 125.5 | 139.4 | 113.1 | 109.5 | 118.8 | 116.9 |
| Deebo Samuel | WR | 130.9 | 143.2 | 137.5 | 130.4 | 127.5 | 127.3 |
| Matthew Stafford | QB | 80.9 | 93 | 95.8 | 95.5 | 100.5 | 99.7 |
| Brian Thomas | WR | 103.4 | 113.8 | 73.4 | 74.6 | 83.9 | 84.1 |
| Matthew Golden | WR | 102.4 | 112.5 | 127.7 | 126 | 127.8 | 126 |
| Hunter Henry | TE | 143.4 | 153 | 139.2 | 141.6 | 127.7 | 127.6 |
| Xavier Worthy | WR | 122.6 | 130.7 | 140 | 138.1 | 128.9 | 129.1 |
| Trevor Lawrence | QB | 92.7 | 100.7 | 100.5 | 99.6 | 84.6 | 83.9 |
| Brock Purdy | QB | 102.9 | 110.4 | 121.6 | 122.6 | 98.4 | 98.4 |
| Alec Pierce | WR | 101.7 | 108.7 | 101.3 | 97.5 | 93.2 | 95.7 |
| Jaxson Dart | QB | 76.5 | 83.4 | 91.3 | 94.3 | 88.8 | 91.8 |
| Rashee Rice | WR | 22.4 | 29.3 | 27.6 | 29.1 | 34.7 | 35.5 |
| Isiah Pacheco | RB | 163.5 | 159.8 | 184.6 | 190.9 | 126.3 | 125.5 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2001 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_47 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 103.5 | 9.5 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 110.3 | 10.1 | QB15 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.8 | 5.6 | QB6 | QB4 | B | 320 | 311 |
| Trevor Lawrence | QB | 100.7 | 9.3 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 54.2 | 5.4 | RB23 | RB22 | B | 207 | 197 |
| Quinshon Judkins | RB | 53.9 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 78.1 | 7.4 | RB28 | RB24 | B | 203 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 46 | 4.8 | WR21 | WR14 | B | 250 | 225 |
| Jayden Reed | WR | 116.6 | 10.6 | WR45 | WR36 | B | 174 | 198 |
| Rome Odunze | WR | 65.1 | 6.3 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 82.9 | 7.8 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 70.8 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 111 | 10.2 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 137.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.4 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 100.7 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 92.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.3 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 103.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.5 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 55.2 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 110.3 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 27.6 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.3 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.1 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.2 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.1 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.2 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.3 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 20 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.9 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.4 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.5 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.9 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 32.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 46 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.5 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 49.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 152.7 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.7 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.7 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 154.3 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.2 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 82.9 | C · 16th easiest | F · 1st hardest | much harder |

