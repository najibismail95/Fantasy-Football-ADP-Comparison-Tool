import { z } from 'zod';

/**
 * A league's roster shape. First-class, not a tag on an ADP row — see
 * FORMATS.md §2. ADP/ECR are keyed by the SOURCE's own format (only PPR/1QB
 * is published by all three); VORP and everything downstream is keyed by
 * this instead, so it works for any config a source never publishes.
 */
export const LeagueConfigSchema = z.object({
  teams: z.number().int().min(4).max(20),
  scoring: z.enum(['STD', 'HALF', 'PPR']),
  tePremium: z.number().min(0).max(1).default(0),
  starters: z.object({
    qb: z.number().int().min(0).default(1),
    rb: z.number().int().min(0).default(2),
    wr: z.number().int().min(0).default(2),
    te: z.number().int().min(0).default(1),
    flex: z.number().int().min(0).default(1), // RB/WR/TE
    superflex: z.number().int().min(0).default(0), // QB/RB/WR/TE
    k: z.number().int().min(0).default(1), // 0 disables the position
    dst: z.number().int().min(0).default(1),
  }),
  benchSize: z.number().int().min(0).default(6),
});

export type LeagueConfig = z.infer<typeof LeagueConfigSchema>;

/** The one format all three ADP sources actually publish — see PLAN.md §0.5. */
export const DEFAULT_CONFIG: LeagueConfig = LeagueConfigSchema.parse({
  teams: 12,
  scoring: 'PPR',
  starters: {},
});

/** Stable identity for a config, used as a cache/storage key. */
export function configKey(cfg: LeagueConfig): string {
  const s = cfg.starters;
  return [
    `t${cfg.teams}`, cfg.scoring, cfg.tePremium ? `tep${cfg.tePremium}` : null,
    `qb${s.qb}`, `rb${s.rb}`, `wr${s.wr}`, `te${s.te}`,
    s.flex ? `flex${s.flex}` : null, s.superflex ? `sf${s.superflex}` : null,
    s.k ? `k${s.k}` : null, s.dst ? `dst${s.dst}` : null,
  ].filter(Boolean).join('_');
}
