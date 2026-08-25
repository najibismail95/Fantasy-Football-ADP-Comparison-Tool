import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { computeMomentum, selectMomentum, type SnapshotRow, type MomentumResult } from './momentum.js';

describe('computeMomentum', () => {
  test('an earlier ADP now is RISING, a later ADP now is FALLING', () => {
    const then: SnapshotRow[] = [
      { playerId: 'riser', pos: 'RB', adp: 60 },
      { playerId: 'faller', pos: 'RB', adp: 20 },
    ];
    const now: SnapshotRow[] = [
      { playerId: 'riser', pos: 'RB', adp: 36 }, // moved 24 picks earlier
      { playerId: 'faller', pos: 'RB', adp: 44 }, // moved 24 picks later
    ];
    const out = computeMomentum(then, now, 12);
    const riser = out.find((r) => r.playerId === 'riser')!;
    const faller = out.find((r) => r.playerId === 'faller')!;
    assert.equal(riser.moveRounds, 2, '24 picks earlier / 12 teams = +2 rounds');
    assert.equal(faller.moveRounds, -2, '24 picks later / 12 teams = -2 rounds');
  });

  test('a player missing from THEN is excluded, not treated as infinite movement', () => {
    // Regression case this function exists to prevent: Sleeper's ADP pool
    // grew from ~240 to ~1150 rows over the 2026 preseason. A player only
    // just added to a source's pool isn't "rising from nothing" — he simply
    // wasn't tracked yet, and that's pool growth, not a market signal.
    const then: SnapshotRow[] = [{ playerId: 'veteran', pos: 'WR', adp: 50 }];
    const now: SnapshotRow[] = [
      { playerId: 'veteran', pos: 'WR', adp: 45 },
      { playerId: 'new-to-pool', pos: 'WR', adp: 180 },
    ];
    const out = computeMomentum(then, now, 12);
    assert.equal(out.length, 1);
    assert.equal(out.find((r) => r.playerId === 'new-to-pool'), undefined);
  });

  test('a player missing from NOW (e.g. dropped by the source) is excluded', () => {
    const then: SnapshotRow[] = [
      { playerId: 'stays', pos: 'QB', adp: 30 },
      { playerId: 'dropped', pos: 'QB', adp: 250 },
    ];
    const now: SnapshotRow[] = [{ playerId: 'stays', pos: 'QB', adp: 28 }];
    const out = computeMomentum(then, now, 12);
    assert.equal(out.length, 1);
    assert.equal(out.find((r) => r.playerId === 'dropped'), undefined);
  });

  test('no movement is exactly zero, not a rounding artifact', () => {
    const then: SnapshotRow[] = [{ playerId: 'stable', pos: 'TE', adp: 90 }];
    const now: SnapshotRow[] = [{ playerId: 'stable', pos: 'TE', adp: 90 }];
    const out = computeMomentum(then, now, 12);
    assert.equal(out[0]!.moveRounds, 0);
  });

  test('moveRounds is a plain ratio, not roundOf — 0 delta must be 0 rounds, not 1', () => {
    // roundOf(pick, teams) = (pick-1)/teams + 1, which exists to answer
    // "which round is pick N in" (pick 1 -> round 1, never round 0). Applying
    // that formula to a DELTA instead of an absolute pick would put a
    // no-movement player at 1 round of "movement" instead of 0 — the wrong
    // question answered with the right-looking function.
    const then: SnapshotRow[] = [{ playerId: 'p', pos: 'RB', adp: 1 }];
    const now: SnapshotRow[] = [{ playerId: 'p', pos: 'RB', adp: 1 }];
    const out = computeMomentum(then, now, 12);
    assert.equal(out[0]!.moveRounds, 0);
  });
});

describe('selectMomentum', () => {
  const SOURCES = ['ESPN', 'SLEEPER', 'YAHOO'] as const;
  // moveRounds is all selectMomentum reads; the rest is filled in for shape.
  const move = (moveRounds: number): MomentumResult => ({
    playerId: 'p', pos: 'WR', adpThen: 100, adpNow: 100 - moveRounds * 12, moveRounds,
  });

  test('excluded when the required source (ESPN) has no data at all', () => {
    // Regression (Chris Rodriguez/Tank Bigsby/Jayden Higgins/Chig Okonkwo,
    // 2026-08-24): real Sleeper moves with ESPN not ranking them at all. "2
    // of 3 sources present" let them through even though neither present
    // source was really vouching for the move the way ESPN would.
    const bySource = { SLEEPER: move(2), YAHOO: move(1.8) };
    assert.equal(selectMomentum(bySource, SOURCES, 'ESPN', 0.5), null);
  });

  test('excluded when only one source has data at all, even if it is ESPN', () => {
    const bySource = { ESPN: move(5) };
    assert.equal(selectMomentum(bySource, SOURCES, 'ESPN', 0.5), null);
  });

  test('excluded when the biggest available move is below the noise floor', () => {
    const bySource = { ESPN: move(0.2), SLEEPER: move(0.3) };
    assert.equal(selectMomentum(bySource, SOURCES, 'ESPN', 0.5), null);
  });

  test('a real disagreement is NOT excluded — shown with agreeCount 1, ranked by the bigger source', () => {
    // Regression (Jordan Love, 2026-08-24, 7-day window): Sleeper showed -1.8
    // rounds while ESPN showed the OPPOSITE sign (+0.008, rounds to +0 here
    // as +0.1 for a clean fixture). A real cross-source disagreement is
    // information worth showing, not a reason to hide the player outright —
    // it just shouldn't rank above a corroborated move.
    const bySource = { ESPN: move(0.1), SLEEPER: move(-1.8) };
    const result = selectMomentum(bySource, SOURCES, 'ESPN', 0.5);
    assert.ok(result);
    assert.equal(result.bestSign, -1, 'the bigger mover (Sleeper) decides direction');
    assert.equal(result.bestAbsMove, 1.8);
    assert.equal(result.agreeCount, 1, 'only Sleeper itself clears the bar in its own direction');
  });

  test('two sources agreeing gives agreeCount 2', () => {
    const bySource = { ESPN: move(0.9), SLEEPER: move(1.7) };
    const result = selectMomentum(bySource, SOURCES, 'ESPN', 0.5);
    assert.ok(result);
    assert.equal(result.agreeCount, 2);
    assert.equal(result.bestSign, 1);
  });

  test('three sources agreeing gives agreeCount 3, ranked above a 2-source agreement', () => {
    const threeAgree = selectMomentum({ ESPN: move(0.9), SLEEPER: move(1.7), YAHOO: move(0.6) }, SOURCES, 'ESPN', 0.5);
    const twoAgree = selectMomentum({ ESPN: move(0.9), SLEEPER: move(1.7) }, SOURCES, 'ESPN', 0.5);
    assert.equal(threeAgree!.agreeCount, 3);
    assert.equal(twoAgree!.agreeCount, 2);
    // The comparison rising.ts's sort relies on: more independent agreement
    // outranks fewer, even at a smaller bestAbsMove.
    assert.ok(threeAgree!.agreeCount > twoAgree!.agreeCount);
  });

  test('a source moving the OPPOSITE direction never counts toward agreeCount', () => {
    const bySource = { ESPN: move(2), SLEEPER: move(-1.5), YAHOO: move(1.8) };
    const result = selectMomentum(bySource, SOURCES, 'ESPN', 0.5);
    assert.ok(result);
    assert.equal(result.bestSign, 1, 'ESPN has the biggest move (2 > 1.8 > 1.5)');
    assert.equal(result.agreeCount, 2, 'ESPN and Yahoo agree; Sleeper points the other way and is excluded from the count');
  });
});
