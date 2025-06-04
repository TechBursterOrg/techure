import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Code2, Smartphone } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      title: 'Website Development',
      description: 'Create modern, responsive websites that engage visitors and convert them into customers.',
      features: [
        'SEO-optimized structure',
        'Responsive across all devices',
        'Fast loading speeds',
        'User-friendly interfaces',
      ],
      icon: Globe,
      color: 'primary',
    },
    {
      title: 'Web Applications',
      description: 'Build powerful web applications with robust functionality and seamless user experiences.',
      features: [
        'Scalable architecture',
        'Secure data handling',
        'Real-time features',
        'Cloud integration',
      ],
      icon: Code2,
      color: 'secondary',
    },
    {
      title: 'Mobile App Development',
      description: 'Develop native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: [
        'iOS & Android platforms',
        'Offline functionality',
        'Push notifications',
        'Seamless performance',
      ],
      icon: Smartphone,
      color: 'gray',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive development solutions to help you build your digital presence and reach your business goals.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Discuss Your Project</h3>
              <p className="text-white/90 mb-8">
                Ready to start your next digital project? Let's discuss how we can help bring your vision to life.
              </p>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Coding session" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Planning meeting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Design review" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;