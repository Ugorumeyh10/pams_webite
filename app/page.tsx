import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreBrands from '@/components/CoreBrands';
import ProductShowcase from '@/components/ProductShowcase';
import UGCContent from '@/components/UGCContent';
import ContentStrategy from '@/components/ContentStrategy';
import StrategySnapshot from '@/components/StrategySnapshot';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import CompanyAnalytics from '@/components/CompanyAnalytics';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CoreBrands />
      <ProductShowcase />
      <UGCContent />
      <ContentStrategy />
      <StrategySnapshot />
      <Skills />
      <Experience />
      <Education />
      <CompanyAnalytics />
      <Contact />
      <Footer />
    </main>
  );
}
