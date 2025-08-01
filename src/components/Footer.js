import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-teal-900 to-teal-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-6 text-white">Aneka Perkasa</h3>
            <p className="mb-6 text-gray-300 text-base leading-relaxed">
              Jasa derek towing dan rental alat berat terpercaya dengan pengalaman bertahun-tahun melayani kebutuhan transportasi dan konstruksi Anda.
            </p>
            <div className="flex justify-center sm:justify-start space-x-5">
              <a href="#" className="text-gray-300 hover:text-orange-400 transform hover:scale-110 transition-all duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transform hover:scale-110 transition-all duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transform hover:scale-110 transition-all duration-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transform hover:scale-110 transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-6 text-white">Tautan Cepat</h3>
            <ul className="space-y-3">
              {[
                { name: 'Beranda', to: 'hero' },
                { name: 'Tentang Kami', to: 'about' },
                { name: 'Layanan', to: 'services' },
                { name: 'Keunggulan', to: 'features' },
                { name: 'Kontak', to: 'contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer text-base hover:translate-x-2 inline-block transform duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-6 text-white">Layanan Kami</h3>
            <ul className="space-y-3">
              {[
                'Jasa Towing Mobil',
                'Jasa Towing Truk',
                'Rental Excavator',
                'Rental Bulldozer',
                'Rental Vibro Roller'
              ].map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer text-base hover:translate-x-2 transform duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-6 text-white">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="group hover:bg-teal-800/30 p-4 rounded-xl transition-all duration-300 flex items-start gap-4">
                <div className="shrink-0 bg-orange-400/10 p-3 rounded-lg group-hover:bg-orange-400/20 transition-all duration-300">
                  <FaMapMarkerAlt className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white text-base transition-colors duration-300 text-left">
                  Balongsari Gg. 8 No.18, Mergelo, Balongsari, Kec. Magersari, Kota Mojokerto, Jawa Timur 61314
                </span>
              </li>
              <li className="group hover:bg-teal-800/30 p-4 rounded-xl transition-all duration-300 flex items-center gap-4">
                <div className="shrink-0 bg-orange-400/10 p-3 rounded-lg group-hover:bg-orange-400/20 transition-all duration-300">
                  <FaPhone className="w-5 h-5 text-orange-400" />
                </div>
                <a 
                  href="tel:+62858-1227-5157" 
                  className="text-gray-300 group-hover:text-white text-base hover:underline transition-colors duration-300"
                >
                  +62 858-1227-5157
                </a>
              </li>
              <li className="group hover:bg-teal-800/30 p-4 rounded-xl transition-all duration-300 flex items-center gap-4">
                <div className="shrink-0 bg-orange-400/10 p-3 rounded-lg group-hover:bg-orange-400/20 transition-all duration-300">
                  <FaEnvelope className="w-5 h-5 text-orange-400" />
                </div>
                <a 
                  href="mailto:anekaperkasagroup@gmail.com" 
                  className="text-gray-300 group-hover:text-white text-base hover:underline transition-colors duration-300"
                >
                  anekaperkasagroup@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800/50 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm">&copy; {currentYear} Aneka Perkasa. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;