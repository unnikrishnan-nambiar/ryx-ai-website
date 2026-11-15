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

export type PillarId = 'train' | 'build' | 'solutions' | 'grow';

// The four things RYX AI does, in the founders' words and order.
export const pillars: { id: PillarId; title: string; promise: string; scene: 'training' | 'workflow' | 'ferry' | 'ads'; steps: string[] }[] = [
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
    },
    {
        id: 'grow',
        title: 'We run your marketing on autopilot',
        promise: 'Social media, branding and campaigns, planned and produced by AI, checked by our team, and improved from the results.',
        scene: 'ads',
        steps: ['Brief', 'Create', 'Launch', 'Improve']
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
    },
    {
        slug: 'social-media',
        pillar: 'grow',
        name: 'Social media marketing',
        promise: 'Your pages posting every week without anyone on your team writing a post.',
        forWho: 'Businesses that know they should post more but never have the time.',
        youGet: [
            'A monthly content calendar built from your business and offers',
            'Posts, reels scripts and captions in English and Indian languages',
            'Scheduled to Instagram, Facebook and LinkedIn after your approval',
            'Comments and DMs answered, and leads sent to your team'
        ],
        length: 'Monthly, ongoing',
        price: 'Monthly, quoted after the discovery call',
        cta: { label: 'Ask about social media', href: '/contact?interest=social#early-access' }
    },
    {
        slug: 'branding',
        pillar: 'grow',
        name: 'Branding',
        promise: 'A brand that looks and sounds the same everywhere, and the AI that keeps it that way.',
        forWho: 'New businesses, and established ones whose look has drifted.',
        youGet: [
            'Logo, colours, type and a simple brand guide',
            'Your tone of voice, written down and taught to your AI',
            'Templates for posts, ads, brochures and presentations',
            'Every piece the AI makes checked against the brand guide'
        ],
        length: '2 to 4 weeks',
        price: 'Fixed fee, quoted after the discovery call',
        cta: { label: 'Ask about branding', href: '/contact?interest=branding#early-access' }
    },
    {
        slug: 'campaigns',
        pillar: 'grow',
        name: 'Marketing campaigns',
        promise: 'Ads and campaigns that launch fast, test many versions and move budget to what works.',
        forWho: 'Businesses spending on Meta or Google ads, or ready to start.',
        youGet: [
            'Campaign plan, audiences and ad copy and creatives in several versions',
            'Launched on Meta and Google, with WhatsApp follow-up for every lead',
            'Daily checks that pause what fails and back what works',
            'A plain weekly report: spend, leads and cost per lead'
        ],
        length: 'Per campaign or monthly',
        price: 'Management fee plus your ad budget, quoted after the discovery call',
        cta: { label: 'Plan a campaign', href: '/contact?interest=campaigns#early-access' }
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
