import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { parsePosition, parsePositiveNumber, parseFraction, splitPositionAndDays, POSITIONS } from './args.js';

const USAGE = 'usage: npm run thing [POS]';

/**
 * These parsers report by exiting, so the failure path can't be asserted on
 * without replacing process.exit — an uncaught one would take the test runner
 * down with it. Swapped for a throw here so "did it reject?" is testable at
 * all, and console.error captured so a passing run stays quiet.
 */
let exitCalls: number[];
let errors: string[];
const realExit = process.exit;
const realError = console.error;

beforeEach(() => {
  exitCalls = [];
  errors = [];
  process.exit = ((code?: number) => {
    exitCalls.push(code ?? 0);
    throw new Error('EXIT');
  }) as typeof process.exit;
  console.error = (msg?: unknown) => void errors.push(String(msg));
});

afterEach(() => {
  process.exit = realExit;
  console.error = realError;
});

const rejects = (fn: () => unknown) => {
  assert.throws(fn, /EXIT/, 'expected the parser to exit');
  assert.deepEqual(exitCalls, [1], 'expected exit code 1');
};

describe('parsePosition', () => {
  test('accepts every position the commands support', () => {
    for (const pos of POSITIONS) {
      assert.equal(parsePosition(pos, USAGE), pos);
      assert.deepEqual(exitCalls, []);
    }
  });

  test('is case-insensitive — `rising qb` has always worked', () => {
    assert.equal(parsePosition('qb', USAGE), 'QB');
    assert.equal(parsePosition('Rb', USAGE), 'RB');
    assert.equal(parsePosition('def', USAGE), 'DEF');
  });

  test('undefined means "all positions", not an error', () => {
    assert.equal(parsePosition(undefined, USAGE), undefined);
    assert.deepEqual(exitCalls, []);
  });

  test('rejects a typo rather than filtering to nothing', () => {
    // The bug this exists for: "ZZ" matched no rows and every command
    // rendered that as its ordinary empty result.
    rejects(() => parsePosition('ZZ', USAGE));
    assert.match(errors.join('\n'), /unknown position "ZZ"/);
  });

  test('names the valid positions and the usage line when it rejects', () => {
    rejects(() => parsePosition('RBB', USAGE));
    const out = errors.join('\n');
    for (const pos of POSITIONS) assert.match(out, new RegExp(pos));
    assert.match(out, /usage: npm run thing/);
  });

  test('rejects a flag that leaked into the position slot', () => {
    // Flags are stripped before parsing, but if that ever regresses the
    // position filter must not silently become "--MARKDOWN".
    rejects(() => parsePosition('--markdown', USAGE));
  });

  test('rejects the empty string rather than treating it as absent', () => {
    rejects(() => parsePosition('', USAGE));
  });
});

describe('parsePositiveNumber', () => {
  test('returns the fallback when the argument is absent', () => {
    assert.equal(parsePositiveNumber(undefined, 4, 'ROUND_MIN', USAGE), 4);
    assert.deepEqual(exitCalls, []);
  });

  test('parses integers and decimals', () => {
    assert.equal(parsePositiveNumber('7', 4, 'ROUND_MIN', USAGE), 7);
    assert.equal(parsePositiveNumber('7.5', 4, 'ROUND_MIN', USAGE), 7.5);
  });

  test('rejects non-numeric input instead of silently dropping the filter', () => {
    // The dangerous case: Number("foo") is NaN, every `x >= NaN` is false, so
    // a range built from it matched everything and printed the full board.
    rejects(() => parsePositiveNumber('foo', 4, 'ROUND_MIN', USAGE));
    assert.match(errors.join('\n'), /ROUND_MIN must be a positive number, got "foo"/);
  });

  test('rejects zero and negatives', () => {
    rejects(() => parsePositiveNumber('0', 7, 'DAYS', USAGE));
    exitCalls = [];
    rejects(() => parsePositiveNumber('-3', 7, 'DAYS', USAGE));
  });

  test('rejects Infinity, which is finite-looking to a naive check', () => {
    rejects(() => parsePositiveNumber('Infinity', 4, 'ROUND_MIN', USAGE));
  });

  test('uses the caller label so the message names the real argument', () => {
    rejects(() => parsePositiveNumber('nope', 7, 'DAYS', USAGE));
    assert.match(errors.join('\n'), /DAYS must be/);
  });
});

describe('splitPositionAndDays', () => {
  test('two arguments are always [POS, DAYS]', () => {
    assert.deepEqual(splitPositionAndDays(['WR', '14']), ['WR', '14']);
  });

  test('a lone number is DAYS, not a position', () => {
    // The gap this closes: `rising 14` used to filter to a position named
    // "14" and print an empty board.
    assert.deepEqual(splitPositionAndDays(['14']), [undefined, '14']);
    assert.deepEqual(splitPositionAndDays(['7']), [undefined, '7']);
  });

  test('a lone decimal is DAYS too', () => {
    assert.deepEqual(splitPositionAndDays(['1.5']), [undefined, '1.5']);
  });

  test('a lone non-number stays a position', () => {
    assert.deepEqual(splitPositionAndDays(['WR']), ['WR', undefined]);
  });

  test('a lone typo stays a position so it still errors as one', () => {
    // Must NOT be swallowed as days — the position validator has to see it.
    assert.deepEqual(splitPositionAndDays(['ZZ']), ['ZZ', undefined]);
    assert.deepEqual(splitPositionAndDays(['14x']), ['14x', undefined]);
  });

  test('no arguments means all positions and the default window', () => {
    assert.deepEqual(splitPositionAndDays([]), [undefined, undefined]);
  });

  test('a numeric first of two is still treated as the position', () => {
    // `rising 14 7` is nonsense; surfacing it as an unknown position is the
    // honest outcome, not silently reinterpreting the pair.
    assert.deepEqual(splitPositionAndDays(['14', '7']), ['14', '7']);
  });
});

describe('parseFraction', () => {
  test('returns the fallback when absent', () => {
    assert.equal(parseFraction(undefined, 0, '--weight', USAGE), 0);
    assert.deepEqual(exitCalls, []);
  });

  test('accepts both ends and the middle of the scale', () => {
    assert.equal(parseFraction('0', 0, '--weight', USAGE), 0);
    assert.equal(parseFraction('1', 0, '--weight', USAGE), 1);
    assert.equal(parseFraction('0.5', 0, '--weight', USAGE), 0.5);
  });

  test('rejects above 1 rather than clamping behind a header that says 200%', () => {
    rejects(() => parseFraction('2', 0, '--weight', USAGE));
    assert.match(errors.join('\n'), /--weight must be between 0 and 1, got "2"/);
  });

  test('rejects negatives', () => {
    rejects(() => parseFraction('-1', 0, '--weight', USAGE));
  });

  test('rejects non-numeric — this is what printed "NaN% projection"', () => {
    rejects(() => parseFraction('abc', 0, '--weight', USAGE));
  });
});
