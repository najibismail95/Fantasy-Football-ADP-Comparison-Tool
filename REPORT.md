# Fantasy ADP report — 2026-08-27

_Snapshot 2026-08-27 · 31 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 167 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.41 | 171.7 | 98.7 |
| SLEEPER | 1644 | 1.3 | 700.8 | 84.7 |
| YAHOO | 223 | 1.4 | 144.6 | 89.7 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1165 |
| ESPN | id | 475 |
| ESPN | team | 110 |
| SLEEPER | id | 1644 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 135.1 | 103.6 | 99.5 | ESPN | 2.8 | CHEAPER on ESPN | 147 |
| Brian Robinson | RB | 164.5 | 155.4 | 121.4 | YAHOO | 3.2 | pricier on YAHOO | 82 |
| Chris Godwin | WR | 142 | 95.4 | 97.5 | ESPN | 3.8 | CHEAPER on ESPN | 165 |
| Chuba Hubbard | RB | 121.6 | 77.6 | 85.6 | ESPN | 3.3 | CHEAPER on ESPN | 160 |
| Dalton Kincaid | TE | 131.3 | 87.7 | 98.9 | ESPN | 3.2 | CHEAPER on ESPN | 160 |
| De'Zhaun Stribling | WR | 149.3 | 137 | 112.2 | YAHOO | 2.6 | pricier on YAHOO | 139 |
| Kyler Murray | QB | 146.2 | 159 | 111.9 | YAHOO | 3.4 | pricier on YAHOO | 267 |
| T.J. Hockenson | TE | 132.8 | 164.7 | 129.2 | SLEEPER | 2.8 | CHEAPER on SLEEPER | 157 |
| Travis Hunter | WR | 121.1 | 167.2 | 126.3 | SLEEPER | 3.6 | CHEAPER on SLEEPER | 107 |


## Who’s rising


_Last 7 days, as of 2026-08-27. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| De'Zhaun Stribling | WR | 162.7 | 150.3 | 161.6 | 149.7 | 126.7 | 113.4 |
| Jonathon Brooks | RB | 126 | 115.9 | 120.4 | 108.1 | 101.8 | 96.6 |
| Rhamondre Stevenson | RB | 100.9 | 83.8 | 85 | 81.2 | 81 | 79.9 |
| Xavier Worthy | WR | 136.9 | 122.8 | 139.3 | 139.6 | 128.7 | 128.9 |
| Jayden Reed | WR | 138.1 | 125.3 | 114.1 | 114 | 120 | 119 |
| Jordan Mason | RB | 150.7 | 139.6 | 120.2 | 117.5 | 118.4 | 115.5 |
| Rashid Shaheed | WR | 159.1 | 154.7 | 158 | 147.4 | 128.4 | 128.4 |
| Tucker Kraft | TE | 97.7 | 89.4 | 65.5 | 62.9 | 61.1 | 60.8 |
| Jordan Addison | WR | 122.1 | 114.8 | 105.4 | 104 | 118.1 | 117.1 |
| J.K. Dobbins | RB | 123.1 | 116.2 | 92.6 | 94.7 | 97.9 | 96.4 |
| Deebo Samuel | WR | 137.4 | 130.6 | 137.1 | 137.8 | 127.8 | 127.5 |
| Jacory Croskey-Merritt | RB | 138.3 | 131.5 | 112.1 | 115.1 | 114.5 | 110.5 |
| Christian Watson | WR | 101.5 | 95.4 | 70.6 | 70.1 | 67.8 | 67.7 |
| KC Concepcion | WR | 150.7 | 144.7 | 127.8 | 122.5 | 131.2 | 127.3 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jordyn Tyson | WR | 111.3 | 165.4 | 77.3 | 87.2 | 92.1 | 94.9 |
| Kenyon Sadiq | TE | 140.4 | 147 | 144.3 | 151.4 | 130 | 130 |
| Tyler Shough | QB | 155.6 | 155.5 | 168.1 | 182.9 | 130 | 130.1 |
| Josh Downs | WR | 121.7 | 135.2 | 110.6 | 107.2 | 112 | 108.8 |
| Jaxson Dart | QB | 76.2 | 76.2 | 82.5 | 91 | 85.4 | 88.5 |
| Jakobi Meyers | WR | 116.3 | 113.1 | 103.3 | 111.4 | 128.4 | 129.2 |
| Tony Pollard | RB | 98.9 | 106.3 | 87.4 | 84.2 | 85.7 | 85.5 |
| Wan'Dale Robinson | WR | 118.1 | 113.8 | 109.3 | 116.6 | 130.9 | 130.9 |
| Makai Lemon | WR | 136 | 142 | 86.5 | 87.3 | 108.9 | 112.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_1485 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_6 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_43 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 99.6 | 9.2 | QB13 | QB9 | B | 296 | 296 |
| Brock Purdy | QB | 102.4 | 9.5 | QB14 | QB8 | B | 292 | 303 |
| Jalen Hurts | QB | 56.9 | 5.7 | QB6 | QB4 | B | 320 | 311 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D'Andre Swift | RB | 55.1 | 5.5 | RB23 | RB21 | B | 212 | 208 |
| Quinshon Judkins | RB | 53.6 | 5.4 | RB22 | RB20 | B | 227 | 196 |
| Rhamondre Stevenson | RB | 80.6 | 7.6 | RB28 | RB25 | B | 203 | 169 |
| Travis Etienne | RB | 43.3 | 4.5 | RB18 | RB17 | B | 246 | 208 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Garrett Wilson | WR | 44.6 | 4.6 | WR19 | WR14 | B | 249 | 225 |
| Parker Washington | WR | 81.3 | 7.7 | WR33 | WR28 | B | 187 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | B | 189 | 180 |
| Jake Ferguson | TE | 111.1 | 10.2 | TE14 | TE12 | B | 167 | 160 |
| Sam LaPorta | TE | 63.1 | 6.2 | TE6 | TE5 | B | 189 | 197 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 146.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 96.2 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 92.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 88.8 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 155.4 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | DEN | 10 | 99.6 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.2 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 54.1 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 102.4 | C · 13th easiest | F · 2nd hardest | much harder |
| Malik Willis | MIA | 6 | 159.3 | C · 12th easiest | F · 1st hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 26.9 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.5 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 43.3 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.6 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.4 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 53.3 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 13.4 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.3 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 5.6 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 32 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.1 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.6 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 4.8 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.5 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 41.3 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.6 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.6 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 35.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 120.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.2 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 132.8 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 69.1 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 160.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 154.1 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 63.1 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 40.9 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 89.9 | C · 16th easiest | F · 1st hardest | much harder |

