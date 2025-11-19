'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
