# Fantasy ADP report — 2026-09-28

_Snapshot 2026-09-28 · 63 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.84 | 170.5 | 100 |
| SLEEPER | 2483 | 1.9 | 700.9 | 85.3 |
| YAHOO | 215 | 1.2 | 143.9 | 88.8 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2483 |
| YAHOO | exact | 194 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 136.6 | 95.5 | 98.3 | ESPN | 3.3 | CHEAPER on ESPN | 145 |
| Blake Corum | RB | 142.6 | 100.7 | 99.9 | ESPN | 3.5 | CHEAPER on ESPN | 128 |
| Brian Thomas | WR | 136.3 | 74.6 | 84.4 | ESPN | 4.7 | CHEAPER on ESPN | 156 |
| Bryce Young | QB | 137.5 | 226.3 | 114.2 | SLEEPER | 8.4 | CHEAPER on SLEEPER | 236 |
| Caleb Williams | QB | 115.7 | 71 | 64.7 | ESPN | 4 | CHEAPER on ESPN | 253 |
| Chris Godwin | WR | 142.4 | 92.8 | 93.4 | ESPN | 4.1 | CHEAPER on ESPN | 133 |
| J.K. Dobbins | RB | 137.2 | 91.6 | 94.4 | ESPN | 3.7 | CHEAPER on ESPN | 158 |
| Jacory Croskey-Merritt | RB | 148.6 | 115.3 | 104.6 | ESPN | 3.2 | CHEAPER on ESPN | 123 |
| Jadarian Price | RB | 102.2 | 59.2 | 62.7 | ESPN | 3.4 | CHEAPER on ESPN | 158 |
| Jayden Reed | WR | 155.1 | 107.5 | 113 | ESPN | 3.7 | CHEAPER on ESPN | 147 |
| Jaylen Warren | RB | 112.6 | 70.1 | 75.4 | ESPN | 3.3 | CHEAPER on ESPN | 184 |
| Jordan Mason | RB | 163.2 | 109 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 141 |
| Justin Herbert | QB | 118 | 83.3 | 70.5 | ESPN | 3.4 | CHEAPER on ESPN | 248 |
| KC Concepcion | WR | 160.5 | 119.6 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 146 |
| Luther Burden | WR | 104.5 | 56.1 | 57 | ESPN | 4 | CHEAPER on ESPN | 186 |
| MarShawn Lloyd | RB | 133 | 137.6 | 85.1 | YAHOO | 4.2 | pricier on YAHOO | 89 |
| Quentin Johnston | WR | 152.1 | 112.8 | 105.2 | ESPN | 3.6 | CHEAPER on ESPN | 145 |
| Rico Dowdle | RB | 134.7 | 86.9 | 87.9 | ESPN | 3.9 | CHEAPER on ESPN | 142 |
| Tucker Kraft | TE | 114.4 | 64.6 | 59.4 | ESPN | 4.4 | CHEAPER on ESPN | 151 |
| Tyler Shough | QB | 124.5 | 178.5 | 127 | SLEEPER | 4.4 | CHEAPER on SLEEPER | 266 |


## Who’s rising


_Last 7 days, as of 2026-09-28. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 123.5 | 97.6 | 88.6 | 88.1 | 95 | 94.4 |
| Patrick Mahomes | QB | 97.7 | 74.2 | 110.4 | 110.2 | 105.6 | 104.9 |
| Travis Kelce | TE | 101.7 | 81.6 | 89.8 | 89.4 | 95.1 | 94.8 |
| Bryce Young | QB | 159.1 | 139.4 | — | — | 120 | 114.8 |
| Tyler Shough | QB | 149 | 129.4 | 180.6 | 179.2 | 129.2 | 127.4 |
| Brock Purdy | QB | 103.6 | 85.5 | 122.9 | 122.3 | 97.2 | 96.4 |
| Jalen Coker | WR | 137.9 | 121.4 | 147.3 | 146.5 | 130.4 | 127.9 |
| Parker Washington | WR | 104.4 | 88 | 71.9 | 71.8 | 74.1 | 73.6 |
| Chuba Hubbard | RB | 115.7 | 102.3 | 81.1 | 80.7 | 91.1 | 90.8 |
| Jared Goff | QB | 143.3 | 131.1 | 131.4 | 131.6 | 111 | 110.5 |
| Davante Adams | WR | 59.8 | 47.8 | 51.1 | 50.5 | 59.5 | 59.4 |
| George Kittle | TE | 76.9 | 67.3 | 79.9 | 79.4 | 79.5 | 79.2 |
| Dak Prescott | QB | 88.9 | 79.5 | 77.3 | 77.4 | 73.3 | 73.1 |
| Christian Watson | WR | 100 | 91.4 | 66.2 | 65.9 | 67.3 | 66.9 |
| Bucky Irving | RB | 72 | 63.6 | 43.4 | 43.7 | 52.1 | 51.9 |
| Matthew Stafford | QB | 117.9 | 109.6 | 94.3 | 94.7 | 99.1 | 99.1 |
| Stefon Diggs | WR | 115.4 | 108.4 | 104.5 | 104.2 | 107.8 | 107.4 |
| Kenneth Walker | RB | 25.1 | 18.9 | 19.2 | 19.6 | 14.1 | 14 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Caleb Williams | QB | 70.5 | 110.9 | 71.2 | 71.1 | 64.6 | 64.6 |
| Dallas Goedert | TE | 107.8 | 134 | 119.1 | 119.6 | 103.3 | 103.3 |
| Jaxson Dart | QB | 79.2 | 102.2 | 97.3 | 97.2 | 95.4 | 95.4 |
| Jayden Daniels | QB | 52.2 | 68.2 | 68.6 | 68.1 | 57.7 | 58 |
| DJ Moore | WR | 69.9 | 83.3 | 53.8 | 53.4 | 56.6 | 56.7 |
| Mike Evans | WR | 87.4 | 99.9 | 63 | 63.1 | 70.8 | 70.7 |
| Rhamondre Stevenson | RB | 96.3 | 107.5 | 78.1 | 78.5 | 74.2 | 74.1 |
| David Montgomery | RB | 71.8 | 81.6 | 46.7 | 46.3 | 52.8 | 52.6 |
| Colston Loveland | TE | 46.3 | 56 | 39.2 | 39.1 | 39.3 | 39.8 |
| Kyle Pitts | TE | 90.2 | 99 | 67.2 | 67.5 | 72 | 72.6 |
| Trevor Lawrence | QB | 105.8 | 114.7 | 102.1 | 102.2 | 80.9 | 80.6 |
| Rome Odunze | WR | 87.3 | 96 | 65.7 | 65.3 | 67.7 | 67.9 |
| Tucker Kraft | TE | 105.1 | 113.8 | 64.7 | 64.2 | 59.2 | 59.4 |
| Harold Fannin | TE | 89.4 | 97.9 | 73.2 | 73.3 | 70.3 | 70.8 |
| Jadarian Price | RB | 93.9 | 101.9 | 60.9 | 59.8 | 62.5 | 62.6 |
| Travis Etienne | RB | 53.8 | 61.7 | 41.8 | 42.2 | 41.1 | 41.4 |
| Bo Nix | QB | 122.3 | 129.9 | 116.4 | 116.4 | 98.2 | 98.4 |
| Malik Nabers | WR | 37.1 | 44.7 | 27.1 | 27 | 29.6 | 29.7 |
| Rico Dowdle | RB | 126.7 | 134.2 | 86.2 | 86.5 | 87.7 | 87.9 |
| Nico Collins | WR | 30.9 | 38.2 | 23.9 | 23.6 | 20.9 | 21 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 266pts, RB28 158pts, WR34 165pts, TE13 141pts, K13 112pts, DEF13 85pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2327 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_11 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_44 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 96.3 | 8.9 | QB10 | QB4 | B | 272 | 303 |
| Jalen Hurts | QB | 58.7 | 5.8 | QB5 | QB3 | B | 271 | 311 |
| Patrick Mahomes | QB | 104.7 | 9.6 | QB13 | QB9 | B | 259 | 287 |
| Trevor Lawrence | QB | 101.6 | 9.4 | QB12 | QB6 | A | 265 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.9 | 5.2 | RB19 | RB13 | A | 226 | 197 |
| Chuba Hubbard | RB | 90.7 | 8.5 | RB30 | RB23 | A | 207 | 148 |
| Jaylen Warren | RB | 75.4 | 7.2 | RB25 | RB22 | B | 197 | 171 |
| Tony Pollard | RB | 87.2 | 8.2 | RB27 | RB25 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.8 | 6.5 | WR27 | WR17 | A | 209 | 208 |
| Garrett Wilson | WR | 45.4 | 4.7 | WR20 | WR13 | B | 215 | 225 |
| Michael Wilson | WR | 101.1 | 9.3 | WR37 | WR31 | B | 185 | 166 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR20 | A | 180 | 222 |
| Parker Washington | WR | 73.5 | 7 | WR30 | WR15 | A | 216 | 212 |
| Zay Flowers | WR | 41 | 4.3 | WR16 | WR12 | B | 214 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94.3 | 8.8 | TE11 | TE9 | B | 153 | 164 |
| George Kittle | TE | 79.1 | 7.5 | TE9 | TE4 | A | 198 | 169 |
| Isaiah Likely | TE | 106.7 | 9.8 | TE12 | TE10 | B | 157 | 157 |
| Travis Kelce | TE | 89.9 | 8.4 | TE10 | TE8 | B | 165 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 149.8 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 101.6 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 127 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.7 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.8 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 161.6 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68.1 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 96.3 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.4 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.7 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.8 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.5 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.6 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 17.8 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.8 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.5 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.1 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.2 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25.6 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.4 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.2 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.1 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 162.1 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 26.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.7 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 154.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.9 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.9 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.1 | C · 16th easiest | F · 1st hardest | much harder |

