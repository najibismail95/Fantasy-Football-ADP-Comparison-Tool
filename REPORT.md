# Fantasy ADP report — 2026-11-16

_Snapshot 2026-11-16 · 112 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.8 | 170 | 99.3 |
| SLEEPER | 2498 | 1.4 | 700.9 | 87.7 |
| YAHOO | 223 | 1.2 | 143.9 | 89.7 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas Jr. | WR | 142.5 | 74.6 | 84.9 | ESPN | 5.2 | CHEAPER on ESPN | 121 |
| C.J. Stroud | QB | 124.4 | 199 | 123.1 | SLEEPER | 6.3 | CHEAPER on SLEEPER | 205 |
| Chris Godwin Jr. | WR | 147.7 | 92.6 | 94 | ESPN | 4.5 | CHEAPER on ESPN | 115 |
| David Montgomery | RB | 116.9 | 46.8 | 53.6 | ESPN | 5.6 | CHEAPER on ESPN | 148 |
| J.K. Dobbins | RB | 143.7 | 91.8 | 94.9 | ESPN | 4.2 | CHEAPER on ESPN | 108 |
| Jacory Croskey-Merritt | RB | 158 | 115.3 | 104.4 | ESPN | 4 | CHEAPER on ESPN | 128 |
| Jadarian Price | RB | 117.1 | 61.5 | 63.2 | ESPN | 4.6 | CHEAPER on ESPN | 115 |
| Jalen Hurts | QB | 109.9 | 58.8 | 54.5 | ESPN | 4.4 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 102.4 | 44.5 | 39.5 | ESPN | 5 | CHEAPER on ESPN | 156 |
| Jonah Coleman | RB | 109.9 | 164.1 | 121.9 | SLEEPER | 4 | CHEAPER on SLEEPER | 101 |
| Jordan Mason | RB | 160.1 | 109.3 | 110.5 | ESPN | 4.2 | CHEAPER on ESPN | 118 |
| Jordyn Tyson | WR | 161 | 117.9 | 108.3 | ESPN | 4 | CHEAPER on ESPN | 102 |
| Justin Herbert | QB | 133.1 | 83.1 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 194 |
| Ladd McConkey | WR | 94 | 35.1 | 46.5 | ESPN | 4.4 | CHEAPER on ESPN | 155 |
| MarShawn Lloyd | RB | 139.2 | 137.8 | 85.6 | YAHOO | 4.4 | pricier on YAHOO | 77 |
| Marvin Harrison Jr. | WR | 126 | 76.5 | 79.4 | ESPN | 4 | CHEAPER on ESPN | 120 |
| Matthew Golden | WR | 51.1 | 125.1 | 119.7 | ESPN | 5.9 | pricier on ESPN | 147 |
| Rico Dowdle | RB | 135.9 | 86.9 | 88.8 | ESPN | 4 | CHEAPER on ESPN | 119 |
| Terry McLaurin | WR | 112.1 | 55.1 | 56.9 | ESPN | 4.7 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 123.9 | 59.5 | 71.1 | ESPN | 4.9 | CHEAPER on ESPN | 171 |


## Who’s rising


_Last 7 days, as of 2026-11-16. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jordan Love | QB | 114.8 | 90.8 | 158.7 | 158.6 | 119.1 | 118.8 |
| C.J. Stroud | QB | 146.2 | 126.6 | 199.2 | 199 | 124 | 123.3 |
| Jonah Coleman | RB | 127.9 | 111.3 | 164.4 | 164.2 | 124.9 | 122.3 |
| Matthew Golden | WR | 66.9 | 51.9 | 125.3 | 125.1 | 120.2 | 119.8 |
| Christian Watson | WR | 60.7 | 46.1 | 66.2 | 66.2 | 65.5 | 65.3 |
| Tank Dell | WR | 162.7 | 149.1 | 190.7 | 190.6 | — | — |
| Josh Downs | WR | 144.4 | 132.6 | 113.4 | 113.4 | 102.4 | 102.3 |
| Travis Kelce | TE | 99.9 | 89.7 | 89.1 | 89.1 | 94 | 93.9 |
| Isaiah Likely | TE | 76.9 | 68.4 | 105.1 | 105.4 | 106.7 | 106.5 |
| Bucky Irving | RB | 48.6 | 41 | 43.9 | 43.9 | 51.3 | 51.3 |
| DJ Moore | WR | 84.4 | 77.2 | 53.3 | 53 | 57.1 | 57.1 |
| Zach Charbonnet | RB | 148.2 | 141.1 | 149.5 | 149.4 | — | — |
| KC Concepcion Jr. | WR | 151.9 | 145.3 | 120.3 | 119.7 | 121.9 | 121.8 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Josh Jacobs | RB | 71.2 | 101.3 | 51.2 | 51.3 | 71.2 | 71.2 |
| Michael Wilson | WR | 105 | 126.3 | 87.3 | 87.4 | 99.8 | 99.7 |
| Jared Goff | QB | 110.1 | 126.8 | 131.2 | 131.2 | 108.6 | 108.4 |
| Braelon Allen | RB | 142.2 | 158.2 | — | — | 117 | 115.4 |
| Puka Nacua | WR | 6 | 16.7 | 4 | 4 | 5.3 | 5.4 |
| Jalen Coker | WR | 117.9 | 127.5 | 146.4 | 146.3 | 122.2 | 121.7 |
| Tyler Allgeier | RB | 149.7 | 158.3 | 143.1 | 143.1 | 128.9 | 128.7 |
| Jaylen Waddle | WR | 92.9 | 101.5 | 44.3 | 44.5 | 39.4 | 39.5 |
| Tucker Kraft | TE | 94.9 | 103.3 | 64.4 | 64.2 | 59.6 | 59.7 |
| Ladd McConkey | WR | 84.7 | 92.8 | 35 | 35.1 | 46.4 | 46.5 |
| Rhamondre Stevenson | RB | 101 | 108.6 | 78.1 | 78.1 | 73.8 | 73.8 |
| Mike Evans | WR | 91.3 | 98.6 | 62.9 | 63.1 | 70.3 | 70.3 |
| Drake Maye | QB | 47 | 54 | 47 | 47 | 49.5 | 49.5 |
| Kyler Murray | QB | 149.9 | 156.6 | 150.2 | 150.2 | 114.1 | 114.1 |
| Tre Tucker | WR | 153.9 | 160.4 | — | — | 122.8 | 121.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 215pts, RB26 143pts, WR36 142pts, TE13 116pts, K13 94pts, DEF13 71pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2335 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_27 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_36 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.8 | 10.7 | QB12 | QB7 | B | 142 | 296 |
| Brock Purdy | QB | 93.7 | 8.7 | QB9 | QB5 | B | 154 | 303 |
| Patrick Mahomes | QB | 102.8 | 9.5 | QB11 | QB6 | B | 156 | 287 |
| Trevor Lawrence | QB | 79 | 7.5 | QB7 | QB4 | B | 166 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bhayshul Tuten | RB | 60.8 | 6 | RB22 | RB16 | B | 140 | 175 |
| Bucky Irving | RB | 43.9 | 4.6 | RB18 | RB11 | A | 148 | 197 |
| Chuba Hubbard | RB | 80.9 | 7.7 | RB27 | RB21 | A | 149 | 148 |
| D'Andre Swift | RB | 49.2 | 5 | RB19 | RB13 | B | 120 | 208 |
| Jaylen Warren | RB | 70 | 6.8 | RB24 | RB20 | B | 129 | 171 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Matthew Golden | WR | 119.7 | 10.9 | WR39 | WR26 | A | 124 | 170 |
| Mike Evans | WR | 70.3 | 6.8 | WR26 | WR18 | B | 101 | 222 |
| Parker Washington | WR | 71.5 | 6.9 | WR27 | WR12 | A | 127 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 77.9 | 7.4 | TE9 | TE5 | B | 108 | 169 |
| Isaiah Likely | TE | 105.4 | 9.7 | TE12 | TE7 | B | 105 | 157 |
| Travis Kelce | TE | 89.1 | 8.3 | TE10 | TE8 | B | 90 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kirk Cousins | MIN | 6 | 130.4 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 79 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 148.7 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.8 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.8 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.3 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59.7 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 93.7 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 31 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 7.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 60.8 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.7 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 17.5 | C · 15th easiest | B · 6th easiest | easier |


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
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.8 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.4 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.4 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42.1 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 5.3 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.4 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.9 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.6 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 140.5 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 22 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 74.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.8 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.8 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.6 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 77.9 | C · 16th easiest | F · 1st hardest | much harder |

