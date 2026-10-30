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
  'AI creatives and ads, personalised customer nudges, workflow automation, AI training for teams, AI lead generation and website conversion with Ferry.'
);

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Solutions"
          title="Six ways AI can grow your business."
          intro="Each solution fixes one clear problem: getting seen, winning leads, keeping customers or saving time. Start with one; add more when it pays off."
        >
          <Button href={site.bookingUrl} variant="primary">
            <Icon name="calendar" className="h-[18px] w-[18px]" />
            Not sure? Book a call
          </Button>
        </PageHero>
        <SolutionsGrid heading={false} />
        <HowWeWork />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
