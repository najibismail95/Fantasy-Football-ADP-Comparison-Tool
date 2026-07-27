import { z } from 'zod';
import { SOURCES } from '../config.js';
import { get } from '../lib/http.js';
import { writeBronze } from '../lib/bronze.js';
import { num } from '../lib/assert.js';
import type { Crosswalk } from '../resolve/crosswalk.js';
import type { EcrRow, UnresolvedRow } from '../types.js';

/**
 * FantasyPros ECR — Expert Consensus RANKING, not ADP.
 *
 * ⚠️ ECR is what ~73 analysts SAY; ADP is what drafters DO. Different
 * quantities — kept in ecr_snapshots, never merged into adp_snapshots.
 * FantasyPros *ADP* comes via beatadp.
 *
 * The official API is key-gated (403 on every path, including with a key
 * header). These public pages are open and embed the full dataset.
 *
 * ⚠️ Scoring is selected by URL, not query param — `?scoring=PPR` is silently
 * ignored and returns STD.
 *
 * ⚠️ Numeric fields are JSON STRINGS ("2.07"), so a naive typeof check treats
 * every row as an integer. Coerced through num().
 *
 * ⚠️ The page also defines `var adpData`, which despite its name contains no
 * ADP — it is an id->rank map. Ignored.
 */

const EcrPlayer = z
  .object({
    player_id: z.union([z.number(), z.string()]),
    player_name: z.string(),
    player_team_id: z.string().nullish(),
    player_position_id: z.string().nullish(),
    rank_ecr: z.number(),
    rank_ave: z.union([z.string(), z.number()]).nullish(),
    rank_std: z.union([z.string(), z.number()]).nullish(),
    rank_min: z.union([z.string(), z.number()]).nullish(),
    rank_max: z.union([z.string(), z.number()]).nullish(),
  })
  .loose();

const EcrData = z.object({
  scoring: z.string().nullish(),
  total_experts: z.union([z.number(), z.string()]).nullish(),
  players: z.array(EcrPlayer),
});

const ECR_RE = /var\s+ecrData\s*=\s*(\{[\s\S]*?\});\s*\n/;

export type FantasyProsResult = {
  ecr: EcrRow[];
  unresolved: UnresolvedRow[];
  scoring: string;
  totalExperts: number | null;
};

export type FantasyProsFormat = keyof typeof SOURCES.fantasypros;

export async function fetchFantasyPros(format: FantasyProsFormat, captureDate: string) {
  const body = await get(SOURCES.fantasypros[format]);
  await writeBronze(`fantasypros/${format}`, captureDate, body, 'html');
  return body;
}

export function parseFantasyPros(
  html: string,
  format: FantasyProsFormat,
  xwalk: Crosswalk,
): FantasyProsResult {
  const m = ECR_RE.exec(html);
  if (!m?.[1]) {
    throw new Error(
      `[fantasypros/${format}] ecrData block not found — page structure changed. ` +
        `Inspect the bronze copy.`,
    );
  }
  const data = EcrData.parse(JSON.parse(m[1]));
  const out: FantasyProsResult = {
    ecr: [],
    unresolved: [],
    scoring: data.scoring ?? format.toUpperCase(),
    totalExperts: num(data.total_experts),
  };

  for (const p of data.players) {
    const sourceId = String(p.player_id);
    const r = xwalk.resolve({
      sourceId,
      name: p.player_name,
      pos: p.player_position_id ?? null,
      team: p.player_team_id ?? null,
    });
    if (!r.player) {
      out.unresolved.push({
        source: `FANTASYPROS/${format}`,
        sourceId,
        sourceName: p.player_name,
        pos: p.player_position_id ?? null,
        team: p.player_team_id ?? null,
        reason: 'no match in spine',
      });
      continue;
    }
    out.ecr.push({
      playerId: r.player.playerId,
      source: 'FANTASYPROS',
      ecrFormat: out.scoring,
      rankEcr: p.rank_ecr,
      rankAve: num(p.rank_ave),
      rankStd: num(p.rank_std),   // dispersion across experts
      rankMin: num(p.rank_min),
      rankMax: num(p.rank_max),
      sourceId,
      sourceName: p.player_name,
      resolveTier: r.tier,
    });
  }
  return out;
}
