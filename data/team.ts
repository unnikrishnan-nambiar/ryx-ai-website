// The founders, from the RYX master deck.
export const team = [
  {
    name: 'Unnikrishnan Nambiar',
    role: 'Product, sales and consulting',
    points: ['Bridges AI capability and business reality', 'Owns product vision and go-to-market'],
  },
  {
    name: 'Shamil Muhammed',
    role: 'AI and engineering',
    points: ['Built the entire technical stack', 'LLMs, RAG, voice AI, eval frameworks'],
  },
  {
    name: 'Salmanul Faris',
    role: 'Sales, marketing and growth',
    points: ['Owns sales and marketing systems', 'Industry relationships and expansion'],
  },
];

// Raw <img> src paths to /public aren't rewritten by Next, so prefix them.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

// Tools RYX AI connects to, from the sales deck, with their real logos.
export const integrations = [
  { name: 'WhatsApp Business', icon: 'whatsapp' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'Gmail', icon: 'gmail' },
  { name: 'Zoho', icon: 'zoho' },
  { name: 'HubSpot', icon: 'hubspot' },
  { name: 'Salesforce', icon: 'salesforce' },
  { name: 'Dynamics 365', icon: 'microsoft' },
  { name: 'Odoo', icon: 'odoo' },
  { name: 'Google Sheets', icon: 'google-sheets' },
  { name: 'Cal.com', icon: 'calcom' },
  { name: 'WordPress', icon: 'wordpress' },
  { name: 'ElevenLabs voice', icon: 'elevenlabs' },
  { name: 'AWS', icon: 'aws' },
];
