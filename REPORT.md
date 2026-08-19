# Fantasy ADP report — 2026-08-19

_Snapshot 2026-08-19 · 23 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.52 | 171 | 98.3 |
| SLEEPER | 1156 | 1.5 | 700.8 | 87.3 |
| YAHOO | 223 | 1.5 | 144.7 | 88.8 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 470 |
| ESPN | team | 110 |
| SLEEPER | id | 1156 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## A. Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chris Godwin | WR | 148.1 | 95.9 | 98.2 | ESPN | 4.3 | CHEAPER on ESPN | 166 |
| RJ Harvey | RB | 134.9 | 79.7 | 101.4 | ESPN | 3.7 | CHEAPER on ESPN | 147 |
| Kyler Murray | QB | 147.7 | 159.4 | 111.3 | YAHOO | 3.5 | pricier on YAHOO | 263 |
| Travis Hunter | WR | 119 | 165 | 126.7 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 107 |
| Dalton Kincaid | TE | 135.5 | 89.7 | 99.7 | ESPN | 3.4 | CHEAPER on ESPN | 160 |
| Chuba Hubbard | RB | 117.7 | 76.5 | 79.4 | ESPN | 3.3 | CHEAPER on ESPN | 160 |
| Blake Corum | RB | 141 | 104.6 | 99.6 | ESPN | 3.2 | CHEAPER on ESPN | 147 |
| Makai Lemon | WR | 136 | 86.8 | 108.9 | ESPN | 3.2 | CHEAPER on ESPN | 162 |
| Tucker Kraft | TE | 97.8 | 65.4 | 61.1 | ESPN | 2.9 | CHEAPER on ESPN | 178 |
| Quentin Johnston | WR | 142 | 107.4 | 108.1 | ESPN | 2.9 | CHEAPER on ESPN | 165 |
| T.J. Hockenson | TE | 133.6 | 164.5 | 129.8 | SLEEPER | 2.7 | CHEAPER on SLEEPER | 157 |
| Alvin Kamara | RB | 156.6 | 160.6 | 126.1 | YAHOO | 2.7 | pricier on YAHOO | 95 |
| De'Zhaun Stribling | WR | 162.8 | 155.3 | 126.7 | YAHOO | 2.7 | pricier on YAHOO | 129 |
| Justin Herbert | QB | 109.1 | 84.7 | 68.9 | ESPN | 2.7 | CHEAPER on ESPN | 290 |
| Mike Evans | WR | 94.9 | 59.2 | 66 | ESPN | 2.7 | CHEAPER on ESPN | 202 |
| Kyle Monangai | RB | 130.9 | 96.2 | 101 | ESPN | 2.7 | CHEAPER on ESPN | 165 |
| Christian Watson | WR | 101.6 | 70.9 | 67.8 | ESPN | 2.7 | CHEAPER on ESPN | 196 |
| Jordan Mason | RB | 150.7 | 120.8 | 118.4 | ESPN | 2.6 | CHEAPER on ESPN | 152 |
| Rashid Shaheed | WR | 159.1 | 158.1 | 128.4 | YAHOO | 2.5 | pricier on YAHOO | 141 |


## B. Superflex: ESPN rank shift for QBs (FORMATS.md §1)

| player | ppr | sflex | moves_up |
| --- | --- | --- | --- |
| Josh Allen | 36 | 1 | 35 |
| Jayden Daniels | 56 | 3 | 53 |
| Lamar Jackson | 58 | 5 | 53 |
| Drake Maye | 60 | 13 | 47 |
| Jalen Hurts | 62 | 15 | 47 |
| Joe Burrow | 81 | 21 | 60 |


## Unresolved players (surfaced, never dropped)

_(no rows)_


## Value board


_12-team PPR, 1QB/2RB/2WR/1TE/1FLEX. Replacement level: QB13 290pts, RB26 184pts, WR36 184pts, TE13 160pts, K13 124pts, DEF13 88pts._


_`espn_pts`/`sleeper_pts`: each source's own PPR projection — compare them yourself; `edge_pts` is how far the blend of the two beats (+) or misses (-) what a typical player at his ADP slot produces._


_1003 players excluded league-wide: fewer than 2 real ADP sources after removing values censored at a source's ceiling._


### QB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bryce Young | QB | 175.7 | 15.6 | QB28 | QB25 | 238 | 236 | +38.4 |
| Tyler Shough | QB | 155.6 | 13.9 | QB21 | QB19 | 266 | 271 | +13.9 |
| C.J. Stroud | QB | 164.3 | 14.6 | QB25 | QB23 | 247 | 253 | +13.3 |
| Jalen Hurts | QB | 56.7 | 5.6 | QB6 | QB4 | 320 | 311 | +10.0 |
| Brock Purdy | QB | 104.9 | 9.7 | QB14 | QB8 | 292 | 303 | +8.9 |
| Sam Darnold | QB | 162.6 | 14.5 | QB24 | QB22 | 243 | 263 | +7.3 |
| Bo Nix | QB | 100.5 | 9.3 | QB13 | QB9 | 296 | 296 | +6.4 |
| Jaxson Dart | QB | 82.8 | 7.8 | QB9 | QB7 | 301 | 297 | +2.6 |
| Patrick Mahomes | QB | 106 | 9.8 | QB15 | QB14 | 291 | 287 | +2.3 |
| Malik Willis | QB | 157.8 | 14.1 | QB22 | QB21 | 239 | 270 | +2.0 |
| Trevor Lawrence | QB | 95 | 8.8 | QB11 | QB10 | 288 | 303 | +0.5 |
| Jared Goff | QB | 133.5 | 12 | QB16 | QB16 | 269 | 283 | +0.0 |
| Lamar Jackson | QB | 37.1 | 4 | QB2 | QB2 | 323 | 326 | +0.0 |
| Baker Mayfield | QB | 142.7 | 12.8 | QB17 | QB17 | 265 | 275 | +0.0 |
| Josh Allen | QB | 22.2 | 2.8 | QB1 | QB1 | 370 | 362 | +0.0 |


### RB

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tyjae Spears | RB | 151.6 | 13.5 | RB48 | RB42 | 154 | 115 | +39.2 |
| Isiah Pacheco | RB | 159.8 | 14.2 | RB54 | RB49 | 124 | 54 | +19.5 |
| Dylan Sampson | RB | 159.3 | 14.2 | RB53 | RB50 | 87 | 89 | +18.6 |
| Woody Marks | RB | 152.6 | 13.6 | RB49 | RB43 | 128 | 84 | +17.3 |
| Jonathon Brooks | RB | 119.7 | 10.9 | RB38 | RB34 | 171 | 155 | +15.5 |
| Alvin Kamara | RB | 156.6 | 14 | RB51 | RB48 | 128 | 63 | +13.4 |
| Kenny Gainwell | RB | 117.3 | 10.7 | RB37 | RB33 | 178 | 152 | +13.0 |
| Rhamondre Stevenson | RB | 85 | 8 | RB29 | RB25 | 203 | 169 | +12.3 |
| MarShawn Lloyd | RB | 177.8 | 15.7 | RB57 | RB54 | 86 | 52 | +11.8 |
| Breece Hall | RB | 32.7 | 3.6 | RB16 | RB14 | 274 | 211 | +11.7 |
| Aaron Jones | RB | 123.4 | 11.2 | RB40 | RB36 | 177 | 137 | +10.6 |
| D'Andre Swift | RB | 56.8 | 5.6 | RB23 | RB21 | 212 | 208 | +10.4 |
| Derrick Henry | RB | 20 | 2.6 | RB12 | RB9 | 275 | 247 | +8.5 |
| Travis Etienne | RB | 44.7 | 4.6 | RB19 | RB17 | 244 | 208 | +8.5 |
| Keaton Mitchell | RB | 156.2 | 13.9 | RB50 | RB47 | 94 | 97 | +7.6 |


### WR

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Jerry Jeudy | WR | 178 | 15.8 | WR68 | WR60 | 138 | 120 | +49.0 |
| Rashid Shaheed | WR | 158.1 | 14.1 | WR62 | WR56 | 144 | 138 | +31.1 |
| Jalen McMillan | WR | 162.7 | 14.5 | WR64 | WR58 | 133 | 127 | +24.8 |
| Jayden Reed | WR | 120 | 10.9 | WR48 | WR37 | 170 | 198 | +19.3 |
| Jalen Coker | WR | 145.3 | 13 | WR57 | WR52 | 147 | 166 | +18.9 |
| Matthew Golden | WR | 129 | 11.7 | WR50 | WR39 | 185 | 170 | +16.9 |
| Khalil Shakir | WR | 131.5 | 11.9 | WR52 | WR44 | 171 | 171 | +14.3 |
| Xavier Worthy | WR | 137.3 | 12.4 | WR55 | WR45 | 173 | 162 | +13.9 |
| Garrett Wilson | WR | 44.1 | 4.6 | WR19 | WR13 | 250 | 225 | +12.8 |
| Jayden Higgins | WR | 140.5 | 12.6 | WR56 | WR55 | 142 | 165 | +12.2 |
| Parker Washington | WR | 84.7 | 8 | WR34 | WR28 | 187 | 212 | +10.5 |
| Rome Odunze | WR | 68.5 | 6.6 | WR28 | WR24 | 213 | 208 | +10.4 |
| Puka Nacua | WR | 4.5 | 1.3 | WR2 | WR1 | 356 | 313 | +10.1 |
| Jakobi Meyers | WR | 116.3 | 10.6 | WR45 | WR40 | 182 | 169 | +8.2 |
| Denzel Boston | WR | 147.3 | 13.2 | WR58 | WR57 | 141 | 135 | +7.5 |


### TE

| player | pos | adp | round | drafted_as | produces_like | espn_pts | sleeper_pts | edge_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Greg Dulcich | TE | 182.9 | 16.2 | TE28 | TE26 | 119 | 111 | +33.8 |
| Pat Freiermuth | TE | 182.3 | 16.1 | TE27 | TE22 | 136 | 128 | +22.9 |
| Juwan Johnson | TE | 164.3 | 14.6 | TE24 | TE19 | 143 | 141 | +15.1 |
| Brenton Strange | TE | 139.8 | 12.6 | TE19 | TE17 | 142 | 161 | +9.6 |
| Mark Andrews | TE | 123.1 | 11.2 | TE16 | TE11 | 169 | 163 | +9.4 |
| Brock Bowers | TE | 22.8 | 2.8 | TE2 | TE1 | 241 | 254 | +8.8 |
| Dalton Schultz | TE | 161.6 | 14.4 | TE23 | TE20 | 133 | 139 | +8.2 |
| Harold Fannin | TE | 71.4 | 6.9 | TE8 | TE6 | 188 | 180 | +6.5 |
| T.J. Hockenson | TE | 133.6 | 12.1 | TE18 | TE14 | 158 | 155 | +4.9 |
| Jake Ferguson | TE | 112.4 | 10.3 | TE13 | TE12 | 167 | 160 | +3.6 |
| Terrance Ferguson | TE | 168.5 | 15 | TE26 | TE25 | 136 | 100 | +3.0 |
| Travis Kelce | TE | 94 | 8.8 | TE10 | TE9 | 178 | 171 | +1.4 |
| Kyle Pitts | TE | 68.8 | 6.6 | TE7 | TE7 | 185 | 172 | +0.0 |
| Chig Okonkwo | TE | 148.6 | 13.3 | TE21 | TE21 | 121 | 144 | +0.0 |
| Sam LaPorta | TE | 62.9 | 6.2 | TE5 | TE5 | 189 | 197 | +0.0 |

