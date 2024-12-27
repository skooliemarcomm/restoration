import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from './hero/FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'IICRC Certified Technicians'
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'On-site within 60 minutes'
  },
  {
    icon: Award,
    title: '5-Star Service',
    description: 'Trusted by thousands'
  }
];

export default function Hero() {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 animate-scale-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 text-white">
        <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            24/7 Emergency Restoration Services
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Professional water, fire, and mold damage restoration. 
            We'll restore your property and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:1-800-247-2000"
              className="bg-accent text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-accent-dark transition-all hover:scale-105 transform"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-light transition-all hover:scale-105 transform"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                {...feature} 
                className={`animate-fade-in-up`}
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}