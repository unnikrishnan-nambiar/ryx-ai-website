'use client';

import { useStoryStep } from './kit';
import AdsAnimation from './AdsAnimation';
import FerryAnimation from './FerryAnimation';
import LeadsAnimation from './LeadsAnimation';
import NudgesAnimation from './NudgesAnimation';
import TrainingAnimation from './TrainingAnimation';
import WorkflowAnimation from './WorkflowAnimation';

const scenes = {
  ads: AdsAnimation,
  ferry: FerryAnimation,
  leads: LeadsAnimation,
  nudges: NudgesAnimation,
  training: TrainingAnimation,
  workflow: WorkflowAnimation,
};

export type SceneName = keyof typeof scenes;

// Plays an animated explainer in a loop while it's on screen, with its
// steps underneath. Tapping a step jumps to it.
export default function SolutionScene({
  name,
  steps,
  compact = false,
  className = '',
}: {
  name: SceneName;
  steps: string[];
  compact?: boolean;
  className?: string;
}) {
  const { ref, step, goTo } = useStoryStep(steps.length);
  const Scene = scenes[name];
  return (
    <div ref={ref} className={className}>
      <div className="aspect-[16/10] w-full">
        <Scene step={step} />
      </div>
      <ol className={`grid gap-1.5 ${compact ? 'mt-3' : 'mt-5 gap-2'}`} style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
        {steps.map((title, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <li key={title}>
              <button type="button" onClick={() => goTo(i)} aria-current={active ? 'step' : undefined} className="group min-h-[40px] w-full cursor-pointer text-left">
                <span className="block h-1 overflow-hidden rounded-full bg-ink/10">
                  <span className={`block h-full rounded-full bg-signal transition-all duration-500 ${active || done ? 'w-full' : 'w-0'} ${done ? 'opacity-40' : ''}`} />
                </span>
                <span className={`mt-2 block truncate font-medium transition-colors ${compact ? 'text-xs' : 'text-sm'} ${active ? 'text-ink' : 'text-ink-3 group-hover:text-ink-2'}`}>
                  {title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
