import React from 'react';
import { Link } from 'react-scroll';
import { Code, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-primary-500 mr-2" />
              <span className="font-bold text-2xl">Techure</span>
            </div>
            <p className="text-gray-400 mb-6">
              We help businesses transform their digital presence with cutting-edge web and mobile solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Web Applications</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Cloud Solutions</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                <span className="text-gray-400">123 Tech Plaza, Innovation District, CA 92101</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-400">info@techure.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © 2025 Techure. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;