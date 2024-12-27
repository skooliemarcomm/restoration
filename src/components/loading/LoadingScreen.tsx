import React, { useState, useEffect } from 'react';
import FaucetIcon from './FaucetIcon';
import WaterDrop from './WaterDrop';
import WaterBackground from './WaterBackground';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, 1000);

    return () => clearTimeout(hideTimer);
  }, []);

  return (
    <div 
      className={`
        fixed inset-0 bg-white z-50 flex flex-col items-center justify-center overflow-hidden
        transition-all duration-1000 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${isHiding ? 'opacity-0' : ''}
      `}
    >
      <WaterBackground />
      <div className="relative z-10 w-40 h-48 mb-8">
        <FaucetIcon />
        <WaterDrop />
      </div>
      <p className="relative z-10 text-accent text-lg font-medium animate-pulse">
        Restoring your experience...
      </p>
    </div>
  );
}