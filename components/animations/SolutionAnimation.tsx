'use client';

import type { Solution } from '@/data/solutions';
import { useStoryStep } from './kit';
import AdsAnimation from './AdsAnimation';
import NudgesAnimation from './NudgesAnimation';
import WorkflowAnimation from './WorkflowAnimation';
import TrainingAnimation from './TrainingAnimation';
import LeadsAnimation from './LeadsAnimation';
import FerryAnimation from './FerryAnimation';

const animations = {
  ads: AdsAnimation,
  nudges: NudgesAnimation,
  workflow: WorkflowAnimation,
  training: TrainingAnimation,
  leads: LeadsAnimation,
  ferry: FerryAnimation,
};

type SolutionAnimationProps = {
  name: Solution['animation'];
  /** Step titles shown under the animation; tapping one jumps to it. */
  steps: string[];
  /** Compact = homepage card (smaller captions). */
  compact?: boolean;
  className?: string;
};

// Plays one solution animation in a loop while it's on screen, with the step
// names underneath so the story reads like a 4-step explainer.
export default function SolutionAnimation({ name, steps, compact = false, className = '' }: SolutionAnimationProps) {
  const { ref, step, goTo } = useStoryStep(steps.length);
  const Animation = animations[name];

  return (
    <div ref={ref} className={className}>
      <div className="aspect-[16/10] w-full">
        <Animation step={step} />
      </div>

      <ol className={`grid grid-cols-4 gap-1.5 ${compact ? 'mt-3' : 'mt-5 gap-2'}`}>
        {steps.map((title, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <li key={title}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={active ? 'step' : undefined}
                className="group w-full text-left"
              >
                <span className="block h-1 overflow-hidden rounded-full bg-ink/10">
                  <span
                    className={`block h-full rounded-full bg-blue transition-all duration-500 ${
                      active || done ? 'w-full' : 'w-0'
                    } ${done ? 'opacity-40' : ''}`}
                  />
                </span>
                <span
                  className={`mt-2 block truncate font-medium transition-colors ${compact ? 'text-[11px]' : 'text-sm'} ${
                    active ? 'text-ink' : 'text-ink-muted group-hover:text-ink-secondary'
                  }`}
                >
                  <span className="mr-1 text-blue">{i + 1}</span>
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
