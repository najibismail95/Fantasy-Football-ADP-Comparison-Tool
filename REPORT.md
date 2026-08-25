# Fantasy ADP report — 2026-08-25

_Snapshot 2026-08-25 · 29 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.44 | 171.5 | 99.3 |
| SLEEPER | 1498 | 1 | 700.8 | 82 |
| YAHOO | 223 | 1.4 | 144.6 | 90.1 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 1498 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 136.5 | 103 | 99.6 | ESPN | 2.9 | CHEAPER on ESPN | 147 |
| Brian Robinson | RB | 164.9 | 153.4 | 121.7 | YAHOO | 3.1 | pricier on YAHOO | 82 |
| Chris Godwin | WR | 143.5 | 95.2 | 97.8 | ESPN | 3.9 | CHEAPER on ESPN | 165 |
| Chuba Hubbard | RB | 122.1 | 77.9 | 83.7 | ESPN | 3.4 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 132 | 89.6 | 99.1 | ESPN | 3.1 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 151.1 | 155 | 116.4 | YAHOO | 3.1 | pricier on YAHOO | 129 |
| Jordyn Tyson | WR | 164.3 | 86.8 | 94 | ESPN | 6.2 | CHEAPER on ESPN | 105 |
| Justin Herbert | QB | 106.9 | 82.7 | 69.7 | ESPN | 2.6 | CHEAPER on ESPN | 290 |
| Kyler Murray | QB | 146.6 | 159.7 | 111.7 | YAHOO | 3.5 | pricier on YAHOO | 263 |
| Makai Lemon | WR | 142.7 | 87.3 | 111.8 | ESPN | 3.6 | CHEAPER on ESPN | 162 |
| Mike Evans | WR | 94 | 60 | 66.9 | ESPN | 2.5 | CHEAPER on ESPN | 202 |
| RJ Harvey | RB | 138.6 | 79.5 | 103.5 | ESPN | 3.9 | CHEAPER on ESPN | 147 |
| T.J. Hockenson | TE | 132.9 | 164.1 | 129.2 | SLEEPER | 2.8 | CHEAPER on SLEEPER | 157 |
| Travis Hunter | WR | 120.8 | 166.1 | 126.5 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 107 |


## Who’s rising


_Last 7 days, as of 2026-08-25. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 165 | 152.9 | 175 | 155.2 | 127.5 | 117.5 |
| Jonathon Brooks | RB | 128.2 | 118.7 | 126.3 | 112 | 103 | 98.2 |
| Rhamondre Stevenson | RB | 106.9 | 86.8 | 85.8 | 81.7 | 81.2 | 80.3 |
| Jordan Mason | RB | 153.9 | 141.9 | 120.6 | 117.1 | 119 | 116.4 |
| Jayden Reed | WR | 140.3 | 128.5 | 114.7 | 116.4 | 120 | 119.5 |
| Xavier Worthy | WR | 137.8 | 126.6 | 138.8 | 140 | 128.6 | 128.8 |
| Rashid Shaheed | WR | 159.7 | 155.8 | 156.3 | 146.6 | 128.6 | 128.3 |
| Jacory Croskey-Merritt | RB | 140.9 | 132.6 | 111.7 | 113.1 | 115.3 | 111.7 |
| Tucker Kraft | TE | 99.2 | 91.3 | 65.5 | 64.1 | 61.1 | 60.9 |
| Jordan Addison | WR | 123.3 | 116.9 | 105.1 | 104.3 | 118.3 | 117.5 |
| KC Concepcion | WR | 151.1 | 146.3 | 129.5 | 123.2 | 131.6 | 128.7 |
| J.K. Dobbins | RB | 124.4 | 118.1 | 91.3 | 93.8 | 98.2 | 96.9 |
| Khalil Shakir | WR | 130.9 | 124.8 | 137.3 | 139.2 | 131.6 | 131.4 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jordyn Tyson | WR | 101.4 | 154.3 | 76.3 | 84.7 | 91.8 | 93.7 |
| Kenyon Sadiq | TE | 139 | 145.8 | 142.9 | 149.5 | 129.9 | 130 |
| Tony Pollard | RB | 94.3 | 106.8 | 87.4 | 85 | 85.8 | 85.5 |
| Makai Lemon | WR | 130.8 | 142.9 | 84.5 | 87.1 | 108.1 | 111.5 |
| Josh Downs | WR | 122.1 | 131.5 | 110.9 | 107.9 | 113.2 | 109.4 |
| Aaron Jones | RB | 126.1 | 133 | 119.6 | 124.3 | 122.2 | 123 |
| Jakobi Meyers | WR | 117.4 | 113.7 | 101.3 | 108.2 | 128.2 | 128.9 |
| Carnell Tate | WR | 71.5 | 78.1 | 63.3 | 65 | 78.6 | 79.8 |
| RJ Harvey | RB | 132.4 | 138.7 | 79.1 | 79.3 | 100.8 | 103.3 |
| Juwan Johnson | TE | 164.5 | 163.6 | 182.9 | 189 | 129.6 | 127.9 |
| Hunter Henry | TE | 143 | 142.9 | 129 | 135 | 128 | 127.8 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1341 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_45 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.9 | 9.2 | QB13 | QB9 | B | 296 | 296 |
| Brock Purdy | QB | 103 | 9.5 | QB14 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.9 | 5.7 | QB6 | QB4 | B | 320 | 311 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D'Andre Swift | RB | 55.6 | 5.5 | RB23 | RB21 | B | 212 | 208 |
| Rhamondre Stevenson | RB | 81 | 7.7 | RB28 | RB25 | B | 203 | 169 |
| Travis Etienne | RB | 44.1 | 4.6 | RB19 | RB17 | B | 246 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 45.5 | 4.7 | WR19 | WR13 | B | 250 | 225 |
| Parker Washington | WR | 82.5 | 7.8 | WR33 | WR28 | B | 187 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | B | 188 | 180 |
| Jake Ferguson | TE | 111.3 | 10.2 | TE14 | TE12 | B | 167 | 160 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 146.6 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.7 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 93 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 87.8 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 155.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | DEN | 10 | 99.9 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.1 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 103 | C · 13th easiest | F · 2nd hardest | much harder |
| Malik Willis | MIA | 6 | 159.5 | C · 12th easiest | F · 1st hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.2 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7 | C · 16th hardest | A · 3rd easiest | much easier |
| Travis Etienne | NO | 8 | 44.1 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.9 | C · 15th easiest | B · 6th easiest | easier |
| Quinshon Judkins | CLE | 11 | 53.2 | B · 11th easiest | B · 7th easiest | similar |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.4 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 53.8 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.4 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.6 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 32.5 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.1 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.9 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.4 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.5 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.8 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 37 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 121.1 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.9 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 132.9 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69.5 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 160.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.8 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 91.5 | C · 16th easiest | F · 1st hardest | much harder |

