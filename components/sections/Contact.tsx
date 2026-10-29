import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import LeadForm from '@/components/LeadForm';
import { site } from '@/data/site';

const contacts = [
  { icon: 'bot', label: 'AI assistant', value: site.aiAssistantPhone, href: site.aiAssistantPhoneHref },
  { icon: 'phone', label: 'Contact', value: site.phone, href: site.phoneHref },
  { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: 'chat', label: 'WhatsApp', value: 'Message us', href: site.whatsappUrl },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-night-900 py-20 sm:py-28">
      <svg
        className="pointer-events-none absolute -right-40 top-0 h-full w-[900px] opacity-70"
        viewBox="0 0 900 700"
        fill="none"
        aria-hidden
      >
        <path d="M900 40C700 160 640 360 520 420S260 520 0 700" stroke="rgba(140,158,255,0.18)" />
        <path d="M900 140C720 220 660 380 540 430S300 560 60 700" stroke="rgba(140,158,255,0.12)" />
        <path d="M820 0C760 200 640 380 520 420" stroke="rgba(255,255,255,0.08)" />
        <circle cx="520" cy="420" r="5" fill="#8C9EFF" />
        <circle cx="520" cy="420" r="24" fill="rgba(61,90,254,0.25)" />
      </svg>

      <div className="container-content relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Reveal>
          <h2 className="font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[60px]">
            Tell us your problem.
            <br />
            <span className="text-blue-soft">We&apos;ll show you the solution.</span>
          </h2>
          <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-white/65">
            A 30-minute call is enough to find the first thing worth automating, and what it&apos;s
            worth to you.
          </p>
          <div className="mt-8">
            <Button href={site.bookingUrl} variant="primary">
              <Icon name="calendar" className="h-[18px] w-[18px]" />
              Book a 30-minute call
            </Button>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {contacts.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="group flex items-start gap-3">
                  <Icon name={item.icon} className="mt-0.5 h-5 w-5 text-white/45" />
                  <span>
                    <span className="block text-sm text-white/45">{item.label}</span>
                    <span className="block text-lg text-white transition-colors group-hover:text-blue-soft">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-card bg-white p-6 text-ink shadow-lift sm:p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">Prefer to write?</h3>
            <p className="mt-2 text-ink-secondary">
              Send a few details and we&apos;ll reply within one working day.
            </p>
            <div className="mt-6">
              <LeadForm
                source="Website contact form"
                detailed
                submitLabel="Send message"
                successMessage="Thanks! We'll get back to you within one working day."
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
