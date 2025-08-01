import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { FaClock, FaShieldAlt, FaMoneyBillWave, FaUserTie, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaClock size={24} />,
      title: 'Layanan 24/7',
      description: 'Siap membantu Anda kapanpun dan dimanapun dengan respons cepat dan profesional.'
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: 'Keamanan Terjamin',
      description: 'Prioritas utama kami adalah keamanan kendaraan dan alat berat Anda selama dalam penanganan kami.'
    },
    {
      icon: <FaMoneyBillWave size={24} />,
      title: 'Harga Transparan',
      description: 'Tidak ada biaya tersembunyi, kami memberikan penawaran harga yang jelas dan kompetitif.'
    },
    {
      icon: <FaUserTie size={24} />,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim berpengalaman dan terlatih dalam penanganan kendaraan dan alat berat.'
    },
    {
      icon: <FaMapMarkedAlt size={24} />,
      title: 'Jangkauan Luas',
      description: 'Melayani berbagai wilayah dengan armada yang tersebar di beberapa lokasi strategis.'
    },
    {
      icon: <FaHeadset size={24} />,
      title: 'Dukungan Pelanggan',
      description: 'Tim customer service kami siap membantu menjawab pertanyaan dan kebutuhan Anda.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Keunggulan Kami"
                title="Mengapa Memilih Aneka Perkasa?"
                description="Kami berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tinggi dan kepuasan pelanggan sebagai prioritas utama."
                light={true}
                center={false}
              />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500 rounded-lg text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-orange-400">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              {/* <Button 
                to="contact" 
                variant="primary"
                className="text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Hubungi Kami
              </Button> */}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sections/kolase1.png"
                alt="Aneka Perkasa Features"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-4xl font-bold text-orange-400 mb-2">500+</p>
                    <p className="text-sm text-gray-300">Pelanggan Puas</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-orange-400 mb-2">24/7</p>
                    <p className="text-sm text-gray-300">Layanan Siap</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;