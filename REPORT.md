# Fantasy ADP report — 2026-09-26

_Snapshot 2026-09-26 · 61 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.89 | 170.6 | 99.7 |
| SLEEPER | 2480 | 1 | 700.9 | 90 |
| YAHOO | 213 | 1.2 | 143.9 | 88.7 |


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
| Alec Pierce | WR | 134.6 | 95.3 | 98.2 | ESPN | 3.2 | CHEAPER on ESPN | 145 |
| Blake Corum | RB | 143.3 | 100.7 | 99.9 | ESPN | 3.6 | CHEAPER on ESPN | 137 |
| Brian Thomas | WR | 135.9 | 74.7 | 84.3 | ESPN | 4.7 | CHEAPER on ESPN | 179 |
| Caleb Williams | QB | 105 | 71.2 | 64.6 | ESPN | 3.1 | CHEAPER on ESPN | 270 |
| Chris Godwin | WR | 141.9 | 92.1 | 93.4 | ESPN | 4.1 | CHEAPER on ESPN | 156 |
| J.K. Dobbins | RB | 137.9 | 91.9 | 94.3 | ESPN | 3.7 | CHEAPER on ESPN | 165 |
| Jacory Croskey-Merritt | RB | 147.8 | 115.9 | 104.6 | ESPN | 3.1 | CHEAPER on ESPN | 134 |
| Jadarian Price | RB | 101.6 | 60.2 | 62.6 | ESPN | 3.3 | CHEAPER on ESPN | 168 |
| Jayden Reed | WR | 154.1 | 107.7 | 113 | ESPN | 3.6 | CHEAPER on ESPN | 154 |
| Jaylen Warren | RB | 115 | 70.2 | 75.4 | ESPN | 3.5 | CHEAPER on ESPN | 183 |
| Jordan Love | QB | 158.4 | 158.5 | 120.4 | YAHOO | 3.2 | pricier on YAHOO | 260 |
| Jordan Mason | RB | 162.7 | 109.2 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 138 |
| Justin Herbert | QB | 116.1 | 83.2 | 70.4 | ESPN | 3.3 | CHEAPER on ESPN | 266 |
| KC Concepcion | WR | 160.6 | 119.8 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 157 |
| Luther Burden | WR | 103.2 | 55.6 | 57 | ESPN | 3.9 | CHEAPER on ESPN | 192 |
| MarShawn Lloyd | RB | 132.7 | 137.7 | 84.9 | YAHOO | 4.2 | pricier on YAHOO | 115 |
| Quentin Johnston | WR | 151.8 | 111.2 | 105.2 | ESPN | 3.6 | CHEAPER on ESPN | 159 |
| Rico Dowdle | RB | 133.6 | 86.3 | 87.9 | ESPN | 3.9 | CHEAPER on ESPN | 151 |
| Tucker Kraft | TE | 113.2 | 63.5 | 59.4 | ESPN | 4.3 | CHEAPER on ESPN | 163 |
| Tyler Shough | QB | 133.6 | 179.2 | 127.7 | SLEEPER | 4 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-26. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 131.9 | 100.4 | 88.3 | 88.1 | 95.2 | 94.5 |
| Patrick Mahomes | QB | 101.8 | 80.7 | 110.3 | 110.2 | 105.8 | 105 |
| Jalen Coker | WR | 144.1 | 125.1 | 147.2 | 146.3 | 131.4 | 128.4 |
| Bryce Young | QB | 161.9 | 145.4 | — | — | 120.3 | 115.9 |
| Tyler Shough | QB | 151.4 | 136.4 | 181.5 | 179.5 | 129.4 | 127.9 |
| Travis Kelce | TE | 102 | 88.5 | 89.6 | 89.2 | 95.1 | 94.8 |
| Parker Washington | WR | 107 | 93.8 | 71.9 | 71.9 | 74.2 | 73.7 |
| Jared Goff | QB | 145 | 132.2 | 131.6 | 131.8 | 111 | 110.6 |
| Isaiah Likely | TE | 116.2 | 103.9 | 106.6 | 105.3 | 108.5 | 107.9 |
| Chuba Hubbard | RB | 118.7 | 106.9 | 81 | 81 | 91.1 | 90.9 |
| Brock Purdy | QB | 103.4 | 92.3 | 122.4 | 122.2 | 97.4 | 96.6 |
| Christian Watson | WR | 103.6 | 95.6 | 66.1 | 66 | 67.5 | 67 |
| Kenneth Walker | RB | 27.3 | 20.1 | 19 | 19.5 | 14.1 | 14 |
| Stefon Diggs | WR | 116.4 | 109.9 | 104 | 104.1 | 108 | 107.5 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Caleb Williams | QB | 76.1 | 99 | 71.1 | 71.2 | 64.8 | 64.5 |
| Dallas Goedert | TE | 109.1 | 127.3 | 119 | 119.2 | 103.4 | 103.2 |
| DJ Moore | WR | 69 | 82.9 | 54.1 | 53.6 | 56.6 | 56.7 |
| Jayden Daniels | QB | 51.4 | 63.1 | 68.8 | 68.1 | 57.6 | 57.9 |
| Kyle Pitts | TE | 86.5 | 97 | 67.4 | 67.7 | 71.8 | 72.5 |
| Bo Nix | QB | 118.5 | 128.6 | 116.4 | 116.3 | 98.2 | 98.4 |
| Mike Evans | WR | 86.6 | 96.5 | 62.8 | 63.2 | 70.9 | 70.7 |
| Rhamondre Stevenson | RB | 94.9 | 104.7 | 78.3 | 78.3 | 74.2 | 74.1 |
| Jaxson Dart | QB | 82.3 | 91.9 | 97.5 | 97.1 | 95.4 | 95.3 |
| Tucker Kraft | TE | 102.9 | 112.2 | 64.3 | 64.2 | 59.2 | 59.3 |
| Harold Fannin | TE | 86.7 | 96 | 73.1 | 73.3 | 70.1 | 70.7 |
| Justin Herbert | QB | 106.5 | 115.3 | 83.8 | 83.3 | 70 | 70.4 |
| Nico Collins | WR | 29 | 37.3 | 24.1 | 23.5 | 20.9 | 21 |
| Jadarian Price | RB | 92.4 | 100.5 | 61.2 | 60.1 | 62.6 | 62.6 |
| Rico Dowdle | RB | 124.5 | 132.6 | 86.1 | 86.3 | 87.7 | 87.8 |
| Colston Loveland | TE | 44.9 | 52.9 | 39.1 | 39.3 | 39.3 | 39.7 |
| Michael Pittman | WR | 109 | 116.9 | 105 | 106.1 | 122 | 122.1 |
| Courtland Sutton | WR | 108 | 115.8 | 79.1 | 80.1 | 109.3 | 109.2 |
| Travis Etienne | RB | 52.5 | 59.4 | 42.1 | 41.8 | 41.1 | 41.3 |
| Marvin Harrison | WR | 104.9 | 111.5 | 76.2 | 76.7 | 78.3 | 78.9 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 273pts, RB27 168pts, WR35 169pts, TE13 156pts, K13 116pts, DEF13 86pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2325 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_9 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_46 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.2 | 10.6 | QB14 | QB11 | B | 262 | 296 |
| Brock Purdy | QB | 96.5 | 9 | QB10 | QB5 | B | 283 | 303 |
| Jalen Hurts | QB | 58.8 | 5.8 | QB5 | QB4 | B | 288 | 311 |
| Patrick Mahomes | QB | 105 | 9.7 | QB13 | QB9 | B | 274 | 287 |
| Trevor Lawrence | QB | 102.6 | 9.5 | QB12 | QB8 | B | 266 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 52 | 5.3 | RB20 | RB15 | A | 246 | 197 |
| Chuba Hubbard | RB | 90.8 | 8.5 | RB31 | RB24 | A | 211 | 148 |
| Jaylen Warren | RB | 75.4 | 7.2 | RB26 | RB23 | B | 196 | 171 |
| Rhamondre Stevenson | RB | 78.9 | 7.5 | RB27 | RB25 | B | 184 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.9 | 6.5 | WR27 | WR23 | B | 205 | 208 |
| Garrett Wilson | WR | 45.4 | 4.7 | WR20 | WR14 | B | 217 | 225 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR24 | B | 179 | 222 |
| Parker Washington | WR | 73.6 | 7 | WR30 | WR15 | A | 229 | 212 |
| Zay Flowers | WR | 41.6 | 4.4 | WR16 | WR11 | B | 229 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94.5 | 8.8 | TE11 | TE9 | B | 172 | 164 |
| George Kittle | TE | 79.3 | 7.5 | TE9 | TE7 | B | 184 | 169 |
| Isaiah Likely | TE | 105.7 | 9.7 | TE12 | TE8 | B | 183 | 157 |
| Travis Kelce | TE | 89.1 | 8.3 | TE10 | TE6 | A | 185 | 171 |
| Tyler Warren | TE | 47.2 | 4.8 | TE4 | TE3 | B | 181 | 201 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.8 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.6 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 96 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 133.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.2 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 163.7 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 65.5 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 96.5 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.3 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.5 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.1 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.5 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.7 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.1 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.1 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.2 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.1 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25.3 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.4 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.5 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.2 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 160.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 27.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.6 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 157.1 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.6 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.7 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.3 | C · 16th easiest | F · 1st hardest | much harder |

