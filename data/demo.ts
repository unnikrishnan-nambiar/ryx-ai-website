// Scripted conversations for the Ferry demo. The businesses are invented
// samples; the flow (answer from content, show an image, qualify, book) is
// what Ferry does.

export type DemoNode = {
  say: string[];
  /** Caption of an image the agent shows from the knowledge base. */
  show?: string;
  options?: { label: string; to: string }[];
};

export type DemoScenario = {
  id: string;
  label: string;
  business: string;
  nodes: Record<string, DemoNode>;
  /** What the business owner sees once the chat ends. */
  lead: string[];
};

const slots = (to = 'done') => [
  { label: 'Saturday, 11:00 AM', to },
  { label: 'Sunday, 4:30 PM', to },
];

export const demoScenarios: DemoScenario[] = [
  {
    id: 'real-estate',
    label: 'Real estate',
    business: 'Harbour Homes',
    nodes: {
      start: {
        say: ['Hi, welcome to Harbour Homes. Are you looking to buy or rent?'],
        options: [
          { label: 'Buy a 2-bedroom', to: 'buy' },
          { label: 'What’s near the metro?', to: 'metro' },
          { label: 'Just browsing', to: 'browse' },
        ],
      },
      buy: {
        say: [
          'We have three 2-bedroom apartments ready to move into, from ₹68 lakh to ₹82 lakh.',
          'Here is the floor plan for the most popular one.',
        ],
        show: 'Floor plan, 2 BHK, 1,120 sq ft',
        options: [
          { label: 'Is there a loan tie-up?', to: 'loan' },
          { label: 'Book a site visit', to: 'visit' },
        ],
      },
      metro: {
        say: [
          'Lakeview Residency is a 6-minute walk from the metro. 2 and 3-bedroom units are open, starting at ₹74 lakh.',
        ],
        options: [
          { label: 'Show me the 2-bedroom', to: 'buy' },
          { label: 'Book a site visit', to: 'visit' },
        ],
      },
      browse: {
        say: ['No problem. I can send the brochure, or answer anything about prices, location or possession dates.'],
        options: [
          { label: 'What are the prices?', to: 'buy' },
          { label: 'Book a site visit', to: 'visit' },
        ],
      },
      loan: {
        say: [
          'Yes. The brochure lists home-loan tie-ups with three banks. Our team can walk you through eligibility at the visit.',
        ],
        options: [{ label: 'Book a site visit', to: 'visit' }],
      },
      visit: { say: ['Happy to. Which slot works for you?'], options: slots() },
      done: {
        say: ['Booked. You’ll get a confirmation shortly, and our sales team has your details and what you asked about.'],
      },
    },
    lead: ['Wants a 2-bedroom, ready to move', 'Asked about prices and home loans', 'Site visit booked through Cal.com'],
  },
  {
    id: 'clinic',
    label: 'Clinic',
    business: 'Bright Smile Dental',
    nodes: {
      start: {
        say: ['Hello, this is Bright Smile Dental. How can I help today?'],
        options: [
          { label: 'How much are braces?', to: 'braces' },
          { label: 'Are you open on Sunday?', to: 'hours' },
          { label: 'I have a toothache', to: 'pain' },
        ],
      },
      braces: {
        say: [
          'Metal braces start at ₹35,000 and clear aligners at ₹90,000. Both include the first consultation and X-ray.',
          'This page from our brochure compares them.',
        ],
        show: 'Brochure page, braces vs aligners',
        options: [
          { label: 'Can I pay in instalments?', to: 'emi' },
          { label: 'Book a consultation', to: 'visit' },
        ],
      },
      hours: {
        say: ['We’re open Sunday from 10 AM to 2 PM, and Monday to Saturday from 9 AM to 8 PM.'],
        options: [
          { label: 'How much are braces?', to: 'braces' },
          { label: 'Book a consultation', to: 'visit' },
        ],
      },
      pain: {
        say: ['Sorry to hear that. We keep same-day slots for pain. I can book the earliest one for you.'],
        options: [{ label: 'Yes, book it', to: 'visit' }],
      },
      emi: {
        say: ['Yes. Treatments above ₹30,000 can be paid over 6 or 12 months at no extra cost.'],
        options: [{ label: 'Book a consultation', to: 'visit' }],
      },
      visit: { say: ['Sure. Which time suits you?'], options: slots() },
      done: {
        say: ['You’re booked. We’ll send a reminder the day before. See you then.'],
      },
    },
    lead: ['Interested in braces or aligners', 'Asked about price and payment plans', 'Consultation booked through Cal.com'],
  },
  {
    id: 'institute',
    label: 'Coaching institute',
    business: 'Apex Academy',
    nodes: {
      start: {
        say: ['Hi, welcome to Apex Academy. Which course are you interested in?'],
        options: [
          { label: 'Data analytics', to: 'course' },
          { label: 'What are the fees?', to: 'fees' },
          { label: 'Do you help with placements?', to: 'placement' },
        ],
      },
      course: {
        say: [
          'The data analytics course runs for 16 weeks, with weekday evening and weekend batches. The next batch starts on the 1st.',
          'Here is the syllabus by week.',
        ],
        show: 'Syllabus, 16 weeks',
        options: [
          { label: 'What are the fees?', to: 'fees' },
          { label: 'Talk to a counsellor', to: 'visit' },
        ],
      },
      fees: {
        say: ['The course fee is ₹48,000. You can pay in three instalments, and early enrolment gets ₹4,000 off.'],
        options: [
          { label: 'Do you help with placements?', to: 'placement' },
          { label: 'Talk to a counsellor', to: 'visit' },
        ],
      },
      placement: {
        say: ['Yes. Every learner gets resume reviews, mock interviews and introductions to our hiring partners.'],
        options: [{ label: 'Talk to a counsellor', to: 'visit' }],
      },
      visit: { say: ['Of course. When should a counsellor call you?'], options: slots() },
      done: {
        say: ['Done. A counsellor will call you at that time with everything you asked about.'],
      },
    },
    lead: ['Interested in data analytics', 'Asked about fees and placements', 'Counselling call booked through Cal.com'],
  },
];
