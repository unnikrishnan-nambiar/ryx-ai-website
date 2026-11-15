'use client';

import { useState } from 'react';
import Link from 'next/link';
import { inSector, sectors, useCases, type Sector } from '@/data/useCases';

type Filter = 'All' | Sector;

export default function UseCaseExplorer() {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...sectors];
  const shown = filter === 'All' ? useCases : useCases.filter((u) => inSector(u, filter));

  return (
    <div>
      <div role="group" aria-label="Filter by industry" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`min-h-[44px] cursor-pointer rounded-full border px-5 font-semibold transition-colors duration-200 ${
                active ? 'border-ink bg-ink text-white' : 'border-ink/25 text-ink-2 hover:border-ink hover:text-ink'
              }`}
            >
              {f === 'All' ? 'All industries' : f}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-8 text-ink-2">
        {shown.length} {shown.length === 1 ? 'use case' : 'use cases'}
        {filter === 'All' ? '' : ` for ${filter.toLowerCase()}`}
      </p>

      <ul className="mt-4 grid gap-x-10 border-t border-rule md:grid-cols-2">
        {shown.map((u) => (
          <li key={u.slug} className="border-b border-rule">
            <Link href={`/solutions/${u.slug}`} className="group block py-7">
              <p className="text-sm text-ink-3">
                {u.category}, on {u.channels.join(' and ')}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-signal-deep">
                {u.title}
              </h2>
              <p className="mt-2 text-lg leading-relaxed text-ink-2">{u.benefit}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
