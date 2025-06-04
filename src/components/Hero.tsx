import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Transforming Ideas into <span className="text-primary-600">Digital Reality</span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Empowering businesses with cutting-edge technology solutions that revolutionize user experiences and drive unprecedented growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/30">
                  Start Your Journey
                </button>
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <button className="px-8 py-3 bg-white hover:bg-gray-100 text-primary-600 font-medium rounded-lg border border-primary-200 transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                  Explore Solutions
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Innovation in technology" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
        
        
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
  <a 
    href="#services" 
    className="flex flex-col items-center text-black/70 hover:text-black transition-colors mt-10"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <span className="text-sm mb-2">Scroll Down</span>
    <div className="w-5 h-9 border-2 border-black/60 rounded-full flex justify-center pt-2">
      <div className="w-1 h-2 bg-black rounded-full animate-scrollIndicator"></div>
    </div>
  </a>
</div>
    </section>
  );
};

export default Hero;