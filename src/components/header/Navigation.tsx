import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary z-50"
          onClick={closeMenu}
        >
          Skoolie Restoration
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-gray-700 hover:text-primary">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">
            Contact
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary">
            Blog
          </Link>
          <Link
            to="/contact"
            className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-dark transition-colors"
          >
            Emergency Service
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden ${
          isMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-white shadow-lg z-50' 
            : 'hidden'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link 
            to="/services" 
            className="text-gray-700 hover:text-primary"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-primary"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-primary"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link 
            to="/blog" 
            className="text-gray-700 hover:text-primary"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-dark transition-colors text-center"
            onClick={closeMenu}
          >
            Emergency Service
          </Link>
        </div>
      </div>
    </>
  );
}