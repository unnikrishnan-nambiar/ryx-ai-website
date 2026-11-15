import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import UseCaseExplorer from '@/components/UseCaseExplorer';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/solutions',
  'AI Solutions & Use Cases - RYX AI',
  'Twelve jobs RYX AI agents do in sales, marketing, customer service and operations: lead agents, instant callbacks, WhatsApp assistants, bookings, reviews and document automation.'
);

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          title="Start with the problem, not the technology."
          intro="Every project begins with where you lose leads, time or money. These are twelve jobs our agents do today. Pick your industry to see the ones that fit."
        />
        <section className="container-content py-16 sm:py-24">
          <UseCaseExplorer />
        </section>
        <CtaBand
          title="Don’t see your problem here? Tell us about it."
          body="Most of what we build starts as a job nobody has a tool for yet. Bring yours and we’ll show you how an agent could do it."
        />
      </main>
      <Footer />
    </>
  );
}
