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

/**
 * Split `[POS] [DAYS]` positionals when either may be omitted.
 *
 * The plain destructure left "every position over N days" unreachable: with
 * the position omitted there is no way to address the days slot, so
 * `rising 14` put "14" in the position slot and filtered to a position that
 * does not exist — an empty board, no error.
 *
 * No position is numeric, so a single numeric argument is unambiguously the
 * window. Two arguments always mean [POS, DAYS]; anything non-numeric alone
 * is a position (and is validated as one, so a typo still errors).
 */
export function splitPositionAndDays(
  positional: readonly string[],
): [pos: string | undefined, days: string | undefined] {
  const first = positional[0];
  if (positional.length === 1 && first !== undefined && /^[0-9]+(\.[0-9]+)?$/.test(first)) {
    return [undefined, first];
  }
  return [first, positional[1]];
}

/**
 * A fraction in [0, 1], or exit.
 *
 * `tiers --weight` fed its raw value straight into the header line while
 * compositeScore quietly clamped it to [0,1] for the actual maths. The two
 * disagreed, so the output described a computation that had not happened:
 * `--weight=2` printed "200% projection / -100% ADP" and `--weight=abc`
 * printed "NaN% projection / NaN% ADP", both above tiers built with a
 * perfectly valid clamped weight. Rejecting up front is better than clamping
 * silently — the user asked for something the scale does not have.
 */
export function parseFraction(
  raw: string | undefined,
  fallback: number,
  label: string,
  usage: string,
): number {
  if (raw === undefined) return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0 || n > 1) {
    console.error(`\n${label} must be between 0 and 1, got "${raw}".\n${usage}\n`);
    process.exit(1);
  }
  return n;
}
