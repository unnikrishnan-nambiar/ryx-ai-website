// Copy for Ferry, from the Ferry deck, the proposal and the founder's answers
// (self-setup in about 5 minutes, monthly subscription, early-adopter price).

export const ferrySetup = [
  { title: 'Enter your website address', body: 'Ferry reads your pages and documents and learns your business.' },
  { title: 'Check how it answers', body: 'Ask it a few questions. Add anything it should know.' },
  { title: 'Add it to your website', body: 'Paste one line of code, or use the WordPress plugin. Done.' },
];

export const ferryFeatures = [
  {
    title: 'Sets itself up',
    body: 'Enter your website address once. Ferry reads your pages and PDFs and learns your business. Live in about 5 minutes, no tech team needed.',
  },
  {
    title: 'Starts the conversation',
    body: 'Says hello at the right moment: when a visitor has been reading for a while, scrolls down, or is about to leave. Remembers people who come back.',
  },
  {
    title: 'Turns visitors into customers',
    body: 'Answers from your own content, shows photos and brochures when they help, collects contact details and books meetings, or guides people to buy.',
  },
];

export const notAChatbot = [
  { chatbot: 'Follows a fixed script someone had to write', ferry: 'Learns from your website and answers in its own words' },
  { chatbot: 'Gets stuck on questions it wasn’t set up for', ferry: 'Answers anything your website and documents cover' },
  { chatbot: 'Waits for the visitor to click', ferry: 'Starts the conversation at the right moment' },
  { chatbot: 'Ends with “please email us”', ferry: 'Collects details, books the meeting or guides the sale' },
  { chatbot: 'No idea if it helped', ferry: 'Dashboard of visitors, leads and meetings booked' },
];

export const ferryAnalytics = [
  {
    question: 'Is Ferry working?',
    title: 'Ferry results',
    body: 'Visitors Ferry spoke to, leads collected, meetings booked, and where conversations drop off.',
  },
  {
    question: 'Who visits my website?',
    title: 'Visitors',
    body: 'How many people visit, where they come from and which pages they read. No extra analytics setup.',
  },
  {
    question: 'How do I get found more?',
    title: 'Google & AI search',
    body: 'A score for how easily customers find you on Google and AI assistants like ChatGPT, with simple tips to improve it.',
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  summary: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  earlyAdopter?: boolean;
  /** Shown as a badge, e.g. remaining spots. */
  badge?: string;
};

// Early-adopter spots: update these two numbers as spots fill.
export const earlyAdopterSpots = { total: 10, left: 5 };

export const plans: Plan[] = [
  {
    name: 'Early adopter',
    price: '₹1,000',
    period: '/month',
    summary: 'Ferry Starter at a pilot price, for our first ten customers.',
    features: [
      'Everything in Starter',
      'Pilot price for early customers',
      'Direct line to the team building Ferry',
      'Help shape what we build next',
    ],
    cta: 'Claim an early-adopter spot',
    earlyAdopter: true,
    badge: `${earlyAdopterSpots.left} of ${earlyAdopterSpots.total} spots left`,
  },
  {
    name: 'Starter',
    price: '₹2,000',
    period: '/month',
    summary: 'One AI assistant on your website, set up in about 5 minutes.',
    features: [
      'Learns from your website and PDFs',
      'Update what it knows any time',
      'Suggested replies visitors can tap',
      'Shows photos and brochures when they help',
      'Books meetings inside the chat',
      'Dashboard of every conversation and lead',
      'Google & AI search score with tips',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Premium',
    price: '₹5,000',
    period: '/month',
    summary: 'Everything in Starter, set up to turn more visitors into customers.',
    features: [
      'Everything in Starter',
      'Remembers returning visitors',
      'Starts chats at every key moment, including when visitors are about to leave',
      'Tips to get more leads from your website',
      'Reports on which pages and chats bring customers',
      'No RYX AI branding on the chat',
    ],
    cta: 'Start with Premium',
    highlighted: true,
  },
];

export const ferryFaq = [
  {
    q: 'Is Ferry just a chatbot?',
    a: 'No. A basic chatbot follows a script someone wrote and gets stuck on anything else. Ferry learns from your whole website and documents, answers in natural language, starts conversations at the right moment, collects contact details and books meetings, and shows you the results in a dashboard.',
  },
  {
    q: 'How long does setup take? Do I need a developer?',
    a: 'About 5 minutes, and no developer. Enter your website address, check a few answers, then paste one line of code into your website or use the WordPress plugin.',
  },
  {
    q: 'Will Ferry say something wrong about my business?',
    a: 'Ferry answers only from your website and the documents you give it. You can check its answers before going live and update what it knows any time from the dashboard.',
  },
  {
    q: 'How do meetings get booked?',
    a: 'Interested visitors pick a time from your calendar right inside the chat. Every lead and conversation appears in your Ferry dashboard.',
  },
  {
    q: 'How does billing work?',
    a: 'Ferry is a monthly subscription. Prices are in Indian rupees and exclude taxes. In the UAE or elsewhere? Contact us for pricing in your currency.',
  },
  {
    q: 'Can Ferry talk on WhatsApp or the phone?',
    a: 'Ferry works on your website today, and voice is coming soon. Our team already builds WhatsApp and voice AI as custom projects. Call our AI assistant to hear one.',
  },
];
