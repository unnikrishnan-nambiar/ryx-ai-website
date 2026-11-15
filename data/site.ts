// Site-wide, easy-to-edit config: contact details, links and nav.

const phone = '+919605799089';
const whatsappText = encodeURIComponent("Hi RYX AI, I'd like to talk about AI for my business.");

export const site = {
  name: 'RYX AI',
  domain: 'ryxai.in',
  tagline: 'AI that works for your business.',
  email: 'hello@ryxai.in',
  phone,
  phoneDisplay: '+91 96057 99089',
  // The RYX AI voice assistant line from the sales deck — callers talk to
  // the AI agent itself, so it doubles as a live demo.
  aiAssistantPhone: '+918031339977',
  aiAssistantPhoneDisplay: '+91 80 3133 9977',
  whatsappUrl: `https://wa.me/${phone.replace('+', '')}?text=${whatsappText}`,
  linkedinUrl: 'https://linkedin.com/company/ryxai',
  instagramUrl: 'https://www.instagram.com/ryxai.in/',
  legalName: 'Tigrid Technologies Private Limited',
  // Google Apps Script Web App that appends each enquiry to the leads Sheet
  // (scripts/signup-apps-script.gs). Set to '' to fall back to email only.
  signupFormUrl:
    'https://script.google.com/macros/s/AKfycbygTiqKLRBrFnv34I4yjSZU18nD9pxrTAIQkA5NdaE5L2c2r9m3ciONEWRxTIKIGP4jCg/exec',
};

export const nav = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Ferry', href: '/ferry' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** Prefilled mailto link. */
export function mailto(subject: string, body = '') {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${site.email}?${params.toString().replace(/\+/g, '%20')}`;
}
