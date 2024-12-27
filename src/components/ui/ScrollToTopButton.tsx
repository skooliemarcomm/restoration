import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import IconButton from './IconButton';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
      <IconButton
        icon={ArrowUp}
        variant="accent"
        size="lg"
        onClick={scrollToTop}
        title="Scroll to top"
        className="shadow-lg hover:shadow-xl"
      />
    </div>
  );
}