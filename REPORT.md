# Fantasy ADP report — 2026-09-21

_Snapshot 2026-09-21 · 56 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.76 | 170.8 | 99.3 |
| SLEEPER | 2480 | 1 | 700.9 | 87.3 |
| YAHOO | 221 | 1.2 | 143.9 | 90 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2480 |
| YAHOO | exact | 203 |
| YAHOO | team | 18 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Blake Corum | RB | 144.4 | 100.2 | 100 | ESPN | 3.7 | CHEAPER on ESPN | 134 |
| Brian Thomas | WR | 135.5 | 74.1 | 84.1 | ESPN | 4.7 | CHEAPER on ESPN | 179 |
| Chris Godwin | WR | 140 | 92.5 | 93.5 | ESPN | 3.9 | CHEAPER on ESPN | 157 |
| De'Zhaun Stribling | WR | 155.3 | 138.2 | 108.3 | YAHOO | 3.2 | pricier on YAHOO | 128 |
| J.K. Dobbins | RB | 135.1 | 90.7 | 94.2 | ESPN | 3.6 | CHEAPER on ESPN | 165 |
| Jayden Reed | WR | 150.6 | 107.8 | 113 | ESPN | 3.3 | CHEAPER on ESPN | 170 |
| Jaylen Warren | RB | 112.7 | 69.4 | 75.3 | ESPN | 3.4 | CHEAPER on ESPN | 182 |
| Jordan Love | QB | 156.4 | 158.4 | 120.7 | YAHOO | 3.1 | pricier on YAHOO | 262 |
| Jordan Mason | RB | 159.5 | 109.4 | 110.5 | ESPN | 4.1 | CHEAPER on ESPN | 138 |
| Josh Downs | WR | 144.1 | 113.1 | 103.3 | ESPN | 3 | CHEAPER on ESPN | 158 |
| Josh Jacobs | RB | 120.5 | 52.9 | 70.2 | ESPN | 4.9 | CHEAPER on ESPN | 154 |
| KC Concepcion | WR | 160.6 | 120.7 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 156 |
| Kyler Murray | QB | 152.8 | 152.7 | 113.9 | YAHOO | 3.2 | pricier on YAHOO | 281 |
| Luther Burden | WR | 97.5 | 55.3 | 56.8 | ESPN | 3.5 | CHEAPER on ESPN | 194 |
| MarShawn Lloyd | RB | 131.2 | 137.3 | 84.4 | YAHOO | 4.2 | pricier on YAHOO | 115 |
| Quentin Johnston | WR | 150.4 | 111.7 | 105.2 | ESPN | 3.5 | CHEAPER on ESPN | 156 |
| Rico Dowdle | RB | 127.9 | 86.6 | 87.7 | ESPN | 3.4 | CHEAPER on ESPN | 156 |
| TreVeyon Henderson | RB | 103.5 | 61.9 | 70.6 | ESPN | 3.1 | CHEAPER on ESPN | 169 |
| Tucker Kraft | TE | 107.2 | 64.8 | 59.3 | ESPN | 3.8 | CHEAPER on ESPN | 160 |
| Tyler Shough | QB | 146.6 | 179.4 | 129 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 271 |


## Who’s rising


_Last 7 days, as of 2026-09-21. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 124.7 | 106.8 | 107.4 | 106.1 | 109.1 | 108.3 |
| Jalen Coker | WR | 154.8 | 137.9 | 149 | 147.3 | 133.3 | 130.4 |
| Caleb Williams | QB | 86.7 | 70.5 | 70.6 | 71.2 | 65.3 | 64.6 |
| Patrick Mahomes | QB | 110.1 | 97.7 | 110.7 | 110.4 | 106.1 | 105.6 |
| Dalton Kincaid | TE | 134 | 123.5 | 88.1 | 88.6 | 95.6 | 95 |
| Deebo Samuel | WR | 146 | 137.5 | 129.7 | 130.5 | 126.6 | 124.8 |
| Lamar Jackson | QB | 32.2 | 25.1 | 31.7 | 31.5 | 39 | 38.7 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rico Dowdle | RB | 100.8 | 126.7 | 86.5 | 86.2 | 87.4 | 87.7 |
| Courtland Sutton | WR | 85.4 | 110.4 | 79.7 | 79.6 | 109 | 109.3 |
| Jadarian Price | RB | 69.2 | 93.9 | 62.2 | 60.9 | 62.5 | 62.5 |
| Marvin Harrison | WR | 82.6 | 106.7 | 76.7 | 76.1 | 78.1 | 78.5 |
| Tony Pollard | RB | 89.1 | 112.9 | 83.9 | 84.4 | 86.3 | 86.7 |
| Jaylen Warren | RB | 88.4 | 112.1 | 71.3 | 70.4 | 75.2 | 75.3 |
| Matthew Stafford | QB | 95.4 | 117.9 | 94.1 | 94.3 | 98.9 | 99.1 |
| Alec Pierce | WR | 107.5 | 130 | 95.7 | 96.3 | 97.9 | 98.2 |
| Justin Herbert | QB | 87.6 | 110 | 83.7 | 83.7 | 69.9 | 70.1 |
| MarShawn Lloyd | RB | 108.5 | 130.7 | 137.7 | 137.5 | 83.8 | 84.2 |
| TreVeyon Henderson | RB | 83.2 | 104.6 | 60.1 | 60.7 | 70.3 | 70.6 |
| Carnell Tate | WR | 83.8 | 104.5 | 69.5 | 69.2 | 83.1 | 83.4 |
| Kyle Pitts | TE | 69.8 | 90.2 | 67.4 | 67.2 | 71.5 | 72 |
| Kenny Gainwell | RB | 102.9 | 122.9 | 111.7 | 111.8 | 121.3 | 121.4 |
| J.K. Dobbins | RB | 114.5 | 134.3 | 91.3 | 90.9 | 94 | 94.1 |
| Luther Burden | WR | 77.3 | 97.1 | 55.6 | 56.3 | 56.5 | 56.7 |
| Terry McLaurin | WR | 63.1 | 82.7 | 55 | 55.5 | 55.5 | 55.9 |
| Brian Thomas | WR | 115.7 | 135 | 74.6 | 74.3 | 83.8 | 84 |
| Jaylen Waddle | WR | 55.6 | 74.6 | 44.3 | 44.3 | 38.5 | 38.6 |
| Michael Pittman | WR | 92.9 | 111.3 | 104.4 | 105.5 | 122 | 122.1 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 272pts, RB27 169pts, WR35 170pts, TE13 157pts, K13 116pts, DEF13 85pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2321 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_7 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_46 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.8 | 10.7 | QB15 | QB11 | B | 267 | 296 |
| Brock Purdy | QB | 103.2 | 9.5 | QB13 | QB7 | A | 276 | 303 |
| Jalen Hurts | QB | 58.1 | 5.8 | QB6 | QB4 | B | 291 | 311 |
| Jaxson Dart | QB | 95.3 | 8.9 | QB10 | QB5 | B | 292 | 297 |
| Trevor Lawrence | QB | 102.1 | 9.4 | QB12 | QB8 | B | 267 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 52.1 | 5.3 | RB20 | RB15 | A | 249 | 197 |
| Chuba Hubbard | RB | 91.1 | 8.5 | RB31 | RB25 | B | 206 | 148 |
| Jaylen Warren | RB | 75.3 | 7.2 | RB27 | RB23 | B | 193 | 171 |
| Rhamondre Stevenson | RB | 78.3 | 7.4 | RB28 | RB24 | B | 185 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 67.2 | 6.5 | WR27 | WR21 | B | 211 | 208 |
| Garrett Wilson | WR | 45.4 | 4.7 | WR20 | WR16 | B | 215 | 225 |
| Mike Evans | WR | 70.8 | 6.8 | WR29 | WR23 | B | 176 | 222 |
| Parker Washington | WR | 74 | 7.1 | WR30 | WR15 | A | 229 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94.9 | 8.8 | TE10 | TE7 | B | 171 | 164 |
| George Kittle | TE | 79 | 7.5 | TE9 | TE6 | B | 180 | 169 |
| Isaiah Likely | TE | 104.7 | 9.6 | TE12 | TE8 | B | 174 | 157 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 152.7 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 146.6 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.1 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.8 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 142 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 57.7 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 103.2 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 29.1 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.3 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.6 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.2 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52.1 | C · 12th easiest | D · 6th hardest | harder |
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
| Puka Nacua | LAR | 11 | 5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.2 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 24.8 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.3 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.4 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.1 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 157.3 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 24.6 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 152.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.6 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79 | C · 16th easiest | F · 1st hardest | much harder |

