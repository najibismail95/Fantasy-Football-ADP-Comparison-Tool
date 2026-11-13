# Fantasy ADP report — 2026-11-13

_Snapshot 2026-11-13 · 109 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.86 | 170.1 | 98.3 |
| SLEEPER | 2498 | 1.4 | 700.9 | 87.3 |
| YAHOO | 221 | 1.3 | 143.9 | 87.3 |


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
| Brian Thomas Jr. | WR | 142.2 | 74.6 | 84.9 | ESPN | 5.2 | CHEAPER on ESPN | 124 |
| C.J. Stroud | QB | 132 | 199 | 123.5 | SLEEPER | 5.9 | CHEAPER on SLEEPER | 209 |
| Chris Godwin Jr. | WR | 147.5 | 92.6 | 94 | ESPN | 4.5 | CHEAPER on ESPN | 115 |
| David Montgomery | RB | 117.2 | 46.7 | 53.6 | ESPN | 5.6 | CHEAPER on ESPN | 148 |
| J.K. Dobbins | RB | 142.7 | 90.2 | 94.9 | ESPN | 4.2 | CHEAPER on ESPN | 107 |
| Jacory Croskey-Merritt | RB | 157.7 | 115.3 | 104.4 | ESPN | 4 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 117.1 | 61.5 | 63.2 | ESPN | 4.6 | CHEAPER on ESPN | 125 |
| Jalen Hurts | QB | 108.9 | 58.8 | 54.5 | ESPN | 4.4 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 99.8 | 44.4 | 39.5 | ESPN | 4.8 | CHEAPER on ESPN | 161 |
| Jordan Love | QB | 96.2 | 158.6 | 118.9 | SLEEPER | 4.3 | CHEAPER on SLEEPER | 214 |
| Jordan Mason | RB | 161.1 | 109.3 | 110.6 | ESPN | 4.3 | CHEAPER on ESPN | 122 |
| Justin Herbert | QB | 133 | 83.1 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 200 |
| Ladd McConkey | WR | 90.7 | 34.9 | 46.5 | ESPN | 4.2 | CHEAPER on ESPN | 161 |
| MarShawn Lloyd | RB | 139.4 | 137.8 | 85.6 | YAHOO | 4.4 | pricier on YAHOO | 93 |
| Marvin Harrison Jr. | WR | 124.5 | 76.5 | 79.4 | ESPN | 3.9 | CHEAPER on ESPN | 121 |
| Matthew Golden | WR | 55.3 | 125.2 | 119.9 | ESPN | 5.6 | pricier on ESPN | 159 |
| Quentin Johnston | WR | 156.4 | 111.7 | 105.2 | ESPN | 4 | CHEAPER on ESPN | 111 |
| Rico Dowdle | RB | 135 | 86.9 | 88.8 | ESPN | 3.9 | CHEAPER on ESPN | 124 |
| Terry McLaurin | WR | 112.3 | 55.1 | 56.9 | ESPN | 4.7 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 124 | 60.5 | 71.1 | ESPN | 4.9 | CHEAPER on ESPN | 107 |


## Who’s rising


_Last 7 days, as of 2026-11-13. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jonah Coleman | RB | 141.9 | 115.5 | 164.5 | 164.2 | 125.8 | 123.4 |
| Jordan Love | QB | 118.1 | 99.6 | 158.7 | 158.6 | 119.1 | 118.9 |
| C.J. Stroud | QB | 148.2 | 134.6 | 199.2 | 199 | 124.2 | 123.7 |
| Matthew Golden | WR | 70.8 | 57.3 | 125.3 | 125.2 | 120.3 | 119.9 |
| Christian Watson | WR | 63.1 | 50.8 | 66.2 | 66.2 | 65.5 | 65.4 |
| Joe Burrow | QB | 40.5 | 32.1 | 52.3 | 52.3 | 51.2 | 51.1 |
| Tank Dell | WR | 162.7 | 154.4 | 190.7 | 190.6 | — | — |
| Tee Higgins | WR | 39.1 | 30.9 | 36 | 36 | 34.5 | 34.5 |
| Travis Kelce | TE | 101.2 | 94 | 89 | 89.1 | 94 | 94 |
| DJ Moore | WR | 86.4 | 79.2 | 53.9 | 53 | 57.1 | 57.1 |
| Tony Pollard | RB | 92.7 | 86.5 | 83.9 | 83.9 | 87.3 | 87.1 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lamar Jackson | QB | 60.3 | 77.4 | 31.8 | 31.9 | 38.5 | 38.7 |
| Josh Jacobs | RB | 70.7 | 87 | 51.2 | 51.3 | 71.2 | 71.2 |
| Zay Flowers | WR | 36.6 | 48.9 | 41.4 | 41.5 | 34.8 | 34.8 |
| Jared Goff | QB | 107.8 | 120.1 | 131.2 | 131.2 | 108.7 | 108.5 |
| Tre Tucker | WR | 148.3 | 158.1 | — | — | 123.5 | 122.1 |
| Garrett Wilson | WR | 46.4 | 56.1 | 45.5 | 45.2 | 45.3 | 45.3 |
| Jalen Coker | WR | 114 | 123 | 146.4 | 146.3 | 122.4 | 121.8 |
| Hunter Henry | TE | 150.5 | 158.4 | 141.3 | 141 | 127.2 | 127.2 |
| George Pickens | WR | 41.4 | 49.3 | 22.5 | 22.6 | 23.1 | 23.1 |
| Tucker Kraft | TE | 92.7 | 100.2 | 64.1 | 64.5 | 59.6 | 59.7 |
| Mike Evans | WR | 89.1 | 96.3 | 63.1 | 62.9 | 70.3 | 70.3 |
| Xavier Worthy | WR | 145.1 | 152.1 | 134.6 | 134.7 | 126.8 | 126.8 |
| Braelon Allen | RB | 145.2 | 152.1 | — | — | 117.9 | 116.3 |
| Zach Charbonnet | RB | 141.9 | 148.2 | 149.5 | 149.5 | — | — |
| Jeremiyah Love | RB | 51.3 | 57.3 | 28.3 | 28 | 30.8 | 30.9 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 218pts, RB26 148pts, WR36 146pts, TE13 122pts, K13 96pts, DEF13 74pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2334 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_27 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_35 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 93.8 | 8.7 | QB9 | QB6 | B | 170 | 303 |
| Trevor Lawrence | QB | 79 | 7.5 | QB7 | QB5 | B | 178 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bhayshul Tuten | RB | 60.8 | 6 | RB22 | RB15 | B | 144 | 175 |
| Bucky Irving | RB | 43.9 | 4.6 | RB18 | RB11 | B | 151 | 197 |
| Chuba Hubbard | RB | 80.9 | 7.7 | RB28 | RB16 | A | 168 | 148 |
| D'Andre Swift | RB | 45.6 | 4.7 | RB19 | RB14 | B | 122 | 208 |
| Tony Pollard | RB | 86.6 | 8.1 | RB29 | RB22 | A | 139 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.3 | 6.4 | WR24 | WR13 | B | 135 | 208 |
| Matthew Golden | WR | 119.9 | 10.9 | WR38 | WR23 | A | 148 | 170 |
| Mike Evans | WR | 70.3 | 6.8 | WR26 | WR20 | B | 103 | 222 |
| Parker Washington | WR | 71.9 | 6.9 | WR27 | WR16 | A | 124 | 212 |
| Tetairoa McMillan | WR | 42.1 | 4.4 | WR16 | WR11 | B | 136 | 223 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 77.9 | 7.4 | TE9 | TE4 | A | 130 | 169 |
| Isaiah Likely | TE | 104.6 | 9.6 | TE12 | TE8 | B | 111 | 157 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kirk Cousins | MIN | 6 | 133 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 79 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 148.8 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.7 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59.4 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 93.8 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 30.9 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.8 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 60.8 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.6 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.5 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.6 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 43.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.8 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 13.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 28.4 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.3 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 11 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.3 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.9 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.4 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 136 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 21.9 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 74.1 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.6 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 77.9 | C · 16th easiest | F · 1st hardest | much harder |

