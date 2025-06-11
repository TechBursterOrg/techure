import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['All', 'Website', 'Web App', 'Mobile App'];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web App',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Home Management and Services Coordination App',
      category: 'Web App',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['React', 'Firebase'],
      gradient: 'from-purple-500 to-pink-600',
      link: 'https://homeheroes.netlify.app',
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'Website',
      image: 'https://images.pexels.com/photos/3182747/pexels-photo-3182747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['Next.js', 'Tailwind'],
      gradient: 'from-green-500 to-emerald-600',
      link: 'https://the-cho.netlify.app',
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'Website',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['Vue.js', 'Express'],
      gradient: 'from-orange-500 to-red-600',
      link: 'https://example.com', // Added placeholder link
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'Website', // Fixed typo from 'websie' to 'Website'
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['Flutter', 'Firebase'],
      gradient: 'from-yellow-500 to-orange-600',
      link: 'https://example.com', // Added placeholder link
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Website',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['React', 'Framer Motion'],
      gradient: 'from-indigo-500 to-purple-600',
      link: 'https://peterokusanya.netlify.app',
    },
  ];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const handleProjectClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
            <ExternalLink className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-sm text-cyan-300">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our recent projects and see how we've transformed businesses with innovative digital solutions.
          </p>
        </div>

        {/* Filter buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {filters.map((item, index) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === item 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-3xl bg-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + (index * 100)}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.category}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleProjectClick(project.link)}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform scale-0 group-hover:scale-100 ${!project.link ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      style={{ transitionDelay: '200ms' }}
                      disabled={!project.link}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.category}</p>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full transform group-hover:scale-110 transition-transform`}>
                    {project.tech[0]}
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;