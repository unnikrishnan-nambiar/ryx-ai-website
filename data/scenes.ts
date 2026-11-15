import type { SceneName } from '@/components/animations/SolutionScene';

// Which animated scene explains each use case, and the steps it plays.
const sceneSteps: Record<SceneName, string[]> = {
  ferry: ['Visit', 'Chat', 'Details', 'Book or buy'],
  leads: ['Find', 'Get contacts', 'Reach out', 'Shortlist'],
  ads: ['Brief', 'Create', 'Launch', 'Improve'],
  nudges: ['Connect', 'Spot the moment', 'Send', 'Results'],
  workflow: ['Receive', 'Read', 'Compare', 'Report'],
  training: ['Assess', 'Train', 'Equip', 'Enable'],
};

const bySlug: Record<string, SceneName> = {
  'chatbot-crm': 'ferry',
  'website-lead-agent': 'ferry',
  'instant-lead-callback': 'leads',
  'missed-call-callback': 'nudges',
  'old-lead-revival': 'nudges',
  'whatsapp-enquiry-assistant': 'nudges',
  'property-matching': 'leads',
  'booking-reminders': 'nudges',
  'review-reputation': 'nudges',
  'document-extraction': 'workflow',
  'document-collection': 'workflow',
  'owner-daily-brief': 'workflow',
};

export function sceneFor(slug: string) {
  const name = bySlug[slug] ?? 'ferry';
  return { name, steps: sceneSteps[name] };
}

export { sceneSteps };
