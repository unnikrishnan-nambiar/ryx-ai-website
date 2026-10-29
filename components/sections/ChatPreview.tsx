import Icon from '@/components/ui/Icon';

// Static, illustrative mock of the Ferry chat widget. Messages animate in
// once on load with staggered CSS delays; no JS, no fake data beyond the
// example conversation itself.
const delay = (s: number) => ({ animationDelay: `${s}s` });

export default function ChatPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-10 rounded-full bg-blue/25 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-[24px] bg-white text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-night font-display text-sm font-bold text-gold">
            F
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Ferry</p>
            <p className="flex items-center gap-1.5 text-xs text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Online, replies instantly
            </p>
          </div>
        </div>

        <div className="space-y-3 bg-mist/60 px-5 py-5 text-[14px] leading-snug">
          <p className="max-w-[85%] animate-msg-in rounded-2xl rounded-tl-md bg-white px-4 py-2.5 shadow-card" style={delay(0.4)}>
            Hi, I&apos;m Ferry. How can I help today?
          </p>
          <p className="ml-auto max-w-[80%] animate-msg-in rounded-2xl rounded-tr-md bg-blue px-4 py-2.5 text-white" style={delay(1.2)}>
            Do you take weekend appointments?
          </p>
          <div className="max-w-[88%] animate-msg-in rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-card" style={delay(2.1)}>
            <p>Yes, Saturdays 10am to 4pm. Want me to book you in?</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
              {['10:00', '11:30', '14:00'].map((slot, i) => (
                <span
                  key={slot}
                  className={`rounded-lg border px-2 py-1.5 ${
                    i === 1 ? 'border-blue bg-blue-light text-blue-dark' : 'border-line text-ink-secondary'
                  }`}
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
          <div className="flex animate-msg-in flex-wrap gap-2" style={delay(2.9)}>
            {['Book 11:30', 'See pricing', 'Talk to the team'].map((chip) => (
              <span key={chip} className="rounded-full border border-blue/30 bg-white px-3 py-1.5 text-xs font-medium text-blue-dark">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-line px-5 py-3.5 text-sm text-ink-muted">
          <span className="flex-1">Type a message…</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-night text-white">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div
        className="absolute -bottom-5 -left-3 flex animate-msg-in items-center gap-2 rounded-full border border-white/10 bg-night-700/95 px-4 py-2 text-xs font-medium text-white shadow-lift backdrop-blur sm:-left-8"
        style={delay(3.6)}
      >
        <Icon name="check" className="h-4 w-4 text-gold" />
        Lead qualified · meeting booked · sent to CRM
      </div>
    </div>
  );
}
