import React, { useState,useRef  } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, X, CheckCircle } from 'lucide-react';

import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // Simulate form submission
  //   setFormStatus({ submitted: true, success: true, message: 'Thank you for your message. We will get back to you soon!' });
    
  //   // Reset form after successful submission
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     subject: '',
  //     message: '',
  //   });
    
  //   // Reset status after 5 seconds
  //   setTimeout(() => {
  //     setFormStatus(null);
  //   }, 5000);
  // };
  
  const contactInfo = [
    {
      title: 'Email Us',
      details: [
        'techuredev@gmail.com'
        
      ],
      icon: Mail,
      color: 'primary',
    },
    {
      title: 'Call Us',
      details: [
        '+44 7511435209',
        '+234 8069980777'
      ],
      icon: Phone,
      color: 'secondary',
    },
    {
      title: 'Visit Us',
      details: [
        '58 Peregrine Road, Hainault, Ilford, Essex, G6 3SZ ',
        
      ],
      icon: MapPin,
      color: 'primary',
    },
    {
      title: 'Our Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday - Sunday: Closed'
      ],
      icon: Clock,
      color: 'secondary',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const form = useRef<HTMLFormElement>(null);

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
          setShowSuccessPopup(true);
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
};

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Success Popup */}
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowSuccessPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Thank you for reaching out
                </h3>
                <p className="text-gray-600 mb-6">
                  You'll get a reply very soon
                </p>
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`p-5 rounded-lg border ${
                    info.color === 'primary' 
                      ? 'border-primary-200 bg-primary-50' 
                      : 'border-secondary-200 bg-secondary-50'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                    info.color === 'primary' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'bg-secondary-100 text-secondary-600'
                  } mb-4`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </motion.div>
            
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}
            
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition appearance-none bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;