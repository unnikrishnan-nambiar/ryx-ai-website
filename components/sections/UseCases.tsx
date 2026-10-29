'use client';

import { useId, useState } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';
import SectionHeading from '@/components/ui/SectionHeading';
import { useCases, type UseCase, type UseCaseCategory } from '@/data/content';
import { site } from '@/data/site';

const filters: ('All' | UseCaseCategory)[] = ['All', 'Sales', 'Marketing', 'Customer service', 'Operations'];

function UseCaseDetail({ item, number, titleId }: { item: UseCase; number: number; titleId: string }) {
  return (
    <>
      <p className="eyebrow pr-8 text-blue">
        Use case {String(number).padStart(2, '0')} · {item.category} · {item.channels.join(', ')}
      </p>
      <h3 id={titleId} className="mt-3 font-display text-3xl font-bold tracking-tight">
        {item.title}
      </h3>
      <p className="mt-2 text-ink-secondary">
        {item.tagline} <span className="text-blue">For: {item.industries}</span>
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-rose/15 bg-rose-light p-5">
          <p className="eyebrow text-rose">Problem</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{item.problem}</p>
        </div>
        <div className="rounded-2xl border border-mint/15 bg-mint-light p-5">
          <p className="eyebrow text-mint">Solution</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{item.solution}</p>
        </div>
        <div className="rounded-2xl bg-night p-5">
          <p className="eyebrow text-blue-soft">Benefit</p>
          <p className="mt-2 text-[15px] leading-relaxed text-white/80">{item.benefit}</p>
        </div>
      </div>

      <dl className="mt-3 grid gap-3">
        <div className="rounded-2xl bg-mist p-5 sm:flex sm:gap-6">
          <dt className="eyebrow shrink-0 text-blue sm:w-40">What we measure</dt>
          <dd className="mt-1 text-[15px] text-ink-secondary sm:mt-0">{item.measure}</dd>
        </div>
        <div className="rounded-2xl bg-blue-light/70 p-5 sm:flex sm:gap-6">
          <dt className="eyebrow shrink-0 text-blue sm:w-40">Example scenario</dt>
          <dd className="mt-1 text-[15px] text-ink-secondary sm:mt-0">{item.example}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button href={site.bookingUrl} variant="primary">
          Talk to us about this
          <Icon name="arrow" className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

export default function UseCases() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleId = useId();

  const visible = useCases
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => filter === 'All' || item.category === filter);

  return (
    <section id="use-cases" className="scroll-mt-16 bg-mist py-20 text-ink sm:py-28">
      <div className="container-content">
        <SectionHeading
          tone="light"
          eyebrow="Use cases"
          title="Twelve ways AI pays for itself."
          intro="Each one starts with a real problem and ends with a number we track. Tap a card to see how it works."
        />

        <div className="mt-10 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter use cases">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={filter === name}
              onClick={() => setFilter(name)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                filter === name ? 'bg-ink text-white' : 'border border-line bg-white text-ink-secondary hover:border-ink/30'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(({ item, index }) => (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group flex h-full w-full flex-col rounded-card border border-line bg-white p-6 text-left shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue/30 hover:shadow-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-blue/25"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-sm font-bold text-blue">{String(index + 1).padStart(2, '0')}</span>
                  <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-ink-secondary">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-secondary">{item.tagline}</p>
                <p className="mt-4 text-sm text-ink-muted">{item.channels.join(' · ')}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                  See how it works
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        titleId={titleId}
        size="max-w-[960px]"
      >
        {openIndex !== null && (
          <UseCaseDetail item={useCases[openIndex]} number={openIndex + 1} titleId={titleId} />
        )}
      </Modal>
    </section>
  );
}
