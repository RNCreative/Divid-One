import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo1 from '../assets/Logo1.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Diensten', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Over Ons', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo Afbeelding */}
          <img 
            src={Logo1} 
            alt="Divid-One Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`font-medium hover:text-secondary transition-colors ${
                    location.pathname === link.path ? 'text-secondary' : 'text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button to="/contact" variant="primary">
            Offerte aanvragen
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="py-3 text-lg font-medium text-primary border-b border-gray-100 last:border-0 hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4">
            <Button to="/contact" variant="primary" className="w-full text-center">
              Offerte aanvragen
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;