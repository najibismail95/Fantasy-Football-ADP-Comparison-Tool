/**
 * Pick number -> round, as a fraction (pick 7 of 12 in round 2 => 2.5).
 *
 * Pick 1 is in round 1, so the +1 applies to the ZERO-BASED pick. The naive
 * `adp / teams + 1` is off by a full round at the boundaries: it puts pick 1 in
 * "round 1.08" and pick 12 — the last pick of round 1 — in "round 2.00".
 * Filtering rounds 9-16 in a 12-team league with that formula selected picks
 * 96-180 rather than the correct 97-192, silently dropping a whole round.
 */
export const roundOf = (pick: number, teams: number): number => (pick - 1) / teams + 1;

/** The integer round a pick falls in. Pick 12 in a 12-team league is round 1. */
export const roundNumber = (pick: number, teams: number): number => Math.ceil(pick / teams);
