# Fantasy ADP report — 2026-09-10

_Snapshot 2026-09-10 · 45 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.34 | 171.5 | 98.7 |
| SLEEPER | 2451 | 1.6 | 700.9 | 84.3 |
| YAHOO | 224 | 1.3 | 144.1 | 91.1 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2451 |
| YAHOO | exact | 204 |
| YAHOO | team | 20 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas | WR | 114.3 | 74.1 | 83.7 | ESPN | 2.9 | CHEAPER on ESPN | 186 |
| Chris Godwin | WR | 126.6 | 93.4 | 93.5 | ESPN | 2.8 | CHEAPER on ESPN | 165 |
| Dalton Kincaid | TE | 133 | 87.2 | 95.6 | ESPN | 3.5 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 138.6 | 138.4 | 107.8 | YAHOO | 2.6 | pricier on YAHOO | 144 |
| Jayden Reed | WR | 140.7 | 108.1 | 112.9 | ESPN | 2.5 | CHEAPER on ESPN | 186 |
| Jordan Love | QB | 155.7 | 160 | 121.2 | YAHOO | 3.1 | pricier on YAHOO | 271 |
| Jordan Mason | RB | 142.2 | 109.5 | 110.3 | ESPN | 2.7 | CHEAPER on ESPN | 153 |
| Josh Downs | WR | 138.6 | 113.8 | 103.1 | ESPN | 2.5 | CHEAPER on ESPN | 165 |
| Josh Jacobs | RB | 101.9 | 47.3 | 68.5 | ESPN | 3.7 | CHEAPER on ESPN | 126 |
| Kyler Murray | QB | 137.8 | 151.5 | 113.8 | YAHOO | 2.6 | pricier on YAHOO | 283 |
| Makai Lemon | WR | 136.9 | 92.7 | 120.2 | SLEEPER | 3 | pricier on SLEEPER | 162 |
| MarShawn Lloyd | RB | 106.4 | 137.1 | 83.8 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 142 |
| Mike Washington | RB | 163.3 | 139.4 | 124.3 | ESPN | 2.6 | CHEAPER on ESPN | 82 |
| RJ Harvey | RB | 130.1 | 81.4 | 111.5 | SLEEPER | 3.3 | pricier on SLEEPER | 147 |
| Tyler Shough | QB | 152.8 | 182.1 | 130 | SLEEPER | 3.4 | CHEAPER on SLEEPER | 268 |


## Who’s rising


_Last 7 days, as of 2026-09-10. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MarShawn Lloyd | RB | 126.6 | 105 | 159.4 | 137.3 | 105 | 84.3 |
| Mike Washington | RB | 164.2 | 162.9 | 160 | 139.6 | 123.1 | 124.2 |
| George Kittle | TE | 75 | 69 | 83.4 | 82.5 | 83.6 | 80.2 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 65.7 | 101.3 | 37.4 | 47.6 | 43 | 66 |
| Jordan Love | QB | 155.4 | 155.5 | 152.2 | 160.6 | 123.1 | 121.3 |
| Isiah Pacheco | RB | 158.9 | 166.4 | 190.8 | 191.7 | 125.6 | 124.7 |
| Rachaad White | RB | 125.5 | 129.6 | 133.3 | 140.1 | 123.8 | 125.6 |
| Jakobi Meyers | WR | 122.8 | 121.5 | 123.9 | 130.2 | 130.1 | 131.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB25 182pts, WR37 184pts, TE13 160pts, K13 124pts, DEF13 89pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2290 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_6 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_45 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 104.9 | 9.7 | QB13 | QB10 | B | 296 | 296 |
| Brock Purdy | QB | 109.1 | 10 | QB14 | QB8 | A | 292 | 303 |
| Jaxson Dart | QB | 95.6 | 8.9 | QB11 | QB7 | B | 300 | 297 |
| Jayden Daniels | QB | 57.4 | 5.7 | QB6 | QB5 | A | 317 | 309 |
| Trevor Lawrence | QB | 102.6 | 9.5 | QB12 | QB9 | B | 290 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Quinshon Judkins | RB | 53.2 | 5.4 | RB22 | RB19 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 77.5 | 7.4 | RB28 | RB24 | B | 207 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Emeka Egbuka | WR | 45.8 | 4.7 | WR21 | WR18 | B | 229 | 224 |
| Garrett Wilson | WR | 45.3 | 4.7 | WR20 | WR14 | B | 250 | 225 |
| Jayden Reed | WR | 112.9 | 10.3 | WR43 | WR36 | B | 173 | 198 |
| Rome Odunze | WR | 67.4 | 6.5 | WR27 | WR24 | B | 213 | 208 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 79.9 | 7.6 | TE9 | TE7 | B | 193 | 169 |
| Harold Fannin | TE | 70.9 | 6.8 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 116.1 | 10.6 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 137.8 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 94.4 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.6 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.6 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 152.8 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 54.6 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 104.9 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.7 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 57.4 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 109.1 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 28.1 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.3 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 61.9 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.6 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52.3 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12.1 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.4 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.1 | C · 16th easiest | F · 2nd hardest | much harder |


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
| Jaxon Smith-Njigba | SEA | 11 | 6.4 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 21.6 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.1 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 49.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 154.7 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.2 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 156.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.9 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.9 | C · 16th easiest | F · 1st hardest | much harder |

