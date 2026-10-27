/**
 * Generative guilloche rosette: the engraved line-work found on banknotes and bond certificates.
 * Pure function of `seed`, so each company gets a stable, unique pattern. Server-rendered SVG, no JS.
 */
function hash(str: string) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Guilloche({
  seed,
  className = "",
  strokeWidth = 0.45,
}: {
  seed: string;
  className?: string;
  strokeWidth?: number;
}) {
  const r = rng(hash(seed));
  const layers = [0, 1, 2].map((i) => {
    const n = 36 + Math.floor(r() * 5) * 6;            // 36–60 ellipses
    const a = 92 - i * 24 - r() * 8;                    // major radius
    const b = a * (0.14 + r() * 0.34);                  // minor radius
    const off = i === 1 ? 6 + r() * 22 : r() * 10;      // centre offset: scalloped vs flower
    return { n, a, b, off, key: i };
  });
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" focusable="false" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      {layers.map((l) => (
        <g key={l.key}>
          {Array.from({ length: l.n }, (_, i) => (
            <ellipse key={i} cx={l.off.toFixed(2)} cy="0" rx={l.a.toFixed(2)} ry={l.b.toFixed(2)} transform={`rotate(${((i * 360) / l.n).toFixed(2)})`} vectorEffect="non-scaling-stroke" />
          ))}
        </g>
      ))}
      <circle r="97" vectorEffect="non-scaling-stroke" />
      <circle r="99.4" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
