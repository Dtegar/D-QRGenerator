import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Beranda', to: 'hero' },
    { name: 'Tentang Kami', to: 'about' },
    { name: 'Layanan', to: 'services' },
    { name: 'Keunggulan', to: 'features' },
    { name: 'Statistik', to: 'stats' },
    { name: 'Kontak', to: 'contact' },
  ];

  return (
    <>
      {/* Top Bar - Sekarang fixed */}
      <div className="hidden md:block fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-900 to-teal-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-xs">
                <FaPhoneAlt className="mr-2 text-orange-400" />
                <span>+62 858-1227-5157</span>
              </div>
              <div className="flex items-center text-xs">
                <FaMapMarkerAlt className="mr-2 text-orange-400" />
                <span>Balongsari Gg. 8 No.18, Mergelo, Balongsari, Kec. Magersari, Kota Mojokerto, Jawa Timur 61314</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-400 transition-all duration-300">
                <FaFacebookF className="text-xs" />
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-400 transition-all duration-300">
                <FaTwitter className="text-xs" />
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-400 transition-all duration-300">
                <FaInstagram className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Posisi diubah agar selalu di bawah top bar */}
      <header 
        className={`fixed ${scrolled ? 'md:top-10 top-0' : 'md:top-10 top-0'} left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'backdrop-blur-md bg-teal-800/90 shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer">
                <div className="flex flex-col items-center group">
                  <div className="relative h-12 w-40">
                    <Image 
                      src="/images/logo/logo_ap.png" 
                      alt="Aneka Perkasa Logo" 
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <p className="text-sm font-medium text-orange-400 mt-1 group-hover:text-white transition-colors duration-300">Aneka Perkasa</p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="relative px-4 py-2 text-white hover:text-orange-400 transition-colors cursor-pointer font-medium overflow-hidden group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Hubungi Kami
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none relative w-10 h-10 flex items-center justify-center bg-teal-700/50 rounded-full backdrop-blur-sm"
                aria-label="Toggle Menu"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-b from-teal-800 to-teal-900 backdrop-blur-md shadow-lg rounded-b-2xl mx-4 mt-2"
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-2 text-white hover:text-orange-400 transition-colors cursor-pointer border-b border-teal-700/50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block mt-4 text-center py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;