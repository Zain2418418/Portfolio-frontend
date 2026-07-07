import React, { useState, useEffect } from 'react';

// 1. Header par isDarkMode prop ko accept kiya
export default function Hero({ isDarkMode }) {
  const designations = ["Software Engineer", "MERN Developer", "Next Js Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // 2. Main section background aur text color ko dynamic kiya smoothly transition ke sath
    <section 
      id="home" 
      className={`w-full py-10 md:py-16 px-8 md:px-16 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#14342b] text-[#fbf9f4]' : 'bg-[#fbf9f4] text-[#14342b]'
      }`}
    >
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT BLOCK: Content, Blinking Name & Sliding Text */}
        <div className="space-y-5 md:max-w-md justify-self-start">
          <div className={`flex items-center space-x-2 text-xs font-bold tracking-widest uppercase ${
            isDarkMode ? 'text-stone-400' : 'text-stone-500'
          }`}>
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
            <span>Welcome to my creative space</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-none animate-pulse">
            Zain Ul <br /> Abedeen
          </h1>

          <div className="h-10 flex items-center overflow-hidden">
            <h2 
              key={currentIndex} 
              className={`font-serif text-2xl sm:text-3xl font-semibold transition-all duration-700 ease-out transform translate-x-0 opacity-100 animate-[slideIn_0.6s_ease-out] ${
                isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'
              }`}
            >
              {designations[currentIndex]}
            </h2>
          </div>

          <p className={`text-sm sm:text-base font-sans leading-relaxed ${
            isDarkMode ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Highly focused front-end developer and designer committed to building pixel-perfect, interactive, and high-performance modern web interfaces.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            {/* Primary Button */}
            <a 
              href="#contact" 
              className={`px-5 py-2.5 font-semibold rounded-xl transition-all duration-300 shadow-md text-sm border ${
                isDarkMode 
                  ? 'bg-[#fbf9f4] text-[#14342b] border-transparent hover:bg-transparent hover:text-[#fbf9f4] hover:border-[#fbf9f4]/60' 
                  : 'bg-[#14342b] text-[#fbf9f4] border-transparent hover:bg-transparent hover:text-[#14342b] hover:border-[#14342b]/60'
              }`}
            >
              Hire Me ↗
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#portfolio" 
              className={`px-5 py-2.5 border rounded-xl font-semibold transition-all duration-300 text-sm ${
                isDarkMode 
                  ? 'border-stone-700 text-stone-300 hover:border-[#fbf9f4]/60 hover:text-[#fbf9f4]' 
                  : 'border-stone-300 text-stone-700 hover:border-[#14342b]/60 hover:text-[#14342b]'
              }`}
            >
              View Portfolio ↗
            </a>
          </div>
        </div>

        {/* RIGHT BLOCK: Image Frame with Integrated Floating Badge */}
        <div className="relative flex justify-center md:justify-self-end w-full max-w-sm sm:max-w-[340px]">
          
          <div className={`relative w-full aspect-square rounded-[2rem] border shadow-xl animate-[float_4s_ease-in-out_infinite] ${
            isDarkMode ? 'border-stone-800 bg-stone-900' : 'border-stone-200 bg-stone-100'
          }`}>
            <img 
              src="/logo.jpg" 
              alt="Zain Ul Abedeen Portfolio" 
              className="w-full h-full object-cover rounded-[2rem] transform hover:scale-105 transition-transform duration-700"
            />
            
            {/* Soft Overlay shadow effect at base */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14342b]/10 via-transparent to-transparent pointer-events-none rounded-[2rem]"></div>

            {/* Floating Badge (Dyanmic Theme Colors applied) */}
            <div className={`absolute bottom-4 -left-4 border rounded-xl p-2.5 shadow-md flex flex-col min-w-[110px] transition-transform hover:-translate-y-1 duration-300 pointer-events-auto ${
              isDarkMode 
                ? 'bg-[#1a3f35] border-stone-700/60 text-[#fbf9f4]' 
                : 'bg-white border-stone-200 text-[#14342b]'
            }`}>
              <span className={`font-serif font-bold text-xs ${isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'}`}>Top Rated</span>
              <span className={`text-[9px] font-medium whitespace-nowrap ${isDarkMode ? 'text-stone-300' : 'text-stone-500'}`}>Front-End Developer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}