# Fantasy ADP report — 2026-10-19

_Snapshot 2026-10-19 · 84 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.76 | 170.1 | 100 |
| SLEEPER | 2498 | 1.4 | 700.9 | 85.3 |
| YAHOO | 220 | 1.3 | 143.9 | 90.5 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 199 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alec Pierce | WR | 140.1 | 96 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 131 |
| Blake Corum | RB | 144.4 | 100.1 | 100 | ESPN | 3.7 | CHEAPER on ESPN | 116 |
| Brian Thomas | WR | 141 | 74.9 | 84.8 | ESPN | 5.1 | CHEAPER on ESPN | 128 |
| Bryce Young | QB | 121.7 | 226.3 | 107 | SLEEPER | 9.3 | CHEAPER on SLEEPER | 229 |
| Chris Godwin | WR | 144.9 | 92 | 93.7 | ESPN | 4.3 | CHEAPER on ESPN | 137 |
| Dalton Kincaid | TE | 142.4 | 87.1 | 93.6 | ESPN | 4.3 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 106.7 | 46.9 | 52.9 | ESPN | 4.7 | CHEAPER on ESPN | 169 |
| Denzel Boston | WR | 137.7 | 169.4 | 117.2 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 136 |
| Jadarian Price | RB | 116.5 | 61.7 | 63.1 | ESPN | 4.5 | CHEAPER on ESPN | 140 |
| Jayden Reed | WR | 158.1 | 107.1 | 113 | ESPN | 4 | CHEAPER on ESPN | 198 |
| Jaylen Waddle | WR | 87.8 | 44.8 | 39 | ESPN | 3.8 | CHEAPER on ESPN | 169 |
| Jordan Mason | RB | 161.8 | 109.9 | 110.6 | ESPN | 4.3 | CHEAPER on ESPN | 132 |
| Justin Herbert | QB | 128.7 | 83.5 | 71.1 | ESPN | 4.3 | CHEAPER on ESPN | 213 |
| Luther Burden | WR | 104.5 | 56.6 | 57.3 | ESPN | 4 | CHEAPER on ESPN | 174 |
| MarShawn Lloyd | RB | 132.4 | 137.1 | 85.6 | YAHOO | 4.1 | pricier on YAHOO | 97 |
| Quentin Johnston | WR | 156.1 | 112.8 | 105.2 | ESPN | 3.9 | CHEAPER on ESPN | 117 |
| Rico Dowdle | RB | 137 | 86.3 | 88.5 | ESPN | 4.1 | CHEAPER on ESPN | 118 |
| TreVeyon Henderson | RB | 115.6 | 60.7 | 70.7 | ESPN | 4.2 | CHEAPER on ESPN | 125 |
| Tucker Kraft | TE | 108.3 | 64.2 | 59.6 | ESPN | 3.9 | CHEAPER on ESPN | 149 |
| Tyler Shough | QB | 147 | 181.8 | 122.2 | SLEEPER | 3.9 | CHEAPER on SLEEPER | 229 |


## Who’s rising


_Last 7 days, as of 2026-10-19. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Isaiah Likely | TE | 112.3 | 84.3 | 105.4 | 105.2 | 107.6 | 107.4 |
| Mike Evans | WR | 95 | 75.5 | 63.1 | 63 | 70.6 | 70.5 |
| Jordan Love | QB | 159.1 | 141.5 | 159.2 | 158.6 | 119.9 | 119.6 |
| Jaylen Warren | RB | 91.9 | 74.3 | 70.6 | 70 | 75 | 74.7 |
| Drake Maye | QB | 69.5 | 52.8 | 47 | 47.8 | 49.4 | 49.5 |
| Parker Washington | WR | 84.8 | 71.2 | 71.7 | 71.8 | 72.8 | 72.5 |
| Christian Watson | WR | 78.8 | 65.5 | 65.9 | 66.9 | 66.3 | 66 |
| Jayden Daniels | QB | 65.3 | 53.6 | 68.1 | 68.8 | 58.4 | 58.6 |
| Matthew Golden | WR | 110.6 | 100.2 | 125.9 | 125.7 | 122.1 | 121.5 |
| Woody Marks | RB | 161.2 | 151.7 | 148.3 | 147.2 | 130.3 | 129.6 |
| Jalen Coker | WR | 128.7 | 119.6 | 146.4 | 146.1 | 125.4 | 124.4 |
| Rhamondre Stevenson | RB | 109.8 | 101.1 | 78.3 | 78.2 | 74.1 | 74 |
| Jared Goff | QB | 121.8 | 113.4 | 131.5 | 131.2 | 109.7 | 109.3 |
| Bucky Irving | RB | 62.3 | 54.4 | 43.1 | 43.8 | 51.7 | 51.6 |
| Matthew Stafford | QB | 118.1 | 111.4 | 94.7 | 94.2 | 98.9 | 98.7 |
| Malik Nabers | WR | 43.1 | 36.7 | 27.3 | 27.3 | 30.1 | 30.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tyler Shough | QB | 116.8 | 145.1 | 182.1 | 181.6 | 123.4 | 122.4 |
| Deebo Samuel | WR | 125.3 | 148.3 | 130.4 | 130.8 | 120.5 | 120 |
| Quinshon Judkins | RB | 59.9 | 76.3 | 54 | 54.3 | 55 | 55 |
| David Montgomery | RB | 91.4 | 105.8 | 46 | 46.9 | 52.6 | 52.9 |
| Jalen Hurts | QB | 78.7 | 90.8 | 58.2 | 58.1 | 54.1 | 54.4 |
| Dak Prescott | QB | 81.1 | 92.9 | 77.7 | 77.1 | 72.6 | 72.5 |
| Juwan Johnson | TE | 131.3 | 142.5 | 175.1 | 175.6 | 119 | 118.8 |
| Harold Fannin | TE | 85.9 | 96.9 | 73.6 | 73.4 | 71.1 | 71.2 |
| Carnell Tate | WR | 102.1 | 112 | 69.1 | 69.1 | 84.1 | 84.1 |
| Dalton Kincaid | TE | 131.6 | 141.3 | 87.8 | 87.1 | 93.7 | 93.6 |
| Jaylen Waddle | WR | 78.3 | 87 | 44.7 | 44.8 | 38.8 | 39 |
| TreVeyon Henderson | RB | 108 | 115.8 | 60 | 60.7 | 70.5 | 70.6 |
| Jeremiyah Love | RB | 36.2 | 43.6 | 28.3 | 28.2 | 30.4 | 30.5 |
| Michael Wilson | WR | 95 | 102.2 | 87.9 | 88.1 | 100.6 | 100.3 |
| T.J. Hockenson | TE | 153.4 | 160.1 | 163.4 | 163.2 | 126.5 | 126.5 |
| Alvin Kamara | RB | 156.2 | 162.5 | 166.3 | 166 | 124.2 | 124.2 |
| Kyle Monangai | RB | 126.3 | 132.5 | 107.5 | 107.2 | 113.2 | 112.8 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 249pts, RB25 155pts, WR37 155pts, TE13 135pts, K13 100pts, DEF13 82pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2339 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_17 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_39 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.6 | 8.8 | QB9 | QB7 | B | 220 | 303 |
| Jared Goff | QB | 112.2 | 10.3 | QB13 | QB8 | B | 223 | 283 |
| Jayden Daniels | QB | 58.7 | 5.8 | QB5 | QB2 | B | 242 | 309 |
| Trevor Lawrence | QB | 100.8 | 9.3 | QB11 | QB6 | B | 223 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chuba Hubbard | RB | 80.7 | 7.6 | RB27 | RB23 | A | 178 | 148 |
| D'Andre Swift | RB | 49.3 | 5 | RB18 | RB13 | B | 168 | 208 |
| Jaylen Warren | RB | 72.7 | 7 | RB25 | RB17 | A | 175 | 171 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.9 | 6.4 | WR27 | WR21 | B | 168 | 208 |
| DK Metcalf | WR | 84.9 | 8 | WR34 | WR30 | B | 149 | 183 |
| Michael Wilson | WR | 100.3 | 9.3 | WR37 | WR34 | B | 144 | 166 |
| Mike Evans | WR | 70.5 | 6.8 | WR29 | WR15 | A | 177 | 222 |
| Parker Washington | WR | 71.3 | 6.9 | WR30 | WR18 | A | 179 | 212 |
| Tetairoa McMillan | WR | 38.6 | 4.1 | WR17 | WR10 | B | 195 | 223 |
| Zay Flowers | WR | 36.9 | 4 | WR15 | WR11 | B | 188 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.5 | 7.5 | TE9 | TE6 | B | 151 | 169 |
| Isaiah Likely | TE | 105.7 | 9.7 | TE12 | TE7 | A | 156 | 157 |
| Sam LaPorta | TE | 62.7 | 6.1 | TE5 | TE3 | B | 153 | 197 |
| Travis Kelce | TE | 94.1 | 8.8 | TE11 | TE9 | B | 124 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.3 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.7 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 100.8 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.9 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 147 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.1 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.3 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 161.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.7 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.6 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.5 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.7 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 15.9 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.9 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.6 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 13.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30.1 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.7 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 38.6 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 26.7 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.6 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48 | D · 8th hardest | A · 3rd easiest | much easier |
| Brock Bowers | LV | 13 | 21.8 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 73.5 | B · 9th easiest | B · 6th easiest | easier |
| Dalton Kincaid | BUF | 7 | 93.6 | D · 5th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.6 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.1 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.5 | C · 16th easiest | F · 1st hardest | much harder |

