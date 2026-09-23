# Fantasy ADP report — 2026-09-23

_Snapshot 2026-09-23 · 58 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.81 | 170.6 | 99.3 |
| SLEEPER | 2480 | 1 | 700.9 | 86.7 |
| YAHOO | 213 | 1.2 | 143.9 | 88.3 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2480 |
| YAHOO | exact | 192 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 144.1 | 100 | 100 | ESPN | 3.7 | CHEAPER on ESPN | 137 |
| Brian Thomas | WR | 135.5 | 74.9 | 84.2 | ESPN | 4.7 | CHEAPER on ESPN | 179 |
| Chris Godwin | WR | 140.6 | 92.3 | 93.5 | ESPN | 4 | CHEAPER on ESPN | 156 |
| J.K. Dobbins | RB | 136.5 | 91.2 | 94.2 | ESPN | 3.6 | CHEAPER on ESPN | 165 |
| Jacory Croskey-Merritt | RB | 145.9 | 115.2 | 104.6 | ESPN | 3 | CHEAPER on ESPN | 134 |
| Jadarian Price | RB | 97.1 | 60.3 | 62.5 | ESPN | 3 | CHEAPER on ESPN | 168 |
| Jayden Reed | WR | 151.9 | 107.8 | 113 | ESPN | 3.5 | CHEAPER on ESPN | 154 |
| Jaylen Warren | RB | 113 | 70.4 | 75.4 | ESPN | 3.3 | CHEAPER on ESPN | 183 |
| Jordan Love | QB | 157.4 | 158 | 120.6 | YAHOO | 3.1 | pricier on YAHOO | 260 |
| Jordan Mason | RB | 161.5 | 109.4 | 110.5 | ESPN | 4.3 | CHEAPER on ESPN | 138 |
| Josh Downs | WR | 142.9 | 113.9 | 103.4 | ESPN | 2.9 | CHEAPER on ESPN | 163 |
| Justin Herbert | QB | 113.2 | 83.5 | 70.3 | ESPN | 3 | CHEAPER on ESPN | 266 |
| KC Concepcion | WR | 160.6 | 120.5 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 157 |
| Luther Burden | WR | 99.6 | 56.6 | 56.9 | ESPN | 3.6 | CHEAPER on ESPN | 192 |
| MarShawn Lloyd | RB | 131.8 | 137.1 | 84.6 | YAHOO | 4.2 | pricier on YAHOO | 115 |
| Quentin Johnston | WR | 150.8 | 112.1 | 105.2 | ESPN | 3.5 | CHEAPER on ESPN | 159 |
| Rico Dowdle | RB | 130 | 86.5 | 87.8 | ESPN | 3.6 | CHEAPER on ESPN | 156 |
| TreVeyon Henderson | RB | 101.6 | 61.8 | 70.6 | ESPN | 3 | CHEAPER on ESPN | 167 |
| Tucker Kraft | TE | 109.5 | 64.7 | 59.3 | ESPN | 4 | CHEAPER on ESPN | 163 |
| Tyler Shough | QB | 142.5 | 179.6 | 128.5 | SLEEPER | 3.7 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-23. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 126.3 | 100.4 | 106.7 | 105 | 108.9 | 108.1 |
| Dalton Kincaid | TE | 136.1 | 113.3 | 88 | 88.1 | 95.4 | 94.8 |
| Jalen Coker | WR | 153.2 | 131.9 | 148.3 | 146.4 | 132.7 | 129.5 |
| Patrick Mahomes | QB | 110.4 | 90.4 | 110.5 | 110.7 | 106 | 105.4 |
| Caleb Williams | QB | 87.6 | 77.4 | 71.7 | 71.4 | 65.1 | 64.4 |
| Brock Purdy | QB | 109.4 | 100.7 | 122.3 | 122.8 | 97.6 | 96.9 |
| Tyler Shough | QB | 153.2 | 144.6 | 181.8 | 179.4 | 129.7 | 128.8 |
| Deebo Samuel | WR | 145.8 | 137.4 | 130.6 | 130.5 | 126.2 | 124.2 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rico Dowdle | RB | 108.2 | 128.8 | 86.7 | 86.6 | 87.6 | 87.8 |
| Courtland Sutton | WR | 92.3 | 112.6 | 79.7 | 80.2 | 109.2 | 109.3 |
| Kyle Pitts | TE | 73.5 | 93.3 | 67.6 | 67.3 | 71.6 | 72.3 |
| Justin Herbert | QB | 92.8 | 112.4 | 83.4 | 83.6 | 69.9 | 70.2 |
| Jadarian Price | RB | 76.1 | 95.6 | 61.6 | 60.4 | 62.6 | 62.5 |
| Marvin Harrison | WR | 89.4 | 108.2 | 76.8 | 76.3 | 78.2 | 78.7 |
| Tony Pollard | RB | 95.6 | 114.1 | 83.8 | 85.6 | 86.4 | 86.9 |
| Jaylen Warren | RB | 95.3 | 112.8 | 70.4 | 70.1 | 75.3 | 75.3 |
| Harold Fannin | TE | 75.1 | 91.9 | 73.6 | 73.5 | 69.9 | 70.5 |
| Carnell Tate | WR | 88.8 | 105.6 | 69.5 | 69.7 | 83.2 | 83.5 |
| Michael Pittman | WR | 97 | 113.7 | 105.5 | 106.4 | 122 | 122.1 |
| Bo Nix | QB | 109.8 | 126.3 | 116.4 | 116.7 | 98.1 | 98.3 |
| Matthew Stafford | QB | 100.7 | 117.1 | 94.2 | 94.4 | 99 | 99.1 |
| MarShawn Lloyd | RB | 115 | 131.4 | 137.4 | 137.2 | 83.8 | 84.5 |
| Alec Pierce | WR | 114.8 | 130.7 | 95.8 | 96.3 | 98.1 | 98.2 |
| Luther Burden | WR | 82.6 | 98.3 | 56 | 55.7 | 56.5 | 56.8 |
| Kenny Gainwell | RB | 108.4 | 123.7 | 111.6 | 111.8 | 121.4 | 121.4 |
| Terry McLaurin | WR | 68.1 | 83.5 | 55.6 | 55.6 | 55.6 | 56 |
| J.K. Dobbins | RB | 120.6 | 135.7 | 91.8 | 91.1 | 94.1 | 94.2 |
| Rhamondre Stevenson | RB | 83.8 | 98.8 | 78.3 | 78.3 | 74.3 | 74.2 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 273pts, RB27 168pts, WR35 169pts, TE13 156pts, K13 116pts, DEF13 86pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2325 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_47 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.6 | 10.6 | QB15 | QB11 | B | 262 | 296 |
| Brock Purdy | QB | 98.3 | 9.1 | QB11 | QB5 | B | 283 | 303 |
| Jalen Hurts | QB | 58 | 5.8 | QB6 | QB4 | B | 288 | 311 |
| Patrick Mahomes | QB | 105.3 | 9.7 | QB14 | QB9 | B | 274 | 287 |
| Trevor Lawrence | QB | 102.9 | 9.5 | QB13 | QB8 | B | 266 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 52 | 5.3 | RB20 | RB15 | A | 246 | 197 |
| Chuba Hubbard | RB | 91 | 8.5 | RB31 | RB24 | A | 211 | 148 |
| D'Andre Swift | RB | 49.1 | 5 | RB19 | RB18 | B | 197 | 208 |
| Jaylen Warren | RB | 75.4 | 7.2 | RB26 | RB23 | B | 195 | 171 |
| Rhamondre Stevenson | RB | 78.2 | 7.4 | RB27 | RB25 | B | 184 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 67.1 | 6.5 | WR27 | WR22 | B | 205 | 208 |
| Davante Adams | WR | 57 | 5.7 | WR25 | WR23 | B | 219 | 193 |
| Garrett Wilson | WR | 44.5 | 4.6 | WR19 | WR14 | B | 217 | 225 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR24 | B | 179 | 222 |
| Parker Washington | WR | 73.8 | 7.1 | WR30 | WR15 | A | 229 | 212 |
| Zay Flowers | WR | 41.8 | 4.4 | WR16 | WR11 | B | 229 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 79.4 | 7.5 | TE9 | TE7 | B | 184 | 169 |
| Isaiah Likely | TE | 105.1 | 9.7 | TE12 | TE8 | A | 191 | 157 |
| Travis Kelce | TE | 94.8 | 8.8 | TE11 | TE6 | A | 185 | 171 |
| Tyler Warren | TE | 48.9 | 5 | TE4 | TE3 | B | 181 | 201 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 152.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 142.5 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.6 | C · 12th hardest | D · 6th hardest | much harder |
| Jayden Daniels | WAS | 7 | 57.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 98.3 | C · 13th easiest | F · 2nd hardest | much harder |
| Malik Willis | MIA | 6 | 165.6 | C · 12th easiest | F · 1st hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.3 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.5 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.6 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.2 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52 | C · 12th easiest | D · 6th hardest | harder |
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
| Puka Nacua | LAR | 11 | 5.1 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.1 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.8 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 158.5 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 26.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.4 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 163.1 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.4 | C · 16th easiest | F · 1st hardest | much harder |

