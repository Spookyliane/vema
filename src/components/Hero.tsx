import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const elementsRef = useRef<HTMLDivElement>(null);

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

    if (elementsRef.current) {
      const elements = elementsRef.current.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elementsRef.current) {
        const elements = elementsRef.current.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center" ref={elementsRef}>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7587879/pexels-photo-7587879.jpeg?w=1920&h=1080')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 scroll-reveal animate-slide-in-left">
            Professional Home Repair Services in Texas
          </h1>
          <p className="text-xl text-white mb-8 scroll-reveal animate-slide-in-left animate-delay-200">
            Quality craftsmanship, reliable service, and satisfaction guaranteed. We're your trusted partner for all home repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 scroll-reveal animate-slide-in-left animate-delay-300">
            <button 
              onClick={scrollToContact}
              className="ask-pro-button bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center"
            >
              Ask a Pro
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <a 
              href="tel:+12105551234" 
              className="bg-white hover:bg-gray-100 text-emerald-800 font-bold py-3 px-8 rounded-lg flex items-center justify-center"
            >
              Call Now: (210) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;