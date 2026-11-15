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
