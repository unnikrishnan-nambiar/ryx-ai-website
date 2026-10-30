// The six RYX AI solutions. Each one gets a card on the homepage and its own
// page at /solutions/<slug> (Ferry lives at /ferry). The four `steps` are the
// same four beats the solution's animation plays, so keep them in sync with
// components/animations/<animation>.tsx if you reorder or rename them.

export type SolutionStep = { title: string; body: string };

export type Solution = {
  slug: string;
  href: string;
  number: string;
  title: string;
  /** One line for cards and the page hero. */
  short: string;
  /** Plain-language definition: what it is, in two or three sentences. */
  definition: string;
  icon: string;
  animation: 'ads' | 'nudges' | 'workflow' | 'training' | 'leads' | 'ferry';
  whoFor: string[];
  steps: SolutionStep[];
  outcomes: string[];
  example: { title: string; body: string };
  flagship?: boolean;
};

export const solutions: Solution[] = [
  {
    slug: 'ai-ads',
    href: '/solutions/ai-ads',
    number: '01',
    title: 'AI Creatives & Ads',
    short: 'Make scroll-stopping ads in hours, not weeks, and let AI find the ones that sell.',
    definition:
      'We use AI to create ad images, videos and copy in your brand style, launch them on Meta, Instagram and Google, and keep moving your budget to the ads that bring customers. You get a steady stream of fresh creatives without hiring a studio.',
    icon: 'megaphone',
    animation: 'ads',
    whoFor: ['D2C and retail brands', 'Real estate', 'Education and coaching', 'Clinics and local services'],
    steps: [
      { title: 'Brief', body: 'Tell us your product, offer and who you want to reach. That is all we need.' },
      {
        title: 'Create',
        body: 'AI produces many on-brand versions of images, short videos and ad copy. Our team reviews every one.',
      },
      { title: 'Launch', body: 'The ads go live on Meta, Instagram and Google, set up and tracked properly.' },
      {
        title: 'Optimise',
        body: 'AI watches the results, pauses the ads that don’t work, scales the winners and makes new versions of them.',
      },
    ],
    outcomes: [
      'Fresh creatives every week, without a design team',
      'Budget shifts to the ads that actually bring leads and sales',
      'A simple weekly report: what ran, what worked, what’s next',
    ],
    example: {
      title: 'A clinic launching a new treatment',
      body: 'Gets 20 ad variations in a day, tests them on Instagram, and within a week keeps the three that bring the cheapest enquiries.',
    },
  },
  {
    slug: 'customer-nudges',
    href: '/solutions/customer-nudges',
    number: '02',
    title: 'Personalised Customer Nudges',
    short: 'The right message to each customer at the right moment, written for them.',
    definition:
      'AI looks at what each customer bought, browsed or asked about, spots the right moment, like a cart left behind, a refill due or a renewal coming up, and sends a personal message on WhatsApp, SMS or email. It feels one-to-one, but runs on its own.',
    icon: 'chat',
    animation: 'nudges',
    whoFor: ['E-commerce and D2C', 'Pharmacies and clinics', 'Subscriptions and memberships', 'Insurance and finance'],
    steps: [
      { title: 'Connect', body: 'We connect your customer list from your store, CRM or spreadsheets.' },
      {
        title: 'Spot the moment',
        body: 'AI finds who needs a nudge and why: an abandoned cart, a refill, a renewal, or 60 days of silence.',
      },
      {
        title: 'Send',
        body: 'Each customer gets a personal message in their language, on the channel they use, at a good time.',
      },
      { title: 'Results', body: 'Replies are handled, orders and renewals are tracked, and you see what each nudge earned.' },
    ],
    outcomes: [
      'More repeat orders and renewals from customers you already have',
      'Fewer abandoned carts and lapsed customers',
      'No more manual follow-up lists',
    ],
    example: {
      title: 'A pharmacy with monthly customers',
      body: 'Reminds each customer three days before their medicine runs out, with a one-tap re-order link on WhatsApp.',
    },
  },
  {
    slug: 'workflow-automation',
    href: '/solutions/workflow-automation',
    number: '03',
    title: 'Workflow Automation',
    short: 'Let AI do the paperwork, from an RFQ in your inbox to a ready report.',
    definition:
      'Many teams spend hours copying data from emails, PDFs and spreadsheets into reports. AI reads the documents, pulls out the details, checks and compares them, and produces the report or reply for a person to approve.',
    icon: 'cycle',
    animation: 'workflow',
    whoFor: ['Trading and distribution', 'Manufacturing and procurement', 'Logistics', 'Finance and accounting teams'],
    steps: [
      { title: 'Receive', body: 'RFQs, quotes and invoices arrive by email, WhatsApp or upload, as PDFs, scans or Excel.' },
      { title: 'Read', body: 'AI reads each document and pulls out items, quantities, prices, dates and terms.' },
      {
        title: 'Compare',
        body: 'It checks the data against your price lists and past quotes, compares vendors and flags anything missing.',
      },
      {
        title: 'Report',
        body: 'A clean comparison report or draft quote is ready for approval, and the data goes into your system.',
      },
    ],
    outcomes: [
      'Hours of copying and typing removed every week',
      'Faster quotes and replies to customers',
      'Fewer errors, with a person still approving',
    ],
    example: {
      title: 'A trading company handling RFQs',
      body: 'Receives about 30 RFQs and vendor quotes a week. The AI prepares the quote-comparison sheet in minutes; the team only reviews and sends.',
    },
  },
  {
    slug: 'ai-training',
    href: '/solutions/ai-training',
    number: '04',
    title: 'AI Training for Teams',
    short: 'Hands-on training that gets your team using AI in their daily work.',
    definition:
      'Workshops and ongoing support that teach your people to use AI tools on their own tasks: sales, marketing, operations and HR. Teams leave with ready-to-use prompts, custom assistants for their work and clear rules on using AI safely.',
    icon: 'users',
    animation: 'training',
    whoFor: ['Leadership teams', 'Sales and marketing teams', 'Operations and HR', 'Companies starting with AI'],
    steps: [
      { title: 'Assess', body: 'We learn where your team spends its time and how comfortable they are with AI today.' },
      {
        title: 'Train',
        body: 'Hands-on sessions using your team’s real tasks, with tools like ChatGPT, Claude and Gemini.',
      },
      {
        title: 'Equip',
        body: 'Each team gets a prompt library, custom assistants for their workflows and a simple AI-use policy.',
      },
      { title: 'Enable', body: 'Follow-up support and refreshers, so AI becomes a daily habit, not a one-day event.' },
    ],
    outcomes: [
      'Teams that use AI confidently, every day',
      'Time saved on writing, research, reports and analysis',
      'Clear guardrails for data safety',
    ],
    example: {
      title: 'A 40-person sales and support team',
      body: 'A half-day workshop plus four weekly sessions. Each person leaves with assistants for proposals, follow-up emails and call summaries.',
    },
  },
  {
    slug: 'lead-generation',
    href: '/solutions/lead-generation',
    number: '05',
    title: 'AI Lead Generation',
    short: 'A steady flow of qualified leads, without cold-calling all day.',
    definition:
      'AI finds businesses and people that match your ideal customer, adds their contact details, writes personal outreach on email, LinkedIn or WhatsApp, follows up, and hands you the people who are interested, already in your CRM.',
    icon: 'chart',
    animation: 'leads',
    whoFor: ['B2B services', 'IT and software companies', 'Manufacturers and exporters', 'Agencies and consultants'],
    steps: [
      {
        title: 'Find',
        body: 'We define your ideal customer; AI finds matching companies and decision-makers from public sources.',
      },
      { title: 'Enrich', body: 'Each prospect gets verified contact details and the context needed to write to them.' },
      { title: 'Reach out', body: 'Personal messages go out with polite follow-ups, on the channels that work for you.' },
      {
        title: 'Qualify',
        body: 'Replies are sorted as hot, warm or not now. Hot leads book a meeting or go straight to your team.',
      },
    ],
    outcomes: [
      'A full pipeline without a big sales team',
      'Your salespeople talk only to interested buyers',
      'Every lead and conversation logged in your CRM',
    ],
    example: {
      title: 'A B2B services firm',
      body: 'Wanted meetings with operations heads at mid-size manufacturers. AI found and wrote to the right people each week and booked the interested ones into the founder’s calendar.',
    },
  },
  {
    slug: 'ferry',
    href: '/ferry',
    number: '06',
    title: 'Website Conversion with Ferry',
    short: 'The easiest way to adopt AI: turn website visitors into purchases or demo bookings, around the clock.',
    definition:
      'Most visitors leave a website without saying a word. Ferry, our flagship product, is an AI agent that greets them, answers questions from your own content, and guides them to buy or book a demo, day and night.',
    icon: 'bot',
    animation: 'ferry',
    whoFor: ['Any business with a website', 'SaaS and product companies', 'Real estate and education', 'Clinics and services'],
    steps: [
      { title: 'Visit', body: 'A visitor lands on your website and starts looking around.' },
      { title: 'Chat', body: 'Ferry opens at the right moment and answers their questions from your own content.' },
      { title: 'Qualify', body: 'It learns what they need and collects their details naturally.' },
      { title: 'Convert', body: 'The visitor buys or books a demo in the chat, and the lead lands in your dashboard.' },
    ],
    outcomes: [
      'More sales and demos from the traffic you already have',
      'Every question answered instantly, even at midnight',
      'A dashboard of every lead and conversation',
    ],
    example: {
      title: 'A home-care agency',
      body: 'Had steady traffic but few enquiries. Ferry now answers families’ questions at night and hands qualified leads to the owner every morning.',
    },
    flagship: true,
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
