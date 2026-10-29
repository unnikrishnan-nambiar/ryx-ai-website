'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import { site } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success';

type LeadFormProps = {
  /** Tag stored with the row so the Sheet shows where the lead came from. */
  source: string;
  /** Ask for phone, website and a message (business leads) or just name/email (community). */
  detailed?: boolean;
  submitLabel: string;
  successMessage: string;
};

// Posts a plain HTML form into a hidden iframe targeting the deployed Google
// Apps Script Web App (site.signupFormUrl), which appends a row to the
// "RYX AI Community Signups" Sheet — see scripts/signup-apps-script.gs. The
// script stores name, email and one free-text "interest" column, so the
// extra business fields are folded into that column at submit time; that
// keeps the already-deployed script working unchanged. A hidden iframe is
// used instead of fetch() because Apps Script Web Apps are unreliable to
// read cross-origin; "success" means the browser finished the request.
export default function LeadForm({ source, detailed = false, submitLabel, successMessage }: LeadFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const interestRef = useRef<HTMLInputElement>(null);
  const hasSubmittedRef = useRef(false);
  const frameName = `ryx-lead-frame-${useId().replace(/:/g, '')}`;
  const ids = {
    name: useId(),
    email: useId(),
    phone: useId(),
    website: useId(),
    message: useId(),
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    const parts = [source];
    for (const field of ['phone', 'website', 'message'] as const) {
      const value = String(data.get(field) ?? '').trim();
      if (value) parts.push(`${field}: ${value}`);
    }
    if (interestRef.current) interestRef.current.value = parts.join(' | ');
    hasSubmittedRef.current = true;
    setStatus('submitting');
  }

  function handleIframeLoad() {
    // The iframe also fires "load" once on initial mount — ignore that one.
    if (!hasSubmittedRef.current) return;
    setStatus('success');
    formRef.current?.reset();
  }

  if (!site.signupFormUrl) {
    return (
      <p className="text-ink-secondary">
        Email us at{' '}
        <a href={`mailto:${site.email}`} className="font-semibold text-blue hover:text-blue-dark">
          {site.email}
        </a>{' '}
        or{' '}
        <a href={site.whatsappUrl} className="font-semibold text-blue hover:text-blue-dark">
          message us on WhatsApp
        </a>
        .
      </p>
    );
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-mint-light px-5 py-4 text-mint">
        <p className="font-semibold">{successMessage}</p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-muted focus:border-blue focus:outline-none focus:ring-4 focus:ring-blue/15';

  return (
    <>
      <form
        ref={formRef}
        action={site.signupFormUrl}
        method="POST"
        target={frameName}
        onSubmit={handleSubmit}
        className="grid gap-3 text-left"
      >
        <input ref={interestRef} type="hidden" name="interest" value={source} readOnly />

        <label htmlFor={ids.name} className="sr-only">
          Your name
        </label>
        <input
          id={ids.name}
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={inputClass}
        />

        <label htmlFor={ids.email} className="sr-only">
          Work email
        </label>
        <input
          id={ids.email}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={detailed ? 'Work email' : 'Your email'}
          className={inputClass}
        />

        {detailed && (
          <>
            <label htmlFor={ids.phone} className="sr-only">
              Phone or WhatsApp
            </label>
            <input
              id={ids.phone}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone or WhatsApp"
              className={inputClass}
            />

            <label htmlFor={ids.website} className="sr-only">
              Company website
            </label>
            <input
              id={ids.website}
              name="website"
              type="text"
              inputMode="url"
              placeholder="Company website"
              className={inputClass}
            />

            <label htmlFor={ids.message} className="sr-only">
              What would you like to automate?
            </label>
            <textarea
              id={ids.message}
              name="message"
              rows={3}
              placeholder="What would you like to automate? (optional)"
              className={`${inputClass} resize-none`}
            />
          </>
        )}

        <Button type="submit" variant="primary" className="mt-1" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : submitLabel}
        </Button>
      </form>

      <iframe name={frameName} onLoad={handleIframeLoad} hidden title="Form submission" />
    </>
  );
}
