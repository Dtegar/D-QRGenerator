import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { FaCheck } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    'Layanan 24/7 siap membantu kapanpun Anda butuhkan',
    'Tim profesional dan berpengalaman',
    'Armada kendaraan dan alat berat terawat',
    'Harga transparan tanpa biaya tersembunyi',
    'Jangkauan layanan luas di seluruh wilayah',
    'Garansi kepuasan pelanggan'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-transparent z-10" />
              <Image
                src="/images/sections/TowingKuningMerah.jpg"
                alt="Aneka Perkasa Services"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg md:max-w-[300px] z-20"
            >
              <p className="text-teal-900 font-semibold text-lg mb-2">Pengalaman Kami</p>
              <p className="text-4xl font-bold text-orange-500 mb-1">5+</p>
              <p className="text-gray-600">Tahun melayani pelanggan dengan dedikasi dan profesionalisme</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:pl-8"
          >
            <SectionTitle
              subtitle="Tentang Kami"
              title="Lebih dari 5 Tahun Melayani dengan Profesional"
              description="Aneka Perkasa adalah perusahaan jasa derek towing dan rental alat berat yang telah berpengalaman melayani berbagai kebutuhan transportasi dan konstruksi di Indonesia."
            />
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Didirikan pada tahun 2020, kami telah berkembang menjadi mitra terpercaya bagi berbagai perusahaan dan individu yang membutuhkan layanan derek dan alat berat berkualitas. Komitmen kami pada keamanan, ketepatan waktu, dan kepuasan pelanggan menjadikan kami pilihan utama di industri ini.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="mt-1">
                    <FaCheck className="text-orange-500" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button to="contact" variant="primary" className="text-lg px-8 py-4">
                Hubungi Kami
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;