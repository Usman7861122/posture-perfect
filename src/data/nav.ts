// Menu structure copied from the live website (postureperfectwellnesscenter.com).
// `live: true` = the page exists on this site. Other items point to the matching section
// of the homepage until their page is built. When you build a page, set live: true.

export type NavItem = { title: string; path: string; fallback: string; live?: boolean; text?: string };

const t = (title: string, slug: string, text?: string, live = true): NavItem => ({
  title, text, live, path: `/treatments/${slug}/`, fallback: '/#treatments',
});
const c = (title: string, slug: string, live = true): NavItem => ({
  title, live, path: `/condition-we-treat/${slug}/`, fallback: '/#conditions',
});

export const treatments = {
  core: [
    t('Spinal Decompression Therapy', 'spinal-decompression-therapy', 'Non-surgical relief for disc and nerve pain', true),
    t('Physiotherapy & Rehabilitation', 'physical-rehabilitation', 'Individualized plans to restore strength and movement'),
    t('Pain Management', 'pain-management', 'Conservative pain care and medical consultation'),
    t('Orthopedics', 'orthopedics', 'Orthopedic and musculoskeletal evaluation and care'),
    t('Sports Medicine Injection Therapy', 'sports-medicine-injection-therapy', 'Targeted injection options in a conservative plan'),
  ],
  more: [
    t('Chiropractic Adjustments', 'chiropractic-adjustments'),
    t('Rehabilitative Exercise', 'rehabilitative-exercise'),
    t('Sports Injury Treatment', 'sports-injury-treatment'),
    t('Soft Tissue Therapy', 'soft-tissue-therapy'),
    t('Therapeutic Ultrasound & Modalities', 'therapeutic-ultrasound-modalities'),
    t('Conservative Pain Management', 'conservative-pain-management'),
    t('Auto Accident & Personal Injury Care', 'auto-accident-personal-injury-care'),
  ],
};

export const conditions = [
  {
    group: 'Spine & nerves',
    items: [
      c('Low Back Pain', 'low-back-pain'),
      c('Sciatica & Nerve Pain', 'sciatica-nerve-pain'),
      c('Disc Injuries', 'disc-injuries'),
      c('Neck Pain', 'neck-pain'),
      c('Headaches & Migraines', 'headaches-migraines'),
    ],
  },
  {
    group: 'Joints & muscles',
    items: [
      c('Shoulder Pain', 'shoulder-pain'),
      c('Knee Pain', 'knee-pain'),
      c('Hip Pain', 'hip-pain'),
      c('Foot & Ankle Pain', 'foot-and-ankle-pain'),
      c('Joint Pain & Arthritis', 'joint-pain'),
      c('Muscle Strains & Ligament Sprains', 'muscle-strains-ligament-sprains'),
    ],
  },
  {
    group: 'Injury & movement',
    items: [
      c('Auto Accident & Personal Injuries', 'auto-accident-personal-injuries'),
      c('Sports Injury', 'sports-injury'),
      c('Postural & Movement Dysfunction', 'postural-and-movement-dysfunction'),
      c('Pregnancy-Related Pain', 'pregnancy-related-pain'),
    ],
  },
];

export const team = [
  { name: 'Yaron Lohr, DC, CFSA', role: 'Chiropractor, Clinic Director', image: '/images/team/yaron-lohr.png', path: '/our-team/yaron-lohr-dc-cfsa/' },
  { name: 'Sharan Kaur, DC', role: 'Chiropractor', image: '/images/team/sharan-kaur.jpeg', path: '/our-team/sharan-kaur-dc/' },
  { name: 'Andrew Kuhn, DC', role: 'Chiropractor', image: '/images/team/andrew-kuhn.jpeg', path: '/our-team/andrew-kuhn-dc/' },
  { name: 'Venkat Sethuraman, MD', role: 'Spine Surgeon', image: '/images/team/venkat-sethuraman.png', path: '/our-team/venkat-sethuraman-md/' },
].map((m) => ({ ...m, fallback: '/#team', live: true }));

export const href = (i: { path: string; fallback: string; live?: boolean }) => (i.live ? i.path : i.fallback);
