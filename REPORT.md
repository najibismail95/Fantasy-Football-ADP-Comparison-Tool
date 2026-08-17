# Fantasy ADP report — 2026-08-17

_Snapshot 2026-08-17 · 21 days of history collected. Generated automatically by the daily ingest workflow._

_ESPN ADP is censored above pick 166 — those values mean "very late", not a real average, so they are excluded from arbitrage._


## Integrity: ADP must be decimal, not rank (PLAN.md §0.3)

| source | players | earliest_pick | deepest_pick | pct_decimal_top300 |
| --- | --- | --- | --- | --- |
| ESPN | 350 | 1.53 | 171 | 98.7 |
| SLEEPER | 955 | 1.1 | 700.5 | 87.7 |
| YAHOO | 223 | 1.5 | 144.7 | 92.4 |


## Resolution tier distribution (fuzzy should stay ~0)

| source | resolve_tier | n |
| --- | --- | --- |
| ESPN | exact | 1170 |
| ESPN | id | 470 |
| ESPN | team | 110 |
| SLEEPER | id | 955 |
| YAHOO | exact | 202 |
| YAHOO | team | 21 |


## A. Cross-platform arbitrage: leave-one-out median (PPR/1QB)

| player | pos | espn_adp | sleeper_adp | yahoo_adp | outlier_source | rounds | verdict | proj_pts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chris Godwin | WR | 148.7 | 93 | 98.2 | ESPN | 4.4 | CHEAPER on ESPN | 166 |
| RJ Harvey | RB | 132.7 | 78 | 100.1 | ESPN | 3.6 | CHEAPER on ESPN | 148 |
| Kyler Murray | QB | 148.6 | 157.4 | 111.1 | YAHOO | 3.5 | pricier on YAHOO | 258 |
| Travis Hunter | WR | 118.8 | 164.7 | 126.9 | SLEEPER | 3.5 | CHEAPER on SLEEPER | 107 |
| Dalton Kincaid | TE | 136.3 | 91.1 | 99.9 | ESPN | 3.4 | CHEAPER on ESPN | 159 |
| Blake Corum | RB | 141.4 | 103.7 | 99.1 | ESPN | 3.3 | CHEAPER on ESPN | 147 |
| Chuba Hubbard | RB | 116.8 | 77.6 | 76.6 | ESPN | 3.3 | CHEAPER on ESPN | 168 |
| Quentin Johnston | WR | 144.1 | 105.1 | 107.7 | ESPN | 3.1 | CHEAPER on ESPN | 165 |
| Makai Lemon | WR | 130.8 | 82 | 107 | SLEEPER | 3.1 | pricier on SLEEPER | 162 |
| Kyle Monangai | RB | 132.7 | 94.2 | 99.2 | ESPN | 3 | CHEAPER on ESPN | 166 |
| Tucker Kraft | TE | 99.2 | 65.9 | 61.1 | ESPN | 3 | CHEAPER on ESPN | 178 |
| Jordan Mason | RB | 154 | 119.9 | 119.8 | ESPN | 2.8 | CHEAPER on ESPN | 152 |
| Mike Evans | WR | 96.2 | 59.3 | 65.8 | ESPN | 2.8 | CHEAPER on ESPN | 202 |
| Christian Watson | WR | 102.4 | 69.7 | 67.9 | ESPN | 2.8 | CHEAPER on ESPN | 197 |
| Justin Herbert | QB | 109.4 | 85.2 | 68.4 | ESPN | 2.7 | CHEAPER on ESPN | 289 |
| Alvin Kamara | RB | 156.6 | 158.7 | 126.4 | YAHOO | 2.6 | pricier on YAHOO | 95 |
| J.K. Dobbins | RB | 124.4 | 89.1 | 98.3 | ESPN | 2.6 | CHEAPER on ESPN | 170 |


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

