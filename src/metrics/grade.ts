/**
 * A-F grading on a curve, shared by anything that needs to turn a spread of
 * numbers into a letter.
 *
 * Extracted from vorp.ts when strength of schedule became a second consumer.
 * The alternative was a second copy of the cutoffs, which is how two views end
 * up quietly disagreeing about what an A means.
 */

export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

/**
 * Classic 10-20-40-20-10 grading curve, in standard deviations from the mean.
 * These cutoffs are the traditional ones for curving a normal distribution:
 * A = top ~10%, B = next ~20%, C = middle ~40%, D = next ~20%, F = bottom ~10%.
 */
const CURVE: readonly [number, Grade][] = [
  [1.28, 'A'],
  [0.52, 'B'],
  [-0.52, 'C'],
  [-1.28, 'D'],
];

export function letterFor(z: number): Grade {
  for (const [cutoff, grade] of CURVE) if (z >= cutoff) return grade;
  return 'F';
}

/**
 * Standardize a set of values and grade each against its own peers.
 *
 * Curving rather than using fixed thresholds is what makes grades comparable
 * across groups that have genuinely different spreads. A 3-game playoff window
 * swings far wider than a 14-game regular season — 74.7 to 130.7 against 91.5
 * to 112.6 in the 2026 ratings — so a fixed "110 or better is an A" would hand
 * out playoff As freely and almost no regular-season ones, describing the
 * calendar rather than the schedule.
 *
 * ⚠️ The flip side, which belongs in any legend built on this: an A in one
 * group and an A in another are the same *percentile*, not the same magnitude.
 * A regular-season A is a smaller real edge than a playoff A, because there is
 * less spread available to be good within.
 *
 * Fewer than 4 values, or no spread at all, grades everything C. A curve over
 * three numbers is noise dressed up as a verdict.
 */
export function curveGrades(values: readonly number[]): { z: number; grade: Grade }[] {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
  const sd = Math.sqrt(variance);

  return values.map((v) => {
    const z = values.length < 4 || sd === 0 ? 0 : (v - mean) / sd;
    return { z, grade: letterFor(z) };
  });
}
