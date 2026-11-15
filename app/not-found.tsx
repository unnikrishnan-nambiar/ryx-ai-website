import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Page not found - RYX AI',
  description: 'This page does not exist.',
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          title="There’s no page at this address."
          intro="The link is broken or the page has moved. The home page and the list of solutions are both still here."
        >
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/" variant="light">
              Go to the home page
            </Button>
            <Button href="/solutions" variant="outline-night">
              Browse solutions
            </Button>
          </div>
        </PageHero>
      </main>
      <Footer />
    </>
  );
}
