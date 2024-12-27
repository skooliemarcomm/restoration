import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RestorePro</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Professional restoration services available 24/7. We restore your property and peace of mind.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white">Water Damage</a></li>
              <li><a href="#" className="hover:text-white">Fire & Smoke Damage</a></li>
              <li><a href="#" className="hover:text-white">Mold Remediation</a></li>
              <li><a href="#" className="hover:text-white">Storm Damage</a></li>
              <li><a href="#" className="hover:text-white">Commercial Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="break-words">1-800-247-2000</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <span className="break-all">
                  contact@skoolierestoration.com
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <span className="break-words">
                  123 Main St, Suite 100<br />Metro City, ST 12345
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>IICRC Certified Firm</li>
              <li>EPA Lead-Safe Certified</li>
              <li>BBB Accredited Business</li>
              <li>Licensed & Insured</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} RestorePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}