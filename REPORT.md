# Fantasy ADP report — 2026-09-24

_Snapshot 2026-09-24 · 59 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.85 | 170.5 | 99.7 |
| SLEEPER | 2480 | 1 | 700.9 | 89 |
| YAHOO | 213 | 1.2 | 143.9 | 89.2 |


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
| Alec Pierce | WR | 132.7 | 95.2 | 98.2 | ESPN | 3 | CHEAPER on ESPN | 145 |
| Blake Corum | RB | 143.6 | 100.8 | 99.9 | ESPN | 3.6 | CHEAPER on ESPN | 137 |
| Brian Thomas | WR | 135.3 | 74.8 | 84.3 | ESPN | 4.6 | CHEAPER on ESPN | 179 |
| Chris Godwin | WR | 140.9 | 92.2 | 93.4 | ESPN | 4 | CHEAPER on ESPN | 156 |
| J.K. Dobbins | RB | 137.3 | 91 | 94.3 | ESPN | 3.7 | CHEAPER on ESPN | 165 |
| Jacory Croskey-Merritt | RB | 146.4 | 115.1 | 104.6 | ESPN | 3 | CHEAPER on ESPN | 134 |
| Jadarian Price | RB | 99 | 59.8 | 62.6 | ESPN | 3.2 | CHEAPER on ESPN | 168 |
| Jayden Reed | WR | 152.6 | 107.7 | 113 | ESPN | 3.5 | CHEAPER on ESPN | 154 |
| Jaylen Warren | RB | 113.9 | 70.3 | 75.4 | ESPN | 3.4 | CHEAPER on ESPN | 183 |
| Jonathon Brooks | RB | 129.2 | 98.6 | 89.9 | ESPN | 2.9 | CHEAPER on ESPN | 155 |
| Jordan Love | QB | 158 | 158.7 | 120.5 | YAHOO | 3.2 | pricier on YAHOO | 260 |
| Jordan Mason | RB | 161.9 | 109.3 | 110.6 | ESPN | 4.3 | CHEAPER on ESPN | 138 |
| Justin Herbert | QB | 114.4 | 83.3 | 70.3 | ESPN | 3.1 | CHEAPER on ESPN | 266 |
| KC Concepcion | WR | 160.6 | 119.6 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 157 |
| Luther Burden | WR | 101.1 | 56.5 | 56.9 | ESPN | 3.7 | CHEAPER on ESPN | 192 |
| MarShawn Lloyd | RB | 131.9 | 137.9 | 84.7 | YAHOO | 4.2 | pricier on YAHOO | 115 |
| Quentin Johnston | WR | 151 | 112.9 | 105.2 | ESPN | 3.5 | CHEAPER on ESPN | 159 |
| Rico Dowdle | RB | 131.4 | 86.4 | 87.8 | ESPN | 3.7 | CHEAPER on ESPN | 151 |
| Tucker Kraft | TE | 111.1 | 64.6 | 59.3 | ESPN | 4.1 | CHEAPER on ESPN | 163 |
| Tyler Shough | QB | 139.3 | 179.8 | 128.2 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-24. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 136.3 | 108.5 | 88.5 | 88 | 95.3 | 94.7 |
| Isaiah Likely | TE | 124.6 | 101.5 | 106.5 | 105.4 | 108.8 | 108 |
| Jalen Coker | WR | 150.7 | 129.7 | 147.7 | 146.4 | 132.3 | 129.1 |
| Patrick Mahomes | QB | 108 | 87 | 110.5 | 110.5 | 105.9 | 105.3 |
| Bryce Young | QB | 163 | 152 | — | — | 120.1 | 117.7 |
| Tyler Shough | QB | 152.9 | 142.1 | 181.8 | 179.5 | 129.6 | 128.5 |
| Brock Purdy | QB | 107.6 | 98.1 | 122.3 | 122.6 | 97.6 | 96.8 |
| Chuba Hubbard | RB | 118.2 | 110.7 | 80.9 | 81.1 | 91.1 | 91 |
| Jared Goff | QB | 143.4 | 136.3 | 131.5 | 131.5 | 111.1 | 110.8 |
| Kenneth Walker | RB | 27.4 | 20.8 | 19.1 | 19.6 | 14.2 | 14 |
| Deebo Samuel | WR | 143.6 | 137.3 | 130.6 | 130.3 | 126.1 | 124 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kyle Pitts | TE | 78.3 | 94.4 | 67.7 | 67.6 | 71.7 | 72.4 |
| Justin Herbert | QB | 98.1 | 113.3 | 83.5 | 83.5 | 69.9 | 70.3 |
| Rico Dowdle | RB | 115.2 | 130 | 86.5 | 86.5 | 87.6 | 87.8 |
| Courtland Sutton | WR | 99 | 113.6 | 79.5 | 80.1 | 109.2 | 109.3 |
| Bo Nix | QB | 113.2 | 127.3 | 116.5 | 116.6 | 98.1 | 98.3 |
| Jadarian Price | RB | 83 | 97.1 | 61.5 | 60.2 | 62.6 | 62.5 |
| Harold Fannin | TE | 79.5 | 93.1 | 73.4 | 73.4 | 70 | 70.6 |
| Michael Pittman | WR | 101.7 | 114.9 | 105.4 | 106.3 | 122 | 122.1 |
| Marvin Harrison | WR | 96 | 109.2 | 76.6 | 76.6 | 78.2 | 78.8 |
| Tony Pollard | RB | 102.2 | 114.9 | 83.5 | 85.8 | 86.5 | 86.9 |
| Carnell Tate | WR | 94.3 | 106.2 | 69.4 | 69.6 | 83.2 | 83.5 |
| Rhamondre Stevenson | RB | 88.9 | 100.7 | 78.1 | 78.2 | 74.3 | 74.1 |
| Luther Burden | WR | 88.2 | 99.6 | 56.2 | 56.1 | 56.6 | 56.9 |
| Jaylen Warren | RB | 101.9 | 113.1 | 70.2 | 70.4 | 75.3 | 75.4 |
| Tucker Kraft | TE | 98.6 | 109.6 | 64.4 | 64.2 | 59.2 | 59.3 |
| Quinshon Judkins | RB | 58 | 68.8 | 53.5 | 54 | 54.6 | 54.8 |
| Terry McLaurin | WR | 73.4 | 83.9 | 55.8 | 55.5 | 55.7 | 56.1 |
| Jameson Williams | WR | 75.6 | 86.1 | 59.5 | 59.1 | 64.4 | 64.5 |
| MarShawn Lloyd | RB | 121.3 | 131.6 | 137.5 | 137.4 | 83.8 | 84.6 |
| DJ Moore | WR | 66.9 | 77.3 | 53.7 | 53.7 | 56.6 | 56.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 273pts, RB27 168pts, WR35 169pts, TE13 156pts, K13 116pts, DEF13 86pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2325 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_9 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_46 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.4 | 10.6 | QB14 | QB11 | B | 262 | 296 |
| Brock Purdy | QB | 96.6 | 9 | QB10 | QB5 | B | 283 | 303 |
| Jalen Hurts | QB | 58.9 | 5.8 | QB5 | QB4 | B | 288 | 311 |
| Patrick Mahomes | QB | 105.1 | 9.7 | QB13 | QB9 | B | 274 | 287 |
| Trevor Lawrence | QB | 101.3 | 9.4 | QB12 | QB8 | B | 266 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 52 | 5.3 | RB20 | RB15 | A | 246 | 197 |
| Chuba Hubbard | RB | 90.9 | 8.5 | RB31 | RB24 | A | 211 | 148 |
| Jaylen Warren | RB | 75.4 | 7.2 | RB26 | RB23 | B | 196 | 171 |
| Rhamondre Stevenson | RB | 78 | 7.4 | RB27 | RB25 | B | 184 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 67 | 6.5 | WR27 | WR22 | B | 205 | 208 |
| Garrett Wilson | WR | 45.4 | 4.7 | WR20 | WR14 | B | 217 | 225 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR24 | B | 179 | 222 |
| Parker Washington | WR | 73.7 | 7.1 | WR30 | WR15 | A | 229 | 212 |
| Zay Flowers | WR | 41.7 | 4.4 | WR16 | WR11 | B | 229 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94.6 | 8.8 | TE11 | TE9 | B | 172 | 164 |
| George Kittle | TE | 79.3 | 7.5 | TE9 | TE7 | B | 184 | 169 |
| Isaiah Likely | TE | 105.9 | 9.7 | TE12 | TE8 | B | 183 | 157 |
| Travis Kelce | TE | 91.6 | 8.6 | TE10 | TE6 | A | 185 | 171 |
| Tyler Warren | TE | 47.2 | 4.8 | TE4 | TE3 | B | 181 | 201 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 151.5 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 101.3 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 95.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 139.3 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.9 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.4 | C · 12th hardest | D · 6th hardest | much harder |
| Jayden Daniels | WAS | 7 | 60.6 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 96.6 | C · 13th easiest | F · 2nd hardest | much harder |
| Malik Willis | MIA | 6 | 166.1 | C · 12th easiest | F · 1st hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 41.5 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.2 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 52 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.2 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.5 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.2 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.7 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 12.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.1 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.2 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.9 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25.2 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.4 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.6 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.2 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 159.5 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 26.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.5 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 160.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.6 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.3 | C · 16th easiest | F · 1st hardest | much harder |

