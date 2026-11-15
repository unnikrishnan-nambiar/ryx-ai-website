import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import EarlyAccessForm from '@/components/EarlyAccessForm';
import { mailto, site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/contact',
  'Contact - RYX AI',
  'Book a 30-minute call with RYX AI, or request early access to Ferry, the AI sales agent for your website.'
);

const channels = [
  {
    label: 'Book a 30-minute call',
    value: 'Ask for a time by email',
    href: mailto('Book a 30-minute call', "Hi RYX AI, I'd like to book a 30-minute call. Here's a bit about my business:\n\n"),
  },
  { label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsappUrl, external: true },
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phoneDisplay, href: `tel:${site.phone}` },
  {
    label: 'Talk to our AI assistant',
    value: site.aiAssistantPhoneDisplay,
    href: `tel:${site.aiAssistantPhone}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          title="Tell us what you want off your plate."
          intro="AI built for your business, or early access to Ferry. Either way it starts here, and we usually reply within one working day."
        />

        <section className="container-content grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Reach us directly</h2>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="group block py-5"
                  >
                    <span className="block text-ink-2">{c.label}</span>
                    <span className="tnum mt-0.5 block font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-signal-deep">
                      {c.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="early-access" className="scroll-mt-24 rounded-[28px] bg-card p-6 sm:p-10">
            <h2 className="font-display text-3xl font-bold tracking-tight">Ferry early access and enquiries</h2>
            <p className="mt-2 text-lg text-ink-2">
              Ferry Starter is from ₹2,000 a month. Premium, at ₹5,000 a month, is coming soon.
            </p>
            <div className="mt-8">
              <EarlyAccessForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
