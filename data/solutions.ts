// The six RYX AI solutions. Each one gets a card and its own page at
// /solutions/<slug> (Ferry lives at /ferry). The four `steps` are the same
// four beats the solution's animation plays, so keep them in sync with
// components/animations/<animation>.tsx if you reorder or rename them.
//
// Wording rule: plain language a shop, clinic or factory owner understands.
// Examples are real projects with the client's name kept private; a service
// RYX AI hasn't delivered yet is marked `pilot` and has no client story.

export type SolutionStep = { title: string; body: string };

export type SolutionGoal = 'Get more customers' | 'Keep your customers' | 'Save time';

export type Solution = {
  slug: string;
  href: string;
  title: string;
  /** One line for cards and the page hero. */
  short: string;
  /** Plain-language definition: what it is, in two or three sentences. */
  definition: string;
  icon: string;
  goal: SolutionGoal;
  animation: 'ads' | 'nudges' | 'workflow' | 'training' | 'leads' | 'ferry';
  whoFor: string[];
  steps: SolutionStep[];
  outcomes: string[];
  /** A real project (client name private), or for pilots what a first project looks like. */
  example: { title: string; body: string };
  flagship?: boolean;
  /** Offered, but not yet delivered for a client: shown as a pilot. */
  pilot?: boolean;
};

export const solutions: Solution[] = [
  {
    slug: 'ferry',
    href: '/ferry',
    title: 'Ferry: your 24/7 website salesperson',
    short: 'An AI assistant on your website that answers every visitor and turns them into sales or booked demos. Set it up yourself in 5 minutes.',
    definition:
      'Most visitors leave a website without saying a word. Ferry greets them, answers their questions using your own website, and guides them to buy or book a demo, day and night. You set it up yourself in about 5 minutes.',
    icon: 'bot',
    goal: 'Get more customers',
    animation: 'ferry',
    whoFor: ['Any business with a website', 'Software and product companies', 'Real estate and education', 'Clinics and service businesses'],
    steps: [
      { title: 'Visit', body: 'A visitor lands on your website and starts looking around.' },
      { title: 'Chat', body: 'Ferry says hello at the right moment and answers their questions from your own website.' },
      { title: 'Details', body: 'It finds out what they need and asks for their name and number, naturally.' },
      { title: 'Book or buy', body: 'The visitor books a demo or buys, and you see the lead in your dashboard.' },
    ],
    outcomes: [
      'More sales and demos from the visitors you already get',
      'Every question answered instantly, even at midnight',
      'Every lead and conversation in one dashboard',
    ],
    example: {
      title: 'A home-care agency',
      body: 'Had steady website traffic but few enquiries. Ferry now answers families’ questions at night and hands the interested ones to the owner every morning.',
    },
    flagship: true,
  },
  {
    slug: 'lead-generation',
    href: '/solutions/lead-generation',
    title: 'AI Lead Generation',
    short: 'A steady flow of interested buyers, without your team cold-calling all day.',
    definition:
      'AI finds companies and people who match your ideal customer, gets their contact details, writes a personal message to each one and follows up. When someone is interested, they land in your customer list or book a meeting with you.',
    icon: 'chart',
    goal: 'Get more customers',
    animation: 'leads',
    whoFor: ['Companies that sell to other businesses', 'IT and software companies', 'Manufacturers and exporters', 'Agencies and consultants'],
    steps: [
      { title: 'Find', body: 'You tell us who your ideal customer is. AI finds matching companies and decision-makers.' },
      { title: 'Get contacts', body: 'Each person gets a checked email and phone number, plus a note on why they fit.' },
      { title: 'Reach out', body: 'Personal messages go out on email, LinkedIn or WhatsApp, with polite follow-ups.' },
      { title: 'Shortlist', body: 'Replies are sorted: interested, maybe later, not now. Interested people book a meeting with you.' },
    ],
    outcomes: [
      'A full pipeline without a big sales team',
      'Your salespeople only talk to people who are interested',
      'Every lead and reply saved in your customer list',
    ],
    example: {
      title: 'A company selling to other businesses',
      body: 'Wanted meetings with operations heads at mid-size manufacturers. AI found and wrote to the right people every week and booked the interested ones into the founder’s calendar.',
    },
  },
  {
    slug: 'ai-ads',
    href: '/solutions/ai-ads',
    title: 'AI Ads & Creatives',
    short: 'Ad images, videos and copy made with AI, tested on Meta and Google, with your budget moved to the ads that sell.',
    definition:
      'We use AI to make ad images, short videos and ad text in your brand style, run them on Instagram, Facebook and Google, and keep moving your budget to the ads that bring customers. You get fresh ads every week without hiring a design studio.',
    icon: 'megaphone',
    goal: 'Get more customers',
    animation: 'ads',
    whoFor: ['Online stores and consumer brands', 'Real estate', 'Education and coaching', 'Clinics and local services'],
    steps: [
      { title: 'Brief', body: 'Tell us your product, your offer and who you want to reach.' },
      { title: 'Create', body: 'AI makes many versions of images, short videos and ad text. Our team checks every one.' },
      { title: 'Launch', body: 'The ads go live on Instagram, Facebook and Google, with tracking set up properly.' },
      { title: 'Improve', body: 'AI watches the results, stops the ads that don’t sell and puts more money behind the ones that do.' },
    ],
    outcomes: [
      'Fresh ads every week, without a design team',
      'Your budget goes to the ads that actually bring customers',
      'A simple weekly report: what ran, what worked, what’s next',
    ],
    example: {
      title: 'What a pilot project looks like',
      body: 'We agree one product or offer, make a first batch of ad versions, run them for a few weeks and report what sold. You only continue if the results are worth it.',
    },
    pilot: true,
  },
  {
    slug: 'customer-nudges',
    href: '/solutions/customer-nudges',
    title: 'WhatsApp Follow-ups & Reminders',
    short: 'Automatic, personal WhatsApp messages that bring customers back: cart reminders, refills, renewals and offers.',
    definition:
      'AI looks at what each customer bought, browsed or asked about and sends them a personal message at the right moment: a cart they left, a refill that’s due, a renewal coming up, or a nudge after weeks of silence. It feels one-to-one, but runs by itself.',
    icon: 'chat',
    goal: 'Keep your customers',
    animation: 'nudges',
    whoFor: ['Online stores and consumer brands', 'Pharmacies and clinics', 'Subscriptions and memberships', 'Insurance and finance'],
    steps: [
      { title: 'Connect', body: 'We connect your customer list: your online store, customer software or spreadsheets.' },
      { title: 'Spot the moment', body: 'AI finds who needs a message and why: a left cart, a refill, a renewal or a long silence.' },
      { title: 'Send', body: 'Each customer gets a personal WhatsApp, SMS or email, in their language, at a good time.' },
      { title: 'Results', body: 'Replies are answered, orders and renewals are tracked, and you see what each message earned.' },
    ],
    outcomes: [
      'More repeat orders and renewals from customers you already have',
      'Fewer forgotten carts and customers who drift away',
      'No more manual follow-up lists',
    ],
    example: {
      title: 'A pharmacy with monthly customers',
      body: 'Reminds each regular customer before their medicine runs out, with a one-tap re-order link on WhatsApp.',
    },
  },
  {
    slug: 'workflow-automation',
    href: '/solutions/workflow-automation',
    title: 'Paperwork Automation',
    short: 'AI reads your emails, PDFs and spreadsheets and prepares the quotes and reports for you.',
    definition:
      'Many teams spend hours copying details from emails, PDFs and spreadsheets into reports. AI reads the documents, pulls out the details, checks and compares them, and prepares the report or reply. A person checks it and clicks approve.',
    icon: 'cycle',
    goal: 'Save time',
    animation: 'workflow',
    whoFor: ['Trading and distribution', 'Manufacturing and purchasing teams', 'Logistics', 'Accounts and finance teams'],
    steps: [
      { title: 'Receive', body: 'Price requests, supplier quotes and invoices arrive by email or WhatsApp, as PDFs, scans or Excel.' },
      { title: 'Read', body: 'AI reads each document and pulls out items, quantities, prices, dates and terms.' },
      { title: 'Compare', body: 'It checks them against your price lists, compares suppliers and flags anything missing.' },
      { title: 'Report', body: 'A clean comparison report or draft quote is ready to approve, and the data goes into your system.' },
    ],
    outcomes: [
      'Hours of copying and typing removed every week',
      'Faster quotes and replies to your customers',
      'Fewer mistakes, with a person still approving',
    ],
    example: {
      title: 'A trading company',
      body: 'Receives price requests from customers and quotes from suppliers every week. AI now prepares the comparison sheet in minutes; the team only checks it and sends.',
    },
  },
  {
    slug: 'ai-training',
    href: '/solutions/ai-training',
    title: 'AI Training for Your Team',
    short: 'Hands-on training that gets your team using AI in their daily work, safely.',
    definition:
      'Practical workshops and follow-up support that teach your people to use AI tools on their own work: sales, marketing, operations and HR. Each team leaves with ready-made prompts, simple AI assistants for their tasks and clear rules for using AI safely.',
    icon: 'users',
    goal: 'Save time',
    animation: 'training',
    whoFor: ['Owners and leadership teams', 'Sales and marketing teams', 'Operations and HR', 'Companies just starting with AI'],
    steps: [
      { title: 'Assess', body: 'We learn where your team spends its time and how comfortable they are with AI today.' },
      { title: 'Train', body: 'Hands-on sessions using your team’s real tasks, with tools like ChatGPT, Claude and Gemini.' },
      { title: 'Equip', body: 'Each team gets a prompt library, simple assistants for their work and an AI-use policy.' },
      { title: 'Enable', body: 'Follow-up support and refreshers, so AI becomes a daily habit, not a one-day event.' },
    ],
    outcomes: [
      'A team that uses AI confidently, every day',
      'Time saved on writing, research, reports and analysis',
      'Clear rules that keep your company’s data safe',
    ],
    example: {
      title: 'A sales and support team',
      body: 'A hands-on workshop followed by weekly sessions. Each person left with AI assistants for proposals, follow-up emails and call summaries.',
    },
  },
];

export const goals: { goal: SolutionGoal; blurb: string }[] = [
  { goal: 'Get more customers', blurb: 'Turn visitors, prospects and ad views into paying customers.' },
  { goal: 'Keep your customers', blurb: 'Bring customers back with the right message at the right time.' },
  { goal: 'Save time', blurb: 'Take repetitive work off your team.' },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
