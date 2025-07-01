'use client';

import { useEffect, useState } from 'react';

export default function WelcomeBackPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen max-h-[100vh] overflow-hidden bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden relative pt-4">
      {/* Chrome/Metallic Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-white/15 via-white/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* Shiny metallic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        {/* Main content */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Chrome Success Icon */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></div>
              <svg className="w-12 h-12 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>

          {/* Chrome/Metallic heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight relative">
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
              Welcome Back!
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-extrabold relative">
              You're All Set.
            </span>
          </h1>

          {/* Welcome back message */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            You've already purchased <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-bold">XpectViral</span>. 
            Your unfair advantage on X is active and ready.
          </p>

          {/* Reminder instructions - Chrome style */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                🚀 Ready to Dominate?
              </h2>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Just head over to X.com and start spotting trends.
              </p>
              <div className="bg-gradient-to-br from-black/50 via-gray-900/50 to-black/30 rounded-lg p-3 sm:p-4 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
                <p className="text-white font-mono text-sm sm:text-base md:text-lg relative z-10 break-words">
                  Remember to refresh X.com with <kbd className="bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 px-2 py-1 rounded text-white font-bold border border-white/20 shadow-lg text-xs sm:text-sm">Ctrl + R</kbd> if the extension isn't visible.
                </p>
              </div>
            </div>
          </div>

          {/* Chrome CTA Button */}
          <div className="space-y-4 sm:space-y-6">
            <button 
              onClick={() => window.open('https://x.com', '_blank')}
              className="group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full text-black font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-transparent group-hover:from-white/70 transition-all duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                🔥 Go to X.com
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-gray-500 text-xs sm:text-sm">
              Your supercharged experience is already active.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 