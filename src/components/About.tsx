import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Sparkles, Target, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: 'Innovation Leaders',
      description: 'Pioneering advanced solutions with emerging technologies',
      icon: Rocket,
      color: 'primary',
    },
    {
      title: 'Creative Excellence',
      description: 'Crafting unique solutions for complex challenges',
      icon: Sparkles,
      color: 'secondary',
    },
    {
      title: 'Strategic Impact',
      description: 'Delivering solutions that drive business success',
      icon: Target,
      color: 'primary',
    },
    {
      title: 'Swift Execution',
      description: 'Rapid development without compromising excellence',
      icon: Clock,
      color: 'secondary',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pioneering Digital Innovation</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At the forefront of digital transformation, we blend creativity with technical expertise to craft solutions that redefine industry standards and exceed expectations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our commitment to innovation and excellence drives us to deliver groundbreaking solutions that empower businesses to thrive in the digital age.
            </p>
            
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className={`p-3 rounded-full ${
                    feature.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                  } mr-4`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background decorative elements */}
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary-200 rounded-full opacity-30 z-0"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-secondary-200 rounded-full opacity-30 z-0"></div>
            
            {/* Main image with mask/clip */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Innovation team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;