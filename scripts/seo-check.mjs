// Reports SEO problems in the built site (dist/). Run after build: node scripts/seo-check.mjs
// Add --strict to exit with an error when something is out of range.
import fs from 'node:fs';
import path from 'node:path';
const root = new URL('../dist/', import.meta.url).pathname;
const strict = process.argv.includes('--strict');
const dec = (x) => x.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); f.isDirectory() ? walk(p) : f.name === 'index.html' && pages.push(p); } })(root);
let bad = 0;
const rows = { title: [], desc: [], noslash: [] };
for (const p of pages) {
  const html = fs.readFileSync(p, 'utf8');
  if (/http-equiv="refresh"/.test(html)) continue; // redirect pages
  const url = '/' + path.relative(root, path.dirname(p)).replace(/\\/g, '/') + '/';
  const t = dec((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const d = dec((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  if (t.length > 60 || t.length < 20) rows.title.push([url, t.length]);
  if (d.length < 120 || d.length > 155) rows.desc.push([url, d.length]);
  for (const m of html.matchAll(/<a [^>]*href="(\/[a-z0-9][^"#?.]*[^/"#?.])"/g)) rows.noslash.push([url, m[1]]);
}
for (const [k, v] of Object.entries(rows)) { console.log(`${k}: ${v.length}`); v.slice(0, 8).forEach((r) => console.log('  ', r.join('  '))); bad += v.length; }
console.log('pages checked:', pages.length);
if (strict && bad) process.exit(1);
