import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Telepon',
      info: '+62 858-1227-5157',
      action: 'tel:+62858-1227-5157'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      info: '+62 858-1227-5157',
      action: 'https://wa.me/62858-1227-5157'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'anekaperkasagroup@gmail.com',
      action: 'mailto:anekaperkasagroup@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Alamat',
      info: 'Balongsari Gg. 8 No.18, Mergelo, Balongsari, Kec. Magersari, Kota Mojokerto, Jawa Timur 61314',
      action: 'https://maps.app.goo.gl/QkkJAzv5Jj3fKiwk8'
    }
  ];

  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 4px 4px, #888 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionTitle
            subtitle="Kontak Kami"
            title="Hubungi Kami untuk Informasi Lebih Lanjut"
            description="Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan. Tim kami siap membantu Anda 24/7."
            center={true}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-6">Informasi Kontak</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg transform hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-teal-800 mb-1">{item.title}</h4>
                    <a 
                      href={item.action} 
                      className="text-base text-gray-600 hover:text-teal-500 transition-colors duration-200 block break-words"
                      target={item.title === 'Alamat' ? '_blank' : undefined}
                      rel={item.title === 'Alamat' ? 'noopener noreferrer' : undefined}
                    >
                      {item.info}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden h-[300px] md:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4660553292544!2d112.4338843!3d-7.4669397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780f7aec7b5555%3A0x4a4c5f6a245648d3!2sJl.%20Balongsari%20Gg.%208%20No.18%2C%20Mergelo%2C%20Balongsari%2C%20Kec.%20Magersari%2C%20Kota%20Mojokerto%2C%20Jawa%20Timur%2061314!5e0!3m2!1sid!2sid!4v1634567890123!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;