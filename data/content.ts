// All homepage copy that comes from the RYX sales deck and the Ferry deck.
// Edit wording here; the section components only handle layout.

export const problems = [
  {
    title: 'Slow replies',
    body: 'Leads go cold when nobody answers within minutes.',
    icon: 'clock',
  },
  {
    title: 'Leads lost',
    body: 'Enquiries stay in personal WhatsApp and never reach the CRM.',
    icon: 'alert',
  },
  {
    title: 'Repetitive work',
    body: 'Teams answer the same questions and retype the same data all day.',
    icon: 'repeat',
  },
  {
    title: 'After hours',
    body: 'Nights and weekends go unanswered, and to competitors.',
    icon: 'moon',
  },
] as const;

export const solutions = [
  {
    id: 'sales',
    kicker: 'Win more',
    title: 'AI for Sales',
    body: 'Agents that reply in seconds, qualify every lead and keep your pipeline full.',
    points: [
      'Answer and qualify every lead',
      'Instant call-backs',
      'Follow-ups that never stop',
      'Leads straight into your CRM',
    ],
    icon: 'chart',
  },
  {
    id: 'marketing',
    kicker: 'Get seen',
    title: 'AI for Marketing',
    body: 'Be found on Google and in AI answers, and turn that traffic into enquiries.',
    points: [
      'SEO and AEO automation',
      'Campaign automation',
      'Lead generation',
      'Website and conversion',
    ],
    icon: 'megaphone',
  },
  {
    id: 'automation',
    kicker: 'Save time',
    title: 'AI for Automation',
    body: 'Take the repetitive work off your team, from support to paperwork.',
    points: [
      'Support agents 24×7',
      'Document data extraction',
      'Bookings and reminders',
      'Daily reports on WhatsApp',
    ],
    icon: 'cycle',
  },
  {
    id: 'consulting',
    kicker: 'Know where to start',
    title: 'AI Consulting',
    body: 'Not sure where AI fits? We map where you lose time and leads, and what to automate first.',
    points: [
      'Workflow and use-case review',
      'Clear plan of what to automate first',
      'Tool and CRM recommendations',
      'Team training and handover',
    ],
    icon: 'compass',
  },
] as const;

export type UseCaseCategory = 'Sales' | 'Marketing' | 'Customer service' | 'Operations';

export type UseCase = {
  title: string;
  tagline: string;
  category: UseCaseCategory;
  channels: string[];
  industries: string;
  problem: string;
  solution: string;
  benefit: string;
  measure: string;
  example: string;
};

export const useCases: UseCase[] = [
  {
    title: 'AI Chatbot + CRM',
    tagline: 'Every enquiry answered and in your CRM, in seconds.',
    category: 'Sales',
    channels: ['WhatsApp', 'Website', 'Instagram'],
    industries: 'All industries',
    problem:
      "Enquiries arrive on WhatsApp and web chat, get answered late, and never reach the CRM. Leads are lost inside salespeople's phones.",
    solution:
      'An AI agent answers every enquiry in Arabic or English, qualifies budget, need and timeline, then creates the contact and deal in the CRM and assigns the right rep.',
    benefit:
      'Every lead answered in seconds and captured in the CRM; the sales team only talks to qualified buyers.',
    measure: 'Response time, % of leads logged in CRM, qualified leads per month, lead-to-meeting rate',
    example:
      'A Dubai brokerage got 400 portal enquiries a month but only half reached Zoho. With the AI agent, every message is answered instantly and lands in Zoho tagged hot, warm or cold, so the manager finally sees the full pipeline.',
  },
  {
    title: 'Website Lead Agent (Ferry)',
    tagline: 'Get leads from the traffic you already have.',
    category: 'Sales',
    channels: ['Website'],
    industries: 'All industries',
    problem:
      "Visitors land on the website, can't find answers quickly and leave without contacting the business.",
    solution:
      "An AI website agent greets visitors, answers from the company's content and captures name, number and need before they leave.",
    benefit: 'More leads from the same website traffic, without more ad spend.',
    measure: 'Visitor-to-lead conversion, leads per month, chats handled',
    example:
      "A home-care agency's site had steady traffic but few enquiries. The website agent now answers families' questions at midnight and hands qualified leads to the owner every morning.",
  },
  {
    title: 'Instant Lead Callback',
    tagline: 'Never lose a lead to a slow call-back.',
    category: 'Sales',
    channels: ['Voice'],
    industries: 'Real estate, Education, Clinics, Auto',
    problem:
      "Leads from ads and portals are called back hours later. By then they've spoken to a competitor.",
    solution:
      'A voice agent calls every new form or portal lead within 2 minutes, qualifies them and books a call or visit.',
    benefit: 'Speed-to-lead goes from hours to minutes; more leads reached while interest is high.',
    measure: 'Time to first call, contact rate, appointments booked',
    example:
      'A training institute ran Meta ads but reps called back the next day. The AI now calls within two minutes, answers course questions and books counselling sessions straight into the calendar.',
  },
  {
    title: 'Missed-Call Callback',
    tagline: 'No missed call stays missed.',
    category: 'Sales',
    channels: ['Voice'],
    industries: 'All industries',
    problem: 'Missed calls are missed customers, and most never call back.',
    solution:
      'AI calls back every missed call within minutes, finds out what they need and books or logs it.',
    benefit: 'Recover customers who would otherwise be lost.',
    measure: 'Missed calls recovered, bookings from callbacks',
    example: "A plumbing company's AI calls back every missed call within 3 minutes and books the job.",
  },
  {
    title: 'Old Lead Revival',
    tagline: "Turn your dead leads into this month's sales.",
    category: 'Sales',
    channels: ['WhatsApp', 'Voice'],
    industries: 'Real estate, Auto, Education, Clinics',
    problem:
      'Thousands of past enquiries sit untouched in the CRM: money already paid for in marketing.',
    solution:
      'AI re-engages old leads on WhatsApp or voice with a relevant offer, qualifies replies and moves warm leads back into the pipeline.',
    benefit: 'New deals from leads you already paid for, with no new ad spend.',
    measure: 'Reply rate, re-qualified leads, deals from revived leads',
    example:
      'A car dealer had 3,000 old test-drive enquiries. A WhatsApp campaign offering a new model preview brought back dozens of interested buyers in the first week.',
  },
  {
    title: 'WhatsApp Enquiry Assistant',
    tagline: 'Your best salesperson on WhatsApp, awake 24×7.',
    category: 'Sales',
    channels: ['WhatsApp'],
    industries: 'Retail, D2C, Trading, Coaching',
    problem: 'Staff answer the same product, price and availability questions on WhatsApp all day.',
    solution:
      'An AI assistant answers product questions, shares catalogues and brochures, and captures orders or enquiries.',
    benefit: 'Instant answers 24×7; staff freed for closing and fulfilment.',
    measure: 'Chats handled by AI, response time, enquiries captured',
    example:
      "A furniture showroom's two staff spent their day replying to 'price?' messages. The AI now shares the catalogue, answers delivery questions and passes ready buyers to staff.",
  },
  {
    title: 'Property Matching Assistant',
    tagline: 'The right property, in the first message.',
    category: 'Sales',
    channels: ['WhatsApp', 'Website'],
    industries: 'Real estate',
    problem: 'Agents spend hours manually sending listings to buyers who describe what they want.',
    solution:
      "AI understands the buyer's needs from chat and sends matching listings from the brokerage's inventory.",
    benefit: 'Buyers get relevant options instantly; agents step in only for viewings.',
    measure: 'Listings shared, viewings booked, agent hours saved',
    example:
      "A buyer messages '2-bed in JVC under 1.2M, ready'. The AI sends five matching units with photos and offers viewing slots.",
  },
  {
    title: 'Booking & Reminder Agent',
    tagline: 'Fuller calendars. Fewer no-shows.',
    category: 'Customer service',
    channels: ['WhatsApp', 'Voice'],
    industries: 'Clinics, Salons, Car dealers, Gyms',
    problem: 'Reception is overloaded with booking calls, and no-shows waste slots.',
    solution:
      'AI books appointments, test drives or visits by phone and chat, and sends reminders.',
    benefit: 'Fuller calendars and fewer no-shows.',
    measure: 'Bookings made by AI, no-show rate',
    example:
      "A dental clinic's AI books patients on WhatsApp and sends reminders the day before, filling cancelled slots from a waitlist.",
  },
  {
    title: 'Review & Reputation Manager',
    tagline: 'More 5-star reviews, on autopilot.',
    category: 'Marketing',
    channels: ['WhatsApp', 'Google'],
    industries: 'Restaurants, Clinics, Car service, Hotels',
    problem: 'Happy customers rarely leave reviews; unhappy ones do, and replies are slow.',
    solution:
      'AI asks happy customers for Google reviews, drafts on-brand replies to all reviews, and flags unhappy customers to the owner.',
    benefit: 'More 5-star reviews, faster replies, fewer public complaints.',
    measure: 'New reviews per month, average rating, reply time',
    example:
      'A restaurant sends a thank-you WhatsApp after each order. Happy guests get a review link; unhappy ones reach the manager first.',
  },
  {
    title: 'Document Data Extraction',
    tagline: 'Stop retyping documents.',
    category: 'Operations',
    channels: ['Email', 'Upload'],
    industries: 'Logistics, Accounting, PRO/Visa, HR',
    problem:
      'Staff retype data from invoices, POs, Emirates IDs, passports and trade licences: slow and error-prone.',
    solution:
      'AI reads documents and fills the system or spreadsheet automatically, ready for review.',
    benefit: 'Hours of typing removed; fewer errors.',
    measure: 'Documents processed, time per document, error rate',
    example:
      "A PRO services firm's team typed passport and visa details all day. The AI now extracts them into their system in seconds for a quick check.",
  },
  {
    title: 'Client Document Collection',
    tagline: 'Get every document, without chasing.',
    category: 'Operations',
    channels: ['WhatsApp'],
    industries: 'Accounting, Legal, PRO/Visa',
    problem: 'Firms spend days chasing clients for missing documents.',
    solution: "AI chases clients on WhatsApp, checks what's received and files documents.",
    benefit: 'Files complete faster; staff stop chasing.',
    measure: 'Days to complete a file, staff hours saved',
    example:
      "An accounting firm's AI collects bank statements and invoices from 200 clients before VAT deadlines.",
  },
  {
    title: "Owner's Daily WhatsApp Brief",
    tagline: 'Your business, in one morning message.',
    category: 'Operations',
    channels: ['WhatsApp'],
    industries: 'SMBs',
    problem: "Owners chase staff for numbers and don't see problems until it's late.",
    solution:
      'AI sends a morning WhatsApp summary of leads, sales, bookings, cash and reviews from their CRM and sheets.',
    benefit: 'The whole business on one screen, every morning.',
    measure: 'Reports delivered, decisions made faster',
    example:
      'A clinic owner reads one message at 8am: bookings today, no-shows yesterday, new reviews and pending payments.',
  },
];

export const processSteps = [
  { title: 'Understand', body: 'Understand user needs and use cases.' },
  { title: 'Build', body: 'Build AI agents and integrate them with your tools.' },
  { title: 'Agentic QA', body: 'AI-powered testing across scenarios, languages and channels.' },
  {
    title: 'Production-ready',
    body: 'Quality, safety, compliance and reliability checks before launch.',
  },
  { title: 'Deploy', body: 'Deploy to production on your channels.' },
];

export const improvementLoop = [
  { title: 'Evaluate', body: 'Evaluate conversations and AI performance across channels and languages.' },
  { title: 'Validate', body: 'Human-in-the-loop validation and feedback.' },
  { title: 'Observe', body: 'Monitor, analyse and gain insights.' },
  { title: 'Learn', body: 'Continuously learn and improve.' },
];

export const integrations = [
  {
    title: 'Channels',
    items: ['WhatsApp Business API', 'Website', 'Instagram', 'Phone', 'Email'],
  },
  {
    title: 'Your systems',
    items: ['Zoho', 'HubSpot', 'Salesforce', 'Dynamics 365', 'Odoo', 'Google Sheets'],
  },
  {
    title: 'AI & languages',
    items: ['Leading LLMs', 'ElevenLabs voice', 'AWS', 'English', 'Arabic', 'Hindi', 'Urdu'],
  },
];

export const ferryFeatures = [
  {
    title: 'Set up for you',
    body: 'Enter your URL once. Ferry crawls your site and PDFs and writes its own prompt. Go live with one script tag or the WordPress plugin.',
  },
  {
    title: 'Engages',
    body: 'Opens at the right moment: time on page, scroll or exit intent. Remembers returning visitors and picks up where they left off.',
  },
  {
    title: 'Converts',
    body: 'Answers from your content, with images when they help. Captures and qualifies leads, and books meetings through Cal.com.',
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
    body: 'A site score with findings from Search Console and the same site crawl: keyword opportunities, content gaps and AI growth tips.',
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
      'Meeting booking inside the chat (Cal.com)',
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
