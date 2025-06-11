import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <Code className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute -inset-1 bg-cyan-400/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Techure
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.slice(0, -1).map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl mt-2 p-6 border border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white py-2 text-left transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;