import React from 'react';

export default function FaucetIcon() {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform scale-75 md:scale-100"
    >
      {/* Mount Plate */}
      <rect x="40" y="20" width="80" height="12" rx="4" fill="#c6ab86" />
      <rect x="42" y="20" width="76" height="4" fill="#b89869" />
      
      {/* Faucet Body */}
      <rect x="70" y="32" width="20" height="50" fill="#c6ab86" />
      <rect x="72" y="34" width="16" height="46" fill="#d4bea0" />
      
      {/* Texture Lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="73"
          y={40 + i * 8}
          width="14"
          height="1"
          fill="#b89869"
          opacity="0.3"
        />
      ))}
      
      {/* Spout Base */}
      <rect x="50" y="82" width="60" height="20" fill="#c6ab86" />
      <path
        d="M110 82 L120 82 L120 102 L110 102 Z"
        fill="#c6ab86"
      />
      
      {/* Spout Details */}
      <rect x="112" y="85" width="6" height="1" fill="#b89869" opacity="0.3" />
      <rect x="112" y="89" width="6" height="1" fill="#b89869" opacity="0.3" />
      <rect x="112" y="93" width="6" height="1" fill="#b89869" opacity="0.3" />
      
      {/* Bottom Lip */}
      <path
        d="M75 102 L95 102 L90 108 L80 108 L75 102 Z"
        fill="#c6ab86"
      />
      <rect x="80" y="104" width="10" height="1" fill="#b89869" opacity="0.3" />
      
      {/* Connector Ring */}
      <ellipse
        cx="80"
        cy="82"
        rx="15"
        ry="4"
        fill="#b89869"
        opacity="0.2"
      />
      
      {/* Mounting Screws */}
      <circle cx="45" cy="26" r="2" fill="#b89869" />
      <circle cx="115" cy="26" r="2" fill="#b89869" />
    </svg>
  );
}