import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Sparkles, Target, Clock } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const targets = { projects: 50, clients: 25, years: 3 };
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounters({
              projects: Math.floor(targets.projects * progress),
              clients: Math.floor(targets.clients * progress),
              years: Math.floor(targets.years * progress),
            });
            
            if (step >= steps) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: `${counters.projects}+`, label: 'Projects Completed' },
    { number: `${counters.clients}+`, label: 'Happy Clients' },
    { number: `${counters.years}+`, label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    { icon: Rocket, title: 'Innovation Leaders', description: 'Pioneering advanced solutions with emerging technologies' },
    { icon: Sparkles, title: 'Creative Excellence', description: 'Crafting unique solutions for complex challenges' },
    { icon: Target, title: 'Strategic Impact', description: 'Delivering solutions that drive business success' },
    { icon: Clock, title: 'Swift Execution', description: 'Rapid development without compromising excellence' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
            <Target className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-sm text-cyan-300">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pioneering Digital Innovation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At the forefront of digital transformation, we blend creativity with technical expertise to craft solutions that redefine industry standards and exceed expectations.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our commitment to innovation and excellence drives us to deliver groundbreaking solutions that empower businesses to thrive in the digital age.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start group transition-all duration-500 hover:transform hover:translate-x-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className={`text-center transition-all duration-500 ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                        style={{ transitionDelay: `${500 + (index * 100)}ms` }}
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-lg animate-pulse delay-300"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-lg animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;