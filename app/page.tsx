import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import HowWeWork from '@/components/sections/HowWeWork';
import FerryBand from '@/components/sections/FerryBand';
import CommunityTeaser from '@/components/sections/CommunityTeaser';
import CtaBand from '@/components/sections/CtaBand';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SolutionsGrid />
        <HowWeWork />
        <FerryBand />
        <CommunityTeaser />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
