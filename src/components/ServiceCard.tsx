import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    features: string[];
    icon: LucideIcon;
    color: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
  const { title, description, features, icon: Icon, color } = service;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const getBgColor = () => {
    switch(color) {
      case 'primary':
        return 'bg-primary-50 border-primary-200 hover:shadow-primary-200/30';
      case 'secondary':
        return 'bg-secondary-50 border-secondary-200 hover:shadow-secondary-200/30';
      default:
        return 'bg-gray-50 border-gray-200 hover:shadow-gray-200/30';
    }
  };
  
  const getIconColor = () => {
    switch(color) {
      case 'primary':
        return 'text-primary-600 bg-primary-100';
      case 'secondary':
        return 'text-secondary-600 bg-secondary-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`p-6 rounded-xl border ${getBgColor()} transition-all duration-300 hover:shadow-xl group`}
    >
      <div className={`w-14 h-14 ${getIconColor()} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-8 w-8" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.3 }}
            viewport={{ once: true }}
            className="flex items-start"
          >
            <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 mt-2 ${color === 'primary' ? 'bg-primary-500' : color === 'secondary' ? 'bg-secondary-500' : 'bg-gray-500'}`}></span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;