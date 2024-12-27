import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ServiceAreas from '../components/contact/ServiceAreas';
import ContactForm from '../components/contact/ContactForm';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ContactPage() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Available 24/7 for emergency restoration services. Contact us now for immediate assistance.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1000 transform ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <ContactInfo />
            <ServiceAreas />
          </div>
          <div className="animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}