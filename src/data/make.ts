// Helper that builds a full page entry from short content. The office pages are made automatically.
import { site } from './site';
import type { ServiceDetail } from './services';

type P = [string, string];
type Opts = {
  kind: 'treatment' | 'condition';
  slug: string;
  title: string;
  tagline: string;
  img: string[]; // temporary photos (old site). Final photos go in /images/stock/<slug>-hero.jpg, -side.jpg, -how.jpg
  whatTitle: string;
  what: string[];
  howTitle: string;
  how: P[];
  candTitle: string;
  candNote: string;
  cands: P[];
  expect?: P[];
  related: string[];
  faqs: P[];
  badge?: { big: string; small: string };
};

const pool = ['/images/clinic/about.webp', '/images/old/bg-3.webp', '/images/clinic/clinic-1.png', '/images/old/bg-2.webp', '/images/clinic/specialties.webp', '/images/old/bg-4.webp'];
const pick = (slug: string, n: number) => pool[(slug.length * 7 + n * 2) % pool.length];

const step = ([title, text]: P) => ({ title, text });
const hours = 'Open Monday, Wednesday and Thursday 8 AM–6 PM, and Tuesday and Friday 8 AM–2 PM';

export function mk(o: Opts): ServiceDetail {
  const c = o.kind === 'condition';
  const expect: P[] = o.expect ?? (c
    ? [
        ['A careful evaluation', 'We listen to your story, examine your spine and joints, and look for the true cause of your pain.'],
        ['A plan made for you', 'We explain what we found in plain words and set clear goals, so you know what comes next.'],
        ['Hands-on care and rehab', 'Gentle hands-on treatment is combined with guided exercise to calm pain and restore movement.'],
        ['Progress and prevention', 'We track your progress, adjust your plan and teach you habits that help keep the pain from returning. Results vary from person to person.'],
      ]
    : [
        ['Evaluation first', 'We review your history, examine you and decide together if this care is the right step.'],
        ['A clear plan', 'You will know what each visit involves, how often to come, and what goals we are working toward.'],
        ['Comfortable, supervised care', 'Trained professionals guide every session and adjust it to how you feel on the day.'],
        ['Progress you can feel', 'We check your progress often and update your plan. Results vary from person to person.'],
      ]);
  const local: ServiceDetail['local'] = {};
  for (const l of site.locations) {
    const dallas = l.id === 'dallas';
    local[l.slug] = {
      intro: c
        ? `Dealing with ${o.title.toLowerCase()}? At our ${l.name} office, we look for the cause first and build a plan around you${dallas ? '' : ', close to home in McKinney and nearby communities'}.`
        : `At our ${l.name} office, ${o.title.toLowerCase()} starts with a full evaluation and a plan built around you${dallas ? '' : ', close to home in McKinney and nearby communities'}.`,
      points: [
        `Evaluation and care at our ${dallas ? 'office on North Dallas Parkway' : 'McKinney office'}`,
        'Chiropractic, rehabilitation and pain specialists working as one team',
        hours,
      ],
      visitTitle: `Your visit in ${l.city}`,
      visitText: `Arrive a few minutes early for your first visit at ${l.name}. We will talk through your history, examine you, and explain your options in plain, simple words.`,
      cta: `Book at the ${l.city} office`,
    };
  }
  const hero = [`/images/stock/${o.slug}-hero.jpg`, ...o.img];
  return {
    kind: o.kind,
    slug: o.slug,
    title: o.title,
    tagline: o.tagline,
    heroImage: hero,
    sideImage: [`/images/stock/${o.slug}-side.jpg`, pick(o.slug, 1), ...o.img],
    howImage: [`/images/stock/${o.slug}-how.jpg`, pick(o.slug, 2), ...o.img],
    badge: o.badge ?? (c ? { big: 'Root cause', small: 'Evaluate · Treat · Prevent' } : { big: 'Personalized', small: 'Careful · Conservative · Team-based' }),
    ctaHeading: c ? 'Ready to move with less pain?' : 'Ready to feel better?',
    facts: c
      ? [{ k: 'Focus', v: 'Find the cause' }, { k: 'First step', v: 'A full evaluation' }, { k: 'Care', v: 'Hands-on + rehab' }, { k: 'Offices', v: 'Dallas & McKinney' }]
      : [{ k: 'Approach', v: 'Conservative' }, { k: 'First step', v: 'A full evaluation' }, { k: 'Care plan', v: 'Personalized' }, { k: 'Offices', v: 'Dallas & McKinney' }],
    whatTitle: o.whatTitle,
    what: o.what,
    howTitle: o.howTitle,
    how: o.how.map(step),
    candidatesTitle: o.candTitle,
    candidatesNote: o.candNote,
    candidates: o.cands.map(step),
    expectTitle: 'What can you expect?',
    expect: expect.map(step),
    related: o.related,
    faqs: [
      ...o.faqs.map(([q, a]) => ({ q, a })),
      { q: 'Do I need a referral?', a: 'Usually not. You can call us directly at ' + site.phone + ', and our team can help with any insurance questions.' },
    ],
    local,
  };
}
