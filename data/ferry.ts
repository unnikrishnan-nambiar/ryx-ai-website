// Copy for the Ferry page, from the Ferry deck and the Ferry proposal.

export const ferryFeatures = [
  {
    title: 'Set up for you',
    body: 'Enter your URL once. Ferry reads your site and PDFs and learns your business. Go live with one script tag or the WordPress plugin.',
  },
  {
    title: 'Starts the conversation',
    body: 'Opens at the right moment: time on page, scroll or exit intent. Remembers returning visitors and picks up where they left off.',
  },
  {
    title: 'Converts',
    body: 'Answers from your content, with images when they help. Captures and qualifies leads, and books meetings or guides visitors to buy.',
  },
];

export const ferryAnalytics = [
  {
    question: 'How is my agent doing?',
    title: 'Agent',
    body: 'Visitors engaged, qualified leads, meetings booked and conversion rate, plus where conversations drop off.',
  },
  {
    question: 'How much traffic?',
    title: 'Traffic',
    body: 'Visitors, channels and top pages, tracked by the Ferry widget itself. No separate analytics setup.',
  },
  {
    question: 'How do I grow it?',
    title: 'SEO & AEO',
    body: 'A site score with findings from Search Console and the same site crawl: keyword opportunities, content gaps and growth tips.',
  },
];

export type Plan = {
  name: string;
  price: string | null;
  period?: string;
  summary: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  earlyAdopter?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹2,000',
    period: '/month',
    summary: 'One AI sales agent on your website, live in a day.',
    features: [
      'Website sales agent trained on your site and PDFs',
      'Knowledge base you can update any time',
      'Suggested replies visitors can tap',
      'Image replies from your brochures and photos',
      'Meeting booking inside the chat',
      'Agent dashboard and conversation logs',
      'SEO and AEO marketing dashboard',
    ],
    cta: 'Get started',
  },
  {
    name: 'Premium',
    price: '₹5,000',
    period: '/month',
    summary: 'Everything in Starter, tuned to convert more of your visitors.',
    features: [
      'Everything in Starter',
      'Visitor memory: picks up where returning visitors left off',
      'Every engagement trigger: time on page, scroll, exit intent',
      'Growth recommendations',
      'Conversion insights',
      'No RYX AI branding on the widget',
    ],
    cta: 'Go Premium',
    highlighted: true,
  },
  {
    name: 'Early adopters',
    price: null,
    summary: 'Be one of the first businesses on Ferry and help shape what we build next.',
    features: [
      'Special pilot terms',
      'Hands-on onboarding with our team',
      'Direct line to the people building Ferry',
      'Early access to new features, including voice agents',
    ],
    cta: 'Contact us',
    earlyAdopter: true,
  },
];

export const ferryFaq = [
  {
    q: 'How long does setup take?',
    a: 'Most websites are live within a day. You share your website and documents, we set up the agent, and you add one line of code (or the WordPress plugin).',
  },
  {
    q: 'Where does Ferry get its answers?',
    a: 'Only from your own content: your website pages and the documents you upload. You can update that knowledge base any time from the dashboard.',
  },
  {
    q: 'Does it work on my website?',
    a: 'Yes. Ferry works on any website through a single script tag, and there is a plugin for WordPress.',
  },
  {
    q: 'How do meetings get booked?',
    a: 'Qualified visitors pick a slot from your calendar right inside the chat. Every lead and conversation appears in your Ferry dashboard.',
  },
  {
    q: 'Can Ferry talk on the phone or WhatsApp?',
    a: 'Ferry runs on your website today. Voice agents are coming soon, and our team builds WhatsApp and voice agents as custom projects.',
  },
];
