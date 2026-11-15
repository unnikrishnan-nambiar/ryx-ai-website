// How RYX AI engages, as a consultancy. Prices aren't set for the audit or
// projects yet, so each is "quoted after the discovery call" until the
// founders give numbers. Ferry is the one productised offer with a price.

export type Service = {
    slug: string;
    pillar: PillarId;
    name: string;
    promise: string;
    forWho: string;
    youGet: string[];
    length: string;
    price: string;
    cta: { label: string; href: string };
};

export type PillarId = 'train' | 'build' | 'solutions';

// The three things RYX AI does, in the founders' words and order.
export const pillars: { id: PillarId; title: string; promise: string; scene: 'training' | 'workflow' | 'ferry'; steps: string[] }[] = [
    {
        id: 'train',
        title: 'We train people on AI',
        promise: 'Your team using AI every day, safely, in their real work. We start by finding where AI pays off for you.',
        scene: 'training',
        steps: ['Assess', 'Train', 'Equip', 'Enable']
    },
    {
        id: 'build',
        title: 'We build AI for you',
        promise: 'Custom AI for your sales, marketing and operations, piloted in 30 days, then run and improved every week.',
        scene: 'workflow',
        steps: ['Receive', 'Read', 'Compare', 'Report']
    },
    {
        id: 'solutions',
        title: 'We offer AI solutions',
        promise: 'Ready-made AI you can switch on: Ferry for your website, and twelve proven jobs for sales, service and operations.',
        scene: 'ferry',
        steps: ['Visit', 'Chat', 'Details', 'Book or buy']
    }
];

export const services: Service[] = [
    {
        slug: 'training',
        pillar: 'train',
        name: 'AI training for your team',
        promise: 'Your people using AI every day, safely, in their real work.',
        forWho: 'Sales, support and operations teams of any size.',
        youGet: [
            'Hands-on sessions built on your team’s real tasks',
            'A prompt library and simple assistants for each team',
            'An AI-use policy your team can follow',
            'Follow-up support so it becomes a habit'
        ],
        length: '1 day to 4 weeks',
        price: 'Per team, quoted after the discovery call',
        cta: { label: 'Ask about training', href: '/contact?interest=training#early-access' }
    },
    {
        slug: 'ai-audit',
        pillar: 'train',
        name: 'AI opportunity audit',
        promise: 'Find out where AI will make or save you money, before you spend on it.',
        forWho: 'Owners and leadership teams who know AI matters but not where to start.',
        youGet: [
            'Interviews with your team and a look at how work and leads flow today',
            'A ranked list of AI opportunities, each with its cost, effort and expected return',
            'A 90-day roadmap: what to build first, what to buy, what to skip',
            'A readout with your leadership team'
        ],
        length: '2 weeks',
        price: 'Fixed fee, quoted after the discovery call',
        cta: { label: 'Ask about an audit', href: '/contact?interest=audit#early-access' }
    },
    {
        slug: 'pilot',
        pillar: 'build',
        name: 'AI pilot',
        promise: 'One use case, live with real customers, and measured.',
        forWho: 'Teams with one clear problem: slow replies, lost leads, paperwork.',
        youGet: [
            'One AI use case built, tested and connected to your tools',
            'Live on your website, WhatsApp or phone line',
            'A baseline and a results report against it',
            'A clear go or no-go on scaling'
        ],
        length: '30 days',
        price: 'Fixed scope and price, quoted after the audit or discovery call',
        cta: { label: 'Plan a pilot', href: '/contact?interest=pilot#early-access' }
    },
    {
        slug: 'build-and-run',
        pillar: 'build',
        name: 'Build and run',
        promise: 'We build your AI, then keep it working and improving every week.',
        forWho: 'Businesses ready to put AI across sales, marketing and operations.',
        youGet: [
            'AI for several teams, sharing one knowledge base across channels',
            'Weekly reviews of real conversations, fed back into the AI',
            'Monitoring, reports and a named person to call',
            'New use cases added as the roadmap moves'
        ],
        length: 'Monthly, ongoing',
        price: 'Monthly, based on scope',
        cta: { label: 'Talk to us', href: '/contact?interest=solution#early-access' }
    }
];

// The consulting method: a real sequence.
export const method = [
    { title: 'Assess', body: 'We learn your business, your customers and your numbers, and find where AI pays off first.' },
    { title: 'Pilot', body: 'One use case goes live in 30 days, measured against where you started.' },
    { title: 'Deploy', body: 'What works is hardened, tested across languages and channels, and rolled out.' },
    { title: 'Measure', body: 'Every week we review real conversations and results, and improve the AI.' },
    { title: 'Scale', body: 'The next use case on the roadmap, built on the same knowledge and tools.' }
];
