import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const form = useRef<HTMLFormElement>(null); // This is the key - form ref for EmailJS

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_20lrn3c', 'template_3pwnz8t', form.current, {
          publicKey: 'tY1rQxCnh_kLTjQHl',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setShowSuccess(true);
            // Reset form after successful submission
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
            });
            // Hide success message after 3 seconds
            setTimeout(() => setShowSuccess(false), 3000);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', info: 'techuredev@gmail.com', gradient: 'from-cyan-500 to-blue-600' },
    { icon: Phone, title: 'Phone', info: '+44 7511435209', gradient: 'from-purple-500 to-pink-600' },
    { icon: MapPin, title: 'Location', info: 'Hainault, Ilford, Essex', gradient: 'from-green-500 to-emerald-600' },
    { icon: Clock, title: 'Hours', info: 'Mon-Fri: 9AM-6PM', gradient: 'from-orange-500 to-red-600' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Success popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-3xl border border-white/20 max-w-md mx-4">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
            <Mail className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm text-cyan-300">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your ideas into digital reality? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* This is the key fix - add ref and onSubmit to the form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Project Subject"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Changed from onClick to type="submit" */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group"
              >
                Send Message
                <Mail className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;