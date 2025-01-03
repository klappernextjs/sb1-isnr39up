import React from 'react';
import { CatTraits } from '../../../types/CatTraits';

interface DummyCatProps {
  traits: CatTraits;
}

export default function DummyCat({ traits }: DummyCatProps) {
  // This is a placeholder SVG that mimics CryptoKitties style
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="400" fill={traits.background.toLowerCase()} rx="20" />
      
      {/* Base cat shape */}
      <g transform="translate(100, 80)">
        {/* Body */}
        <path
          d="M100,240 C180,240 200,180 200,160 C200,100 160,40 100,40 C40,40 0,100 0,160 C0,180 20,240 100,240"
          fill="#FFE5D9"
          stroke="#FFB7A5"
          strokeWidth="4"
        />
        
        {/* Face */}
        <circle cx="60" cy="120" r="8" fill="#000" /> {/* Left eye */}
        <circle cx="140" cy="120" r="8" fill="#000" /> {/* Right eye */}
        <path
          d="M90,140 Q100,150 110,140"
          fill="none"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
        /> {/* Mouth */}
        
        {/* Ears */}
        <path
          d="M40,80 L20,20 L60,60 Z"
          fill="#FFE5D9"
          stroke="#FFB7A5"
          strokeWidth="4"
        />
        <path
          d="M160,80 L180,20 L140,60 Z"
          fill="#FFE5D9"
          stroke="#FFB7A5"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}