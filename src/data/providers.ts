// Providers. Yaron Lohr has his own custom page (src/pages/our-team/yaron-lohr-dc-cfsa/).
// The other providers use the shared template (src/components/ProviderPage.astro).
// Text is rewritten in easy English from the old website.

export type Provider = {
  slug: string;
  name: string; // full name with credentials
  short: string; // "Dr. Sharan Kaur"
  role: string;
  image: string;
  blurb: string; // used on the Our Providers page
  custom?: boolean; // true = has its own hand-built page
  // everything below is used by the shared template only
  seoDesc?: string;
  eyebrow?: string;
  intro?: string;
  stats?: { v: string; k: string }[];
  aboutTitle?: string;
  aboutEm?: string;
  quote?: string;
  about?: string[];
  tags?: { t: string; h: string }[];
  approachTitle?: string;
  approachEm?: string;
  approach?: { t: string; x: string }[];
  focusEyebrow?: string;
  focusTitle?: string;
  focusEm?: string;
  focus?: { t: string; x: string }[];
  timeline?: { when: string; title: string; text: string; points: string[] }[];
  memberships?: string[];
  membershipsTitle?: string;
  cta?: string;
};

const c = (t: string, slug: string) => ({ t, h: `/condition-we-treat/${slug}/` });

export const providers: Provider[] = [
  {
    slug: 'yaron-lohr-dc-cfsa',
    name: 'Yaron Lohr, DC, CFSA',
    short: 'Dr. Yaron Lohr',
    role: 'Chiropractor, Clinic Director',
    image: '/images/team/yaron-lohr.png',
    blurb: 'Founder of the clinic. Chiropractor, pain management specialist and Certified Surgical First Assistant with more than 20 years of experience.',
    custom: true,
  },
  {
    slug: 'sharan-kaur-dc',
    name: 'Sharan Kaur, DC',
    short: 'Dr. Sharan Kaur',
    role: 'Chiropractor',
    image: '/images/team/sharan-kaur.jpeg',
    blurb: 'Helps families with pain and sports injuries through adjustments, nutrition, exercise and rehabilitation.',
    seoDesc: 'Meet Dr. Sharan Kaur, chiropractor at Posture Perfect Wellness Center in Dallas and McKinney, TX. Pain management, sports injuries, wellness and rehabilitation.',
    eyebrow: 'Chiropractor',
    intro: 'Dr. Kaur teaches families how to take care of their health. She treats pain and sports injuries, and also builds plans for exercise, nutrition and everyday wellness.',
    stats: [
      { v: 'Thousands', k: 'Patients helped' },
      { v: 'DC', k: 'Parker University' },
      { v: 'BSc', k: 'Neuropsychology, Toronto' },
      { v: '6', k: 'Areas of care' },
    ],
    aboutTitle: 'Care that teaches,',
    aboutEm: 'not just treats.',
    quote: 'Good health is built every day, not only in the clinic.',
    about: [
      'Dr. Kaur has a passion for teaching families about overall health and wellness. Her care brings together chiropractic adjustments, nutrition and rehabilitation.',
      'She earned her Doctor of Chiropractic degree at Parker University, and a Bachelor of Science in Neuropsychology at the University of Toronto. This mix helps her understand how the brain, nerves and body work together.',
      'Dr. Kaur specializes in pain management and has helped treat thousands of patients with pain and sports injuries. As a Dallas chiropractor, she also helps patients with exercise plans and healthy eating, so results last beyond the visit.',
    ],
    tags: [c('Low Back Pain', 'low-back-pain'), c('Neck Pain', 'neck-pain'), c('Sports Injury', 'sports-injury'), c('Headaches & Migraines', 'headaches-migraines')],
    approachTitle: 'What Dr. Kaur',
    approachEm: 'focuses on.',
    approach: [
      { t: 'Adjustments', x: 'Gentle, precise chiropractic care to restore motion and ease pain.' },
      { t: 'Nutrition', x: 'Simple food guidance that supports healing, energy and weight goals.' },
      { t: 'Rehabilitation', x: 'Exercise and hands-on care that rebuild strength and movement.' },
      { t: 'Family education', x: 'Clear advice so every family member can stay well at home.' },
    ],
    focusEyebrow: 'Services provided',
    focusTitle: 'Pain management and',
    focusEm: 'whole-person care.',
    focus: [
      { t: 'Integrated pain medicine', x: 'Pain care that joins chiropractic, rehab and medical support.' },
      { t: 'Wellness medicine', x: 'Care that supports your overall health, not only one symptom.' },
      { t: 'Sports and fitness medicine', x: 'Help for athletes and active people to recover and perform.' },
      { t: 'Functional medicine', x: 'Looking for root causes across the whole body.' },
      { t: 'Preventative medicine', x: 'Steps that help you avoid problems before they start.' },
      { t: 'Lifestyle medicine', x: 'Exercise, sleep, food and habits that build lasting health.' },
    ],
    timeline: [
      { when: 'Doctor of Chiropractic', title: 'Parker University', text: 'Her chiropractic training, with a focus on pain and sports injuries.', points: ['Doctor of Chiropractic degree', 'Focus on pain management', 'Care for athletes and active people'] },
      { when: 'BSc', title: 'University of Toronto', text: 'A degree in Neuropsychology, the study of the brain and behavior.', points: ['Bachelor of Science, Neuropsychology', 'Helps her understand pain and the nervous system', 'Supports a whole-person view of health'] },
      { when: 'In practice', title: 'Pain & sports injuries', text: 'Years of hands-on work with patients of many ages.', points: ['Has helped treat thousands of patients', 'Exercise plans and weight-loss diets', 'Care for families, from young to older'] },
    ],
    cta: 'Book with Dr. Kaur',
  },
  {
    slug: 'andrew-kuhn-dc',
    name: 'Andrew Kuhn, DC',
    short: 'Dr. Andrew Kuhn',
    role: 'Chiropractor',
    image: '/images/team/andrew-kuhn.jpeg',
    blurb: 'Combines chiropractic adjustments, soft tissue work and exercise programs to help you get back to an active life.',
    seoDesc: 'Meet Dr. Andrew Kuhn, chiropractor at Posture Perfect Wellness Center in Dallas and McKinney, TX. Adjustments, soft tissue care and exercise-based rehab.',
    eyebrow: 'Chiropractor',
    intro: 'Dr. Kuhn helps you overcome pain and return to an active life. He believes movement and exercise are a key part of lasting care.',
    stats: [
      { v: '3+', k: 'Years serving DFW' },
      { v: 'DC', k: 'Parker University' },
      { v: 'BS', k: 'Kinesiology, Iowa State' },
      { v: '3', k: 'Care tools: adjust, release, train' },
    ],
    aboutTitle: 'Movement is part of',
    aboutEm: 'every plan.',
    quote: 'Exercise is a core part of getting better, and staying better.',
    about: [
      'Dr. Kuhn is committed to helping you beat pain and regain your active lifestyle. He holds a Doctorate in Chiropractic from Parker University and a Bachelor’s in Kinesiology, the study of human movement, from Iowa State University.',
      'He is originally from Iowa, has served the Dallas and Fort Worth area for more than three years, and now proudly practices at Posture Perfect.',
      'Dr. Kuhn is a lifelong fan of resistance training and bodybuilding. That is why he fits so well with our belief that exercise is a basic part of patient care.',
    ],
    tags: [c('Low Back Pain', 'low-back-pain'), c('Muscle Strains & Ligament Sprains', 'muscle-strains-ligament-sprains'), c('Sports Injury', 'sports-injury'), c('Postural & Movement Dysfunction', 'postural-and-movement-dysfunction')],
    approachTitle: 'How Dr. Kuhn',
    approachEm: 'treats you.',
    approach: [
      { t: 'Chiropractic adjustments', x: 'Precise, comfortable adjustments that help stiff joints move again.' },
      { t: 'Advanced soft tissue work', x: 'Hands-on techniques that release tight muscle and fascia.' },
      { t: 'Tailored exercise programs', x: 'Movements chosen for your body, so strength and stability grow.' },
      { t: 'Patient-centered care', x: 'You help set the goals, and we build the plan around them.' },
    ],
    focusEyebrow: 'Areas of focus',
    focusTitle: 'Where movement meets',
    focusEm: 'chiropractic care.',
    focus: [
      { t: 'Back and neck pain', x: 'Find the cause and treat it, with adjustments and exercise.' },
      { t: 'Muscle and joint injuries', x: 'Soft tissue care and rehab for a safe return to activity.' },
      { t: 'Strength and training', x: 'Guidance for people who lift, train and want to stay injury-free.' },
      { t: 'Posture and mobility', x: 'Fix the habits and imbalances that quietly cause pain.' },
    ],
    timeline: [
      { when: 'Doctor of Chiropractic', title: 'Parker University', text: 'His chiropractic degree, building skills in adjustments and rehabilitation.', points: ['Doctorate in Chiropractic', 'Training in adjustments and soft tissue care', 'Focus on exercise-based rehab'] },
      { when: 'BS', title: 'Iowa State University', text: 'A degree in Kinesiology, the science of how the body moves.', points: ['Bachelor’s in Kinesiology', 'Strong base in movement and exercise', 'A passion for human performance'] },
      { when: '3+ years', title: 'Serving Dallas–Fort Worth', text: 'Experience caring for DFW patients before joining Posture Perfect.', points: ['Practice in the DFW community', 'Resistance training and bodybuilding enthusiast', 'Joined the Posture Perfect team'] },
    ],
    cta: 'Book with Dr. Kuhn',
  },
  {
    slug: 'venkat-sethuraman-md',
    name: 'Venkat Sethuraman, MD',
    short: 'Dr. Venkat Sethuraman',
    role: 'Spine Surgeon',
    image: '/images/team/venkat-sethuraman.png',
    blurb: 'Board-certified orthopedic spine surgeon, trained at the Mayo Clinic, with more than 1,000 spine surgeries over 20 years.',
    seoDesc: 'Meet Dr. Venkat Sethuraman, board-certified orthopedic spine surgeon with Mayo Clinic fellowship training, serving Dallas and McKinney, TX.',
    eyebrow: 'Spine Surgeon',
    intro: 'Dr. Sethuraman is a board-certified orthopedic surgeon who focuses only on the spine. When surgery is the right step, he is the expert our patients trust.',
    stats: [
      { v: '1,000+', k: 'Spine surgeries' },
      { v: '20', k: 'Years in practice' },
      { v: '100%', k: 'Focus on spine care' },
      { v: 'Mayo', k: 'Clinic fellowship' },
    ],
    aboutTitle: 'A surgeon who only',
    aboutEm: 'treats the spine.',
    quote: 'Surgery should be the right answer, not the first answer.',
    about: [
      'Dr. Sethuraman is a board-certified orthopedic surgeon with fellowship training in spine surgery at the Mayo Clinic in Rochester, Minnesota. A fellowship is the most advanced and specialized training a physician can get.',
      'Over 20 years in the Dallas area, he has done more than 1,000 spine surgeries. Many spine surgeons divide their time between the spine, the brain, the knees and the hips. Dr. Sethuraman focuses fully on back pain, neck pain and complex spine problems.',
      'He is skilled in minimally invasive spine surgery, which can allow outpatient surgery through a very small incision. He also keeps up with the newest advances in both surgical and non-surgical care.',
    ],
    tags: [c('Disc Injuries', 'disc-injuries'), c('Sciatica & Nerve Pain', 'sciatica-nerve-pain'), c('Low Back Pain', 'low-back-pain'), c('Neck Pain', 'neck-pain')],
    approachTitle: 'Why patients',
    approachEm: 'choose him.',
    approach: [
      { t: 'Spine only', x: 'His whole practice is back, neck and complex spine care.' },
      { t: 'Mayo Clinic trained', x: 'Fellowship training at one of the best-known medical centers in the world.' },
      { t: 'Minimally invasive options', x: 'Techniques that can mean outpatient surgery and a small incision, when suitable.' },
      { t: 'Conservative first', x: 'He works beside our team, so surgery is considered only when other care is not enough.' },
    ],
    focusEyebrow: 'Spine care',
    focusTitle: 'Expert care for the',
    focusEm: 'most complex spine problems.',
    focus: [
      { t: 'Herniated and bulging discs', x: 'Evaluation of disc problems and clear options for next steps.' },
      { t: 'Sciatica and nerve compression', x: 'Finding what presses on the nerve and how best to relieve it.' },
      { t: 'Neck and back pain', x: 'Careful diagnosis of long-lasting spine pain.' },
      { t: 'Complex spine conditions', x: 'Experience with the harder cases that need a specialist.' },
    ],
    timeline: [
      { when: '1994', title: 'Rutgers University', text: 'Bachelor of Science, graduating magna cum laude.', points: ['Bachelor of Science degree', 'Graduated magna cum laude', 'The start of his path in medicine'] },
      { when: '1998', title: 'Medical College of Pennsylvania', text: 'His medical degree, followed by surgical and orthopedic training.', points: ['Doctor of Medicine degree', 'Internship in General Surgery, Thomas Jefferson University Hospital', 'Residency in Orthopaedic Surgery'] },
      { when: 'Fellowship', title: 'Mayo Clinic', text: 'Advanced spine surgery fellowship in Rochester, Minnesota.', points: ['The most advanced, specialized physician training', 'Focus on spine surgery', 'Alumni of the Mayo Clinic'] },
      { when: '2017', title: 'Wharton School, MBA', text: 'A business degree from the University of Pennsylvania, to help build a modern spine practice.', points: ['Master of Business Administration', 'Wharton School, University of Pennsylvania', 'Skills for running a modern spine center'] },
    ],
    membershipsTitle: 'Professional memberships',
    memberships: ['American Academy of Orthopaedic Surgeons', 'North American Spine Society', 'Mayo Clinic Alumni Association'],
    cta: 'Book a consultation',
  },
];

export const providerBySlug = (slug: string) => providers.find((p) => p.slug === slug)!;
