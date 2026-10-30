import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/sections/Contact';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/contact',
  'Contact RYX AI',
  'Book a 30-minute call, WhatsApp us or send a message. We reply within one working day.'
);

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
