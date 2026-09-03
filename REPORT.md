# Fantasy ADP report — 2026-09-03

_Snapshot 2026-09-03 · 38 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.33 | 171.8 | 99 |
| SLEEPER | 2123 | 1.2 | 700.9 | 82.3 |
| YAHOO | 225 | 1.3 | 144.1 | 92 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 2123 |
| YAHOO | exact | 205 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 113.9 | 74.9 | 84.1 | ESPN | 2.9 | CHEAPER on ESPN | 186 |
| Dalton Kincaid | TE | 130.9 | 87.6 | 97.8 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| Jordan Love | QB | 155.3 | 153 | 123 | YAHOO | 2.6 | pricier on YAHOO | 271 |
| Kyler Murray | QB | 137.3 | 151.3 | 112.6 | YAHOO | 2.6 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 132.1 | 90 | 116.6 | SLEEPER | 2.9 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 120.3 | 159.4 | 100.2 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 142 |
| RJ Harvey | RB | 125.5 | 79.3 | 108.3 | SLEEPER | 3.1 | pricier on SLEEPER | 147 |
| T.J. Hockenson | TE | 152.4 | 165.4 | 128.4 | YAHOO | 2.5 | pricier on YAHOO | 157 |
| Travis Hunter | WR | 118.7 | 169 | 125.5 | SLEEPER | 3.9 | CHEAPER on SLEEPER | 102 |
| Tyler Shough | QB | 152.4 | 188.6 | 130.1 | SLEEPER | 3.9 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-03. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 94.1 | 75 | 90.5 | 83.4 | 86.3 | 83.6 |
| De'Zhaun Stribling | WR | 150.3 | 139.9 | 149.7 | 137.4 | 113.4 | 109.2 |
| Jonathon Brooks | RB | 115.9 | 105.2 | 108.1 | 101.5 | 96.6 | 92.3 |
| Kyler Murray | QB | 146.4 | 138 | 159.4 | 151.7 | 111.8 | 112.5 |
| Stefon Diggs | WR | 126.9 | 102.9 | 111.9 | 108.2 | 107.1 | 104.5 |
| Chris Godwin | WR | 142.8 | 122.8 | 95.5 | 93.6 | 97.6 | 96.1 |
| Justin Herbert | QB | 106.5 | 87 | 82.7 | 82.3 | 69.9 | 70.3 |
| Aaron Jones | RB | 132.4 | 114.5 | 124.6 | 126.5 | 123.2 | 124 |
| Tony Pollard | RB | 106.3 | 89.3 | 84.2 | 84.1 | 85.5 | 85.8 |
| Kenny Gainwell | RB | 117.2 | 101.6 | 111.6 | 113.2 | 118.2 | 119.6 |
| Tyjae Spears | RB | 160.2 | 146.4 | 166.7 | 164.7 | 133.3 | 132.8 |
| Chuba Hubbard | RB | 121.9 | 108.3 | 77.3 | 78.7 | 85 | 89.8 |
| Dak Prescott | QB | 85.1 | 72.5 | 78.2 | 77.2 | 74.1 | 73.5 |
| Sam Darnold | QB | 162.2 | 162.4 | 175.6 | 163.3 | 122.8 | 122.5 |
| RJ Harvey | RB | 138.2 | 126.1 | 79.7 | 79.4 | 104.3 | 107.8 |
| Mike Washington | RB | 164.7 | 164.2 | 172 | 160 | 122.2 | 123.1 |
| D'Andre Swift | RB | 64.2 | 52.7 | 55.3 | 51.3 | 47.3 | 46 |
| Woody Marks | RB | 148.8 | 151.9 | 160.7 | 149.4 | 131.2 | 130.7 |
| Bhayshul Tuten | RB | 72.5 | 62 | 62.4 | 61.2 | 62.5 | 61.6 |
| Rachaad White | RB | 136.1 | 125.5 | 131.4 | 133.3 | 122.5 | 123.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 36.9 | 65.7 | 31.3 | 37.4 | 33.5 | 43 |
| Kenyon Sadiq | TE | 147 | 163.5 | 151.4 | 173.3 | 130 | 130 |
| Tank Dell | WR | 155.7 | 164 | 174.7 | 188.4 | — | — |
| Jakobi Meyers | WR | 113.1 | 122.8 | 111.4 | 123.9 | 129.2 | 130.1 |
| T.J. Hockenson | TE | 132.8 | 150.9 | 164.4 | 165.2 | 129.3 | 128.5 |
| Khalil Shakir | WR | 124.2 | 140.4 | 140.8 | 144.7 | 131.4 | 130.9 |
| Bo Nix | QB | 86.7 | 102.1 | 120.4 | 117.4 | 99.7 | 99 |
| Jayden Reed | WR | 125.3 | 139.2 | 114 | 109.6 | 119 | 117.2 |
| Matthew Stafford | QB | 80.2 | 92.5 | 95.9 | 95.7 | 100.5 | 99.8 |
| Deebo Samuel | WR | 130.6 | 142.6 | 137.8 | 130.6 | 127.5 | 127.3 |
| Brian Thomas | WR | 102.9 | 113.9 | 73.1 | 74.8 | 83.9 | 84.2 |
| Matthew Golden | WR | 102.3 | 112.2 | 128 | 126.7 | 128 | 126.2 |
| Hunter Henry | TE | 142.8 | 152.6 | 137.7 | 141.9 | 127.7 | 127.6 |
| Xavier Worthy | WR | 122.8 | 130.3 | 139.6 | 138.3 | 128.9 | 129.1 |
| Brock Purdy | QB | 102.7 | 110.2 | 121.3 | 122.4 | 98.3 | 98.4 |
| Alec Pierce | WR | 101.5 | 108.8 | 101.3 | 97.5 | 92.6 | 95.6 |
| Trevor Lawrence | QB | 92.6 | 99.9 | 100.6 | 99.5 | 84.7 | 83.9 |
| Jaxson Dart | QB | 76.2 | 83.2 | 91 | 94.5 | 88.5 | 91.4 |
| Rashee Rice | WR | 22.1 | 29 | 27.2 | 29.4 | 34.6 | 35.4 |
| Isiah Pacheco | RB | 163.9 | 158.9 | 184.8 | 190.8 | 126.3 | 125.6 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 184pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1962 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_45 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 103.3 | 9.5 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 110.6 | 10.1 | QB15 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.8 | 5.6 | QB6 | QB4 | B | 320 | 311 |
| Trevor Lawrence | QB | 98.6 | 9.1 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 54.4 | 5.5 | RB23 | RB22 | B | 207 | 197 |
| Quinshon Judkins | RB | 53.7 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 78.7 | 7.5 | RB28 | RB24 | B | 203 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 46.7 | 4.8 | WR21 | WR14 | B | 250 | 225 |
| Jayden Reed | WR | 116.9 | 10.7 | WR46 | WR36 | B | 174 | 198 |
| Parker Washington | WR | 77.8 | 7.4 | WR31 | WR28 | B | 187 | 212 |
| Rome Odunze | WR | 65.7 | 6.4 | WR27 | WR24 | B | 214 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 83.3 | 7.9 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 70.6 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 110.4 | 10.1 | TE14 | TE12 | B | 167 | 160 |
| Sam LaPorta | TE | 63.2 | 6.2 | TE6 | TE5 | B | 189 | 197 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 137.3 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.4 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 98.6 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 91.8 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.4 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 56.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 103.3 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.4 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 55 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 110.6 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.3 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.3 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.2 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.2 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.1 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 54.4 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.3 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 20.1 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.9 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.6 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.7 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.9 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.5 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 20.9 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 32.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 46.7 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.7 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 49.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 152.3 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 68.8 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 155.3 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.1 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.2 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 83.3 | C · 16th easiest | F · 1st hardest | much harder |

