import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { blendProjections, type SourceProjection } from './projections.js';

const row = (playerId: string, source: string, points: number, scoring = 'PPR'): SourceProjection =>
  ({ playerId, source, scoring, points });

describe('blendProjections', () => {
  test('averages across sources and reports the spread', () => {
    const out = blendProjections([row('p1', 'ESPN', 300), row('p1', 'SLEEPER', 260)]);
    assert.equal(out[0]!.points, 280);
    assert.equal(out[0]!.sources, 2);
    assert.equal(out[0]!.spread, 40);
  });

  test('a player in only one source still comes through, with spread 0', () => {
    // ESPN covers ~350 players, Sleeper ~1066 — most of the tail is single-source.
    const out = blendProjections([row('solo', 'ESPN', 100)]);
    assert.equal(out[0]!.points, 100);
    assert.equal(out[0]!.sources, 1);
    assert.equal(out[0]!.spread, 0);
  });

  test('scoring formats are blended independently, never mixed', () => {
    // Sleeper supplies PPR/HALF/STD; averaging a PPR total with a STD total
    // would be meaningless.
    const out = blendProjections([
      row('p1', 'SLEEPER', 300, 'PPR'),
      row('p1', 'SLEEPER', 240, 'STD'),
    ]);
    const ppr = out.find((o) => o.scoring === 'PPR')!;
    const std = out.find((o) => o.scoring === 'STD')!;
    assert.equal(ppr.points, 300);
    assert.equal(std.points, 240);
  });

  test('a duplicated source does not get double weight', () => {
    // Regression guard: if an ingest ever emitted ESPN twice, a naive mean
    // would weight it 2:1 against Sleeper and silently skew every VORP.
    const out = blendProjections([
      row('p1', 'ESPN', 300), row('p1', 'ESPN', 300), row('p1', 'SLEEPER', 200),
    ]);
    assert.equal(out[0]!.points, 250, 'ESPN must count once, not twice');
    assert.equal(out[0]!.sources, 2);
  });

  test('non-finite points are dropped rather than poisoning the mean', () => {
    const out = blendProjections([row('p1', 'ESPN', Number.NaN), row('p1', 'SLEEPER', 200)]);
    assert.equal(out[0]!.points, 200);
    assert.equal(out[0]!.sources, 1);
  });

  test('blending widens a compressed band — the reason this exists', () => {
    // Mirrors the real RB5-RB14 finding: ESPN rates four players nearly
    // identically, Sleeper separates them. The blend must preserve some of
    // that separation rather than collapsing back to flat.
    const flat = ['a', 'b', 'c', 'd'].map((p, i) => row(p, 'ESPN', 275 - i)); // 275..272
    const spread = ['a', 'b', 'c', 'd'].map((p, i) => row(p, 'SLEEPER', 260 - i * 15)); // 260..215
    const out = blendProjections([...flat, ...spread]).sort((x, y) => y.points - x.points);
    const range = out[0]!.points - out.at(-1)!.points;
    assert.ok(range > 20, `blended range should stay meaningful, got ${range.toFixed(1)}`);
  });
});
