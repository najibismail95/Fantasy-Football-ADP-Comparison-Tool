# Fantasy ADP report — 2026-11-10

_Snapshot 2026-11-10 · 106 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.79 | 170.1 | 98.3 |
| SLEEPER | 2498 | 1.4 | 700.9 | 87 |
| YAHOO | 221 | 1.2 | 143.9 | 87.8 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 200 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas Jr. | WR | 142.7 | 74.5 | 84.9 | ESPN | 5.3 | CHEAPER on ESPN | 124 |
| C.J. Stroud | QB | 140.3 | 199.2 | 123.9 | SLEEPER | 5.6 | CHEAPER on SLEEPER | 209 |
| Chris Godwin Jr. | WR | 147.6 | 92.6 | 94 | ESPN | 4.5 | CHEAPER on ESPN | 115 |
| David Montgomery | RB | 117.6 | 46.7 | 53.5 | ESPN | 5.6 | CHEAPER on ESPN | 148 |
| J.K. Dobbins | RB | 142.7 | 91.7 | 94.9 | ESPN | 4.1 | CHEAPER on ESPN | 107 |
| Jacory Croskey-Merritt | RB | 157.9 | 115.3 | 104.4 | ESPN | 4 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 118 | 61.4 | 63.2 | ESPN | 4.6 | CHEAPER on ESPN | 125 |
| Jalen Hurts | QB | 110.3 | 58.7 | 54.5 | ESPN | 4.5 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 94.8 | 44.4 | 39.4 | ESPN | 4.4 | CHEAPER on ESPN | 161 |
| Jordan Love | QB | 107.2 | 158.7 | 119 | SLEEPER | 3.8 | CHEAPER on SLEEPER | 214 |
| Jordan Mason | RB | 162.8 | 109.3 | 110.6 | ESPN | 4.4 | CHEAPER on ESPN | 115 |
| Justin Herbert | QB | 133 | 83 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 200 |
| Ladd McConkey | WR | 86.9 | 35 | 46.4 | ESPN | 3.8 | CHEAPER on ESPN | 161 |
| MarShawn Lloyd | RB | 139.9 | 137.7 | 85.6 | YAHOO | 4.4 | pricier on YAHOO | 95 |
| Marvin Harrison Jr. | WR | 125.1 | 76.5 | 79.4 | ESPN | 3.9 | CHEAPER on ESPN | 121 |
| Matthew Golden | WR | 62 | 125.2 | 120 | ESPN | 5.1 | pricier on ESPN | 159 |
| Quentin Johnston | WR | 156.6 | 111.8 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 111 |
| Rico Dowdle | RB | 135.5 | 86.9 | 88.8 | ESPN | 4 | CHEAPER on ESPN | 124 |
| Terry McLaurin | WR | 113 | 55 | 56.9 | ESPN | 4.8 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 125.3 | 60.4 | 71 | ESPN | 5 | CHEAPER on ESPN | 107 |


## Who’s rising


_Last 7 days, as of 2026-11-10. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jonah Coleman | RB | 157.5 | 123.8 | 164.8 | 164.4 | 126.7 | 124.5 |
| Jordan Love | QB | 128 | 111.9 | 158.8 | 158.7 | 119.2 | 119 |
| Matthew Golden | WR | 79.9 | 64.8 | 125.5 | 125.3 | 120.5 | 120.1 |
| Tyler Allgeier | RB | 164.1 | 149 | 143.3 | 143.1 | 129.1 | 128.8 |
| Tee Higgins | WR | 44.9 | 32.7 | 36 | 36 | 34.5 | 34.5 |
| Joe Burrow | QB | 46.3 | 34.2 | 52.3 | 52.3 | 51.3 | 51.2 |
| Tony Pollard | RB | 99.7 | 87.6 | 84.1 | 83.9 | 87.3 | 87.2 |
| Dalton Kincaid | TE | 140.3 | 129.5 | 88.1 | 88.2 | 93.4 | 93.4 |
| Braelon Allen | RB | 154.1 | 143.7 | — | — | 119.1 | 116.8 |
| Bhayshul Tuten | RB | 65.1 | 55.8 | 62.4 | 62.4 | 61.1 | 60.9 |
| Chuba Hubbard | RB | 72.9 | 63.7 | 80 | 80.3 | 88.7 | 88.4 |
| D'Andre Swift | RB | 51.6 | 42.5 | 49.1 | 49.1 | 43.6 | 43.5 |
| Trevor Lawrence | QB | 86.1 | 77.3 | 102.5 | 102.2 | 79.2 | 79.1 |
| Michael Wilson | WR | 113.8 | 105.1 | 87.3 | 87.3 | 99.9 | 99.7 |
| C.J. Stroud | QB | 151.5 | 143.8 | 199.2 | 199.2 | 124.2 | 124 |
| Luther Burden III | WR | 80.1 | 72.4 | 55.8 | 55.8 | 57.2 | 57.2 |
| Harold Fannin Jr. | TE | 99.6 | 92.8 | 73.8 | 73.9 | 71.4 | 71.5 |
| Christian Watson | WR | 65 | 58.4 | 66.7 | 66.2 | 65.6 | 65.4 |
| DJ Moore | WR | 89.2 | 82.7 | 53.9 | 53 | 57.1 | 57.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lamar Jackson | QB | 44.5 | 76.6 | 31.6 | 31.8 | 38.5 | 38.7 |
| Zay Flowers | WR | 30.4 | 46.2 | 41.4 | 41.5 | 34.8 | 34.8 |
| Omar Cooper Jr. | WR | 152.7 | 164.9 | 192.2 | 191.9 | — | — |
| Jordan Mason | RB | 151.7 | 162.3 | 109.1 | 109.3 | 110.6 | 110.6 |
| Hunter Henry | TE | 146.7 | 157.1 | 141.9 | 141 | 127.2 | 127.2 |
| Zach Charbonnet | RB | 140.3 | 150.3 | 149.5 | 149.5 | — | — |
| Tre Tucker | WR | 145.4 | 155.1 | — | — | 124.3 | 122.6 |
| A.J. Brown | WR | 43.5 | 52 | 17.1 | 17.2 | 27 | 27.2 |
| Jeremiyah Love | RB | 47.8 | 56.1 | 28.3 | 28 | 30.7 | 30.9 |
| Garrett Wilson | WR | 45.3 | 52.2 | 45.2 | 45.5 | 45.3 | 45.3 |
| DeVonta Smith | WR | 59.3 | 66.3 | 33.9 | 33.1 | 29.8 | 29.9 |
| Davante Adams | WR | 91.7 | 98.4 | 50.5 | 50.7 | 59.2 | 59.3 |
| Parker Washington | WR | 67.8 | 74.4 | 71.8 | 71.8 | 72.1 | 72 |
| Jalen Coker | WR | 112.8 | 119.1 | 146.5 | 146.4 | 122.6 | 122.1 |
| Jalen Hurts | QB | 103.8 | 110.1 | 58.6 | 58.7 | 54.5 | 54.5 |
| George Pickens | WR | 39.4 | 45.4 | 22.5 | 22.6 | 23.1 | 23.1 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 218pts, RB27 144pts, WR35 147pts, TE13 122pts, K13 96pts, DEF13 74pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2333 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_25 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_37 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 93.8 | 8.7 | QB9 | QB6 | B | 170 | 303 |
| Trevor Lawrence | QB | 79.1 | 7.5 | QB7 | QB5 | B | 177 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bhayshul Tuten | RB | 60.9 | 6 | RB22 | RB15 | B | 144 | 175 |
| Bucky Irving | RB | 46.6 | 4.8 | RB19 | RB11 | B | 151 | 197 |
| Chuba Hubbard | RB | 79.1 | 7.5 | RB28 | RB16 | A | 168 | 148 |
| Tony Pollard | RB | 87.1 | 8.2 | RB29 | RB22 | A | 139 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.4 | 6.4 | WR24 | WR13 | B | 135 | 208 |
| Matthew Golden | WR | 120 | 10.9 | WR39 | WR23 | A | 148 | 170 |
| Mike Evans | WR | 70.3 | 6.8 | WR26 | WR18 | B | 107 | 222 |
| Parker Washington | WR | 72 | 6.9 | WR27 | WR16 | A | 124 | 212 |
| Tetairoa McMillan | WR | 42.1 | 4.4 | WR16 | WR11 | B | 136 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78 | 7.4 | TE9 | TE4 | A | 129 | 169 |
| Isaiah Likely | TE | 105.4 | 9.7 | TE12 | TE8 | B | 112 | 157 |
| Travis Kelce | TE | 94 | 8.8 | TE11 | TE7 | B | 105 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 150.6 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 79.1 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.3 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 147.7 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.7 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.7 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59.1 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 93.8 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.9 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 60.9 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.5 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.5 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.5 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 46.6 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 27.8 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.2 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.3 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.1 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.5 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.1 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.6 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 137.3 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 21.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 74 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.6 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.4 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78 | C · 16th easiest | F · 1st hardest | much harder |

