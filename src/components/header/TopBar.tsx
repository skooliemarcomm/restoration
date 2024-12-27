import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 hidden md:block">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
            <a href="tel:1-800-247-2000" className="hover:text-accent-light">1-800-247-2000</a>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>24/7 Emergency Service</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>Serving Pierce County</span>
          </div>
        </div>
      </div>
    </div>
  );
}