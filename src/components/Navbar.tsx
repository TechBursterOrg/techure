import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-primary-600 mr-2" />
            <span className="font-bold text-2xl text-primary-700">Techure</span>
          </div>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
<div className="hidden md:flex flex-1 justify-center items-center space-x-8">
  {navLinks
    .filter((link) => link.name !== 'Contact')
    .map((link) => (
      <Link
        key={link.name}
        to={link.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        className={`cursor-pointer transition-colors duration-200 ${
          scrolled
            ? 'text-gray-800 hover:text-primary-600'
            : 'text-gray-800 hover:text-primary-600'
        }`}
      >
        {link.name}
      </Link>
    ))}
</div>

{/* Contact Button */}
<div className="hidden md:flex items-center">
  {navLinks
    .filter((link) => link.name === 'Contact')
    .map((link) => (
      <Link
        key={link.name}
        to={link.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/30"
      >
        {link.name}
      </Link>
    ))}
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-gray-800'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-gray-800'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl mt-2 py-3 px-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="text-gray-800 hover:text-primary-600 py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;