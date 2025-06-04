import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    tech: string[];
    link: string;
  };
  index: number;
}

const PortfolioCard: React.FC<ProjectProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div 
      variants={cardVariants} 
      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h3 className="font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-white/80 mb-4">{project.category}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <a 
              href={project.link} 
              className="inline-flex items-center text-white hover:text-primary-300 font-medium transition-colors"
            >
              View Project <ExternalLink className="ml-1 h-4 w-4" />
            </a> */}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{project.title}</h3>
            <span className="inline-block text-sm text-gray-600">{project.category}</span>
          </div>
          <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded-full">
            {project.tech[0]}
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.slice(1).map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;