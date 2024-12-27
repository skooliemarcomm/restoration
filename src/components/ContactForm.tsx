import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ContactForm() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`max-w-3xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">
            Request Emergency Service
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-900 transform transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]"
                  placeholder="Your name"
                />
              </div>
              <div className="animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                <label className="block mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-900 transform transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-900 transform transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]"
                placeholder="Your email"
              />
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <label className="block mb-2">Type of Damage</label>
              <select className="w-full px-4 py-3 rounded-md bg-white text-gray-900 transform transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]">
                <option value="">Select damage type</option>
                <option value="water">Water Damage</option>
                <option value="fire">Fire & Smoke Damage</option>
                <option value="mold">Mold</option>
                <option value="storm">Storm Damage</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-md bg-white text-gray-900 transform transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]"
                rows={4}
                placeholder="Describe your emergency"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 transform"
            >
              Submit Emergency Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}