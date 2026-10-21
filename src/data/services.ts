// Full content for each service page. To add a service, copy one entry and change the text.
// Each entry makes 3 pages: the general page + one page per office.
import { site } from './site';

type Step = { title: string; text: string };

export type ServiceDetail = {
  kind?: 'treatment' | 'condition'; // default: treatment
  diagram?: boolean; // show the animated spine diagram (spinal decompression only)
  howImage?: string[];
  badge?: { big: string; small: string };
  ctaHeading?: string;
  slug: string;
  title: string;
  tagline: string;
  heroImage: string[];
  sideImage: string[];
  facts: { k: string; v: string }[];
  whatTitle: string;
  what: string[];
  howTitle: string;
  how: Step[];
  candidatesTitle: string;
  candidatesNote: string;
  candidates: Step[];
  expectTitle: string;
  expect: Step[];
  related: string[];
  faqs: { q: string; a: string }[];
  // text that is different on each office page (key = office slug)
  local: Record<string, { intro: string; points: string[]; visitTitle: string; visitText: string; cta: string }>;
};

const spinal: Record<string, ServiceDetail> = {
  'spinal-decompression-therapy': {
    slug: 'spinal-decompression-therapy',
    diagram: true,
    badge: { big: 'Non-surgical', small: 'Gentle · Painless · Supervised' },
    ctaHeading: 'Ready to take pressure off your spine?',
    title: 'Spinal Decompression Therapy',
    tagline: 'Gentle, non-surgical care that takes pressure off your discs and nerves.',
    // new Shutterstock photos first, temporary old-site photos as fallback
    heroImage: ['/images/stock/spinal-hero.jpg', '/images/services/spinal-decompression-page.webp', '/images/old/bg-2.webp'],
    sideImage: ['/images/stock/spinal-side.jpg', '/images/services/spinal-decompression.webp'],
    facts: [
      { k: 'Approach', v: 'Non-surgical' },
      { k: 'Each session', v: '20–45 minutes' },
      { k: 'Typical course', v: 'Several weeks' },
      { k: 'First step', v: 'A full evaluation' },
    ],
    whatTitle: 'What is spinal decompression therapy?',
    what: [
      'Spinal decompression is a non-surgical treatment that gently stretches the spine with specialized equipment. The stretch takes pressure off the spinal discs and the nerves around them, improves blood flow, and supports your body’s natural healing.',
      'It is commonly used for herniated discs, sciatica, degenerative disc disease, and chronic back or neck pain.',
    ],
    howTitle: 'How does it work?',
    how: [
      { title: 'A controlled stretch', text: 'The table applies a slow, mechanical stretch to your spine. It is steady and gentle, never sudden.' },
      { title: 'Negative pressure in the disc', text: 'The stretch creates negative pressure inside the discs, which gives them room to recover.' },
      { title: 'Relief for disc and nerve', text: 'This can help bulging or herniated disc material move back, ease nerve compression and calm inflammation.' },
      { title: 'Room to heal', text: 'With less pressure on the spine, damaged structures have a better chance to heal.' },
    ],
    candidatesTitle: 'Who is a good candidate?',
    candidatesNote: 'Every patient starts with a thorough evaluation. Our specialists make sure the therapy is safe and right for your condition before we begin.',
    candidates: [
      { title: 'Chronic back or neck pain', text: 'Pain that keeps coming back or has lasted for weeks or months.' },
      { title: 'Sciatica', text: 'Pain, numbness or tingling that travels from the back down the leg.' },
      { title: 'Herniated or bulging discs', text: 'Disc problems where you want to avoid or delay surgery.' },
      { title: 'Degenerative disc disease', text: 'Age-related disc wear that limits how you move.' },
    ],
    expectTitle: 'What can you expect?',
    expect: [
      { title: 'Evaluation first', text: 'We review your history, examine your spine and decide together if decompression is the right step.' },
      { title: 'A comfortable session', text: 'You lie comfortably on the decompression table while the device gently stretches your spine. Sessions are painless and supervised by trained professionals.' },
      { title: 'A course over several weeks', text: 'Each session lasts about 20 to 45 minutes. Your visits are repeated over several weeks for the best results.' },
      { title: 'Results that last', text: 'Many patients notice less pain, better movement and better function. We often add physical therapy or rehab exercises for long-term benefit. Results vary from person to person.' },
    ],
    related: ['Disc Injuries', 'Sciatica & Nerve Pain', 'Low Back Pain', 'Neck Pain'],
    faqs: [
      { q: 'What is spinal decompression therapy?', a: 'It is a non-surgical treatment that gently stretches the spine with specialized equipment. This reduces pressure on spinal discs and nerves and supports natural healing.' },
      { q: 'Does spinal decompression hurt?', a: 'No. Sessions are painless and comfortable. You lie on the table while the device slowly stretches your spine.' },
      { q: 'How long is a session, and how many will I need?', a: 'A session usually lasts 20 to 45 minutes and is repeated over several weeks. We set your exact plan after your evaluation.' },
      { q: 'Who is a good candidate?', a: 'People with chronic back or neck pain, sciatica, herniated or bulging discs, or degenerative disc disease who want non-surgical options. A thorough evaluation makes sure it is safe and right for you.' },
      { q: 'Can I combine it with other care?', a: 'Yes. Decompression is often combined with physical therapy and rehabilitation exercises, so the results last longer.' },
      { q: 'Do I need a referral?', a: 'Usually not. You can call us directly, and our team can help with any insurance requirements.' },
    ],
    local: {
      'north-dallas-parkway': {
        intro: 'At our North Dallas Parkway office, your care starts with a full evaluation and a plan built around your spine. We treat disc pain, sciatica and chronic back and neck pain without surgery.',
        points: [
          'Evaluation and treatment at our office on North Dallas Parkway',
          'Chiropractic, rehabilitation and pain specialists working as one team',
          'Open Monday, Wednesday and Thursday 8 AM–6 PM, and Tuesday and Friday 8 AM–2 PM',
        ],
        visitTitle: 'Your decompression visit in Dallas',
        visitText: 'Arrive a few minutes early for your first visit. We will talk through your history, examine your spine, and tell you plainly whether spinal decompression is right for you.',
        cta: 'Book at the Dallas office',
      },
      mckinney: {
        intro: 'At our McKinney office, we offer the same careful, non-surgical approach to disc and nerve pain, close to home for patients in McKinney and nearby North Texas communities.',
        points: [
          'Evaluation and treatment close to home in McKinney',
          'The same team approach: chiropractic, rehabilitation and pain care',
          'Open Monday, Wednesday and Thursday 8 AM–6 PM, and Tuesday and Friday 8 AM–2 PM',
        ],
        visitTitle: 'Your decompression visit in McKinney',
        visitText: 'Your first visit begins with a conversation and a hands-on exam. If decompression suits you, we will explain the plan, how many sessions to expect, and what each one involves.',
        cta: 'Book at the McKinney office',
      },
    },
  },
};

import { treatmentPages } from './treatments';
import { conditionPages } from './conditions';

export const liveServices: Record<string, ServiceDetail> = { ...spinal, ...treatmentPages };
export const liveConditions: Record<string, ServiceDetail> = conditionPages;

export const officeBySlug = (slug: string) => site.locations.find((l) => l.slug === slug)!;
