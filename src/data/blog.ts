// Blog list. Posts that have a file in src/data/posts/<slug>.md open on this site.
// The others link to the same article on the current website until they are moved over.
// Pictures from the old site are used for now. Replace with your own files in /public/images/blog/.

export const oldSite = 'https://postureperfectwellnesscenter.com';
const up = (p: string) => `${oldSite}/wp-content/uploads/${p}`;

export const tags = ['Back pain', 'Sciatica', 'Neck & posture', 'Wellness', 'Injury & recovery', 'Pain management', 'Kids & family'] as const;
export type Tag = (typeof tags)[number];

export type PostMeta = { slug: string; title: string; date: string; excerpt: string; tag: Tag; image: string; author?: string };

const P = (slug: string, date: string, title: string, tag: Tag, excerpt: string, image = ''): PostMeta => ({ slug, date, title, tag, excerpt, image });

export const posts: PostMeta[] = [
  P('functional-neurology-understanding-the-brain-nervous-system-movement-balance-and-rehabilitation', '2026-10-14', 'Functional Neurology: Understanding the Brain, Nervous System, Movement, Balance and Rehabilitation', 'Wellness', 'The nervous system influences balance, movement, eye control and much more. A look at how it can be trained.', up('2026/10/pexels-shvetsa-4226216-scaled.jpg')),
  P('sciatica-vs-herniated-disc-leg-numbness-tingling', '2026-09-21', 'Numbness, Tingling or Burning Down Your Leg? Sciatica vs. Herniated Disc Explained', 'Sciatica', 'Two problems that feel alike but are not the same, explained in plain words.', '/images/blog/sciatica-disc.webp'),
  P('lower-back-pain-standing-too-long', '2026-09-21', 'Why Does My Lower Back Hurt When I Stand for More Than 20 Minutes?', 'Back pain', 'Common reasons your back complains after standing, and what to do about it.', '/images/blog/lower-back.webp'),
  P('the-peptide-revolution-are-we-running-a-giant-human-experiment', '2026-06-24', 'The Peptide Revolution: Are We Running a Giant Human Experiment?', 'Wellness', 'Peptides are everywhere. Do they work? That may be the wrong question. A doctor asks what we still do not know.', '/images/blog/peptides.jpg'),
  P('forward-head-posture-the-silent-epidemic-behind-neck-pain-headaches-poor-posture-and-reduced-performance', '2026-06-08', 'Forward Head Posture: The Silent Epidemic Behind Neck Pain, Headaches, Poor Posture and Reduced Performance', 'Neck & posture', 'Why your head position matters more than you think, and what it can do to your neck, head and energy.', up('2026/04/2835865.webp')),
  P('hockey-aging-and-why-i-refuse-to-slow-down', '2026-06-08', 'Hockey, Aging, and Why I Refuse to Slow Down', 'Wellness', 'At nearly 48, Dr. Lohr still plays hockey. Here is why movement, purpose and challenge matter more with every year.', up('2026/04/2835600.webp')),
  P('why-does-my-back-hurt-when-i-sit-at-my-desk-all-day', '2026-05-30', 'Why Does My Back Hurt When I Sit at My Desk All Day?', 'Back pain', 'Understanding the real cause of posture-related back pain, and five things you can start doing today.', up('2026/04/2835601.webp')),
  P('who-is-the-best-chiropractor-in-dallas', '2026-05-30', 'Who Is the Best Chiropractor in Dallas?', 'Wellness', 'What people are really looking for when they search for a chiropractor near them.'),
  P('why-your-sciatica-keeps-coming-back', '2026-05-30', 'Why Your Sciatica Keeps Coming Back', 'Sciatica', 'The hidden causes of leg pain, numbness, burning and back pain that most people never address.', up('2026/05/sciatica.jpg')),
  P('why-your-mri-looks-fine-but-you-still-hurt', '2026-05-21', 'Why Your MRI Looks “Fine” — But You Still Hurt', 'Pain management', 'One of the most frustrating things to hear. Why imaging and pain do not always match.', up('2026/04/2776889.jpg')),
  P('back-pain-treatment-in-dallas-mckinney', '2026-05-21', 'Back Pain Treatment in Dallas & McKinney', 'Back pain', 'A root-cause approach to lasting relief.', up('2026/04/2835601.webp')),
  P('why-sitting-is-quietly-destroying-your-body-and-what-to-do-about-it', '2026-05-21', 'Why Sitting Is Quietly Destroying Your Body (And What To Do About It)', 'Neck & posture', 'What long hours in a chair do to your hips, back and energy, and how to fight back.', up('2026/05/166.jpg')),
  P('why-youre-tired-all-the-time-and-it-might-not-be-what-you-think', '2026-05-21', 'Why You’re Tired All the Time (And It Might Not Be What You Think)', 'Wellness', 'Many patients come in for back or neck pain and find the real cause is bigger.', up('2026/04/2835888.webp')),
  P('can-a-chiropractor-help-a-herniated-disc', '2026-05-11', 'Can a Chiropractor Help a Herniated Disc?', 'Back pain', 'Disc injuries, sciatica, MRI findings and non-surgical options explained.'),
  P('why-does-my-sciatica-keep-coming-back', '2026-05-11', 'Why Does My Sciatica Keep Coming Back?', 'Sciatica', 'The real causes of recurring sciatic pain, numbness and nerve irritation.'),
  P('what-happens-during-a-chiropractic-examination', '2026-05-11', 'What Happens During a Chiropractic Examination?', 'Wellness', 'Orthopedic testing, neurological evaluation, posture analysis and why proper diagnosis matters.'),
  P('why-you-feel-fine-until-you-dont', '2026-05-06', 'Why You Feel Fine… Until You Don’t', 'Wellness', 'The hidden build-up behind most pain.', up('2026/05/5632B63A-7DC6-40CE-A142-6CAE46F9DF30.jpeg')),
  P('still-hurting-read-this-before-you-try-anything-else', '2026-05-06', 'Still Hurting? Read This Before You Try Anything Else', 'Pain management', 'Why chasing the pain often fails, and what to try instead.', up('2026/05/CF61043C-0134-42A5-B018-E3BED6A5C115.png')),
  P('the-right-supplements-the-right-way', '2026-04-30', 'The Right Supplements, The Right Way', 'Wellness', 'Most people are not unhealthy because one supplement is missing. Their whole system is out of balance.', up('2026/04/85736FF3-2199-4828-B8B2-FC670A10DBDA.png')),
  P('what-to-do-after-a-car-accident-in-dallas-step-by-step-guide', '2026-04-30', 'What to Do After a Car Accident in Dallas (Step-by-Step Guide)', 'Injury & recovery', 'Injuries do not always show up right away. Here is a clear guide for the first steps.', up('2026/04/4bfc6629-2916-462e-a12c-c0ad6fcc4667-1024x683.png')),
  P('why-your-sciatica-isnt-going-away-and-what-actually-works', '2026-04-30', 'Why Your Sciatica Isn’t Going Away (And What Actually Works)', 'Sciatica', 'Most treatments chase the pain instead of fixing the cause.', up('2026/04/ChatGPT-Image-Apr-16-2026-03_41_13-PM.png')),
  P('posture-the-new-anti-aging-hack-no-one-is-talking-about', '2026-04-15', 'Posture: The New Anti-Aging Hack No One Is Talking About', 'Neck & posture', 'When people think about anti-aging, they rarely think about posture. They should.', up('2026/04/2840851.png')),
  P('your-neck-isnt-aging-its-collapsing-forward', '2026-04-04', 'Your Neck Isn’t Aging… It’s Collapsing Forward', 'Neck & posture', 'How forward head posture wears on the neck, and how to reverse the pattern.', up('2026/04/2838404.webp')),
  P('sciatica-treatment-in-dallas-causes-symptoms-and-natural-relief', '2026-04-04', 'Sciatica Treatment in Dallas: Causes, Symptoms, and Natural Relief', 'Sciatica', 'One of the most common causes of severe low back and leg pain, and natural ways to ease it.', up('2026/04/2835573.webp')),
  P('scoliosis-treatment-in-dallas-understanding-the-spine-and-your-treatment-options', '2026-04-04', 'Scoliosis Treatment in Dallas: Understanding the Spine and Your Treatment Options', 'Back pain', 'What scoliosis is and the options for care.', up('2026/04/2835579.webp')),
  P('pain-management-in-dallas-mckinney', '2026-04-17', 'Pain Management in Dallas & McKinney', 'Pain management', 'Pain is one of the most common reasons people search for a doctor. What real pain management looks like.', up('2026/04/2832104.png')),
  P('7-pain-symptoms-you-should-never-ignore-and-when-to-get-checked', '2026-04-17', '7 Pain Symptoms You Should Never Ignore (And When to Get Checked)', 'Pain management', 'Most people do not ignore pain because they do not care. They hope it will go away.'),
  P('the-top-10-everyday-posture-mistakes-and-how-to-fix-them', '2026-04-17', 'The Top 10 Everyday Posture Mistakes (And How to Fix Them)', 'Neck & posture', 'Posture is about how your body carries itself all day long. Ten common mistakes and fixes.'),
  P('why-x-rays-and-mris-dont-always-explain-pain', '2026-04-17', 'Why X-Rays and MRIs Don’t Always Explain Pain', 'Pain management', '“Your X-ray looks fine.” Why you can still hurt.'),
  P('why-your-back-pain-isnt-actually-a-back-problem', '2026-04-17', 'Why Your Back Pain Isn’t Actually a Back Problem', 'Back pain', 'Your instinct says something is wrong with your back. Often the cause is somewhere else.'),
  P('how-to-choose-the-right-chiropractor-in-dallas-or-mckinney-and-what-actually-matters', '2026-04-17', 'How to Choose the Right Chiropractor in Dallas or McKinney (And What Actually Matters)', 'Wellness', 'Dozens of options show up when you search. Here is what to look for.'),
  P('your-first-visit-to-a-chiropractor-what-to-expect-at-posture-perfect-wellness-center', '2026-04-17', 'Your First Visit to a Chiropractor: What to Expect', 'Wellness', 'Thinking about seeing a chiropractor but putting it off? Here is what the first visit looks like.'),
  P('the-athletes-guide-to-injury-prevention-performance-and-faster-recovery', '2026-04-17', 'The Athlete’s Guide to Injury Prevention, Performance, and Faster Recovery', 'Injury & recovery', 'For competitive athletes, weekend warriors and anyone who refuses to slow down.'),
  P('pediatric-chiropractic-care-helping-children-grow-move-and-thrive', '2026-04-17', 'Pediatric Chiropractic Care: Helping Children Grow, Move, and Thrive', 'Kids & family', 'What care for growing bodies can look like, in plain words.', up('2026/04/2832104.png')),
  P('childrens-posture-in-the-digital-age-how-phones-tablets-are-changing-growing-bodies', '2026-04-17', 'Children’s Posture in the Digital Age: How Phones & Tablets Are Changing Growing Bodies', 'Kids & family', 'Screens are shaping the way kids sit, stand and move.', up('2026/04/2832104.png')),
  P('posture-in-kids-the-hidden-factor-in-future-health-athletic-performance', '2026-04-18', 'Posture in Kids: The Hidden Factor in Future Health & Athletic Performance', 'Kids & family', 'Why posture habits formed in childhood last for years.', up('2026/04/2832104.png')),
  P('neck-pain-headaches-in-dallas-mckinney-why-theyre-connected-and-how-to-fix-them', '2026-04-17', 'Neck Pain & Headaches in Dallas & McKinney: Why They’re Connected, and How to Fix Them', 'Neck & posture', 'If you have frequent headaches and ongoing neck pain, they may be linked.', up('2026/04/2832104.png')),
  P('bulging-disc-vs-herniated-disc-in-dallas-mckinney-whats-the-difference-and-do-you-need-surgery', '2026-04-17', 'Bulging Disc vs. Herniated Disc: What’s the Difference, and Do You Need Surgery?', 'Back pain', 'Being told you have a disc problem can be alarming. Here is what it means.', up('2026/04/2832104.png')),
  P('radiofrequency-ablation-my-personal-experience-with-a-life-changing-procedure', '2026-04-18', 'Radiofrequency Ablation: My Personal Experience With a Life-Changing Procedure', 'Pain management', 'A first-hand story of a procedure for long-lasting pain.', up('2026/04/2832104.png')),
  P('dallas-auto-accident-chiropractor-whiplash-injury-recovery', '2026-04-18', 'Dallas Auto Accident Chiropractor: Whiplash & Injury Recovery', 'Injury & recovery', 'Why whiplash and other crash injuries deserve an early exam.', up('2026/04/2832104.png')),
  P('three-simple-movements-you-can-do-every-day-to-protect-your-spine-and-joints', '2026-04-18', 'Three Simple Movements You Can Do Every Day to Protect Your Spine and Joints', 'Back pain', 'Short, simple moves that fit into any day.', up('2026/04/2832104.png')),
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const postUrl = (slug: string) => `${oldSite}/${slug}/`;
export const fmtDate = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
