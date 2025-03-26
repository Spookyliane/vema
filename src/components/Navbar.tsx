import React, { useState, useEffect } from 'react';
import { Home, Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 py-4 px-6 transition-all duration-300 ${
        scrollY > 10 ? 'bg-opacity-90 bg-gray-800 text-white shadow-lg' : 'bg-white text-black shadow-md'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-emerald-600 mr-2" />
            <span className="text-2xl font-bold text-emerald-800">VemaHome Repair</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-emerald-600 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-emerald-600 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-emerald-600 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-600 font-medium">
              Contact
            </button>
            <a href="tel:+12105551234" className="flex items-center text-emerald-600 font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              (210) 555-1234
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-emerald-600 font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-emerald-600 font-medium py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-emerald-600 font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-emerald-600 font-medium py-2">
                Contact
              </button>
              <a href="tel:+12105551234" className="flex items-center text-emerald-600 font-semibold py-2">
                <Phone className="h-5 w-5 mr-2" />
                (210) 555-1234
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
