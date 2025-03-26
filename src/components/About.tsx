import React, { useEffect, useRef } from 'react';
import { MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (aboutRef.current) {
        const elements = aboutRef.current.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={aboutRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/11806476/pexels-photo-11806476.jpeg" 
                alt="Texas Home Repair Team" 
                className="rounded-lg shadow-xl scroll-reveal animate-slide-in-left"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg scroll-reveal animate-slide-in-left animate-delay-200">
                <p className="text-lg font-bold">15+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 scroll-reveal animate-slide-in-right">
              Trusted Home Repair Experts in Texas
            </h2>
            <p className="text-lg text-gray-700 mb-6 scroll-reveal animate-slide-in-right animate-delay-100">
              With over 15 years of experience, Texas Home Repair has been providing top-quality home repair services to homeowners across the Lone Star State. Our team of skilled professionals is dedicated to delivering exceptional craftsmanship and customer service.
            </p>
            <p className="text-lg text-gray-700 mb-8 scroll-reveal animate-slide-in-right animate-delay-200">
              We take pride in our attention to detail, reliability, and commitment to customer satisfaction. Whether you need minor repairs or major renovations, we have the expertise to get the job done right the first time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start scroll-reveal animate-slide-in-right animate-delay-300">
                <MapPin className="h-6 w-6 text-emerald-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Service Area</h3>
                  <p className="text-gray-700">Serving Dallas, Houston, Austin, San Antonio, and surrounding areas</p>
                </div>
              </div>
              
              <div className="flex items-start scroll-reveal animate-slide-in-right animate-delay-400">
                <Clock className="h-6 w-6 text-emerald-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-700">Monday-Friday: 8am-6pm<br />Saturday: 9am-3pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;