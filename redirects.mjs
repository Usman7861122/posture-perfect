// One list of old WordPress addresses -> new addresses (one hop, final slash address).
// Used by astro.config.mjs (static fallback pages) and scripts/make-cloudfront-function.mjs (real 301s).
import fs from 'node:fs';

const posts = new URL('./src/data/posts/', import.meta.url);
const have = new Set(fs.readdirSync(posts).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, '')));
const blogTs = fs.readFileSync(new URL('./src/data/blog.ts', import.meta.url), 'utf8');
const oldSlugs = [...blogTs.matchAll(/\bP\('([a-z0-9-]+)'/g)].map((m) => m[1]);

// Old articles that had search traffic but are not in blog.ts
const extraOldPosts = [
  'understanding-the-link-between-insulin-dht-and-hair-loss-a-guide-to-prevention-and-solutions',
  'foot-drop-sciatica-leg-weakness-dallas-mckinney',
  'maximizing-your-workout-the-essential-role-of-amino-acids',
  'a2-bulgarian-yogurt-one-of-the-oldest-health-foods-in-the-world',
  'the-carnivore-diet-through-a-doctors-eyes-why-it-works-for-me',
];

export const redirects = {
  '/contact-us/': '/contact/',
  '/appointment/': '/contact/',
  '/schedule-an-appointment/': '/contact/',
  '/book/': '/contact/',
  '/about-us/': '/',
  '/about/': '/',
  '/services/': '/treatments/',
  '/services/chiropractic-adjustments/': '/treatments/chiropractic-adjustments/',
  '/services/shockwave-therapy-eswt/': '/treatments/pain-management/',
  '/services/chiropractic-care/': '/treatments/chiropractic-adjustments/',
  '/services/spinal-decompression/': '/treatments/spinal-decompression-therapy/',
  '/services/physical-therapy/': '/treatments/physical-rehabilitation/',
  '/services/auto-accident-injury/': '/treatments/auto-accident-personal-injury-care/',
  '/location/': '/locations/',
  '/location/north-dallas-parkway/': '/locations/north-dallas-parkway/',
  '/location/mckinney/': '/locations/mckinney/',
  '/condition-we-treat/scoliosis/': '/condition-we-treat/postural-and-movement-dysfunction/',
  '/condition-we-treat/fibromyalgia/': '/condition-we-treat/',
  '/condition-we-treat/neuropathy/': '/condition-we-treat/sciatica-nerve-pain/',
  '/condition-we-treat/whiplash-and-accident-related-injuries/': '/condition-we-treat/auto-accident-personal-injuries/',
  '/condition-we-treat/lower-back-pain/': '/condition-we-treat/low-back-pain/',
  '/our-team/venka-sethuraman-md/': '/our-team/venkat-sethuraman-md/',
};

// Old root-level blog posts: to the new article if it exists, otherwise to the blog index.
for (const slug of [...new Set([...oldSlugs, ...extraOldPosts])]) {
  redirects[`/${slug}/`] = have.has(slug) ? `/blog/${slug}/` : '/blog/';
}

// Paginated WordPress archives (the first 40 pages are listed here; CloudFront catches the rest)
for (let n = 1; n <= 40; n++) {
  redirects[`/category/uncategorized/page/${n}/`] = '/blog/';
  redirects[`/author/justin/page/${n}/`] = '/blog/';
}

// Paginated WordPress archives cannot be listed one by one: the CloudFront function sends these prefixes to /blog/.
export const prefixRedirects = [
  ['/category/', '/blog/'],
  ['/author/', '/blog/'],
  ['/tag/', '/blog/'],
  ['/services/', '/treatments/'],
];
