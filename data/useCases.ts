// The twelve use cases from the RYX AI sales deck. Example scenarios are the
// deck's own illustrative scenarios, not named customer case studies.

export type Category = 'Sales' | 'Marketing' | 'Customer service' | 'Operations';

export const sectors = [
  'Real estate',
  'Clinics',
  'Education',
  'Auto',
  'Retail',
  'Hospitality',
  'Professional services',
] as const;

export type Sector = (typeof sectors)[number];

export type UseCase = {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  channels: string[];
  industries: string;
  /** Sector filters this use case appears under. Empty means every sector. */
  sectors: Sector[];
  problem: string;
  solution: string;
  benefit: string;
  measure: string;
  example: string;
};

export const categories: Category[] = ['Sales', 'Marketing', 'Customer service', 'Operations'];

export const useCases: UseCase[] = [
  {
    slug: 'chatbot-crm',
    title: 'AI Chatbot + CRM',
    tagline: 'Every enquiry answered and in your CRM, in seconds.',
    category: 'Sales',
    channels: ['WhatsApp', 'Website', 'Instagram'],
    industries: 'All industries',
    sectors: [],
    problem:
      "Enquiries arrive on WhatsApp and web chat, get answered late, and never reach the CRM. Leads are lost inside salespeople's phones.",
    solution:
      'An AI agent answers every enquiry in the customer’s language, qualifies budget, need and timeline, then creates the contact and deal in the CRM and assigns the right rep.',
    benefit:
      'Every lead answered in seconds and captured in the CRM. Your sales team only talks to qualified buyers.',
    measure: 'Response time, % of leads logged in CRM, qualified leads per month, lead-to-meeting rate',
    example:
      'A brokerage got 400 portal enquiries a month but only half reached Zoho. With the AI agent, every message is answered instantly and lands in Zoho tagged hot, warm or cold, so the manager finally sees the full pipeline.',
  },
  {
    slug: 'website-lead-agent',
    title: 'Website Lead Agent (Ferry)',
    tagline: 'Get leads from the traffic you already have.',
    category: 'Sales',
    channels: ['Website'],
    industries: 'All industries',
    sectors: [],
    problem:
      "Visitors land on the website, can't find answers quickly and leave without contacting the business.",
    solution:
      "An AI website agent greets visitors, answers from the company's own content, and captures name, number and need before they leave.",
    benefit: 'More leads from the same website traffic, without more ad spend.',
    measure: 'Visitor-to-lead conversion, leads per month, chats handled',
    example:
      "A home-care agency's site had steady traffic but few enquiries. The website agent now answers families' questions at midnight and hands qualified leads to the owner every morning.",
  },
  {
    slug: 'instant-lead-callback',
    title: 'Instant Lead Callback',
    tagline: 'Never lose a lead to a slow call-back.',
    category: 'Sales',
    channels: ['Voice'],
    industries: 'Real estate, Education, Clinics, Auto',
    sectors: ['Real estate', 'Education', 'Clinics', 'Auto'],
    problem:
      "Leads from ads and portals are called back hours later, by then they've spoken to a competitor.",
    solution:
      'A voice agent calls every new form or portal lead within 2 minutes, qualifies them and books a call or visit.',
    benefit: 'Speed-to-lead goes from hours to minutes. More leads reached while interest is high.',
    measure: 'Time to first call, contact rate, appointments booked',
    example:
      'A training institute ran Meta ads but reps called back the next day. The AI now calls within two minutes, answers course questions and books counselling sessions straight into the calendar.',
  },
  {
    slug: 'missed-call-callback',
    title: 'Missed-Call Callback',
    tagline: 'No missed call stays missed.',
    category: 'Sales',
    channels: ['Voice'],
    industries: 'All industries',
    sectors: [],
    problem: 'Missed calls are missed customers, and most never call back.',
    solution:
      'AI calls back every missed call within minutes, finds out what they need, and books or logs it.',
    benefit: 'Recover customers who would otherwise be lost.',
    measure: 'Missed calls recovered, bookings from callbacks',
    example:
      "A plumbing company's AI calls back every missed call within 3 minutes and books the job.",
  },
  {
    slug: 'old-lead-revival',
    title: 'Old Lead Revival',
    tagline: "Turn your dead leads into this month's sales.",
    category: 'Sales',
    channels: ['WhatsApp', 'Voice'],
    industries: 'Real estate, Auto, Education, Clinics',
    sectors: ['Real estate', 'Auto', 'Education', 'Clinics'],
    problem:
      'Thousands of past enquiries sit untouched in the CRM. Money already paid for in marketing.',
    solution:
      'AI re-engages old leads on WhatsApp or voice with a relevant offer, qualifies replies and moves warm leads back into the pipeline.',
    benefit: 'New deals from leads you already paid for, with no new ad spend.',
    measure: 'Reply rate, re-qualified leads, deals from revived leads',
    example:
      'A car dealer had 3,000 old test-drive enquiries. A WhatsApp campaign offering a new model preview brought back dozens of interested buyers in the first week.',
  },
  {
    slug: 'whatsapp-enquiry-assistant',
    title: 'WhatsApp Enquiry Assistant',
    tagline: 'Your best salesperson on WhatsApp, awake 24x7.',
    category: 'Sales',
    channels: ['WhatsApp'],
    industries: 'Retail, D2C, Trading, Coaching',
    sectors: ['Retail', 'Education'],
    problem:
      'Staff answer the same product, price and availability questions on WhatsApp all day.',
    solution:
      'An AI assistant answers product questions, shares catalogues and brochures, and captures orders or enquiries.',
    benefit: 'Instant answers 24x7. Staff are freed up for closing and fulfilment.',
    measure: 'Chats handled by AI, response time, enquiries captured',
    example:
      "A furniture showroom's two staff spent their day replying to 'price?' messages. The AI now shares the catalogue, answers delivery questions and passes ready buyers to staff.",
  },
  {
    slug: 'property-matching',
    title: 'Property Matching Assistant',
    tagline: 'The right property, in the first message.',
    category: 'Sales',
    channels: ['WhatsApp', 'Website'],
    industries: 'Real estate',
    sectors: ['Real estate'],
    problem:
      'Agents spend hours manually sending listings to buyers who describe what they want.',
    solution:
      "AI understands the buyer's needs from chat and sends matching listings from the brokerage's inventory.",
    benefit: 'Buyers get relevant options instantly. Agents step in only for viewings.',
    measure: 'Listings shared, viewings booked, agent hours saved',
    example:
      "A buyer messages '2-bed under 1.2M, ready'. The AI sends five matching units with photos and offers viewing slots.",
  },
  {
    slug: 'booking-reminders',
    title: 'Booking & Reminder Agent',
    tagline: 'Fuller calendars. Fewer no-shows.',
    category: 'Customer service',
    channels: ['WhatsApp', 'Voice'],
    industries: 'Clinics, Salons, Car dealers, Gyms',
    sectors: ['Clinics', 'Auto', 'Hospitality'],
    problem: 'Reception is overloaded with booking calls, and no-shows waste slots.',
    solution:
      'AI books appointments, test drives or visits by phone and chat, and sends reminders.',
    benefit: 'Fuller calendars and fewer no-shows.',
    measure: 'Bookings made by AI, no-show rate',
    example:
      'A dental clinic’s AI books patients on WhatsApp and sends reminders the day before, filling cancelled slots from a waitlist.',
  },
  {
    slug: 'review-reputation',
    title: 'Review & Reputation Manager',
    tagline: 'More 5-star reviews, on autopilot.',
    category: 'Marketing',
    channels: ['WhatsApp', 'Google'],
    industries: 'Restaurants, Clinics, Car service, Hotels',
    sectors: ['Hospitality', 'Clinics', 'Auto'],
    problem: 'Happy customers rarely leave reviews, unhappy ones do, and replies are slow.',
    solution:
      'AI asks happy customers for Google reviews, drafts on-brand replies to all reviews, and flags unhappy customers to the owner.',
    benefit: 'More 5-star reviews, faster replies, fewer public complaints.',
    measure: 'New reviews per month, average rating, reply time',
    example:
      'A restaurant sends a thank-you WhatsApp after each order. Happy guests get a review link; unhappy ones reach the manager first.',
  },
  {
    slug: 'document-extraction',
    title: 'Document Data Extraction',
    tagline: 'Stop retyping documents.',
    category: 'Operations',
    channels: ['Email', 'Upload'],
    industries: 'Logistics, Accounting, PRO/Visa, HR',
    sectors: ['Professional services'],
    problem:
      'Staff type data from invoices, POs, IDs, passports and trade licences. Slow and error-prone.',
    solution:
      'AI reads documents and fills the system or spreadsheet automatically, for review.',
    benefit: 'Hours of typing removed, with fewer errors.',
    measure: 'Documents processed, time per document, error rate',
    example:
      "A PRO services firm's team typed passport and visa details all day. The AI now extracts them into their system in seconds for a quick check.",
  },
  {
    slug: 'document-collection',
    title: 'Client Document Collection',
    tagline: 'Get every document, without chasing.',
    category: 'Operations',
    channels: ['WhatsApp'],
    industries: 'Accounting, Legal, PRO/Visa',
    sectors: ['Professional services'],
    problem: 'Firms spend days chasing clients for missing documents.',
    solution: "AI chases clients on WhatsApp, checks what's received and files documents.",
    benefit: 'Files complete faster, and staff stop chasing.',
    measure: 'Days to complete a file, staff hours saved',
    example:
      "An accounting firm's AI collects bank statements and invoices from 200 clients before tax deadlines.",
  },
  {
    slug: 'owner-daily-brief',
    title: "Owner's Daily WhatsApp Brief",
    tagline: 'Your business, in one morning message.',
    category: 'Operations',
    channels: ['WhatsApp'],
    industries: 'SMBs',
    sectors: [],
    problem: "Owners chase staff for numbers and don't see problems until it's late.",
    solution:
      'AI sends a morning WhatsApp summary of leads, sales, bookings, cash and reviews from their CRM and sheets.',
    benefit: 'The whole business on one screen, every morning.',
    measure: 'Reports delivered, decisions made faster',
    example:
      'A clinic owner reads one message at 8am: bookings today, no-shows yesterday, new reviews and pending payments.',
  },
];

export const findUseCase = (slug: string) => useCases.find((u) => u.slug === slug);

export const inSector = (u: UseCase, sector: Sector) => u.sectors.length === 0 || u.sectors.includes(sector);
