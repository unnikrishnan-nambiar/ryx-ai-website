'use client';

import { useId, useState, type ReactNode } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import LeadForm from './LeadForm';

type LeadButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'gold' | 'light' | 'outline';
  className?: string;
  title: string;
  intro: string;
  source: string;
  detailed?: boolean;
  submitLabel?: string;
  successMessage?: string;
};

// A button that opens a lead/sign-up form in a popup.
export default function LeadButton({
  children,
  variant = 'primary',
  className,
  title,
  intro,
  source,
  detailed = true,
  submitLabel = 'Send',
  successMessage = "Thanks! We'll get back to you within one working day.",
}: LeadButtonProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <Button type="button" variant={variant} className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} titleId={titleId}>
        <h3 id={titleId} className="pr-8 font-display text-2xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-ink-secondary">{intro}</p>
        <div className="mt-6">
          <LeadForm
            source={source}
            detailed={detailed}
            submitLabel={submitLabel}
            successMessage={successMessage}
          />
        </div>
      </Modal>
    </>
  );
}
