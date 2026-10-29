import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Page not found - RYX AI',
  description: "This page doesn't exist. Head back to RYX AI.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="container-content py-36 text-center sm:py-44">
          <p className="font-display text-[110px] font-bold leading-none tracking-tight text-blue-soft sm:text-[150px]">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            This page doesn&apos;t exist.
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-lg text-white/60">
            The link is broken or the page has moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" variant="primary">
              Back to RYX AI
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
