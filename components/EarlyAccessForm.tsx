'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Button from './ui/Button';
import { mailto, site } from '@/data/site';

const interests = [
  { value: 'discovery', label: 'A discovery call' },
  { value: 'audit', label: 'An AI opportunity audit' },
  { value: 'pilot', label: 'An AI pilot (one use case in 30 days)' },
  { value: 'solution', label: 'Build and run AI across my business' },
  { value: 'training', label: 'AI training for my team' },
  { value: 'ferry', label: 'Ferry early access (Starter)' },
  { value: 'ferry-premium', label: 'Ferry Premium waitlist' },
  { value: 'other', label: 'Something else' },
];

const field =
  'min-h-[48px] w-full rounded-xl border border-ink/25 bg-card px-4 py-3 text-base text-ink placeholder:text-ink-3 transition-colors focus:border-signal';

const label = 'grid gap-2 font-semibold text-ink';

const frameName = 'ryx-enquiry-frame';

// The site is a static export, so there's no backend of its own. Submitting
// posts the form into a hidden iframe aimed at the Google Apps Script Web
// App (site.signupFormUrl), which appends a row to the leads Sheet. That
// script stores name, email and one free-text "interest" column, so the
// other fields are folded into it. Apps Script responses can't be read
// cross-origin, so "sent" means the browser finished the request. Without
// a Sheet URL, submitting opens the visitor's email app instead.
export default function EarlyAccessForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  const submitted = useRef(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  // Preselect from ?interest=… (pricing cards link here with it). Set on the
  // DOM directly: the select is uncontrolled, so there's no state to sync.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('interest');
    if (param && interestRef.current && interests.some((i) => i.value === param)) {
      interestRef.current.value = param;
    }
  }, []);

  function compose(form: HTMLFormElement) {
    const data = new FormData(form);
    const interest = String(data.get('topic'));
    const topic = interests.find((i) => i.value === interest)?.label ?? interest;
    const details = [
      ['Business', data.get('business')],
      ['Website', data.get('website')],
      ['Phone / WhatsApp', data.get('phone')],
      ['Message', data.get('message')],
    ].filter(([, v]) => String(v ?? '').trim());
    return {
      topic,
      business: String(data.get('business')),
      summary: [`Website enquiry: ${topic}`, ...details.map(([k, v]) => `${k}: ${v}`)].join(' | '),
      body: [
        `Interested in: ${topic}`,
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        ...details.map(([k, v]) => `${k}: ${v}`),
      ].join('\n'),
    };
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const { topic, business, summary, body } = compose(e.currentTarget);
    if (!site.signupFormUrl) {
      e.preventDefault();
      window.location.href = mailto(`${topic} - ${business}`, body);
      return;
    }
    // Let the native POST go to the hidden iframe.
    if (summaryRef.current) summaryRef.current.value = summary;
    submitted.current = true;
    setStatus('sending');
  }

  function onFrameLoad() {
    // The iframe fires "load" once on mount too; only count real submits.
    if (!submitted.current) return;
    submitted.current = false;
    setStatus('sent');
    formRef.current?.reset();
  }

  function onWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form!;
    if (!form.reportValidity()) return;
    const { body } = compose(form);
    window.open(`https://wa.me/${site.phone.replace('+', '')}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
  }

  if (status === 'sent') {
    return (
      <div role="status" className="grid gap-4">
        <p className="font-display text-3xl font-bold tracking-tight">Thanks, we have it.</p>
        <p className="text-lg text-ink-2">
          Someone from RYX AI will reply within one working day. If it&apos;s urgent, message us on{' '}
          <a href={site.whatsappUrl} className="font-semibold text-signal-deep underline underline-offset-4">
            WhatsApp
          </a>{' '}
          or write to{' '}
          <a href={`mailto:${site.email}`} className="font-semibold text-signal-deep underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <div>
          <Button type="button" variant="outline" onClick={() => setStatus('idle')}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {site.signupFormUrl && (
        <iframe name={frameName} title="Form submission" hidden onLoad={onFrameLoad} />
      )}
      <form
        ref={formRef}
        action={site.signupFormUrl || undefined}
        method="POST"
        target={frameName}
        onSubmit={onSubmit}
        className="grid gap-4"
      >
        <input ref={summaryRef} type="hidden" name="interest" />
        <label className={label}>
          I&apos;m interested in
          <select ref={interestRef} name="topic" defaultValue="discovery" className={field}>
            {interests.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={label}>
            Your name (required)
            <input name="name" required autoComplete="name" className={field} placeholder="Full name" />
          </label>
          <label className={label}>
            Business name (required)
            <input name="business" required autoComplete="organization" className={field} placeholder="Company" />
          </label>
          <label className={label}>
            Work email (required)
            <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
          </label>
          <label className={label}>
            Phone or WhatsApp (required)
            <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="+91" />
          </label>
        </div>
        <label className={label}>
          Website
          <input name="website" type="url" autoComplete="url" className={field} placeholder="https://" />
        </label>
        <label className={label}>
          What do you want AI to handle?
          <textarea
            name="message"
            rows={4}
            className={field}
            placeholder="e.g. answer website visitors, call back new leads, chase documents on WhatsApp"
          />
        </label>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          </Button>
          <Button type="button" variant="outline" onClick={onWhatsApp}>
            Send on WhatsApp instead
          </Button>
        </div>
        <p className="text-sm text-ink-2">We reply within one working day. Your details are only used to reply to you.</p>
      </form>
    </>
  );
}
