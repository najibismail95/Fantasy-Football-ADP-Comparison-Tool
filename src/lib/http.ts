import pRetry from 'p-retry';
import { USER_AGENT } from '../config.js';

/** GET with retry/backoff and a polite identified user-agent. */
export async function get(
  url: string,
  opts: { headers?: Record<string, string>; timeoutMs?: number } = {},
): Promise<string> {
  const { headers = {}, timeoutMs = 60_000 } = opts;
  return pRetry(
    async () => {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), timeoutMs);
      try {
        const res = await fetch(url, {
          headers: { 'user-agent': USER_AGENT, ...headers },
          signal: ctl.signal,
        });
        if (!res.ok) {
          const err = new Error(`HTTP ${res.status} for ${url}`);
          // 4xx (except 429) will not fix themselves — don't burn retries.
          if (res.status >= 400 && res.status < 500 && res.status !== 429) {
            Object.assign(err, { name: 'AbortError' });
          }
          throw err;
        }
        return await res.text();
      } finally {
        clearTimeout(t);
      }
    },
    { retries: 3, minTimeout: 2_000, factor: 2 },
  );
}

export async function getJson<T = unknown>(
  url: string,
  opts: Parameters<typeof get>[1] = {},
): Promise<T> {
  return JSON.parse(await get(url, { ...opts, headers: { accept: 'application/json', ...opts.headers } })) as T;
}
