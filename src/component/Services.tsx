import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Globe, Code2, Smartphone } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const services = [
    {
      title: 'Website Development',
      description: 'Create stunning, responsive websites that captivate and convert visitors into loyal customers.',
      features: ['SEO-optimized', 'Mobile-first design', 'Lightning fast', 'Conversion focused'],
      icon: Globe,
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      borderGradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'Web Applications',
      description: 'Build powerful, scalable web applications with cutting-edge technology and seamless user experiences.',
      features: ['Cloud-native', 'Real-time features', 'Secure & scalable', 'API integration'],
      icon: Code2,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderGradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Mobile Apps',
      description: 'Develop native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Offline support', 'Push notifications', 'App Store ready'],
      icon: Smartphone,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
            <Rocket className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-sm text-cyan-300">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Cutting-Edge Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver comprehensive development solutions that push the boundaries of what's possible in digital innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                      }`}
                      style={{ transitionDelay: `${(index * 200) + (idx * 100)}ms` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 animate-pulse`}></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;