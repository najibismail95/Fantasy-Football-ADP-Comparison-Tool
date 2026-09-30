# Fantasy ADP report — 2026-09-30

_Snapshot 2026-09-30 · 65 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.81 | 170.3 | 100 |
| SLEEPER | 2485 | 1.9 | 700.9 | 87.3 |
| YAHOO | 218 | 1.2 | 143.9 | 88.5 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2485 |
| YAHOO | exact | 197 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 136.9 | 95.5 | 98.3 | ESPN | 3.3 | CHEAPER on ESPN | 145 |
| Blake Corum | RB | 142.8 | 100.5 | 99.9 | ESPN | 3.6 | CHEAPER on ESPN | 128 |
| Brian Thomas | WR | 136.9 | 74.5 | 84.5 | ESPN | 4.8 | CHEAPER on ESPN | 156 |
| Caleb Williams | QB | 115.9 | 71.9 | 64.8 | ESPN | 4 | CHEAPER on ESPN | 255 |
| Chris Godwin | WR | 142.6 | 92.6 | 93.4 | ESPN | 4.1 | CHEAPER on ESPN | 137 |
| J.K. Dobbins | RB | 136.1 | 91.5 | 94.4 | ESPN | 3.6 | CHEAPER on ESPN | 159 |
| Jacory Croskey-Merritt | RB | 149 | 115.2 | 104.6 | ESPN | 3.3 | CHEAPER on ESPN | 123 |
| Jadarian Price | RB | 102 | 60.7 | 62.7 | ESPN | 3.4 | CHEAPER on ESPN | 158 |
| Jayden Reed | WR | 155.1 | 107.5 | 113 | ESPN | 3.7 | CHEAPER on ESPN | 146 |
| Jonathon Brooks | RB | 132.1 | 98.3 | 89.9 | ESPN | 3.2 | CHEAPER on ESPN | 155 |
| Jordan Mason | RB | 163.1 | 109.9 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 141 |
| Justin Herbert | QB | 119 | 83.2 | 70.5 | ESPN | 3.5 | CHEAPER on ESPN | 248 |
| KC Concepcion | WR | 160.8 | 119.8 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 146 |
| Luther Burden | WR | 103.1 | 55.9 | 57.1 | ESPN | 3.9 | CHEAPER on ESPN | 191 |
| MarShawn Lloyd | RB | 133.1 | 137.4 | 85.2 | YAHOO | 4.2 | pricier on YAHOO | 89 |
| Quentin Johnston | WR | 152.1 | 111.3 | 105.2 | ESPN | 3.7 | CHEAPER on ESPN | 145 |
| Rico Dowdle | RB | 134.8 | 86.9 | 88 | ESPN | 3.9 | CHEAPER on ESPN | 138 |
| Sam Darnold | QB | 158.1 | 161.4 | 121.6 | YAHOO | 3.2 | pricier on YAHOO | 239 |
| Tucker Kraft | TE | 115.3 | 63.5 | 59.4 | ESPN | 4.5 | CHEAPER on ESPN | 151 |
| Tyler Shough | QB | 118.7 | 178.8 | 126.5 | SLEEPER | 4.7 | CHEAPER on SLEEPER | 265 |


## Who’s rising


_Last 7 days, as of 2026-09-30. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 144.6 | 121.5 | 179.4 | 178.5 | 128.8 | 126.7 |
| Brock Purdy | QB | 100.7 | 78.3 | 122.8 | 122.6 | 96.9 | 96.2 |
| Travis Kelce | TE | 97.6 | 77.6 | 89.5 | 89.9 | 95 | 94.6 |
| Patrick Mahomes | QB | 90.4 | 71.2 | 110.7 | 110.5 | 105.4 | 104.6 |
| Parker Washington | WR | 100.4 | 82.9 | 71.8 | 72 | 73.9 | 73.4 |
| Bryce Young | QB | 154.7 | 138.5 | — | — | 118.7 | 113.9 |
| Davante Adams | WR | 58.7 | 42.4 | 50.7 | 50.5 | 59.5 | 59.4 |
| Chuba Hubbard | RB | 112.2 | 97.8 | 81.2 | 81 | 91 | 90.6 |
| Dalton Kincaid | TE | 113.3 | 99 | 88.1 | 88.2 | 94.8 | 94.2 |
| Denzel Boston | WR | 163.7 | 149.7 | 170.3 | 171.6 | 129.6 | 124.4 |
| George Kittle | TE | 76.8 | 64.7 | 79.3 | 79.1 | 79.4 | 79.1 |
| Christian Watson | WR | 97.4 | 85.2 | 66.4 | 66 | 67.2 | 66.7 |
| Jalen Coker | WR | 131.9 | 121.8 | 146.4 | 147.1 | 129.5 | 127.4 |
| Matthew Stafford | QB | 117.1 | 107.6 | 94.4 | 94.9 | 99.1 | 99 |
| Bucky Irving | RB | 70.1 | 61.3 | 43.9 | 43.7 | 52.1 | 51.9 |
| Dak Prescott | QB | 87.9 | 79 | 77.1 | 77.3 | 73.2 | 73 |
| Dalton Schultz | TE | 164.1 | 155.4 | 180.5 | 182.4 | 124.8 | 124.7 |
| Juwan Johnson | TE | 158.3 | 150.8 | 175 | 174.9 | 119.7 | 119.6 |
| Josh Downs | WR | 143.5 | 136.1 | 113.3 | 113.6 | 103.3 | 103.1 |
| Matthew Golden | WR | 129 | 121.7 | 125.8 | 126.3 | 123.7 | 123.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Caleb Williams | QB | 77.4 | 115.8 | 71.4 | 71.3 | 64.4 | 64.8 |
| Jaxson Dart | QB | 78.8 | 113.8 | 97.2 | 97.3 | 95.3 | 95.4 |
| Dallas Goedert | TE | 112.9 | 137.2 | 119.3 | 119.2 | 103.2 | 103.3 |
| Jayden Daniels | QB | 55.4 | 70.6 | 68.2 | 68.1 | 57.8 | 58 |
| Mike Evans | WR | 90.2 | 101.7 | 62.7 | 63.1 | 70.7 | 70.7 |
| Malik Nabers | WR | 36.6 | 47.6 | 27.2 | 27.2 | 29.6 | 29.8 |
| Rhamondre Stevenson | RB | 98.8 | 109.5 | 78.3 | 78 | 74.2 | 74 |
| David Montgomery | RB | 73.1 | 83.3 | 46.5 | 46.4 | 52.7 | 52.6 |
| Isaiah Likely | TE | 100.4 | 109.7 | 105 | 105.3 | 108.1 | 107.7 |
| Colston Loveland | TE | 48.5 | 57.6 | 39.5 | 39.5 | 39.4 | 40 |
| Travis Etienne | RB | 55.1 | 64.1 | 42.2 | 41.9 | 41.2 | 41.5 |
| Rome Odunze | WR | 88.8 | 97.1 | 65.8 | 65.3 | 67.8 | 67.9 |
| Kyle Pitts | TE | 93.3 | 100 | 67.3 | 67.1 | 72.3 | 72.8 |
| Drake Maye | QB | 56 | 62.7 | 47.5 | 47.3 | 48.5 | 48.9 |
| Tucker Kraft | TE | 108.2 | 114.8 | 64.3 | 64.2 | 59.3 | 59.4 |
| Jadarian Price | RB | 95.6 | 102 | 60.4 | 60.2 | 62.5 | 62.7 |
| DJ Moore | WR | 74.1 | 80.3 | 53.8 | 53.3 | 56.7 | 56.8 |
| Alec Pierce | WR | 130.7 | 136.8 | 96.3 | 95.8 | 98.2 | 98.3 |
| Justin Herbert | QB | 112.4 | 118.4 | 83.6 | 83.3 | 70.2 | 70.5 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 265pts, RB28 159pts, WR34 165pts, TE13 141pts, K13 112pts, DEF13 85pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2329 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_11 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_46 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 96.1 | 8.9 | QB10 | QB3 | A | 272 | 303 |
| Patrick Mahomes | QB | 104.6 | 9.6 | QB13 | QB9 | B | 259 | 287 |
| Trevor Lawrence | QB | 102.3 | 9.4 | QB12 | QB6 | A | 265 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.9 | 5.2 | RB19 | RB13 | A | 226 | 197 |
| Chuba Hubbard | RB | 90.6 | 8.5 | RB30 | RB23 | A | 208 | 148 |
| Jaylen Warren | RB | 75.4 | 7.2 | RB25 | RB21 | B | 200 | 171 |
| Tony Pollard | RB | 87.2 | 8.2 | RB27 | RB25 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.7 | 6.5 | WR27 | WR18 | A | 209 | 208 |
| Garrett Wilson | WR | 45.3 | 4.7 | WR20 | WR13 | B | 215 | 225 |
| Michael Wilson | WR | 101.1 | 9.3 | WR37 | WR30 | B | 186 | 166 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR20 | A | 180 | 222 |
| Parker Washington | WR | 73.4 | 7 | WR30 | WR15 | A | 216 | 212 |
| Zay Flowers | WR | 41.9 | 4.4 | WR16 | WR12 | B | 214 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94.2 | 8.8 | TE11 | TE9 | B | 153 | 164 |
| George Kittle | TE | 79 | 7.5 | TE9 | TE4 | A | 198 | 169 |
| Isaiah Likely | TE | 107.7 | 9.9 | TE12 | TE10 | B | 157 | 157 |
| Travis Kelce | TE | 89.8 | 8.4 | TE10 | TE7 | B | 165 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 147.1 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 126.5 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.7 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.7 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 158.1 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 96.1 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.1 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.1 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.6 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 17.3 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.8 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.5 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.2 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.2 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25.7 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.9 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.2 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 162.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.8 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 156.6 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79 | C · 16th easiest | F · 1st hardest | much harder |

