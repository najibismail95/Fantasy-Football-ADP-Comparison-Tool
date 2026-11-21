# Fantasy ADP report — 2026-11-21

_Snapshot 2026-11-21 · 117 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.69 | 170 | 98.7 |
| SLEEPER | 2498 | 1.4 | 700.9 | 86.3 |
| YAHOO | 224 | 1.2 | 143.9 | 92 |


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
| Brian Thomas Jr. | WR | 143.9 | 74.6 | 84.9 | ESPN | 5.3 | CHEAPER on ESPN | 121 |
| C.J. Stroud | QB | 122.1 | 199.8 | 122.5 | SLEEPER | 6.5 | CHEAPER on SLEEPER | 205 |
| Chris Godwin Jr. | WR | 148.5 | 92.7 | 94 | ESPN | 4.6 | CHEAPER on ESPN | 115 |
| David Montgomery | RB | 113.3 | 46.8 | 53.7 | ESPN | 5.3 | CHEAPER on ESPN | 148 |
| Emmett Johnson | RB | 131.4 | 202.1 | 121.2 | SLEEPER | 6.3 | CHEAPER on SLEEPER | 69 |
| J.K. Dobbins | RB | 145.1 | 90.1 | 94.9 | ESPN | 4.4 | CHEAPER on ESPN | 108 |
| Jadarian Price | RB | 119.7 | 61.5 | 63.3 | ESPN | 4.8 | CHEAPER on ESPN | 115 |
| Jalen Hurts | QB | 113.5 | 58.9 | 54.5 | ESPN | 4.7 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 105 | 44.5 | 39.6 | ESPN | 5.2 | CHEAPER on ESPN | 156 |
| Jonah Coleman | RB | 101.5 | 164 | 120.2 | SLEEPER | 4.4 | CHEAPER on SLEEPER | 100 |
| Jordan Mason | RB | 160.8 | 109.4 | 110.5 | ESPN | 4.2 | CHEAPER on ESPN | 118 |
| Josh Jacobs | RB | 113.9 | 51.4 | 71.2 | ESPN | 4.4 | CHEAPER on ESPN | 119 |
| Justin Herbert | QB | 133.1 | 83.1 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 195 |
| Ladd McConkey | WR | 98.8 | 34.8 | 46.6 | ESPN | 4.8 | CHEAPER on ESPN | 155 |
| MarShawn Lloyd | RB | 140.2 | 137.9 | 85.6 | YAHOO | 4.5 | pricier on YAHOO | 77 |
| Marvin Harrison Jr. | WR | 128.4 | 76.6 | 79.4 | ESPN | 4.2 | CHEAPER on ESPN | 116 |
| Matthew Golden | WR | 57 | 125.1 | 119.5 | ESPN | 5.4 | pricier on ESPN | 147 |
| Rico Dowdle | RB | 139.1 | 86 | 88.8 | ESPN | 4.3 | CHEAPER on ESPN | 117 |
| Terry McLaurin | WR | 113.1 | 55.2 | 56.9 | ESPN | 4.8 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 125.8 | 60.6 | 71.1 | ESPN | 5 | CHEAPER on ESPN | 171 |


## Who’s rising


_Last 7 days, as of 2026-11-21. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cam Skattebo | RB | 82.1 | 57.9 | 40 | 40 | 43 | 43 |
| Deebo Samuel Sr. | WR | 152.9 | 131.2 | 130.2 | 130.2 | 120 | 119.9 |
| Patrick Mahomes | QB | 101.3 | 80.8 | 110.2 | 110.2 | 102.8 | 102.7 |
| Jordyn Tyson | WR | 163.8 | 147.3 | 117.9 | 117.3 | — | — |
| Josh Downs | WR | 137.4 | 123.7 | 113.4 | 113.4 | 102.4 | 102.3 |
| Blake Corum | RB | 128.4 | 115.1 | 100.3 | 100.3 | 100 | 99.9 |
| George Pickens | WR | 49.8 | 37.2 | 22.6 | 22.6 | 23.1 | 23.2 |
| Isaiah Likely | TE | 72.3 | 60.3 | 105.1 | 105.1 | 106.5 | 106.4 |
| Jonah Coleman | RB | 114 | 103.1 | 164.2 | 164 | 123 | 120.5 |
| Zach Charbonnet | RB | 146 | 135.7 | 149.5 | 149.4 | 130.1 | 129.8 |
| Kirk Cousins | QB | 155.5 | 146.7 | — | — | 110.5 | 108.6 |
| C.J. Stroud | QB | 131.9 | 123.3 | 199 | 199.8 | 123.5 | 122.6 |
| Stefon Diggs | WR | 109.4 | 101.1 | 104.2 | 104.5 | 106.3 | 106.2 |
| Chuba Hubbard | RB | 62.5 | 54.7 | 80.3 | 80.8 | 88.3 | 88.1 |
| Parker Washington | WR | 70.9 | 63.6 | 71.8 | 71.8 | 71.9 | 71.8 |
| Dak Prescott | QB | 91.4 | 84.9 | 77.3 | 77.3 | 72.4 | 72.3 |
| Bucky Irving | RB | 43.6 | 37.4 | 43.9 | 43.9 | 51.3 | 51.2 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Drake Maye | QB | 50.9 | 82.6 | 47 | 47.1 | 49.5 | 49.5 |
| Michael Wilson | WR | 117.6 | 139.3 | 87.4 | 87.4 | 99.7 | 99.7 |
| Josh Jacobs | RB | 91.5 | 112.9 | 51.3 | 51.4 | 71.2 | 71.2 |
| Puka Nacua | WR | 11.2 | 31.5 | 4 | 4 | 5.3 | 5.4 |
| Jalen Coker | WR | 124.4 | 137.9 | 146.3 | 146.3 | 121.8 | 121.4 |
| Jeremiyah Love | RB | 57.7 | 69.1 | 28.1 | 28.1 | 30.9 | 31.1 |
| Woody Marks | RB | 152.1 | 161.8 | 147.2 | 147.2 | 128.7 | 128.5 |
| Tyler Allgeier | RB | 154.9 | 164.2 | 143.1 | 143.2 | 128.7 | 128.7 |
| Denzel Boston | WR | 144 | 153.2 | 169.9 | 169.8 | 115.8 | 115.3 |
| Braelon Allen | RB | 154.4 | 163.5 | — | — | 116.1 | 114.3 |
| Kyren Williams | RB | 35.8 | 44.4 | 26.7 | 26.7 | 27.2 | 27.2 |
| Tucker Kraft | TE | 101.4 | 109.3 | 64.2 | 64.5 | 59.7 | 59.7 |
| Jordan Love | QB | 96.3 | 103.9 | 158.6 | 158.5 | 118.9 | 118.6 |
| Rachaad White | RB | 134.3 | 141.9 | 140.2 | 140.2 | 125.8 | 125.8 |
| Jordan Addison | WR | 137.2 | 144.5 | 101.8 | 101.8 | 114.8 | 114.8 |
| Ladd McConkey | WR | 90.7 | 97.9 | 35 | 35.1 | 46.5 | 46.6 |
| Jameson Williams | WR | 77.3 | 83.6 | 59.1 | 59.2 | 64.7 | 64.7 |
| T.J. Hockenson | TE | 136.2 | 142.5 | 163.4 | 163.5 | 125.6 | 125.6 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 217pts, RB27 141pts, WR35 141pts, TE13 114pts, K13 94pts, DEF13 71pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2336 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_26 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


_32 more excluded league-wide: ADP beyond 156 picks (12-team, 13 rounds) — most real drafters spend their last few rounds on K/DEF, not another skill player, so an ADP average past this depth isn't a real signal that someone is actually being drafted there._


### QB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bo Nix | QB | 116.8 | 10.7 | QB11 | QB7 | B | 141 | 296 |
| Brock Purdy | QB | 93.6 | 8.7 | QB8 | QB5 | B | 154 | 303 |
| Patrick Mahomes | QB | 102.7 | 9.5 | QB10 | QB6 | B | 155 | 287 |
| Trevor Lawrence | QB | 78.9 | 7.5 | QB6 | QB4 | B | 166 | 303 |


### RB

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bhayshul Tuten | RB | 60.7 | 6 | RB22 | RB16 | B | 141 | 175 |
| Bucky Irving | RB | 43.9 | 4.6 | RB18 | RB10 | A | 150 | 197 |
| Chuba Hubbard | RB | 80.8 | 7.6 | RB27 | RB20 | A | 150 | 148 |
| D'Andre Swift | RB | 48.8 | 5 | RB19 | RB14 | B | 121 | 208 |
| Jaylen Warren | RB | 73 | 7 | RB25 | RB22 | B | 124 | 171 |
| Tony Pollard | RB | 83.7 | 7.9 | RB28 | RB23 | A | 126 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.2 | 6.4 | WR25 | WR20 | B | 105 | 208 |
| Matthew Golden | WR | 119.5 | 10.9 | WR40 | WR26 | A | 125 | 170 |
| Mike Evans | WR | 70.3 | 6.8 | WR27 | WR18 | B | 100 | 222 |
| Parker Washington | WR | 71.8 | 6.9 | WR28 | WR12 | A | 127 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 77.8 | 7.4 | TE9 | TE5 | B | 108 | 169 |
| Isaiah Likely | TE | 104.7 | 9.6 | TE12 | TE6 | B | 105 | 157 |
| Travis Kelce | TE | 91.9 | 8.6 | TE10 | TE7 | B | 90 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kirk Cousins | MIN | 6 | 127.5 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 78.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 150.3 | C · 14th hardest | B · 7th easiest | much easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Jalen Hurts | PHI | 10 | 58.9 | A · 1st easiest | D · 7th hardest | much harder |
| Bo Nix | DEN | 10 | 116.8 | C · 12th hardest | D · 6th hardest | much harder |
| Sam Darnold | SEA | 11 | 141.8 | B · 5th easiest | D · 5th hardest | much harder |
| Jayden Daniels | WAS | 7 | 59.2 | B · 6th easiest | F · 4th hardest | much harder |
| Brock Purdy | SF | 8 | 93.6 | C · 13th easiest | F · 2nd hardest | much harder |


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
| David Montgomery | HOU | 8 | 53.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 43.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.9 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 14.6 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.4 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.4 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.3 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.5 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 125.8 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 48.5 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 141.7 | C · 14th hardest | B · 4th easiest | much easier |
| Brock Bowers | LV | 13 | 23.3 | D · 9th hardest | B · 5th easiest | much easier |
| Kyle Pitts Sr. | ATL | 11 | 74.2 | B · 9th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Dalton Schultz | HOU | 8 | 151.3 | B · 8th easiest | D · 7th hardest | much harder |
| AJ Barner | SEA | 11 | 155.7 | C · 13th easiest | D · 6th hardest | much harder |
| Sam LaPorta | DET | 6 | 62.6 | C · 15th easiest | D · 5th hardest | much harder |
| Colston Loveland | CHI | 10 | 41.5 | C · 16th hardest | D · 4th hardest | much harder |
| George Kittle | SF | 8 | 77.8 | C · 16th easiest | F · 1st hardest | much harder |

