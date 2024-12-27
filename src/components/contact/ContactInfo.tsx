import React from 'react';
import { contactInfo } from '../../data/contactInfo';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
      {contactInfo.map((info, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <info.icon className="w-8 h-8 text-primary mx-auto mb-4 animate-float" />
          <h3 className="font-semibold mb-2">{info.title}</h3>
          <p className="text-accent font-bold mb-1 break-words text-sm sm:text-base">
            {info.content}
          </p>
          <p className="text-sm text-gray-600 break-words whitespace-normal">
            {info.description}
          </p>
        </div>
      ))}
    </div>
  );
}