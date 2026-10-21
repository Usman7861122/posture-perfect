// Legal page text. Written in plain English as a starting point.
// IMPORTANT: have the clinic's attorney review every page before launch.
// Items marked [CONFIRM] should be checked with the clinic.

export const legalUpdated = 'October 21, 2026';

export type Block = { h: string; p?: string[]; ul?: string[] };
export type LegalDoc = { slug: string; title: string; short: string; desc: string; intro: string; blocks: Block[] };

const contact: Block = {
  h: 'Contact us',
  p: [
    'Posture Perfect Wellness Center, 15110 North Dallas Pkwy, Suite 102, Dallas, TX 75248.',
    'Phone: 972-792-0204.',
  ],
};

export const legalDocs: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    short: 'Privacy',
    desc: 'How Posture Perfect Wellness Center collects, uses and protects information from this website.',
    intro: 'This policy explains what information we collect on this website, why we collect it, and the choices you have. It covers our website only. How we handle your health records in the clinic is explained in our Notice of Privacy Practices.',
    blocks: [
      {
        h: 'Information we collect',
        p: ['We collect information in two ways.'],
        ul: [
          'Information you give us: your name, phone number, email address and message when you use our contact or appointment form, or when you call or email us.',
          'Information collected automatically: your browser type, device, pages visited and the date and time of your visit. This may be collected through cookies and similar tools, only as described in our Cookie Policy and your cookie choices.',
        ],
      },
      {
        h: 'Please do not send health details through the website',
        p: ['Our website forms are not a secure way to share medical information. Please do not put detailed health information in a form or email. Call us, and we will help you in a safe way.'],
      },
      {
        h: 'How we use information',
        ul: [
          'To reply to your questions and schedule appointments.',
          'To run, protect and improve our website.',
          'To understand how people use the site, if you allow analytics cookies.',
          'To measure our advertising, if you allow marketing cookies.',
          'To follow the law.',
        ],
      },
      {
        h: 'How we share information',
        p: [
          'We do not sell your personal information. We may share it with service providers who help us run the website, send messages or manage appointments, and only so they can do that work for us. We may also share it when the law requires.',
          'Our website may link to other sites. We are not responsible for their privacy practices, so please read their policies.',
        ],
      },
      {
        h: 'Cookies',
        p: ['You can accept, reject or customize non-essential cookies at any time. See our Cookie Policy for details, or use “Cookie settings” in the footer of any page.'],
      },
      {
        h: 'Do Not Track and Global Privacy Control',
        p: ['If your browser sends a Global Privacy Control signal, we treat non-essential cookies as off until you choose otherwise. [CONFIRM with developer once analytics is added]'],
      },
      {
        h: 'Security',
        p: ['We use reasonable steps to protect information we hold. No website or email can be made 100% safe, so we cannot promise absolute security.'],
      },
      {
        h: 'Your choices',
        p: ['You may ask us what personal information from this website we hold about you, ask us to correct it, or ask us to delete it, unless the law requires us to keep it. Contact us using the details below.'],
      },
      {
        h: 'Children',
        p: ['This website is for adults. We do not knowingly collect information from children through the website. Parents and guardians may contact us about care for a child.'],
      },
      {
        h: 'Changes to this policy',
        p: ['We may update this policy. The date at the top of the page shows when it last changed.'],
      },
      contact,
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    short: 'Terms',
    desc: 'The terms for using the Posture Perfect Wellness Center website.',
    intro: 'By using this website you agree to these terms. If you do not agree, please do not use the site.',
    blocks: [
      {
        h: 'Information only',
        p: ['Everything on this website is for general information. It is not medical advice and does not create a doctor–patient relationship. See our Medical Disclaimer.'],
      },
      {
        h: 'Changes to these terms',
        p: ['We may change these terms at any time. Changes apply when they are posted here. Using the site after a change means you accept it.'],
      },
      {
        h: 'Using the site',
        p: ['You agree not to use this website for anything unlawful, or in a way that could harm the site or other people. You agree not to try to get into parts of the site you are not meant to reach.'],
      },
      {
        h: 'What you send us',
        p: ['If you send us a message or form, you promise the information is true and that you have the right to share it. Do not send private health details through the site. Call us instead.'],
      },
      {
        h: 'Our content',
        p: ['The text, photos, logos and design on this site belong to Posture Perfect Wellness Center or its licensors. The names and logos are trademarks. You may view and print pages for your own use. You may not copy, sell or reuse them without our written permission.'],
      },
      {
        h: 'Links to other sites',
        p: ['We may link to websites we do not run. We do not control them and are not responsible for their content or practices.'],
      },
      {
        h: 'Reviews',
        p: ['Patient reviews on this site are copied from our public Google profile. They are one person’s experience. Results are different for every person.'],
      },
      {
        h: 'No warranty and limit of liability',
        p: [
          'THE WEBSITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” WE DO NOT PROMISE THAT IT WILL ALWAYS BE AVAILABLE, ERROR-FREE OR UP TO DATE.',
          'TO THE FULLEST EXTENT THE LAW ALLOWS, POSTURE PERFECT WELLNESS CENTER IS NOT LIABLE FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES FROM YOUR USE OF THE WEBSITE. [CONFIRM wording with attorney]',
        ],
      },
      {
        h: 'Governing law',
        p: ['These terms are governed by the laws of the State of Texas. [CONFIRM with attorney]'],
      },
      contact,
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    short: 'Cookies',
    desc: 'What cookies this website uses and how to change your choices.',
    intro: 'Cookies are small files saved on your device. This page explains the kinds we use and how you can control them.',
    blocks: [
      {
        h: 'Your choices',
        p: ['When you first visit, you can accept all, reject non-essential, or customize. You can change your mind at any time by choosing “Cookie settings” in the footer of any page. Your choice is saved for 12 months.'],
      },
      {
        h: 'Essential cookies (always on)',
        p: ['These make the site work and keep it safe. They also remember your cookie choice. The site cannot work properly without them.'],
        ul: ['pp_cookie_consent_v1: saves your cookie choice for 12 months.'],
      },
      {
        h: 'Preferences cookies (off until you allow)',
        p: ['These remember choices you make, so you do not need to repeat them.'],
      },
      {
        h: 'Analytics cookies (off until you allow)',
        p: ['These help us count visits and see which pages are used. We use this to improve the site. [CONFIRM: no analytics tool is installed yet. Add the tool name here when it is.]'],
      },
      {
        h: 'Marketing cookies (off until you allow)',
        p: ['These help us measure our ads and show more useful ads. [CONFIRM: none installed yet. Add tool names here when they are.]'],
      },
      {
        h: 'Other ways to control cookies',
        p: ['You can also block or delete cookies in your browser settings. If you block essential cookies, parts of the site may not work.'],
      },
      contact,
    ],
  },
  {
    slug: 'notice-of-privacy-practices',
    title: 'Notice of Privacy Practices',
    short: 'Privacy Practices (HIPAA)',
    desc: 'How medical information about you may be used and shared, and how you can get access to it.',
    intro: 'THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND SHARED, AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE READ IT CAREFULLY.',
    blocks: [
      {
        h: 'Our duty',
        p: ['We are required by law to keep your health information private, to give you this notice of our legal duties and privacy practices, and to follow the notice that is in effect. We will tell you if there is a breach that may have put your information at risk.'],
      },
      {
        h: 'How we may use and share your information',
        ul: [
          'Treatment: to give you care, and to share information with other providers who are also caring for you.',
          'Payment: to bill and get paid by you, your insurance or other payers.',
          'Health care operations: to run our practice, review quality of care, and train staff.',
          'As required or allowed by law: for example, public health reporting, health oversight, court orders, and to prevent a serious threat to safety.',
          'Appointment reminders and other messages about your care.',
        ],
      },
      {
        h: 'Uses that need your written permission',
        p: ['We will ask for your written permission before we use or share your information for marketing, before any sale of your information, and for most uses of psychotherapy notes, if we keep any. Any other use not described in this notice needs your written permission. You may cancel a permission in writing at any time.'],
      },
      {
        h: 'Your rights',
        ul: [
          'See or get a copy of your health records, on paper or electronically.',
          'Ask us to correct information you think is wrong or incomplete.',
          'Ask for private communication, for example by a different phone number or address.',
          'Ask us to limit what we share. We do not have to agree, except when you pay for a service in full yourself and ask us not to tell your health plan.',
          'Get a list of certain times we have shared your information.',
          'Get a paper copy of this notice, even if you agreed to get it by email.',
          'File a complaint if you believe your rights were not respected.',
        ],
      },
      {
        h: 'Complaints',
        p: [
          'You may file a complaint with us using the contact details below. You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights. We will not punish you for filing a complaint.',
        ],
      },
      {
        h: 'Changes to this notice',
        p: ['We may change this notice. The new notice will apply to all information we hold. We will post it in our offices and on this website.'],
      },
      {
        h: 'Privacy contact',
        p: [
          'To use any of your rights or ask a question, contact our privacy contact at Posture Perfect Wellness Center, 15110 North Dallas Pkwy, Suite 102, Dallas, TX 75248, or call 972-792-0204. [CONFIRM the name or title of the privacy officer and the effective date of this notice.]',
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    short: 'Accessibility',
    desc: 'Our commitment to making the Posture Perfect Wellness Center website usable for everyone.',
    intro: 'We want everyone to be able to use this website, including people who use screen readers, keyboards or other assistive tools.',
    blocks: [
      {
        h: 'What we do',
        ul: [
          'Pages use clear headings, links and labels.',
          'You can move through the site with a keyboard. A “Skip to content” link is at the top of every page.',
          'Images have text descriptions where they carry meaning.',
          'Animations are reduced when your device is set to “reduce motion.”',
          'We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1, level AA.',
        ],
      },
      {
        h: 'We are still improving',
        p: ['Some parts of the site may not be perfect yet. If something is hard for you to use, please tell us. We will try to fix it or give you the information another way.'],
      },
      {
        h: 'Need help right now?',
        p: ['Call us at 972-792-0204 and our team can help you book an appointment or get information by phone.'],
      },
      contact,
    ],
  },
  {
    slug: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    short: 'Medical Disclaimer',
    desc: 'The information on this website is general and is not medical advice.',
    intro: 'Please read this before you rely on anything on this website.',
    blocks: [
      {
        h: 'General information only',
        p: ['The pages, articles and videos on this website are for education. They are not medical advice, a diagnosis, or a treatment plan. Reading this website does not make you our patient.'],
      },
      {
        h: 'Talk to a provider',
        p: ['Always ask a qualified health provider about your own health. Do not ignore professional advice, or wait to get it, because of something you read here.'],
      },
      {
        h: 'Emergencies',
        p: ['If you think you have a medical emergency, call 911 or go to the nearest emergency room. Do not use our website or form for urgent problems.'],
      },
      {
        h: 'Results are different for each person',
        p: ['Treatment results depend on the person. Reviews, stories and examples on this site are not a promise that you will have the same result.'],
      },
      {
        h: 'Blog and articles',
        p: ['Articles reflect the views of the writer at the time of writing. Health knowledge changes. Information may not be current.'],
      },
      contact,
    ],
  },
];
