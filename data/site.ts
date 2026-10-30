// Site-wide, easy-to-edit config: contact details, links and the Ferry demo
// video all live here so nobody has to dig through components to change them.

export const site = {
  name: 'RYX AI',
  domain: 'ryxai.in',
  tagline: 'AI that works for your business.',
  email: 'hello@ryxai.in',
  // Human contact number (from the sales deck's closing slide).
  phone: '+91 96057 99089',
  phoneHref: 'tel:+919605799089',
  // The number answered by the RYX AI voice assistant.
  aiAssistantPhone: '+91 80 3133 9977',
  aiAssistantPhoneHref: 'tel:+918031339977',
  whatsappUrl: 'https://wa.me/919605799089',
  // Where every "Book a 30-minute call" button goes. Swap in a Cal.com /
  // Calendly link when one exists; until then it opens a pre-filled email.
  bookingUrl:
    'mailto:hello@ryxai.in?subject=Book%20a%2030-minute%20call&body=Hi%20RYX%20AI%2C%0A%0ABusiness%3A%20%0AWebsite%3A%20%0AWhat%20we%20want%20to%20automate%3A%20%0A',
  instagramUrl: 'https://www.instagram.com/ryxai.in/',
  youtubeUrl: 'https://youtube.com/@ryx.ai',
  linkedinUrl: 'https://linkedin.com/company/ryxai',
  ferry: {
    // Explainer video in /public, or a YouTube embed URL
    // (https://www.youtube.com/embed/<id>). Set to null to hide it.
    videoSrc: '/ferry-explainer.mp4' as string | null,
    videoPoster: '/ferry-explainer-poster.jpg',
  },
  // Optional link to the community's WhatsApp group / platform. When set,
  // the community page shows a "Join on WhatsApp" button next to the form.
  communityUrl: null as string | null,
  // Deployed Google Apps Script Web App URL that LeadForm.tsx posts to
  // (writes a row into the "RYX AI Community Signups" Sheet) — see
  // scripts/signup-apps-script.gs. LeadForm falls back to email/WhatsApp
  // links while this is empty instead of silently posting to nowhere.
  signupFormUrl:
    'https://script.google.com/macros/s/AKfycbygTiqKLRBrFnv34I4yjSZU18nD9pxrTAIQkA5NdaE5L2c2r9m3ciONEWRxTIKIGP4jCg/exec',
};

export const nav = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Ferry', href: '/ferry' },
  { label: 'Adopt AI', href: '/how-to-adopt-ai' },
  { label: 'Community', href: '/community' },
  { label: 'Contact', href: '/contact' },
];
