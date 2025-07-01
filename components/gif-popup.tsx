'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GifPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem('gifPopupShown');

    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('gifPopupShown', 'true');
      }, 8000); // 8 secondes

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[200px]">
      <div className="relative rounded-xl shadow-2xl">
        {/* Croix rouge pour fermer */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-red-500/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200"
          aria-label="Fermer"
        >
          ×
        </button>
        
        {/* GIF */}
        <Image
          src="/gif-join-us.gif"
          alt="Join us GIF"
          width={200}
          height={100}
          className="rounded-xl"
          unoptimized // Nécessaire pour les GIFs animés
        />
      </div>
    </div>
  );
} 