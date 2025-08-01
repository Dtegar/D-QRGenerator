import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const CTASection = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh Bantuan Segera?</h2>
            <p className="text-lg text-white/90 max-w-2xl">
              Tim kami siap membantu Anda 24/7. Hubungi kami sekarang untuk layanan derek dan rental alat berat terbaik.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button variant="white" href="tel:+6281234567890">
              Hubungi Sekarang
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;