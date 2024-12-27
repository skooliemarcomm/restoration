import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceSection from '../components/services/ServiceSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { 
  waterDamageService,
  fireDamageService,
  moldService,
  stormService,
  commercialService,
  insuranceService
} from '../data/servicesData';

const services = [
  waterDamageService,
  fireDamageService,
  moldService,
  stormService,
  commercialService,
  insuranceService
];

export default function ServicesPage() {
  const location = useLocation();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive restoration services to help you recover from any disaster. 
            Our expert team is available 24/7 for emergency response.
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`animate-fade-in-up transition-all duration-1000 transform`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ServiceSection {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}