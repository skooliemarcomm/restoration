import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const stats = [
  { icon: Shield, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '10k+', label: 'Satisfied Clients' },
  { icon: Clock, value: '24/7', label: 'Emergency Response' },
  { icon: Award, value: '100%', label: 'Satisfaction Rate' }
];

export default function AboutPage() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">About Skoolie Restoration</h1>
          <p className="text-xl text-gray-600">
            Since 2008, we've been the trusted name in restoration services, helping families and businesses recover from disasters.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1000 transform ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide rapid, reliable restoration services that help our clients recover from property damage with minimal disruption to their lives.
            </p>
            <ul className="space-y-4">
              {['IICRC Certified technicians with extensive training', 
                'State-of-the-art equipment and techniques',
                'Comprehensive insurance claim assistance'].map((item, index) => (
                <li key={index} className="flex items-start animate-fade-in-left" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div 
            className="h-64 md:h-auto bg-cover bg-center rounded-lg animate-fade-in-right"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
              animationDelay: '0.4s'
            }}
          ></div>
        </div>

        <div 
          ref={statsRef}
          className={`grid md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 transform ${
            statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className={`bg-primary text-white rounded-lg p-8 text-center transition-all duration-1000 transform ${
            ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="mb-6">Contact us today for a free consultation and estimate.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-accent hover:bg-accent-dark px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}