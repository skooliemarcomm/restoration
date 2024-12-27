import React from 'react';

export default function WaterDrop() {
  return (
    <>
      {/* Water Drop */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[108px] animate-waterdrop">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 0C4 0 0 4 0 6C0 8.5 2 10 4 10C6 10 8 8.5 8 6C8 4 4 0 4 0Z"
            fill="#25496b"
            fillOpacity="0.8"
          />
        </svg>
      </div>
      
      {/* Ripple Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[140px]">
        <div className="relative">
          <div className="animate-ripple absolute -left-4 w-8 h-8 border-2 border-primary/40 rounded-full"></div>
          <div className="animate-ripple absolute -left-3 w-6 h-6 border-2 border-primary/60 rounded-full animation-delay-100"></div>
          <div className="animate-ripple absolute -left-2 w-4 h-4 border-2 border-primary/80 rounded-full animation-delay-200"></div>
        </div>
      </div>
    </>
  );
}