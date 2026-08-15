import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { assertLooksLikeAdp, detectCensoring, num } from './assert.js';

describe('assertLooksLikeAdp', () => {
  test('accepts a healthy ADP series', () => {
    // Real averaged ADP: almost always fractional.
    const adp = Array.from({ length: 100 }, (_, i) => i + 1 + (i % 7) / 10 + 0.3);
    assert.doesNotThrow(() => assertLooksLikeAdp('healthy', adp));
  });

  test('rejects a rank series swapped into an ADP column', () => {
    // The actual failure this exists to catch: 1, 2, 3, 4...
    const ranks = Array.from({ length: 300 }, (_, i) => i + 1);
    assert.throws(
      () => assertLooksLikeAdp('ranks', ranks),
      /looks like RANK data/,
    );
  });

  test('a deep integer tail does NOT trip the guard (regression: broke CI 2026-08-14)', () => {
    // Sleeper expanded ADP coverage 311 -> 804 players mid-draft-season. The
    // new entries were deep players drafted in a handful of leagues, so their
    // ADP is exactly integral (taken once at pick 440 -> adp 440.0). That
    // dragged the whole-series non-integer ratio to 55% and failed the ingest,
    // even though the top of the board was ~90% fractional and perfectly fine.
    const healthyTop = Array.from({ length: 300 }, (_, i) => i + 1 + 0.4);
    const integerTail = Array.from({ length: 500 }, (_, i) => 400 + i);
    const combined = [...healthyTop, ...integerTail];

    // Sanity: the whole series really would fail a naive check.
    const wholeSeriesRatio = combined.filter((v) => !Number.isInteger(v)).length / combined.length;
    assert.ok(wholeSeriesRatio < 0.8, 'precondition: whole series looks bad');

    assert.doesNotThrow(() => assertLooksLikeAdp('deep-tail', combined));
  });

  test('still catches ranks even when a fractional tail would mask them', () => {
    // Inverse of the above — the guard must not be fooled by appending
    // fractional junk after an integer top.
    const rankTop = Array.from({ length: 300 }, (_, i) => i + 1);
    const fractionalTail = Array.from({ length: 500 }, (_, i) => 400 + i + 0.5);
    assert.throws(
      () => assertLooksLikeAdp('masked-ranks', [...rankTop, ...fractionalTail]),
      /looks like RANK data/,
    );
  });

  test('a sample too small to judge is allowed through rather than blocking the run', () => {
    assert.doesNotThrow(() => assertLooksLikeAdp('tiny', [1, 2, 3]));
  });
});

describe('detectCensoring', () => {
  test('finds a ceiling where values pile up', () => {
    // 50 spread out, then 20 jammed at the top — ESPN's actual shape.
    const spread = Array.from({ length: 50 }, (_, i) => i + 1);
    const piled = Array.from({ length: 20 }, () => 170);
    const ceiling = detectCensoring([...spread, ...piled]);
    assert.ok(ceiling !== null && ceiling <= 170, `expected a ceiling near 170, got ${ceiling}`);
  });

  test('returns null for an uncensored series', () => {
    const clean = Array.from({ length: 100 }, (_, i) => i * 3 + 1);
    assert.equal(detectCensoring(clean), null);
  });

  test('refuses to judge a sample under 50 values', () => {
    assert.equal(detectCensoring([1, 2, 3, 100, 100, 100]), null);
  });
});

describe('num', () => {
  test('coerces FantasyPros string numerics', () => {
    assert.equal(num('2.07'), 2.07);
    assert.equal(num(5), 5);
  });

  test('returns null for empty/absent/garbage rather than NaN', () => {
    // NaN would poison any downstream mean; null is filterable.
    assert.equal(num(null), null);
    assert.equal(num(undefined), null);
    assert.equal(num(''), null);
    assert.equal(num('not a number'), null);
  });
});
