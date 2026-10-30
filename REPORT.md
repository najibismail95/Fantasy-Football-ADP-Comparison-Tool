# Fantasy ADP report — 2026-10-30

_Snapshot 2026-10-30 · 95 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.7 | 170.1 | 98.3 |
| SLEEPER | 2498 | 1.4 | 700.9 | 88.3 |
| YAHOO | 221 | 1.3 | 143.9 | 93.2 |


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
| Alec Pierce | WR | 140.4 | 95.6 | 98.3 | ESPN | 3.6 | CHEAPER on ESPN | 127 |
| Brian Thomas Jr. | WR | 141.9 | 74.3 | 84.8 | ESPN | 5.2 | CHEAPER on ESPN | 128 |
| Chris Godwin Jr. | WR | 145.1 | 92.3 | 93.9 | ESPN | 4.3 | CHEAPER on ESPN | 132 |
| Dalton Kincaid | TE | 142 | 87.6 | 93.4 | ESPN | 4.3 | CHEAPER on ESPN | 129 |
| David Montgomery | RB | 112.2 | 46.4 | 53.3 | ESPN | 5.2 | CHEAPER on ESPN | 160 |
| J.K. Dobbins | RB | 135.8 | 91.5 | 94.8 | ESPN | 3.6 | CHEAPER on ESPN | 117 |
| Jacory Croskey-Merritt | RB | 156 | 115.1 | 104.4 | ESPN | 3.9 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 119.5 | 61.2 | 63.1 | ESPN | 4.8 | CHEAPER on ESPN | 131 |
| Jalen Hurts | QB | 102 | 58.5 | 54.5 | ESPN | 3.8 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 93.9 | 44.1 | 39.2 | ESPN | 4.4 | CHEAPER on ESPN | 167 |
| Jordan Mason | RB | 152 | 109.1 | 110.6 | ESPN | 3.5 | CHEAPER on ESPN | 128 |
| Justin Herbert | QB | 130.2 | 83.9 | 71.1 | ESPN | 4.4 | CHEAPER on ESPN | 216 |
| Ladd McConkey | WR | 86.3 | 35.8 | 46.2 | ESPN | 3.8 | CHEAPER on ESPN | 174 |
| MarShawn Lloyd | RB | 137.3 | 137.5 | 85.6 | YAHOO | 4.3 | pricier on YAHOO | 99 |
| Marvin Harrison Jr. | WR | 119.9 | 76.2 | 79.4 | ESPN | 3.5 | CHEAPER on ESPN | 128 |
| Quentin Johnston | WR | 156.1 | 111.9 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 117 |
| Rico Dowdle | RB | 136.1 | 86.7 | 88.6 | ESPN | 4 | CHEAPER on ESPN | 128 |
| Terry McLaurin | WR | 105.5 | 55.8 | 56.9 | ESPN | 4.1 | CHEAPER on ESPN | 214 |
| Tre Tucker | WR | 148.7 | 202.3 | 125.3 | SLEEPER | 5.4 | CHEAPER on SLEEPER | 114 |
| TreVeyon Henderson | RB | 118.1 | 60.1 | 70.9 | ESPN | 4.4 | CHEAPER on ESPN | 117 |


## Who’s rising


_Last 7 days, as of 2026-10-30. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Luther Burden III | WR | 100.8 | 81.5 | 55.8 | 55.8 | 57.3 | 57.2 |
| Josh Jacobs | RB | 107.6 | 90.8 | 51.3 | 51.3 | — | — |
| Caleb Williams | QB | 99.1 | 84.1 | 71.4 | 71.5 | 65.4 | 65.4 |
| T.J. Hockenson | TE | 158.5 | 144.9 | 163.3 | 163.4 | 126.5 | 126.3 |
| Hunter Henry | TE | 160.2 | 149.6 | 141.8 | 141.9 | 127.2 | 127.2 |
| Tre Tucker | WR | 160.8 | 150.8 | — | — | 127.2 | 125.6 |
| Stefon Diggs | WR | 122.1 | 112.6 | 104.2 | 104.2 | 106.7 | 106.6 |
| Tee Higgins | WR | 60 | 51.6 | 36 | 36 | 34.5 | 34.5 |
| Colston Loveland | TE | 59.1 | 51.1 | 39.1 | 39.1 | 41.2 | 41.3 |
| Quinshon Judkins | RB | 78.2 | 70.4 | 54.3 | 54.1 | 55 | 54.9 |
| KC Concepcion Jr. | WR | 162.2 | 154.5 | 120.2 | 119.8 | 122.1 | 122 |
| Ollie Gordon II | RB | 137.3 | 129.9 | — | — | 101.3 | 97.2 |
| Jameson Williams | WR | 91.4 | 84 | 59 | 59.1 | 64.8 | 64.8 |
| Jordan Mason | RB | 160.2 | 153.2 | 109 | 109.1 | 110.6 | 110.6 |
| Tony Pollard | RB | 114.1 | 108.1 | 84.1 | 83.9 | 87.4 | 87.4 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Davante Adams | WR | 60.5 | 85.6 | 50.1 | 50.4 | 58.9 | 59.1 |
| Bryce Young | QB | 123.3 | 137.4 | — | — | 106.4 | 105.4 |
| Patrick Mahomes | QB | 80.8 | 94.5 | 110 | 110.1 | 103.2 | 103 |
| Mike Evans | WR | 81.6 | 94.3 | 63 | 63 | 70.4 | 70.4 |
| Aaron Jones Sr. | RB | 110.6 | 121.8 | 127.6 | 127.7 | 121 | 120.6 |
| Juwan Johnson | TE | 148.1 | 157.2 | 175.3 | 175 | 118.7 | 118.7 |
| Terry McLaurin | WR | 95.5 | 104.3 | 55.5 | 55.7 | 56.9 | 56.9 |
| Emeka Egbuka | WR | 65.5 | 74 | 38.5 | 38.6 | 47.6 | 47.8 |
| DeVonta Smith | WR | 50 | 57 | 33.7 | 33.8 | 29.6 | 29.7 |
| Michael Wilson | WR | 107.8 | 114.7 | 88.1 | 87.3 | 100.2 | 100 |
| Matthew Stafford | QB | 115.3 | 122.3 | 94.3 | 94.5 | 98.7 | 98.6 |
| Travis Kelce | TE | 96.7 | 103.1 | 89.8 | 89.6 | 94.1 | 94 |
| Denzel Boston | WR | 140.8 | 146.8 | 169.2 | 169 | 116.7 | 116.1 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 234pts, RB27 154pts, WR35 154pts, TE13 136pts, K13 99pts, DEF13 77pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2337 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_20 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_40 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 94.2 | 8.8 | QB10 | QB7 | B | 189 | 303 |
| Jared Goff | QB | 108.8 | 10 | QB13 | QB8 | A | 204 | 283 |
| Jayden Daniels | QB | 58.9 | 5.8 | QB5 | QB2 | B | 237 | 309 |
| Trevor Lawrence | QB | 89.7 | 8.4 | QB9 | QB5 | A | 226 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 51.4 | 5.2 | RB19 | RB13 | B | 172 | 197 |
| Chuba Hubbard | RB | 79.9 | 7.6 | RB28 | RB23 | A | 174 | 148 |
| D'Andre Swift | RB | 48.9 | 5 | RB18 | RB14 | B | 155 | 208 |
| Jaylen Warren | RB | 74.4 | 7.1 | RB26 | RB20 | B | 160 | 171 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.6 | 6.4 | WR25 | WR19 | B | 150 | 208 |
| DK Metcalf | WR | 84.9 | 8 | WR32 | WR29 | B | 129 | 183 |
| Mike Evans | WR | 70.4 | 6.8 | WR27 | WR17 | A | 145 | 222 |
| Parker Washington | WR | 71.4 | 6.9 | WR28 | WR12 | A | 181 | 212 |
| Tetairoa McMillan | WR | 42.1 | 4.4 | WR17 | WR11 | B | 173 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 78.2 | 7.4 | TE9 | TE5 | A | 147 | 169 |
| Isaiah Likely | TE | 105.5 | 9.7 | TE12 | TE8 | B | 129 | 157 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kyler Murray | MIN | 6 | 148.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 89.7 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.2 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 148.5 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.5 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.5 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 58.9 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 94.2 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.7 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.1 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 62.4 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.2 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.4 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.3 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 51.4 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.6 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.7 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 29.4 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11.7 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.9 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.3 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.9 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.8 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 142.5 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.1 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 73.8 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.7 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.7 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.3 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 78.2 | C · 16th easiest | F · 1st hardest | much harder |

