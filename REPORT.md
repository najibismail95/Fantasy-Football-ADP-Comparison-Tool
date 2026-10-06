# Fantasy ADP report — 2026-10-06

_Snapshot 2026-10-06 · 71 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.7 | 170.4 | 99 |
| SLEEPER | 2489 | 1.3 | 700.9 | 85.3 |
| YAHOO | 218 | 1.2 | 143.9 | 89 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2489 |
| YAHOO | exact | 197 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 137.4 | 95.4 | 98.3 | ESPN | 3.4 | CHEAPER on ESPN | 143 |
| Blake Corum | RB | 144.4 | 100.1 | 100 | ESPN | 3.7 | CHEAPER on ESPN | 120 |
| Brian Thomas | WR | 138.4 | 74.9 | 84.6 | ESPN | 4.9 | CHEAPER on ESPN | 147 |
| Bryce Young | QB | 135.3 | 226.3 | 111.8 | SLEEPER | 8.6 | CHEAPER on SLEEPER | 236 |
| Caleb Williams | QB | 116.7 | 71.2 | 65.1 | ESPN | 4 | CHEAPER on ESPN | 250 |
| Chris Godwin | WR | 143.3 | 92 | 93.4 | ESPN | 4.2 | CHEAPER on ESPN | 132 |
| J.K. Dobbins | RB | 134.8 | 91.7 | 94.5 | ESPN | 3.5 | CHEAPER on ESPN | 150 |
| Jadarian Price | RB | 109.2 | 61.9 | 62.9 | ESPN | 3.9 | CHEAPER on ESPN | 137 |
| Jayden Reed | WR | 155.9 | 108.1 | 113 | ESPN | 3.8 | CHEAPER on ESPN | 198 |
| Jordan Love | QB | 159.6 | 159.8 | 119.9 | YAHOO | 3.3 | pricier on YAHOO | 243 |
| Jordan Mason | RB | 162.9 | 109.7 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 139 |
| Justin Herbert | QB | 123.2 | 83.5 | 70.8 | ESPN | 3.8 | CHEAPER on ESPN | 238 |
| Juwan Johnson | TE | 133.7 | 175.1 | 119.2 | SLEEPER | 4.1 | CHEAPER on SLEEPER | 137 |
| Luther Burden | WR | 98.1 | 55.9 | 57.2 | ESPN | 3.5 | CHEAPER on ESPN | 181 |
| MarShawn Lloyd | RB | 134.4 | 137.3 | 85.3 | YAHOO | 4.2 | pricier on YAHOO | 100 |
| Quentin Johnston | WR | 152.6 | 112 | 105.2 | ESPN | 3.7 | CHEAPER on ESPN | 128 |
| Rico Dowdle | RB | 134.8 | 86.8 | 88.2 | ESPN | 3.9 | CHEAPER on ESPN | 130 |
| TreVeyon Henderson | RB | 107.4 | 60.6 | 70.4 | ESPN | 3.5 | CHEAPER on ESPN | 149 |
| Tucker Kraft | TE | 117.2 | 63.6 | 59.5 | ESPN | 4.6 | CHEAPER on ESPN | 157 |
| Tyler Shough | QB | 108.4 | 182.7 | 124.5 | SLEEPER | 5.5 | CHEAPER on SLEEPER | 256 |


## Who’s rising


_Last 7 days, as of 2026-10-06. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Juwan Johnson | TE | 153.4 | 134.7 | 174.8 | 175.1 | 119.6 | 119.3 |
| Brock Purdy | QB | 81.8 | 63.7 | 122.5 | 122.5 | 96.3 | 95.6 |
| Tyler Shough | QB | 125.3 | 108.6 | 178.9 | 180.8 | 127 | 124.8 |
| Jaylen Warren | RB | 112.9 | 96.9 | 70.1 | 70.6 | 75.4 | 75.2 |
| Michael Wilson | WR | 126.9 | 111.8 | 87.2 | 87.8 | 101.1 | 100.9 |
| Matthew Golden | WR | 124.5 | 111.3 | 125.7 | 125.8 | 123.2 | 122.6 |
| Harold Fannin | TE | 97.6 | 85 | 73.3 | 73.5 | 70.9 | 71 |
| Trevor Lawrence | QB | 114.3 | 102.6 | 102.1 | 102.1 | 80.5 | 80.2 |
| Christian Watson | WR | 88.2 | 77.6 | 66 | 66.2 | 66.8 | 66.5 |
| Chuba Hubbard | RB | 99.8 | 90.3 | 80.7 | 81.3 | 90.7 | 90.3 |
| Aaron Jones | RB | 127.1 | 117.8 | 127.5 | 127.6 | 123.3 | 122.4 |
| George Kittle | TE | 65.9 | 57 | 79.2 | 79.7 | 79.2 | 78.9 |
| Kenyon Sadiq | TE | 164.1 | 155.2 | 168 | 168.6 | 129.7 | 128.7 |
| Jordan Addison | WR | 140.5 | 132.7 | 101.4 | 101.1 | 115.1 | 115 |
| Zay Flowers | WR | 46.5 | 38.9 | 41.2 | 41.3 | 35.2 | 35 |
| Sam Darnold | QB | 161.7 | 154.3 | 161.3 | 162.2 | 121.7 | 121.3 |
| Bhayshul Tuten | RB | 83.3 | 76.6 | 62.5 | 62.2 | 61.9 | 61.8 |
| Brock Bowers | TE | 29.2 | 23 | 23.6 | 23.6 | 21.6 | 21.7 |
| Josh Downs | WR | 137.3 | 131.3 | 113.4 | 113.6 | 103.2 | 102.9 |
| Zach Charbonnet | RB | 162.9 | 156.9 | 151 | 151.4 | — | — |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Von Achane | RB | 20.1 | 37.6 | 13.8 | 13.4 | 16 | 16.1 |
| Dalton Kincaid | TE | 97.6 | 114.4 | 88.2 | 88 | 94.3 | 93.9 |
| Isaiah Likely | TE | 106.9 | 122.2 | 105.2 | 105.2 | 107.8 | 107.7 |
| Jalen Hurts | QB | 59.7 | 71 | 58.7 | 58.4 | 53.9 | 53.9 |
| Drake Maye | QB | 60.9 | 71.9 | 47.3 | 47.2 | 48.8 | 49.2 |
| Breece Hall | RB | 40.2 | 49.8 | 34.2 | 34.3 | 34 | 34.2 |
| Jaxson Dart | QB | 108.6 | 118 | 97.2 | 97.4 | 95.4 | 95.4 |
| Jalen Coker | WR | 120.9 | 129.9 | 146.7 | 147.2 | 127.6 | 126.3 |
| Dalton Schultz | TE | 154.8 | 163.6 | 181.3 | 180.5 | 124.7 | 124.7 |
| DeVonta Smith | WR | 36.1 | 44.7 | 33.3 | 33.3 | 29.4 | 29.4 |
| Ladd McConkey | WR | 65.7 | 74.1 | 35 | 35.1 | 45.1 | 45.3 |
| Jaylen Waddle | WR | 71.3 | 79.2 | 44.5 | 44.6 | 38.6 | 38.7 |
| Travis Etienne | RB | 62.9 | 69.8 | 42 | 42 | 41.4 | 41.9 |
| TreVeyon Henderson | RB | 100.5 | 107.2 | 61.7 | 61 | 70.5 | 70.4 |
| Sam LaPorta | TE | 81.1 | 87.5 | 57.5 | 57.5 | 62.8 | 62.8 |
| Xavier Worthy | WR | 138.5 | 144.6 | 134.7 | 134.5 | 128 | 127.5 |
| Stefon Diggs | WR | 108.5 | 114.5 | 104.5 | 104.2 | 107.3 | 107.1 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 256pts, RB26 166pts, WR36 157pts, TE13 142pts, K13 106pts, DEF13 84pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2334 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_13 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_42 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 95.6 | 8.9 | QB10 | QB4 | A | 259 | 303 |
| Jayden Daniels | QB | 68.3 | 6.6 | QB6 | QB3 | B | 258 | 309 |
| Patrick Mahomes | QB | 104.1 | 9.6 | QB13 | QB10 | B | 242 | 287 |
| Trevor Lawrence | QB | 101.8 | 9.4 | QB12 | QB6 | A | 250 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.8 | 5.2 | RB19 | RB14 | B | 197 | 197 |
| Chuba Hubbard | RB | 87.8 | 8.2 | RB29 | RB23 | B | 188 | 148 |
| Jaylen Warren | RB | 75.2 | 7.2 | RB25 | RB22 | B | 181 | 171 |
| Quinshon Judkins | RB | 55 | 5.5 | RB21 | RB17 | B | 191 | 196 |
| Tony Pollard | RB | 87.4 | 8.2 | RB27 | RB24 | B | 174 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.4 | 6.5 | WR27 | WR20 | B | 186 | 208 |
| Garrett Wilson | WR | 45.3 | 4.7 | WR19 | WR14 | B | 194 | 225 |
| Michael Wilson | WR | 100.9 | 9.3 | WR37 | WR25 | A | 199 | 166 |
| Mike Evans | WR | 70.6 | 6.8 | WR29 | WR19 | A | 174 | 222 |
| Parker Washington | WR | 73 | 7 | WR30 | WR18 | A | 185 | 212 |
| Tetairoa McMillan | WR | 42.3 | 4.4 | WR17 | WR11 | B | 208 | 223 |
| Zay Flowers | WR | 37.8 | 4.1 | WR15 | WR10 | B | 212 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.9 | 7.5 | TE9 | TE5 | A | 184 | 169 |
| Harold Fannin | TE | 73.8 | 7.1 | TE8 | TE7 | B | 155 | 180 |
| Isaiah Likely | TE | 107.7 | 9.9 | TE12 | TE8 | A | 164 | 157 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 149.5 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.9 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 101.8 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.5 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 124.5 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.4 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.7 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 155.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68.3 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 95.6 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.5 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.1 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.1 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.8 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 15.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.6 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.2 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.3 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.3 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.2 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.8 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.3 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 161.6 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22.8 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.1 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 164.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 153.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.9 | C · 16th easiest | F · 1st hardest | much harder |

