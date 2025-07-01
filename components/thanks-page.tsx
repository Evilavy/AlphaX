'use client';

import { useEffect, useState } from 'react';

export default function ThanksPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden relative pt-6">
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
          <div className="mb-2">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></div>
              <svg className="w-12 h-12 text-black relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* Chrome/Metallic heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight relative">
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
              Welcome to the
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-extrabold relative">
              Supercharged
            </span>
            <span className="block bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">Experience</span>
          </h1>

          {/* Thank you message */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Thank you for purchasing <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-bold">XpectViral</span>! 
            You're now equipped with the ultimate unfair advantage on X.
          </p>

          {/* Activation instructions - Chrome style */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                ⚡ Activate Your Superpower
              </h2>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                To start dominating on X, you need to activate the extension:
              </p>
              <div className="bg-gradient-to-br from-black/50 via-gray-900/50 to-black/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
                <p className="text-white font-mono text-sm sm:text-base md:text-lg relative z-10 break-words">
                  Press <kbd className="bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 px-2 py-1 rounded text-white font-bold border border-white/20 shadow-lg text-xs sm:text-sm">Ctrl + R</kbd> 
                  <span className="text-gray-400"> (or </span>
                  <kbd className="bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 px-2 py-1 rounded text-white font-bold border border-white/20 shadow-lg text-xs sm:text-sm">Cmd + R</kbd>
                  <span className="text-gray-400"> on Mac)</span>
                </p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                when you return to X.com to activate XpectViral extension
              </p>
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
                🚀 Start Growing on X
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-gray-500 text-xs sm:text-sm">
              Ready to spot high-velocity tweets before they explode? Let's go! 🔥
            </p>
          </div>

          {/* Chrome Features preview - Better integrated */}
          <div className="mt-8 sm:mt-10 md:mt-12 max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Your Premium Arsenal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 relative overflow-hidden group hover:border-white/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent group-hover:from-white/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
                  <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Spot Early</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Identify high-velocity tweets early</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 relative overflow-hidden group hover:border-white/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent group-hover:from-white/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
                  <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Act Fast</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Jump in at the perfect moment for maximum impact</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 relative overflow-hidden group hover:border-white/30 transition-all duration-300 sm:col-span-2 md:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent group-hover:from-white/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📈</div>
                  <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Grow Fast</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Boost your visibility and audience exponentially</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 