// Measures WCAG 2.x contrast for the house palette and prints a Markdown table.
// Run: node scripts/contrast.mjs
// The brand book quotes this output; re-run it whenever a token changes.

const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [h, l] = [lum(a), lum(b)].sort((x, y) => y - x); return (h + 0.05) / (l + 0.05); };
const fmt = (x) => x.toFixed(1);

export const house = {
  pages: {
    surfaces: { field: '#F6F4EF', raised: '#ECE9E1', paper: '#FFFEFB' },
    text: { ink: '#1E2430', inksoft: '#575C68', stamp: '#B8322F', pencil: '#6A645E' },
    nonText: { line: '#D8D4CA' },
  },
  cover: {
    surfaces: { cover: '#1E2430', coverRaised: '#283040' },
    text: { cream: '#F6F4EF', creamDim: '#B9BEC9', stampLight: '#E8766E' },
    nonText: { coverLine: '#3B4455' },
  },
};

let out = '';
for (const [side, { surfaces, text, nonText }] of Object.entries(house)) {
  out += `\n### ${side === 'pages' ? 'Pages (light)' : 'Cover (dark)'}\n\n| Text | ${Object.keys(surfaces).map((s) => `on ${s}`).join(' | ')} |\n|---|${'---|'.repeat(Object.keys(surfaces).length)}\n`;
  for (const [tn, tv] of Object.entries(text)) {
    out += `| \`${tn}\` ${tv} | ${Object.values(surfaces).map((sv) => { const r = ratio(tv, sv); return `${fmt(r)}${r >= 4.5 ? ' ✓' : r >= 3 ? ' (large only)' : ' ✗'}`; }).join(' | ')} |\n`;
  }
  for (const [nn, nv] of Object.entries(nonText)) {
    out += `| \`${nn}\` ${nv} (non-text, needs 3:1) | ${Object.values(surfaces).map((sv) => { const r = ratio(nv, sv); return `${fmt(r)}${r >= 3 ? ' ✓' : ' ✗'}`; }).join(' | ')} |\n`;
  }
}
out += `\n### The stamp as a graphic\n\n| Shape | on field | on cover |\n|---|---|---|\n| stamp red #B8322F ring (needs 3:1) | ${fmt(ratio('#B8322F', '#F6F4EF'))} | ${fmt(ratio('#B8322F', '#1E2430'))} |\n| stamp light #E8766E ring (needs 3:1) | ${fmt(ratio('#E8766E', '#F6F4EF'))} | ${fmt(ratio('#E8766E', '#1E2430'))} |\n`;
console.log(out);
