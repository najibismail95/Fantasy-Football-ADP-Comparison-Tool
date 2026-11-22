# Fantasy ADP report — 2026-11-22

_Snapshot 2026-11-22 · 118 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 165 — those values mean "very late", not a real average, so they are excluded from arbitrage._


_SLEEPER ADP is censored above pick 691 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 349 | 1.68 | 170 | 98.3 |
| SLEEPER | 2498 | 1.4 | 700.9 | 86 |
| YAHOO | 225 | 1.2 | 143.9 | 90.7 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1175 |
| ESPN | id | 460 |
| ESPN | team | 110 |
| SLEEPER | id | 2498 |
| YAHOO | exact | 203 |
| YAHOO | team | 22 |


## Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brian Thomas Jr. | WR | 144 | 74.6 | 84.9 | ESPN | 5.4 | CHEAPER on ESPN | 121 |
| C.J. Stroud | QB | 120.7 | 199.8 | 122.4 | SLEEPER | 6.5 | CHEAPER on SLEEPER | 205 |
| Chris Godwin Jr. | WR | 148.5 | 92.7 | 94 | ESPN | 4.6 | CHEAPER on ESPN | 115 |
| David Montgomery | RB | 111.4 | 46.8 | 53.7 | ESPN | 5.1 | CHEAPER on ESPN | 148 |
| Emmett Johnson | RB | 126.8 | 203.9 | 120.7 | SLEEPER | 6.7 | CHEAPER on SLEEPER | 69 |
| J.K. Dobbins | RB | 145.2 | 91.9 | 94.9 | ESPN | 4.3 | CHEAPER on ESPN | 108 |
| Jadarian Price | RB | 120.3 | 61.5 | 63.3 | ESPN | 4.8 | CHEAPER on ESPN | 115 |
| Jalen Hurts | QB | 114.3 | 58.9 | 54.5 | ESPN | 4.8 | CHEAPER on ESPN | 311 |
| Jaylen Waddle | WR | 105.2 | 44.5 | 39.6 | ESPN | 5.3 | CHEAPER on ESPN | 156 |
| Jonah Coleman | RB | 99.7 | 164 | 119.8 | SLEEPER | 4.5 | CHEAPER on SLEEPER | 100 |
| Jordan Mason | RB | 160.8 | 109.4 | 110.5 | ESPN | 4.2 | CHEAPER on ESPN | 118 |
| Josh Jacobs | RB | 114.5 | 51.4 | 71.2 | ESPN | 4.4 | CHEAPER on ESPN | 119 |
| Justin Herbert | QB | 133 | 83.1 | 71.1 | ESPN | 4.7 | CHEAPER on ESPN | 195 |
| Ladd McConkey | WR | 99.5 | 35.2 | 46.6 | ESPN | 4.9 | CHEAPER on ESPN | 155 |
| MarShawn Lloyd | RB | 140.4 | 137.9 | 85.6 | YAHOO | 4.5 | pricier on YAHOO | 77 |
| Marvin Harrison Jr. | WR | 128.5 | 76.6 | 79.4 | ESPN | 4.2 | CHEAPER on ESPN | 116 |
| Matthew Golden | WR | 58.3 | 125.1 | 119.5 | ESPN | 5.3 | pricier on ESPN | 147 |
| Rico Dowdle | RB | 139.6 | 86 | 88.8 | ESPN | 4.4 | CHEAPER on ESPN | 117 |
| Terry McLaurin | WR | 113.3 | 55.2 | 56.9 | ESPN | 4.8 | CHEAPER on ESPN | 214 |
| TreVeyon Henderson | RB | 125.9 | 60.6 | 71.1 | ESPN | 5 | CHEAPER on ESPN | 171 |


## Who’s rising


_Last 7 days, as of 2026-11-22. `*_then`/`*_now` are that source's OWN ADP 7 days ago and today — a lower number now than then means rising, higher means falling. '—' means that source has no data for him this window (often Yahoo, whose history is still short — shorter windows fill it in). A player needs ESPN plus at least one other source to appear at all — one source moving alone, with nobody else to check it against, isn't shown no matter how big that move looks, and ESPN specifically has to be one of the sources backing it (see the code comment for why). Rows are sorted so players whose sources actually agree on direction surface above ones where only a single source backs the move — a real disagreement between tracked sources is still shown, not hidden, just ranked lower._


### Rising

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Emmett Johnson | RB | 163 | 132.2 | — | — | 123.8 | 121.2 |
| Patrick Mahomes | QB | 101.5 | 78 | 110.2 | 110.2 | 102.8 | 102.7 |
| Deebo Samuel Sr. | WR | 152.1 | 129 | 130.2 | 130.2 | 120 | 119.9 |
| Cam Skattebo | RB | 79.3 | 57.5 | 40 | 40 | 43 | 43 |
| Jordyn Tyson | WR | 163.6 | 144.3 | 117.3 | 117.9 | — | — |
| George Pickens | WR | 49.9 | 35.6 | 22.6 | 22.6 | 23.2 | 23.2 |
| Blake Corum | RB | 127.5 | 114 | 100.3 | 100.3 | 100 | 99.9 |
| Josh Downs | WR | 135.5 | 123.3 | 113.4 | 113.4 | 102.4 | 102.3 |
| Jonah Coleman | RB | 112.6 | 101.5 | 164.2 | 164 | 122.7 | 120.2 |
| Isaiah Likely | TE | 70.7 | 59.9 | 105.1 | 105.1 | 106.5 | 106.4 |
| Chuba Hubbard | RB | 62.2 | 53.7 | 80.3 | 80.3 | 88.2 | 88.1 |
| Dak Prescott | QB | 91.4 | 83.1 | 77.3 | 77.3 | 72.4 | 72.3 |
| Parker Washington | WR | 70.6 | 62.4 | 71.9 | 71.8 | 71.9 | 71.8 |
| Kirk Cousins | QB | 154.5 | 146.5 | — | — | 110.2 | 108.4 |
| Stefon Diggs | WR | 108.5 | 101.2 | 104.2 | 104.2 | 106.3 | 106.2 |
| Zach Charbonnet | RB | 143.7 | 136.4 | 149.4 | 149.4 | 130.1 | 129.8 |
| C.J. Stroud | QB | 129.2 | 122.2 | 199 | 199.8 | 123.4 | 122.5 |
| Tony Pollard | RB | 86.1 | 79.5 | 84.1 | 83.9 | 87.1 | 86.9 |
| Garrett Wilson | WR | 56.6 | 50.4 | 45.2 | 45.6 | 45.3 | 45.3 |


### Falling

| player | pos | espn_then | espn_now | sleeper_then | sleeper_now | yahoo_then | yahoo_now |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Drake Maye | QB | 51.8 | 87.9 | 47 | 47.1 | 49.5 | 49.5 |
| Puka Nacua | WR | 13.5 | 33.3 | 4 | 4 | 5.3 | 5.4 |
| Michael Wilson | WR | 121.4 | 140 | 87.4 | 87.4 | 99.7 | 99.7 |
| Josh Jacobs | RB | 96.1 | 113.9 | 51.3 | 51.4 | 71.2 | 71.2 |
| Jalen Coker | WR | 125.7 | 140.2 | 146.3 | 146.3 | 121.7 | 121.3 |
| Jordan Love | QB | 92.8 | 107 | 158.6 | 158.5 | 118.8 | 118.5 |
| Jeremiyah Love | RB | 58.5 | 69.9 | 28.1 | 28.1 | 31 | 31.1 |
| Denzel Boston | WR | 143.7 | 154.4 | 169.9 | 169.8 | 115.8 | 115.2 |
| Woody Marks | RB | 153 | 163.1 | 147.2 | 147.2 | 128.7 | 128.5 |
| Kyren Williams | RB | 36.3 | 46.3 | 26.7 | 26.7 | 27.2 | 27.2 |
| Jordan Addison | WR | 137.1 | 145.7 | 101.8 | 101.8 | 114.8 | 114.8 |
| Rachaad White | RB | 135 | 143.1 | 140.2 | 140.2 | 125.8 | 125.8 |
| Tyler Allgeier | RB | 156.6 | 164.6 | 143.1 | 143.2 | 128.7 | 128.7 |
| Tucker Kraft | TE | 102.4 | 110.4 | 64.2 | 64.2 | 59.7 | 59.7 |
| Braelon Allen | RB | 156.4 | 164.1 | — | — | 115.7 | 114.3 |
| Ladd McConkey | WR | 91.7 | 98.8 | 35 | 35.1 | 46.5 | 46.6 |
| Tetairoa McMillan | WR | 48.4 | 55.4 | 37.5 | 37.6 | 42.1 | 42 |
| A.J. Brown | WR | 53.2 | 60.1 | 17.3 | 17.4 | 27.3 | 27.5 |
| Bryce Young | QB | 147.7 | 154.3 | — | — | 105 | 104.8 |
| Jameson Williams | WR | 78.1 | 84.6 | 59.1 | 59.2 | 64.7 | 64.7 |


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 217pts, RB27 141pts, WR35 143pts, TE13 114pts, K13 94pts, DEF13 71pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection, compare them yourself. `drafted_as`/`produces_like` are his rank by ADP vs. by production, per position — the gap between them is the story. `grade` curves the underlying point edge within his own position (A/B = top ~30%). A player must also project ABOVE replacement level to appear — outproducing the typical pick at your draft slot doesn't help if the whole neighborhood is worse than a waiver-wire add. Only A/B players make this board, listed alphabetically — an empty or short section means there's no real value in that range, not a bug._


_2335 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


_27 more excluded league-wide: fewer than 2 projection sources, so "produces_like" would really just be one source's unchecked number — often because a player was dropped from one source's pool (e.g. a season-ending injury) while the other hasn't caught up yet._


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
| Chuba Hubbard | RB | 79.2 | 7.5 | RB27 | RB21 | A | 151 | 148 |
| D'Andre Swift | RB | 49.2 | 5 | RB19 | RB14 | B | 121 | 208 |
| Jaylen Warren | RB | 73.9 | 7.1 | RB25 | RB23 | B | 124 | 171 |
| Tony Pollard | RB | 84.3 | 7.9 | RB28 | RB19 | A | 143 | 160 |


### WR

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Christian Watson | WR | 65.2 | 6.4 | WR25 | WR20 | B | 105 | 208 |
| Matthew Golden | WR | 119.5 | 10.9 | WR40 | WR26 | A | 125 | 170 |
| Mike Evans | WR | 70.3 | 6.8 | WR27 | WR18 | B | 100 | 222 |
| Parker Washington | WR | 71.5 | 6.9 | WR28 | WR12 | A | 127 | 212 |


### TE

| player | pos | adp | round | drafted_as | produces_like | grade | espn_pts | sleeper_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| George Kittle | TE | 77.8 | 7.4 | TE9 | TE5 | B | 108 | 169 |
| Isaiah Likely | TE | 105.3 | 9.7 | TE12 | TE6 | A | 105 | 157 |
| Travis Kelce | TE | 91.8 | 8.6 | TE10 | TE7 | B | 90 | 171 |


## Strength of schedule


_2026 season, PPR scoring. Built from 2025 defensive results — last year's defenses pricing this year's schedule. Personnel turns over, so treat this as a tiebreaker between similar players, not a reason to move anyone across tiers._


_`weeks 1-14` is the fantasy regular season and `weeks 15-17` the playoffs. Each shows a grade curved against all 32 teams (A = easiest ~10%, F = hardest ~10%) followed by that team's exact placing, counted from whichever end is closer — so 4th easiest and 2nd hardest both mean what they say. `playoff shift` says whether it gets easier or harder when it counts. Each position below is split into its 5 easiest and 5 hardest playoff schedules among the most-drafted (one row per team) — two separate tables, not one combined list, so which end you're looking at is never something you have to notice from a rank jumping mid-table._


_Both are placings, not magnitudes: three playoff games swing much wider than fourteen regular-season ones, so 4th easiest over weeks 15-17 is a bigger real edge than 4th easiest over weeks 1-14, where the whole league sits within a few points of average._


### QB


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Kirk Cousins | MIN | 6 | 127.2 | C · 16th hardest | A · 1st easiest | much easier |
| Matthew Stafford | LAR | 11 | 98.6 | D · 10th hardest | A · 2nd easiest | much easier |
| Trevor Lawrence | JAX | 7 | 78.9 | C · 11th easiest | A · 3rd easiest | much easier |
| Jaxson Dart | NYG | 8 | 97.4 | B · 8th easiest | A · 4th easiest | much easier |
| Tyler Shough | NO | 8 | 150.9 | C · 14th hardest | B · 7th easiest | much easier |


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
| Jonathan Taylor | IND | 13 | 7.2 | C · 16th hardest | A · 3rd easiest | much easier |
| Bhayshul Tuten | JAX | 7 | 60.7 | D · 9th hardest | A · 4th easiest | much easier |
| Travis Etienne Jr. | NO | 8 | 43.8 | B · 8th easiest | B · 5th easiest | easier |
| Derrick Henry | BAL | 13 | 18.5 | C · 15th easiest | B · 6th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| David Montgomery | HOU | 8 | 53.7 | B · 9th easiest | D · 7th hardest | harder |
| Bucky Irving | TB | 10 | 43.9 | C · 12th easiest | D · 6th hardest | harder |
| Saquon Barkley | PHI | 10 | 11.9 | A · 2nd easiest | D · 4th hardest | much harder |
| Kenneth Walker III | KC | 5 | 14.9 | C · 14th easiest | F · 3rd hardest | much harder |
| Christian McCaffrey | SF | 8 | 6.4 | C · 16th easiest | F · 2nd hardest | much harder |


### WR


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Malik Nabers | NYG | 8 | 30 | B · 5th easiest | A · 3rd easiest | easier |
| Justin Jefferson | MIN | 6 | 13.3 | B · 9th easiest | A · 4th easiest | easier |
| Ja'Marr Chase | CIN | 6 | 3.9 | B · 6th easiest | B · 6th easiest | easier |
| Puka Nacua | LAR | 11 | 5.5 | C · 9th hardest | B · 8th easiest | easier |
| CeeDee Lamb | DAL | 14 | 10.3 | C · 10th easiest | B · 9th easiest | easier |


#### Hardest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Tetairoa McMillan | CAR | 5 | 42 | C · 14th hardest | D · 7th hardest | harder |
| Jaxon Smith-Njigba | SEA | 11 | 6.7 | B · 4th easiest | D · 5th hardest | much harder |
| A.J. Brown | NE | 11 | 27.6 | C · 11th hardest | D · 4th hardest | harder |
| DeVonta Smith | PHI | 10 | 33.2 | A · 1st easiest | D · 3rd hardest | much harder |
| Garrett Wilson | NYJ | 13 | 45.6 | C · 16th hardest | F · 2nd hardest | much harder |


### TE


#### Easiest

| player | team | bye | adp | weeks 1-14 | weeks 15-17 | playoff shift |
| --- | --- | --- | --- | --- | --- | --- |
| Mark Andrews | BAL | 13 | 126.2 | C · 15th hardest | A · 2nd easiest | much easier |
| Tyler Warren | IND | 13 | 47.6 | D · 8th hardest | A · 3rd easiest | much easier |
| T.J. Hockenson | MIN | 6 | 138.7 | C · 14th hardest | B · 4th easiest | much easier |
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

