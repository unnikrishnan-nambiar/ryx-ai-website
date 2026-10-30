import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd, { faqLd } from '@/components/JsonLd';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import FerryStart from '@/components/sections/FerryStart';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import HowWeWork from '@/components/sections/HowWeWork';
import Trust from '@/components/sections/Trust';
import Faq from '@/components/sections/Faq';
import CommunityTeaser from '@/components/sections/CommunityTeaser';
import CtaBand from '@/components/sections/CtaBand';
import { homeFaq } from '@/data/home';

// Homepage story: the problem → the easy start (Ferry) → more when you're
// ready (services) → what working together looks like → why trust us →
// questions → one closing call to action.
export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaq)} />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <FerryStart />
        <SolutionsGrid />
        <HowWeWork />
        <Trust />
        <Faq items={homeFaq} />
        <CommunityTeaser />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
