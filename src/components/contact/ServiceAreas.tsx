import React from 'react';
import { MapPin } from 'lucide-react';

const serviceAreas = [
  'Tacoma',
  'Puyallup',
  'Sumner',
  'Fife',
  'Auburn',
  'Gig Harbor',
  'Bonney Lake',
  'Lakewood',
  'Federal Way',
  'University Place'
];

export default function ServiceAreas() {
  return (
    <div className="bg-primary text-white p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <MapPin className="w-6 h-6 mr-2 animate-float" />
        <h3 className="text-xl font-bold">Service Area</h3>
      </div>
      <p className="mb-4">
        We proudly serve Pierce and South King County, including:
      </p>
      <ul className="grid grid-cols-2 gap-2">
        {serviceAreas.map((area) => (
          <li key={area} className="flex items-center group">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
}