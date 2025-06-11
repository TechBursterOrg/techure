import React from 'react';
import { Code, Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Website Development',
    'Web Applications',
    'Mobile Apps',
    'UI/UX Design',
    'Digital Strategy',
    'Tech Consulting',
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Scroll to top button */}
        

        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center group cursor-pointer mb-6">
                <div className="relative">
                  <Code className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <div className="absolute -inset-1 bg-cyan-400/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Techure
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming ideas into digital reality with cutting-edge technology solutions that drive business growth.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-300 block">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors group">
                  <Mail className="h-5 w-5 mr-3 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm">techuredev@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors group">
                  <Phone className="h-5 w-5 mr-3 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm">+44 7511435209</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors group">
                  <MapPin className="h-5 w-5 mr-3 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm">Hainault, Ilford, Essex</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Techure. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;