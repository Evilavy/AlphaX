"use client";

import { useEffect, useState } from "react";

export default function ThanksPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden relative pt-12">
      {/* Chrome/Metallic Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-white/15 via-white/5 to-transparent rounded-full blur-3xl"></div>

      {/* Shiny metallic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        {/* Main content */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
      

          {/* Chrome/Metallic heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight relative">
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
              Welcome to the Supercharged
            </span>

            <span className="block bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          {/* Thank you message */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-5 leading-relaxed max-w-3xl mx-auto px-2">
            Thank you for purchasing{" "}
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-bold">
              XpectViral
            </span>
            ! You're now equipped with the ultimate unfair advantage on X.
          </p>

          {/* Activation instructions - Chrome style */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 md:p-5 mb-5 sm:mb-6 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                ⚡ Activate Your Superpower
              </h2>
              <div className="flex justify-center mb-4">
                <img
                  src="/welcome-thanks-gif.gif"
                  alt="Click to activate XpectViral extension"
                  className="rounded-lg border border-white/20 shadow-lg max-w-full h-auto"
                />
              </div>
                              <div className="bg-gradient-to-br from-yellow-500/20 via-orange-500/15 to-red-500/20 border-2 border-yellow-400/50 rounded-lg p-4 mb-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-yellow-400 text-xl">⚠️</span>
                    <h3 className="text-yellow-100 font-bold text-base sm:text-lg">IMPORTANT STEPS</h3>
                    <span className="text-yellow-400 text-xl">⚠️</span>
                  </div>
                  <div className="space-y-2 text-white">
                    <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3 border border-yellow-400/30">
                      <span className="bg-yellow-400 text-black font-bold text-sm px-2 py-1 rounded-full min-w-[24px] text-center">1</span>
                      <span className="text-sm sm:text-base font-medium">Click on the XpectViral extension button</span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3 border border-yellow-400/30">
                      <span className="bg-yellow-400 text-black font-bold text-sm px-2 py-1 rounded-full min-w-[24px] text-center">2</span>
                      <span className="text-sm sm:text-base font-medium">Refresh your page (Ctrl+R or Cmd+R)</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-yellow-200 text-xs sm:text-sm bg-black/20 px-3 py-1 rounded-full border border-yellow-400/30">
                      🚀 Then start spotting viral content!
                    </span>
                  </div>
                </div>
            </div>
          </div>

          {/* Chrome CTA Button */}
          <div className="space-y-2 sm:space-y-3">
            <button
              onClick={() => window.open("https://x.com", "_blank")}
              className="group relative px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full text-black font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-transparent group-hover:from-white/70 transition-all duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                🚀 Start Growing on X
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <p className="text-gray-500 text-xs sm:text-sm">
              Ready to spot high-velocity tweets before they explode? Let's go!
              🔥
            </p>
          </div>

          {/* Chrome Features preview - Better integrated */}
          <div className="mt-5 sm:mt-6 max-w-4xl mx-auto mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-5 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Your Premium Arsenal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 relative overflow-hidden group hover:border-white/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent group-hover:from-white/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🎯</div>
                  <h4 className="text-sm sm:text-base font-bold mb-1 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    Spot Early
                  </h4>
                  <p className="text-gray-400 text-xs">
                    Identify high-velocity tweets early
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 relative overflow-hidden group hover:border-white/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent group-hover:from-white/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">⚡</div>
                  <h4 className="text-sm sm:text-base font-bold mb-1 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    Act Fast
                  </h4>
                  <p className="text-gray-400 text-xs">
                    Jump in at the perfect moment for maximum impact
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 relative overflow-hidden group hover:border-white/30 transition-all duration-300 sm:col-span-2 md:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent group-hover:from-white/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📈</div>
                  <h4 className="text-sm sm:text-base font-bold mb-1 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    Grow Fast
                  </h4>
                  <p className="text-gray-400 text-xs">
                    Boost your visibility and audience exponentially
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
