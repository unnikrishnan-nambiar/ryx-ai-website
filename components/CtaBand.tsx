import Button from './ui/Button';
import { site } from '@/data/site';

// Closing call to action, shared by every page. Sits on night and runs
// straight into the footer.
export default function CtaBand({
  title = 'Tell us your problem. We’ll show you how AI handles it.',
  body = 'A 30-minute call. We map where an agent can win you leads or save your team time, and we say so plainly if it can’t.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="sky text-white">
      <div className="container-content border-b border-rule-night py-20 sm:py-28">
        <h2 className="headline max-w-[860px] text-[40px] sm:text-[64px]">{title}</h2>
        <p className="lede mt-6 max-w-[560px] text-white/80">{body}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/contact" variant="light">
            Book a 30-minute call
          </Button>
          <Button href={site.whatsappUrl} variant="outline-night" target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
