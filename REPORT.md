# Fantasy ADP report — 2026-08-26

_Snapshot 2026-08-26 · 30 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.43 | 171.5 | 99.7 |
| SLEEPER | 1596 | 1.6 | 700.8 | 87.7 |
| YAHOO | 223 | 1.4 | 144.6 | 89.2 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 465 |
| ESPN | team | 110 |
| SLEEPER | id | 1596 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 136 | 103.8 | 99.6 | ESPN | 2.9 | CHEAPER on ESPN | 147 |
| Brian Robinson | RB | 164.7 | 154.1 | 121.5 | YAHOO | 3.2 | pricier on YAHOO | 82 |
| Chris Godwin | WR | 143 | 95.8 | 97.7 | ESPN | 3.9 | CHEAPER on ESPN | 165 |
| Chuba Hubbard | RB | 122.1 | 77.8 | 85.1 | ESPN | 3.4 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 131.7 | 89.4 | 98.9 | ESPN | 3.1 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 150.5 | 156.2 | 113.3 | YAHOO | 3.3 | pricier on YAHOO | 129 |
| Jordyn Tyson | WR | 166.4 | 86.1 | 94.9 | ESPN | 6.3 | CHEAPER on ESPN | 105 |
| Justin Herbert | QB | 106.6 | 82.9 | 69.9 | ESPN | 2.5 | CHEAPER on ESPN | 290 |
| Kyler Murray | QB | 146.5 | 159.5 | 111.8 | YAHOO | 3.4 | pricier on YAHOO | 263 |
| Makai Lemon | WR | 142.1 | 87.8 | 112.7 | ESPN | 3.5 | CHEAPER on ESPN | 162 |
| RJ Harvey | RB | 138.3 | 79.9 | 104.3 | ESPN | 3.8 | CHEAPER on ESPN | 147 |
| T.J. Hockenson | TE | 132.8 | 164 | 129.3 | SLEEPER | 2.7 | CHEAPER on SLEEPER | 157 |
| Travis Hunter | WR | 120.9 | 167.4 | 126.3 | SLEEPER | 3.6 | CHEAPER on SLEEPER | 107 |


## Who’s rising


_Last 7 days, as of 2026-08-26. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 164.3 | 151.4 | 168.2 | 155.7 | 127.2 | 114.8 |
| Jonathon Brooks | RB | 127.1 | 117.1 | 122.3 | 109.3 | 102.6 | 97.2 |
| Rhamondre Stevenson | RB | 103.7 | 84.7 | 85.4 | 81.4 | 81.1 | 80.1 |
| Xavier Worthy | WR | 137.6 | 124.4 | 139.4 | 139.5 | 128.6 | 128.9 |
| Jayden Reed | WR | 139.5 | 126.5 | 114.8 | 115.5 | 120 | 119.2 |
| Jordan Mason | RB | 152.3 | 140.5 | 120.9 | 117.7 | 118.8 | 115.9 |
| Rashid Shaheed | WR | 159.5 | 155.1 | 157.3 | 146.8 | 128.5 | 128.3 |
| Tucker Kraft | TE | 98.4 | 90 | 65.4 | 63.1 | 61.1 | 60.8 |
| Jacory Croskey-Merritt | RB | 139.5 | 131.9 | 111.6 | 114.4 | 115 | 111 |
| Jordan Addison | WR | 122.8 | 115.7 | 105.3 | 103.9 | 118.2 | 117.3 |
| J.K. Dobbins | RB | 123.7 | 117 | 92.6 | 94.7 | 98.1 | 96.6 |
| KC Concepcion | WR | 151 | 145.4 | 129.1 | 122.5 | 131.4 | 127.7 |
| Deebo Samuel | WR | 137.8 | 131.3 | 137.2 | 137.6 | 127.8 | 127.5 |
| Stefon Diggs | WR | 131.6 | 127.4 | 115.9 | 112.8 | 113.8 | 107.7 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jordyn Tyson | WR | 105.4 | 162 | 77.2 | 86.5 | 91.9 | 94.4 |
| Kenyon Sadiq | TE | 139.8 | 146.6 | 143.4 | 150.4 | 129.9 | 130 |
| Josh Downs | WR | 121.7 | 133.6 | 110.6 | 107 | 112.8 | 109 |
| Tyler Shough | QB | 155.5 | 155.5 | 167.8 | 178.7 | 130 | 130 |
| Tony Pollard | RB | 96.8 | 107 | 87.3 | 83.9 | 85.7 | 85.5 |
| Makai Lemon | WR | 133.5 | 142.8 | 86.1 | 87.5 | 108.4 | 112.2 |
| Jaxson Dart | QB | 76.1 | 76.2 | 82.5 | 90.1 | 85 | 88.1 |
| Jakobi Meyers | WR | 117 | 113.4 | 102.7 | 110 | 128.3 | 129.1 |
| Wan'Dale Robinson | WR | 118.4 | 114.5 | 109.2 | 116 | 130.8 | 130.9 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1438 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_45 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.7 | 9.2 | QB13 | QB9 | B | 296 | 296 |
| Brock Purdy | QB | 102.8 | 9.5 | QB14 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.9 | 5.7 | QB6 | QB4 | B | 320 | 311 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D'Andre Swift | RB | 55.8 | 5.6 | RB23 | RB21 | B | 212 | 208 |
| Quinshon Judkins | RB | 54.7 | 5.5 | RB22 | RB20 | B | 226 | 196 |
| Rhamondre Stevenson | RB | 81.8 | 7.7 | RB28 | RB25 | B | 203 | 169 |
| Travis Etienne | RB | 43.8 | 4.6 | RB18 | RB17 | B | 246 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 45.7 | 4.7 | WR20 | WR14 | B | 250 | 225 |
| Parker Washington | WR | 81.7 | 7.7 | WR33 | WR28 | B | 187 | 212 |


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
| Kyler Murray | MIN | 6 | 146.4 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 95.4 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 92.7 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 88.5 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 155.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | DEN | 10 | 99.7 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.1 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 102.8 | C · 13th easiest | F · 2nd hardest | much harder |
| Malik Willis | MIA | 6 | 159.2 | C · 12th easiest | F · 1st hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.9 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 43.8 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.8 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.4 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 53.6 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.6 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 32.1 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.1 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.4 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.8 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.5 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.5 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.4 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.7 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 36.4 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.7 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 121 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.7 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 132.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.6 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 159.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.6 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.1 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.6 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 91.2 | C · 16th easiest | F · 1st hardest | much harder |

