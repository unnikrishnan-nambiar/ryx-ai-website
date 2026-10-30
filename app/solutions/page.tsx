import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import PageHero from '@/components/sections/PageHero';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import HowWeWork from '@/components/sections/HowWeWork';
import CtaBand from '@/components/sections/CtaBand';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/solutions',
  'AI Solutions - RYX AI',
  'Ferry, the self-serve AI assistant for your website, plus AI lead generation, AI ads, WhatsApp follow-ups, paperwork automation and AI training for teams.'
);

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Solutions"
          title="What AI can do for your business."
          intro="Grouped by what you want: more customers, customers who come back, or more time. Start with Ferry yourself today, or let our team build the rest for you."
        >
          <Button href={site.bookingUrl} variant="primary">
            <Icon name="calendar" className="h-[18px] w-[18px]" />
            Not sure? Book a free call
          </Button>
        </PageHero>
        <SolutionsGrid heading={false} includeFerry />
        <HowWeWork />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
