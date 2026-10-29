import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solutions from '@/components/sections/Solutions';
import Ferry from '@/components/sections/Ferry';
import Pricing from '@/components/sections/Pricing';
import UseCases from '@/components/sections/UseCases';
import Process from '@/components/sections/Process';
import Integrations from '@/components/sections/Integrations';
import Community from '@/components/sections/Community';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Ferry />
        <Pricing />
        <UseCases />
        <Process />
        <Integrations />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
