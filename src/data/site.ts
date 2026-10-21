export const site = {
  name: 'Posture Perfect Wellness Center',
  short: 'Posture Perfect',
  tagline: 'Eliminate Pain. Restore Function. Optimize Wellness.',
  description:
    'Comprehensive spine care, sports medicine, pain management and rehabilitation in Dallas and McKinney, Texas. Serving North Texas since 2002.',
  phone: '972-792-0204',
  phoneHref: 'tel:+19727920204',
  since: 2002,
  rating: '4.9',
  reviewCount: 376,
  // Add real links here. Icons only show when a URL is set.
  social: { facebook: '', instagram: '' },
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Treatments', href: '/#treatments' },
    { label: 'Conditions', href: '/#conditions' },
    { label: 'Our Providers', href: '/our-team/' },
    { label: 'Reviews', href: '/reviews/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Locations', href: '/locations/' },
  ],
  locations: [
    {
      id: 'dallas',
      slug: 'north-dallas-parkway',
      name: 'North Dallas Parkway',
      city: 'Dallas',
      street: '15110 North Dallas Pkwy, Suite 102',
      cityLine: 'Dallas, TX 75248',
      nearby: 'Dallas, Addison, Plano, Richardson, Carrollton and the greater Dallas County area',
      query: '15110 North Dallas Pkwy Suite 102 Dallas TX 75248',
    },
    {
      id: 'mckinney',
      slug: 'mckinney',
      name: 'McKinney',
      city: 'McKinney',
      street: '1505 Harroun St, Ste F',
      cityLine: 'McKinney, TX 75069',
      nearby: 'McKinney, Allen, Frisco, Plano, Prosper, Melissa and the greater Collin County area',
      query: '1505 Harroun St Ste F McKinney TX 75069',
    },
  ],
  // index = JS getDay() (0 = Sunday)
  hours: [
    { day: 'Sunday', time: 'Closed' },
    { day: 'Monday', time: '8:00 AM – 6:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 2:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 6:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 6:00 PM' },
    { day: 'Friday', time: '8:00 AM – 2:00 PM' },
    { day: 'Saturday', time: 'Closed' },
  ],
  faqs: [
    {
      q: 'What conditions do you treat?',
      a: 'We care for low back pain, sciatica and nerve pain, disc injuries, neck pain, headaches and migraines, sports injuries, joint pain and arthritis, auto accident injuries, pregnancy-related pain, and posture and movement problems.',
    },
    {
      q: 'What should I expect at my first visit?',
      a: 'We start with your history and a careful exam. If needed, we add diagnostics. Then we build a personalized plan with you, so you leave knowing what is wrong and what comes next.',
    },
    {
      q: 'How long will my rehabilitation take?',
      a: 'It depends on your condition, how long you have had it, and your goals. After your evaluation, we give you a clear picture of what to expect.',
    },
    {
      q: 'Do I need a referral?',
      a: 'Usually not. Our team can also help you with any insurance requirements.',
    },
    {
      q: 'What makes your approach different?',
      a: 'We look for the root cause, not just the symptom. Chiropractic, physiotherapy, pain management and orthopedic expertise work together under one roof, with a plan built around you.',
    },
    {
      q: 'Which locations do you have, and when are you open?',
      a: 'We have offices on North Dallas Parkway in Dallas and on Harroun Street in McKinney. Both are open Monday, Wednesday and Thursday 8 AM–6 PM, and Tuesday and Friday 8 AM–2 PM.',
    },
  ],
};
