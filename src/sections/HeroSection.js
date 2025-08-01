import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background image dengan loading optimization */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/sections/hero2_alatberat.jpg" 
          alt="Background Alat Berat" 
          fill 
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Background overlay dengan gradient yang lebih menarik */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-800/85 to-teal-900/80 backdrop-blur-[2px] z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-orange-400 font-bold text-lg md:text-xl mb-4"
            >
              Jasa Derek & Rental Alat Berat
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              Solusi Terpercaya untuk Kebutuhan Transportasi & Konstruksi Anda
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Aneka Perkasa menyediakan layanan derek towing dan rental alat berat berkualitas dengan harga terjangkau dan pelayanan profesional 24/7.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                to="services" 
                variant="primary"
                className="text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Layanan Kami
              </Button>
              <Button 
                to="contact" 
                variant="outline"
                className="text-base md:text-lg px-8 py-4 rounded-xl border-2 hover:bg-white/10 transition-all duration-300"
              >
                Hubungi Kami
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl h-[400px] xl:h-[500px] w-full overflow-hidden relative shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="/images/sections/hero3_alatberat.jpg" 
                alt="Alat Berat Aneka Perkasa" 
                fill 
                className="object-cover object-center rounded-2xl"
                priority
                quality={90}
                sizes="(max-width: 1280px) 50vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;