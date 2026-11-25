# Fantasy ADP report — 2026-11-25

_Snapshot 2026-11-25 · 121 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.61 | 170.1 | 99.7 |
| SLEEPER | 2498 | 1.4 | 700.9 | 85.3 |
| YAHOO | 224 | 1.2 | 143.9 | 91.1 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 202 |
| YAHOO | team | 22 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas Jr. | WR | 143.8 | 74.7 | 84.9 | ESPN | 5.3 | CHEAPER on ESPN | 117 |
| C.J. Stroud | QB | 115.9 | 199.7 | 122 | SLEEPER | 6.7 | CHEAPER on SLEEPER | 194 |
| Chris Godwin Jr. | WR | 148.2 | 92.7 | 94 | ESPN | 4.6 | CHEAPER on ESPN | 108 |
| Dalton Kincaid | TE | 141.8 | 88.6 | 93.3 | ESPN | 4.2 | CHEAPER on ESPN | 112 |
| David Montgomery | RB | 107.8 | 46.8 | 53.8 | ESPN | 4.8 | CHEAPER on ESPN | 141 |
| Drake Maye | QB | 99.9 | 47.1 | 49.6 | ESPN | 4.3 | CHEAPER on ESPN | 321 |
| Emmett Johnson | RB | 115.4 | 202.2 | 119.1 | SLEEPER | 7.1 | CHEAPER on SLEEPER | 66 |
| J.K. Dobbins | RB | 145.6 | 90.1 | 94.9 | ESPN | 4.4 | CHEAPER on ESPN | 88 |
| Jadarian Price | RB | 120.8 | 61.5 | 63.3 | ESPN | 4.9 | CHEAPER on ESPN | 115 |
| Jalen Hurts | QB | 115 | 58.9 | 54.5 | ESPN | 4.9 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 105.4 | 44.5 | 39.7 | ESPN | 5.3 | CHEAPER on ESPN | 148 |
| Jordan Mason | RB | 161.2 | 109.4 | 110.5 | ESPN | 4.3 | CHEAPER on ESPN | 113 |
| Josh Jacobs | RB | 113.3 | 51.4 | 71.2 | ESPN | 4.3 | CHEAPER on ESPN | 118 |
| Justin Herbert | QB | 133.6 | 83.2 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 197 |
| Ladd McConkey | WR | 99.1 | 34.8 | 46.7 | ESPN | 4.9 | CHEAPER on ESPN | 155 |
| MarShawn Lloyd | RB | 140.1 | 137.9 | 85.6 | YAHOO | 4.5 | pricier on YAHOO | 77 |
| Matthew Golden | WR | 56.4 | 125.1 | 119.3 | ESPN | 5.5 | pricier on ESPN | 146 |
| Rico Dowdle | RB | 139.7 | 86 | 88.9 | ESPN | 4.4 | CHEAPER on ESPN | 111 |
| Terry McLaurin | WR | 113.1 | 55.2 | 56.9 | ESPN | 4.8 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 125.5 | 60.6 | 71.1 | ESPN | 5 | CHEAPER on ESPN | 171 |


## Who’s rising


_Last 7 days, as of 2026-11-25. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Emmett Johnson | RB | 153.6 | 118.5 | — | — | 122.9 | 119.6 |
| Patrick Mahomes | QB | 92.4 | 72.5 | 110.2 | 110.2 | 102.7 | 102.6 |
| Jonah Coleman | RB | 108.1 | 88.9 | 164.1 | 164 | 121.5 | 119 |
| Dak Prescott | QB | 89.6 | 73.4 | 77.3 | 77.3 | 72.4 | 72.3 |
| Jordyn Tyson | WR | 157.1 | 143.4 | 117.6 | 116.7 | 108.3 | 108.3 |
| Deebo Samuel Sr. | WR | 141.1 | 128.7 | 130.2 | 130.2 | 119.9 | 119.8 |
| George Pickens | WR | 43.7 | 32.7 | 22.6 | 22.6 | 23.2 | 23.2 |
| Chuba Hubbard | RB | 58.3 | 48.8 | 80.3 | 80.8 | 88.1 | 88 |
| Blake Corum | RB | 120.9 | 111.8 | 100.3 | 100.3 | 100 | 99.8 |
| Cam Skattebo | RB | 67.3 | 58.8 | 40 | 40 | 43 | 43 |
| Parker Washington | WR | 67.5 | 59 | 71.8 | 71.8 | 71.9 | 71.8 |
| David Montgomery | RB | 116.8 | 108.4 | 46.8 | 46.8 | 53.6 | 53.7 |
| Bo Nix | QB | 132.2 | 124.1 | 116.8 | 116.8 | 98.8 | 98.8 |
| T.J. Hockenson | TE | 140.6 | 132.7 | 163.4 | 163.5 | 125.6 | 125.4 |
| C.J. Stroud | QB | 124.2 | 117.2 | 199.6 | 199.7 | 123 | 122.2 |
| Tony Pollard | RB | 83.6 | 76.9 | 83.9 | 83.9 | 87 | 86.9 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Drake Maye | QB | 64.5 | 99.7 | 47 | 47.1 | 49.5 | 49.6 |
| Jordan Love | QB | 94.1 | 112.6 | 158.6 | 158.5 | 118.7 | 118.4 |
| Puka Nacua | WR | 23.7 | 39.4 | 4 | 4 | 5.4 | 5.5 |
| Jalen Coker | WR | 131.4 | 147 | 146.3 | 146.3 | 121.5 | 121.2 |
| Kyren Williams | RB | 39.6 | 51.1 | 26.7 | 26.7 | 27.2 | 27.2 |
| A.J. Brown | WR | 55.3 | 65.8 | 17.3 | 17.4 | 27.4 | 27.6 |
| Denzel Boston | WR | 147.3 | 156.5 | 169.9 | 169.8 | 115.6 | 114.9 |
| Tank Dell | WR | 150.6 | 159.3 | 190.6 | 190.6 | — | — |
| DK Metcalf | WR | 109.1 | 117.7 | 75 | 75 | 84.9 | 84.9 |
| Jaylen Warren | RB | 69.1 | 77.3 | 70 | 70.3 | 74 | 73.8 |
| Bryce Young | QB | 149.3 | 157.2 | — | — | 104.8 | 104.7 |
| Rachaad White | RB | 138.1 | 145.6 | 140.2 | 140.2 | 125.8 | 125.8 |
| Tetairoa McMillan | WR | 50.3 | 57.6 | 37.5 | 37.6 | 42.1 | 42 |
| Jeremiyah Love | RB | 64.2 | 71.4 | 28.1 | 28.1 | 31 | 31.1 |
| Jordan Addison | WR | 139.9 | 146.9 | 101.8 | 101.8 | 114.8 | 114.8 |
| Rome Odunze | WR | 100 | 106.8 | 65.3 | 65.4 | 68.6 | 68.6 |
| Dalton Kincaid | TE | 133.3 | 139.9 | 88.2 | 88.6 | 93.3 | 93.3 |
| Christian Watson | WR | 46.6 | 53.2 | 66.2 | 66.2 | 65.3 | 65.1 |
| Tucker Kraft | TE | 105.8 | 111.9 | 64.2 | 64.5 | 59.7 | 59.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 209pts, RB27 129pts, WR35 136pts, TE13 112pts, K13 91pts, DEF13 69pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2335 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_29 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_33 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brock Purdy | QB | 93.5 | 8.7 | QB8 | QB4 | B | 143 | 303 |
| Patrick Mahomes | QB | 102.6 | 9.5 | QB10 | QB6 | B | 137 | 287 |
| Trevor Lawrence | QB | 78.9 | 7.5 | QB6 | QB5 | B | 138 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bucky Irving | RB | 43.9 | 4.6 | RB18 | RB9 | A | 141 | 197 |
| Chuba Hubbard | RB | 80.8 | 7.6 | RB27 | RB22 | A | 131 | 148 |
| D'Andre Swift | RB | 48.8 | 5 | RB19 | RB15 | B | 99 | 208 |
| Jaylen Warren | RB | 73.8 | 7.1 | RB25 | RB24 | B | 103 | 171 |
| Tony Pollard | RB | 83.7 | 7.9 | RB28 | RB23 | A | 118 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.1 | 6.3 | WR25 | WR17 | B | 104 | 208 |
| Matthew Golden | WR | 119.3 | 10.9 | WR41 | WR25 | A | 123 | 170 |
| Mike Evans | WR | 70.3 | 6.8 | WR27 | WR12 | A | 108 | 222 |
| Parker Washington | WR | 71.8 | 6.9 | WR28 | WR13 | A | 113 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 77.8 | 7.4 | TE9 | TE5 | B | 94 | 169 |
| Isaiah Likely | TE | 104.7 | 9.6 | TE12 | TE9 | B | 85 | 157 |
| Sam LaPorta | TE | 62.6 | 6.1 | TE5 | TE4 | B | 77 | 197 |
| Travis Kelce | TE | 89.1 | 8.3 | TE10 | TE6 | B | 87 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kirk Cousins | MIN | 6 | 129.4 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 78.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 154 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.9 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.8 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59.2 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 93.5 | C · 13th easiest | F · 2nd hardest | much harder |


### RB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jeremiyah Love | ARI | 14 | 31.1 | F · 3rd hardest | A · 2nd easiest | much easier |
| Jonathan Taylor | IND | 13 | 6.8 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 60.7 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.8 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.5 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.8 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 43.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 12 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 15.4 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.2 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.7 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.8 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.5 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 130.9 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.3 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 74.3 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.4 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.6 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 77.8 | C · 16th easiest | F · 1st hardest | much harder |

