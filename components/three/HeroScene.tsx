'use client';

import dynamic from 'next/dynamic';

// three.js only loads in the browser, after the page is interactive.
const AgentCore = dynamic(() => import('./AgentCore'), { ssr: false });

export default function HeroScene({ className = '' }: { className?: string }) {
  return <AgentCore className={className} />;
}
