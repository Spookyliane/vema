import React, { useEffect, useRef } from 'react';
import { PenTool as Tool, Wrench, Hammer, PaintBucket, Ruler } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      const elements = servicesRef.current.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (servicesRef.current) {
        const elements = servicesRef.current.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      icon: <Hammer className="h-12 w-12 text-emerald-600" />,
      title: "Carpentry",
      description: "Expert carpentry services including framing, trim work, door installation, and custom woodworking for your home."
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-emerald-600" />,
      title: "Painting",
      description: "Interior and exterior painting services with premium paints and professional techniques for a flawless finish."
    },
    {
      icon: <Wrench className="h-12 w-12 text-emerald-600" />,
      title: "Plumbing",
      description: "From leaky faucets to pipe replacements, our licensed plumbers handle all your home plumbing needs."
    },
    {
      icon: <Tool className="h-12 w-12 text-emerald-600" />,
      title: "General Repairs",
      description: "Comprehensive repair services for drywall, flooring, fixtures, and all aspects of home maintenance."
    },
    {
      icon: <Ruler className="h-12 w-12 text-emerald-600" />,
      title: "Remodeling",
      description: "Transform your space with our professional remodeling services for kitchens, bathrooms, and more."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50" ref={servicesRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto scroll-reveal animate-delay-100">
            We provide a wide range of professional home repair services throughout Texas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white rounded-lg shadow-md p-8 text-center scroll-reveal"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;