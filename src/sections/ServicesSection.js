import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import { FaTruck, FaCar, FaTractor, FaTools, FaWarehouse, FaShippingFast, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCar size={24} />,
      title: 'Towing Mobil',
      description: 'Layanan towing untuk semua jenis mobil dengan penanganan profesional dan aman sampai ke tujuan.',
      features: ['24/7 Layanan Darurat', 'Penanganan Profesional', 'Harga Transparan'],
      image: '/images/sections/TowingPutih1.jpeg'
    },
    {
      icon: <FaTruck size={24} />,
      title: 'Towing Alat Berat',
      description: 'Layanan derek untuk kendaraan berat seperti truk dan bus dengan peralatan khusus dan tim berpengalaman.',
      features: ['Peralatan Khusus', 'Tim Berpengalaman', 'Penanganan Aman'],
      image: '/images/sections/KomatsuPC78.jpeg'
    },
    {
      icon: <FaTractor size={24} />,
      title: 'Rental Excavator',
      description: 'Sewa excavator berbagai ukuran untuk proyek konstruksi, penggalian, dan pembangunan infrastruktur.',
      features: ['Berbagai Ukuran', 'Operator Terlatih', 'Perawatan Rutin'],
      image: '/images/sections/ExcavatorXCMGPC60.jpeg'
    },
    {
      icon: <FaTools size={24} />,
      title: 'Rental Bulldozer',
      description: 'Sewa bulldozer untuk proyek pembukaan lahan, perataan tanah, dan konstruksi jalan.',
      features: ['Kondisi Prima', 'Harga Kompetitif', 'Dukungan Teknis'],
      image: '/images/sections/DozzerD31.jpeg'
    },
    {
      icon: <FaTruck size={24} />,
      title: 'Jasa Towing Truk & Kendaraan Besar',
      description: 'Layanan towing untuk pengangkutan truk, kendaraan besar, dan alat berat dengan armada profesional.',
      features: ['Armada Tangguh', 'Pengemudi Berpengalaman', 'Area Layanan Luas'],
      image: '/images/sections/TowingPutih2.jpeg'
    },
    {
      icon: <FaTools size={24} />,
      title: 'Rental Vibro Roller 6 Ton',
      description: 'Sewa alat pemadat tanah bergetar (vibro roller) untuk proyek konstruksi jalan dan pondasi.',
      features: ['Getaran Kuat', 'Operator Berpengalaman', 'Perawatan Terjamin'],
      image: '/images/sections/Vibro6TonGetar.jpeg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Layanan Kami"
          title="Solusi Lengkap untuk Kebutuhan Anda"
          description="Kami menyediakan berbagai layanan towing dan rental alat berat untuk mendukung kebutuhan transportasi dan konstruksi Anda."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="p-2 bg-orange-500 rounded-full text-white">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaArrowRight className="text-orange-500 mr-2 text-sm" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl
                    hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Hubungi Kami</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;