/** talisman ships no TypeScript types; we only use this one metric. */
declare module 'talisman/metrics/jaro-winkler.js' {
  const jaroWinkler: (a: string, b: string) => number;
  export default jaroWinkler;
}
