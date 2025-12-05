import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-secondary" size={24} fill="currentColor" />
              <span className="text-2xl font-bold">DIVID-ONE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Specialist in licht, beeld en geluid. Wij creëren de ultieme beleving voor zowel particuliere woningen als zakelijke omgevingen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-secondary inline-block pb-1">Navigatie</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Diensten</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Over Ons</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact & Offerte</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-secondary inline-block pb-1">Specialisaties</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Smart Home Integratie</li>
              <li className="text-gray-400">Multiroom Audio</li>
              <li className="text-gray-400">Home Cinema</li>
              <li className="text-gray-400">Vergaderoplossingen</li>
              <li className="text-gray-400">Narrowcasting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-secondary inline-block pb-1">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">Hilversum, Nederland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <a href="tel:+31612345678" className="text-gray-400 hover:text-white transition-colors">+31 6 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <a href="mailto:info.sjefit@gmail.com" className="text-gray-400 hover:text-white transition-colors">info.sjefit@gmail.com</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Divid-One. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;