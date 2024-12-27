import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Flame, Bug, Wind, Building2, ShieldCheck } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Droplets,
    title: 'Water Damage',
    description: 'Emergency water removal and complete drying services for floods and leaks.',
    path: '/services#water-damage'
  },
  {
    icon: Flame,
    title: 'Fire & Smoke',
    description: 'Professional cleanup and restoration services for fire and smoke damage.',
    path: '/services#fire-damage'
  },
  {
    icon: Bug,
    title: 'Mold Remediation',
    description: 'Expert mold removal and prevention services to ensure your safety.',
    path: '/services#mold-remediation'
  },
  {
    icon: Wind,
    title: 'Storm Damage',
    description: 'Fast response to storm damage including emergency board-up services.',
    path: '/services#storm-damage'
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Specialized restoration services for businesses and commercial properties.',
    path: '/services#commercial'
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Help',
    description: 'We work directly with your insurance to simplify the claims process.',
    path: '/services#insurance'
  }
];

export default function Services() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Professional restoration services for any disaster
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-12 h-12 text-primary mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group"
                >
                  Learn More 
                  <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}