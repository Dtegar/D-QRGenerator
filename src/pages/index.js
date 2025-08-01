import { useEffect } from 'react';
import Head from 'next/head';
import { Poppins } from 'next/font/google';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Sections
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import FeaturesSection from '../sections/FeaturesSection';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';
import ContactSection from '../sections/ContactSection';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function Home() {
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`${poppins.className} font-sans`}>
      <Head>
        <title>Aneka Perkasa - Jasa Derek & Rental Alat Berat</title>
        <meta name="description" content="Aneka Perkasa menyediakan layanan derek towing dan rental alat berat berkualitas dengan harga terjangkau dan pelayanan profesional 24/7." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
