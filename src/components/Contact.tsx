import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'General'
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (contactRef.current) {
        const elements = contactRef.current.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend or email service
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'General'
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={contactRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">Ask a Pro</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto scroll-reveal animate-delay-100">
            Have questions about your home repair project? Contact our experts for professional advice and free estimates.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 scroll-reveal animate-slide-in-left">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">(210) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">info@texashomerepair.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-700">
                      123 Repair Avenue<br />
                      Houston, TX 77001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Service Areas</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 rounded px-3 py-2 text-gray-700">Houston</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-gray-700">Dallas</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-gray-700">Austin</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-gray-700">San Antonio</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-gray-700">Fort Worth</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-gray-700">El Paso</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 scroll-reveal animate-slide-in-right">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-fade-in" role="alert">
                  <strong className="font-bold">Thank you!</strong>
                  <span className="block sm:inline"> Your message has been sent. We'll get back to you shortly.</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Painting">Painting</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="General Repairs">General Repairs</option>
                    <option value="Remodeling">Remodeling</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="ask-pro-button w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;