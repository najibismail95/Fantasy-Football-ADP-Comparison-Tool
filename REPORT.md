# Fantasy ADP report — 2026-10-03

_Snapshot 2026-10-03 · 68 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.71 | 170.2 | 99.3 |
| SLEEPER | 2485 | 1.9 | 700.9 | 86.3 |
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
| Alec Pierce | WR | 137.3 | 96.3 | 98.3 | ESPN | 3.3 | CHEAPER on ESPN | 145 |
| Blake Corum | RB | 144.3 | 100.3 | 99.9 | ESPN | 3.7 | CHEAPER on ESPN | 128 |
| Brian Thomas | WR | 138.1 | 74.3 | 84.6 | ESPN | 4.9 | CHEAPER on ESPN | 155 |
| Caleb Williams | QB | 117.2 | 71.8 | 64.9 | ESPN | 4.1 | CHEAPER on ESPN | 255 |
| Chris Godwin | WR | 143.3 | 92.5 | 93.4 | ESPN | 4.2 | CHEAPER on ESPN | 137 |
| J.K. Dobbins | RB | 135.1 | 91.3 | 94.5 | ESPN | 3.5 | CHEAPER on ESPN | 158 |
| Jacory Croskey-Merritt | RB | 149.1 | 115.9 | 104.5 | ESPN | 3.2 | CHEAPER on ESPN | 124 |
| Jadarian Price | RB | 104.4 | 60.6 | 62.8 | ESPN | 3.6 | CHEAPER on ESPN | 150 |
| Jayden Reed | WR | 155.3 | 107.3 | 113 | ESPN | 3.8 | CHEAPER on ESPN | 198 |
| Jordan Mason | RB | 162.8 | 109.8 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 141 |
| Justin Herbert | QB | 121.1 | 83.1 | 70.7 | ESPN | 3.7 | CHEAPER on ESPN | 247 |
| Juwan Johnson | TE | 139.6 | 175.7 | 119.4 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 141 |
| KC Concepcion | WR | 160.8 | 120 | 122.1 | ESPN | 3.3 | CHEAPER on ESPN | 146 |
| Luther Burden | WR | 101.2 | 56.9 | 57.1 | ESPN | 3.7 | CHEAPER on ESPN | 191 |
| MarShawn Lloyd | RB | 134.1 | 137.2 | 85.3 | YAHOO | 4.2 | pricier on YAHOO | 89 |
| Quentin Johnston | WR | 152.4 | 112.5 | 105.2 | ESPN | 3.6 | CHEAPER on ESPN | 145 |
| Rico Dowdle | RB | 135.3 | 86.7 | 88.1 | ESPN | 4 | CHEAPER on ESPN | 138 |
| TreVeyon Henderson | RB | 106.4 | 61.6 | 70.4 | ESPN | 3.4 | CHEAPER on ESPN | 154 |
| Tucker Kraft | TE | 117.9 | 64.4 | 59.5 | ESPN | 4.7 | CHEAPER on ESPN | 151 |
| Tyler Shough | QB | 112.3 | 178.7 | 125.4 | SLEEPER | 5 | CHEAPER on SLEEPER | 264 |


## Who’s rising


_Last 7 days, as of 2026-10-03. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 136.4 | 114.1 | 179.5 | 178.6 | 127.9 | 125.7 |
| Brock Purdy | QB | 92.3 | 71 | 122.2 | 122.3 | 96.6 | 95.9 |
| Christian Watson | WR | 95.6 | 79.6 | 66 | 66 | 67 | 66.6 |
| Matthew Golden | WR | 129.5 | 114.2 | 125.9 | 125.8 | 123.5 | 122.8 |
| Juwan Johnson | TE | 156.9 | 142.1 | 175.2 | 175.5 | 119.7 | 119.4 |
| Parker Washington | WR | 93.8 | 80.6 | 71.9 | 71.8 | 73.7 | 73.2 |
| Chuba Hubbard | RB | 106.9 | 94.8 | 81 | 81.3 | 90.9 | 90.5 |
| Davante Adams | WR | 52.6 | 41.7 | 50.5 | 50.4 | 59.5 | 59.3 |
| George Kittle | TE | 70.9 | 60.9 | 79.6 | 79.8 | 79.3 | 79 |
| Sam Darnold | QB | 165.1 | 155.2 | 162.1 | 161.3 | — | — |
| Jaylen Warren | RB | 114.5 | 104.6 | 70.1 | 70.3 | 75.4 | 75.3 |
| Travis Kelce | TE | 88.5 | 78.7 | 89.2 | 89.6 | 94.8 | 94.5 |
| Michael Wilson | WR | 128 | 118.9 | 87.3 | 87.3 | 101.2 | 101 |
| Josh Downs | WR | 140.7 | 133.1 | 113.6 | 113.6 | 103.3 | 103 |
| Zay Flowers | WR | 48.9 | 41.6 | 41.7 | 41.8 | 35.2 | 35.1 |
| Patrick Mahomes | QB | 80.7 | 73.9 | 110.2 | 110.1 | 105 | 104.4 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jaxson Dart | QB | 91.9 | 117 | 97.1 | 97.2 | 95.3 | 95.4 |
| Caleb Williams | QB | 99 | 116.7 | 71.2 | 71.8 | 64.5 | 64.9 |
| Isaiah Likely | TE | 103.9 | 117.9 | 105.3 | 105.2 | 107.9 | 107.7 |
| De'Von Achane | RB | 18.6 | 29 | 13.5 | 13.9 | 16 | 16.1 |
| Drake Maye | QB | 57.5 | 67.7 | 47.4 | 47.2 | 48.7 | 49.1 |
| Dallas Goedert | TE | 127.3 | 137.4 | 119.2 | 119.1 | 103.2 | 103.3 |
| Jayden Daniels | QB | 63.1 | 70.3 | 68.1 | 68.6 | 57.9 | 58.1 |
| Sam LaPorta | TE | 78.5 | 85.6 | 57.9 | 57.3 | 62.8 | 62.8 |
| Rhamondre Stevenson | RB | 104.7 | 111.7 | 78.3 | 78.6 | 74.1 | 74.1 |
| Travis Etienne | RB | 59.4 | 66.3 | 41.8 | 42 | 41.3 | 41.7 |
| David Montgomery | RB | 78.9 | 85.4 | 46.4 | 46.2 | 52.6 | 52.6 |
| Breece Hall | RB | 39.3 | 45.7 | 34.3 | 34.1 | 34 | 34.1 |
| Mike Evans | WR | 96.5 | 102.8 | 63.2 | 62.9 | 70.7 | 70.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 264pts, RB27 166pts, WR35 165pts, TE13 141pts, K13 112pts, DEF13 85pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2330 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_11 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_43 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95.8 | 8.9 | QB10 | QB3 | B | 273 | 303 |
| Patrick Mahomes | QB | 104.3 | 9.6 | QB13 | QB10 | B | 260 | 287 |
| Trevor Lawrence | QB | 102 | 9.4 | QB12 | QB6 | A | 265 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.8 | 5.2 | RB19 | RB13 | B | 225 | 197 |
| Chuba Hubbard | RB | 90.4 | 8.4 | RB30 | RB22 | A | 208 | 148 |
| Jaylen Warren | RB | 75.3 | 7.2 | RB25 | RB21 | B | 200 | 171 |
| Tony Pollard | RB | 87.3 | 8.2 | RB27 | RB24 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.6 | 6.5 | WR27 | WR17 | A | 209 | 208 |
| Garrett Wilson | WR | 44.3 | 4.6 | WR19 | WR12 | B | 216 | 225 |
| Michael Wilson | WR | 101 | 9.3 | WR37 | WR30 | B | 185 | 166 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR21 | A | 179 | 222 |
| Parker Washington | WR | 73.2 | 7 | WR30 | WR14 | A | 216 | 212 |
| Zay Flowers | WR | 40.9 | 4.3 | WR16 | WR11 | B | 214 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94 | 8.8 | TE11 | TE9 | B | 153 | 164 |
| George Kittle | TE | 79 | 7.5 | TE9 | TE4 | A | 198 | 169 |
| Isaiah Likely | TE | 107.7 | 9.9 | TE12 | TE10 | B | 157 | 157 |
| Travis Kelce | TE | 89.6 | 8.4 | TE10 | TE7 | B | 165 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 148 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.2 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 125.4 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.5 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 154.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95.8 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.1 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.1 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.8 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.5 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 16.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.9 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.5 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.2 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.3 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.8 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.7 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.7 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 163.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 161 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.6 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.3 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79 | C · 16th easiest | F · 1st hardest | much harder |

