import React from 'react';

export default function WaterBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave Animation Container */}
      <div className="absolute inset-0 opacity-10 animate-rise">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`absolute inset-0 animate-wave${i + 1}`}>
            <div className="absolute inset-0">
              <svg
                className="absolute w-[200%] h-full"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
              >
                <path
                  className="fill-primary"
                  d={`
                    M0,${600 + i * 50} 
                    C150,${550 + i * 50} 350,${650 + i * 50} 500,${600 + i * 50}
                    C650,${550 + i * 50} 850,${650 + i * 50} 1000,${600 + i * 50}
                    L1000,1000 L0,1000 Z
                  `}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}