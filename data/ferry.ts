// Ferry product content, from the Ferry deck and the Ferry Starter proposal.

export const ferryFeatures = [
  {
    title: 'Website sales agent',
    body: 'Greets visitors, answers questions from your website and PDFs, captures and qualifies leads, and books meetings.',
  },
  {
    title: 'Knowledge base',
    body: 'Upload and update website content and PDFs any time. Ferry answers strictly from the material you provide.',
  },
  {
    title: 'Suggested replies',
    body: 'AI-generated reply options, created live for each conversation, that visitors can tap instead of typing.',
  },
  {
    title: 'Image-based replies',
    body: 'Shows product photos, floor plans and brochure pages from your knowledge base whenever they help answer.',
  },
  {
    title: 'Calendar booking',
    body: 'Cal.com built into the chat, so qualified leads see open slots and book a meeting without leaving the conversation.',
  },
  {
    title: 'Agent dashboard',
    body: 'Conversation logs and metrics: visitors engaged, qualified leads, meetings booked and where chats drop off.',
  },
  {
    title: 'Marketing dashboard',
    body: 'SEO and AEO analytics from a site crawl and Google Search Console: a site score, keyword opportunities and content gaps.',
  },
];

export const ferrySteps = [
  {
    step: '01',
    title: 'Set up for you',
    body: 'Enter your URL once. Ferry crawls your site and PDFs and writes its own prompt.',
  },
  {
    step: '02',
    title: 'Engages',
    body: 'Opens at the right moment, by time on page, scroll or exit intent. Remembers returning visitors and picks up where they left off.',
  },
  {
    step: '03',
    title: 'Converts',
    body: 'Answers from your content, with images when they help. Captures and qualifies leads, and books meetings through Cal.com.',
  },
];

export const ferryAnalytics = [
  {
    question: 'How is my agent doing?',
    title: 'Agent',
    body: 'Visitors engaged, qualified leads, meetings booked and conversion rate. Where conversations drop off, so you know what to fix.',
  },
  {
    question: 'How much traffic?',
    title: 'Traffic',
    body: 'Visitors, channels and top pages, tracked by the Ferry widget itself. No separate analytics setup.',
  },
  {
    question: 'How do I grow it?',
    title: 'SEO & AEO',
    body: 'A site score with findings, from Search Console and the same site crawl. Keyword opportunities, content gaps and AI growth tips.',
  },
];

export type Plan = {
  name: string;
  price: string;
  priceNote: string;
  status: 'early-access' | 'coming-soon';
  summary: string;
  features: string[];
};

export const ferryPlans: Plan[] = [
  {
    name: 'Ferry Starter',
    price: '₹2,000',
    priceNote: 'per month, starting from',
    status: 'early-access',
    summary: 'One website agent with everything you need to turn visitors into booked meetings.',
    features: [
      '1 website sales agent',
      'Knowledge base from your site and PDFs',
      'Suggested and image-based replies',
      'Cal.com meeting booking',
      'Agent and marketing dashboards',
      'Kickoff training and support',
    ],
  },
  {
    name: 'Ferry Premium',
    price: '₹5,000',
    priceNote: 'per month',
    status: 'coming-soon',
    summary: 'Everything in Starter, plus deeper engagement and growth tools.',
    features: [
      'Everything in Starter',
      'Visitor memory for returning visitors',
      'Every engagement trigger',
      'Growth recommendations and conversion insights',
      'No RYX AI branding',
    ],
  },
];

export const ferryFaq = [
  {
    q: 'How long does it take to go live?',
    a: 'Most agents are live within a day. You enter your website URL, Ferry builds its knowledge base, and you add one script tag or the WordPress plugin.',
  },
  {
    q: 'Will it make things up?',
    a: 'Ferry answers strictly from the content you give it: your website pages and uploaded PDFs. You can update that knowledge base from the dashboard at any time.',
  },
  {
    q: 'Do I need a developer?',
    a: 'No. Setup is one script tag, or the WordPress plugin. RYX gives you kickoff training and support.',
  },
  {
    q: 'How does early access work?',
    a: "Tell us about your business and website. We'll set you up, confirm your plan and walk you through onboarding. Prices exclude applicable taxes.",
  },
];
