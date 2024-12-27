import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export default function ServiceSection({ 
  id, 
  icon: Icon, 
  title, 
  description, 
  details, 
  image 
}: ServiceSectionProps) {
  return (
    <div id={id} className="bg-white rounded-lg shadow-lg overflow-hidden scroll-mt-24 hover:shadow-xl transition-all duration-300">
      <div className="grid md:grid-cols-2">
        <div className="p-8">
          <Icon className="w-16 h-16 text-primary mb-6 animate-float" />
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-center text-gray-700 group">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {detail}
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            className="mt-8 inline-flex items-center bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition-all duration-300 group"
          >
            Request Service
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div 
          className="h-64 md:h-auto bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </div>
    </div>
  );
}