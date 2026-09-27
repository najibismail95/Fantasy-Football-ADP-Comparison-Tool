# Fantasy ADP report — 2026-09-27

_Snapshot 2026-09-27 · 62 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 348 | 1.89 | 170.6 | 99.3 |
| SLEEPER | 2480 | 1 | 700.9 | 88.7 |
| YAHOO | 213 | 1.2 | 143.9 | 89.7 |


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
| Alec Pierce | WR | 135.6 | 96.7 | 98.3 | ESPN | 3.2 | CHEAPER on ESPN | 145 |
| Blake Corum | RB | 143 | 100.6 | 99.9 | ESPN | 3.6 | CHEAPER on ESPN | 137 |
| Brian Thomas | WR | 136 | 74.6 | 84.4 | ESPN | 4.7 | CHEAPER on ESPN | 179 |
| Bryce Young | QB | 138.6 | 226.3 | 114.8 | SLEEPER | 8.3 | CHEAPER on SLEEPER | 245 |
| Caleb Williams | QB | 111.9 | 71.1 | 64.6 | ESPN | 3.7 | CHEAPER on ESPN | 270 |
| Chris Godwin | WR | 142.2 | 92 | 93.4 | ESPN | 4.1 | CHEAPER on ESPN | 156 |
| J.K. Dobbins | RB | 137.9 | 91.9 | 94.3 | ESPN | 3.7 | CHEAPER on ESPN | 165 |
| Jacory Croskey-Merritt | RB | 148.5 | 115.8 | 104.6 | ESPN | 3.2 | CHEAPER on ESPN | 134 |
| Jadarian Price | RB | 102.1 | 60.1 | 62.6 | ESPN | 3.4 | CHEAPER on ESPN | 168 |
| Jayden Reed | WR | 154.8 | 107.6 | 113 | ESPN | 3.7 | CHEAPER on ESPN | 154 |
| Jaylen Warren | RB | 114.9 | 70.2 | 75.4 | ESPN | 3.5 | CHEAPER on ESPN | 183 |
| Jordan Mason | RB | 163 | 109.2 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 138 |
| Justin Herbert | QB | 116.8 | 83.2 | 70.4 | ESPN | 3.3 | CHEAPER on ESPN | 266 |
| KC Concepcion | WR | 160.5 | 120.1 | 122 | ESPN | 3.3 | CHEAPER on ESPN | 157 |
| Luther Burden | WR | 104.1 | 56.4 | 57 | ESPN | 3.9 | CHEAPER on ESPN | 192 |
| MarShawn Lloyd | RB | 132.9 | 137.6 | 84.9 | YAHOO | 4.2 | pricier on YAHOO | 115 |
| Quentin Johnston | WR | 152.1 | 112.7 | 105.2 | ESPN | 3.6 | CHEAPER on ESPN | 159 |
| Rico Dowdle | RB | 134.4 | 86.2 | 87.9 | ESPN | 3.9 | CHEAPER on ESPN | 151 |
| Tucker Kraft | TE | 113.8 | 64.4 | 59.4 | ESPN | 4.3 | CHEAPER on ESPN | 163 |
| Tyler Shough | QB | 130.2 | 179.9 | 127.4 | SLEEPER | 4.3 | CHEAPER on SLEEPER | 272 |


## Who’s rising


_Last 7 days, as of 2026-09-27. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 128.3 | 98.3 | 88.2 | 88 | 95.1 | 94.5 |
| Patrick Mahomes | QB | 100.2 | 77.5 | 110.2 | 110.1 | 105.7 | 105 |
| Bryce Young | QB | 160.7 | 142 | — | — | 120.2 | 115.3 |
| Jalen Coker | WR | 141.2 | 123 | 147.5 | 146.2 | 130.9 | 128.2 |
| Tyler Shough | QB | 150.6 | 133.3 | 181.2 | 179.5 | 129.3 | 127.7 |
| Travis Kelce | TE | 102.1 | 85.3 | 89.9 | 89.1 | 95.1 | 94.8 |
| Parker Washington | WR | 106 | 91.2 | 71.5 | 71.9 | 74.1 | 73.6 |
| Brock Purdy | QB | 103.5 | 89.3 | 122.6 | 122.2 | 97.3 | 96.5 |
| Jared Goff | QB | 144.7 | 131.2 | 131.5 | 131.7 | 111 | 110.6 |
| Chuba Hubbard | RB | 117.4 | 104.8 | 81.3 | 80.7 | 91.1 | 90.8 |
| Davante Adams | WR | 59.3 | 50.6 | 51.3 | 50.5 | 59.4 | 59.4 |
| Christian Watson | WR | 102 | 94.1 | 66.1 | 66 | 67.4 | 66.9 |
| Isaiah Likely | TE | 112.2 | 104.5 | 106.8 | 105.2 | 108.4 | 107.9 |
| George Kittle | TE | 76.1 | 68.9 | 80.1 | 79.6 | 79.6 | 79.3 |
| Stefon Diggs | WR | 116.2 | 109 | 104.3 | 104 | 107.9 | 107.4 |
| Dak Prescott | QB | 87.7 | 80.8 | 77.8 | 77 | 73.2 | 73.1 |
| Kenneth Walker | RB | 26.6 | 19.6 | 19 | 19.5 | 14.1 | 14 |
| Bucky Irving | RB | 72.3 | 65.4 | 43.2 | 43.7 | 52.2 | 52 |
| Matthew Stafford | QB | 117.5 | 111.2 | 94.5 | 94.6 | 99.1 | 99.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Caleb Williams | QB | 72.1 | 105.5 | 71 | 71.2 | 64.7 | 64.6 |
| Dallas Goedert | TE | 107.8 | 131 | 119.2 | 119.2 | 103.3 | 103.2 |
| Jaxson Dart | QB | 81.1 | 96.3 | 97.4 | 97.1 | 95.4 | 95.3 |
| DJ Moore | WR | 69 | 84 | 53.9 | 53.6 | 56.6 | 56.7 |
| Jayden Daniels | QB | 51.5 | 65.7 | 68.7 | 68.1 | 57.6 | 57.9 |
| Mike Evans | WR | 86.6 | 98.4 | 63.1 | 62.7 | 70.8 | 70.7 |
| Rhamondre Stevenson | RB | 95.4 | 106.1 | 78 | 78.6 | 74.2 | 74.1 |
| Kyle Pitts | TE | 88.3 | 98.2 | 67.4 | 67.7 | 71.9 | 72.6 |
| Tucker Kraft | TE | 103.7 | 113.1 | 64.2 | 64.1 | 59.2 | 59.4 |
| Harold Fannin | TE | 88.1 | 97.2 | 73.1 | 73.3 | 70.2 | 70.8 |
| Bo Nix | QB | 120.2 | 129.2 | 116.3 | 116.2 | 98.2 | 98.4 |
| Colston Loveland | TE | 45.5 | 54.4 | 39 | 39.3 | 39.3 | 39.7 |
| Jadarian Price | RB | 93.2 | 101.5 | 61.2 | 60.2 | 62.5 | 62.6 |
| Nico Collins | WR | 29.6 | 37.9 | 23.9 | 23.5 | 20.9 | 21 |
| Rico Dowdle | RB | 125.7 | 133.6 | 86 | 86.3 | 87.7 | 87.9 |
| David Montgomery | RB | 72.6 | 80.5 | 46.8 | 46.3 | 52.8 | 52.6 |
| Justin Herbert | QB | 108.3 | 116.1 | 83.7 | 83.2 | 70 | 70.4 |
| Rome Odunze | WR | 87.2 | 95 | 65.7 | 65.5 | 67.7 | 67.9 |
| Trevor Lawrence | QB | 106.5 | 114.2 | 102.1 | 102.6 | 81 | 80.6 |
| Travis Etienne | RB | 53.2 | 60.6 | 42.1 | 42.1 | 41.1 | 41.3 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 273pts, RB27 168pts, WR35 169pts, TE13 156pts, K13 116pts, DEF13 86pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2325 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_9 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_43 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.2 | 10.6 | QB14 | QB11 | B | 262 | 296 |
| Brock Purdy | QB | 96.4 | 8.9 | QB10 | QB5 | B | 283 | 303 |
| Jalen Hurts | QB | 58.8 | 5.8 | QB5 | QB4 | B | 288 | 311 |
| Patrick Mahomes | QB | 104.9 | 9.7 | QB13 | QB9 | B | 274 | 287 |
| Trevor Lawrence | QB | 102.5 | 9.5 | QB12 | QB8 | B | 266 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.9 | 5.2 | RB20 | RB15 | A | 246 | 197 |
| Chuba Hubbard | RB | 90.8 | 8.5 | RB31 | RB24 | A | 211 | 148 |
| Jaylen Warren | RB | 75.4 | 7.2 | RB26 | RB23 | B | 196 | 171 |
| Rhamondre Stevenson | RB | 78.9 | 7.5 | RB27 | RB25 | B | 184 | 169 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 66.9 | 6.5 | WR27 | WR23 | B | 205 | 208 |
| Garrett Wilson | WR | 44.7 | 4.6 | WR18 | WR14 | B | 217 | 225 |
| Mike Evans | WR | 70.7 | 6.8 | WR29 | WR24 | B | 179 | 222 |
| Parker Washington | WR | 73.6 | 7 | WR30 | WR15 | A | 229 | 212 |
| Zay Flowers | WR | 41.6 | 4.4 | WR16 | WR11 | B | 229 | 228 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dalton Kincaid | TE | 94.4 | 8.8 | TE11 | TE9 | B | 172 | 164 |
| George Kittle | TE | 79.2 | 7.5 | TE9 | TE7 | B | 184 | 169 |
| Isaiah Likely | TE | 105.7 | 9.7 | TE12 | TE8 | B | 183 | 157 |
| Travis Kelce | TE | 89.1 | 8.3 | TE10 | TE6 | A | 185 | 171 |
| Tyler Warren | TE | 48.7 | 5 | TE4 | TE3 | B | 181 | 201 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.4 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 99.1 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 102.5 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.1 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 130.2 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.2 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 162.9 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 68.1 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 96.4 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.4 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.6 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.3 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne | NO | 8 | 42.4 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 16.6 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 52.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.1 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker | KC | 5 | 19.1 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.3 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.7 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.2 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.8 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.1 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.9 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.2 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.1 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 25.4 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.1 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 44.7 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.4 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.7 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 161.3 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 27.5 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts | ATL | 11 | 72.6 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 154.9 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.5 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.8 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 39.8 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 79.2 | C · 16th easiest | F · 1st hardest | much harder |

