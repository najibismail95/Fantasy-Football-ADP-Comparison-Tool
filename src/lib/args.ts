/**
 * Shared parsing for the positional arguments every read command takes.
 *
 * These commands answer a question about a subset of players, so a bad
 * argument has to stop the run. It never used to: an unrecognised position
 * simply matched no rows, and each command rendered that as its ordinary
 * "nothing here" output — an empty board under a note explaining that an
 * empty board is a normal result, an empty tier list, empty SOS tables under
 * their full explanatory prose. All of it indistinguishable from a real
 * answer, and all of it pointing at the data rather than at the typo.
 *
 * `rising` already guarded DAYS this way and `values` its round range. This
 * is the same idea applied to the argument all four share, in one place so
 * the message doesn't depend on which command you typed.
 */

/**
 * Positions a command can be filtered to.
 *
 * K and DEF are included because `values` and `tiers` accept them — the
 * league config can roster them. `rising` and `sos` legitimately exclude
 * them, but they do so with their own explanatory message after parsing,
 * which is a different (and more useful) thing to say than "unknown
 * position".
 */
export const POSITIONS = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'] as const;

export type Position = (typeof POSITIONS)[number];

/**
 * Case-insensitive by design — `rising qb` has always worked and people type
 * it. Only an unrecognised position is an error.
 *
 * Returns undefined for a missing argument, which every command reads as
 * "all positions" (or its own default).
 */
export function parsePosition(raw: string | undefined, usage: string): Position | undefined {
  if (raw === undefined) return undefined;
  const pos = raw.toUpperCase();
  if (!(POSITIONS as readonly string[]).includes(pos)) {
    console.error(
      `\nunknown position "${raw}" — expected one of ${POSITIONS.join(', ')}.\n${usage}\n`,
    );
    process.exit(1);
  }
  return pos as Position;
}

/**
 * A positive number, or exit. Used for round bounds and day windows.
 *
 * Non-numeric input is the dangerous case rather than the obvious one:
 * Number("foo") is NaN, and every `x >= NaN` comparison is false, so a range
 * filter built from it silently drops out and the command returns everything
 * as though it were the requested range.
 */
export function parsePositiveNumber(
  raw: string | undefined,
  fallback: number,
  label: string,
  usage: string,
): number {
  if (raw === undefined) return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0) {
    console.error(`\n${label} must be a positive number, got "${raw}".\n${usage}\n`);
    process.exit(1);
  }
  return n;
}
