import React from 'react';

// 1. Component header par isDarkMode prop accept kiya
export default function About({ isDarkMode }) {
  return (
    // 2. Main Section section base properties update
    <section 
      id="about" 
      className={`w-full py-12 md:py-16 px-6 sm:px-8 md:px-16 overflow-hidden border-t transition-colors duration-500 ${
        isDarkMode ? 'bg-[#14342b] text-[#fbf9f4] border-stone-800' : 'bg-[#fbf9f4] text-[#14342b] border-stone-200'
      }`}
    >
      <div className="mx-auto max-w-5xl">
        
        {/* TOP SECTION: Centered Minimal Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <div className={`flex items-center space-x-2 text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${
            isDarkMode ? 'text-stone-400' : 'text-stone-500'
          }`}>
            <span className={`w-4 h-[1.5px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
            <span>Get To Know Me</span>
            <span className={`w-4 h-[1.5px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            About My Journey<span className="text-amber-600">.</span>
          </h2>
        </div>

        {/* BOTTOM SECTION: Bento-Style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* BIG CARD: MERN Developer Bio (Inverted for Contrast on Dark Mode) */}
          <div className={`md:col-span-2 p-6 sm:p-8 rounded-[2rem] shadow-lg flex flex-col justify-between transition-all duration-500 hover:shadow-xl group ${
            isDarkMode 
              ? 'bg-[#fbf9f4] text-[#14342b]' 
              : 'bg-[#14342b] text-[#fbf9f4]'
          }`}>
            <div className="space-y-4">
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isDarkMode ? 'text-amber-700' : 'text-amber-500/90'
              }`}>
                Who I Am
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-tight">
                Crafting robust web logic with the MERN Stack framework.
              </h3>
              <p className={`text-sm font-sans leading-relaxed text-justify transition-colors duration-500 ${
                isDarkMode ? 'text-stone-700' : 'text-stone-200/90'
              }`}>
                I am a passionate MERN Stack Developer dedicated to creating highly interactive, pixel-perfect, and optimized web solutions. With a deep foundation in frontend architectures, functional programming, and data structures, I specialize in building scalable applications using React, Node.js, Express, and MongoDB. I thrive on translating complex UI/UX wireframes into functional, clean code while ensuring cross-browser seamless rendering and responsive precision.
              </p>
            </div>
            
            <div className={`pt-6 border-t mt-6 flex justify-between items-center text-xs font-mono transition-colors duration-500 ${
              isDarkMode ? 'border-[#14342b]/10 text-stone-500' : 'border-white/10 text-stone-300/70'
            }`}>
              <span>// Based in Pakistan</span>
              <span className={`transition-colors duration-300 ${
                isDarkMode ? 'group-hover:text-amber-700' : 'group-hover:text-amber-500'
              }`}>
                Available for Projects ↗
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="flex flex-col gap-6 md:col-span-1 justify-between">
            
            {/* Academic Card */}
            <div className={`p-6 rounded-[2rem] shadow-sm transition-all duration-500 flex flex-col justify-between flex-1 border-2 ${
              isDarkMode 
                ? 'bg-[#1a3f35] border-stone-700 hover:border-[#fbf9f4]' 
                : 'bg-white border-[#14342b]/80 hover:border-[#14342b]'
            }`}>
              <div className="space-y-2">
                <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-amber-600 font-bold text-sm ${
                  isDarkMode ? 'bg-[#14342b]/40' : 'bg-[#14342b]/5'
                }`}>
                  🎓
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  isDarkMode ? 'text-stone-400' : 'text-stone-500'
                }`}>
                  Education
                </span>
                <h4 className={`font-serif text-base sm:text-lg font-bold leading-tight ${
                  isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'
                }`}>
                  Virtual University of Pakistan
                </h4>
              </div>
              <p className={`text-xs font-sans mt-4 pt-3 border-t ${
                isDarkMode ? 'border-stone-700 text-stone-400' : 'border-[#14342b]/10 text-stone-500'
              }`}>
                Bachelor of Science in Computer Science (BSCS) — <span className={`font-semibold ${isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'}`}>Final Year</span>
              </p>
            </div>

            {/* Certification Card */}
            <div className={`p-6 rounded-[2rem] shadow-sm transition-all duration-500 flex flex-col justify-between flex-1 border-2 ${
              isDarkMode 
                ? 'bg-[#1a3f35] border-stone-700 hover:border-[#fbf9f4]' 
                : 'bg-white border-[#14342b]/80 hover:border-[#14342b]'
            }`}>
              <div className="space-y-2">
                <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-amber-600 font-bold text-sm ${
                  isDarkMode ? 'bg-[#14342b]/40' : 'bg-[#14342b]/5'
                }`}>
                  📜
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  isDarkMode ? 'text-stone-400' : 'text-stone-500'
                }`}>
                  Training
                </span>
                <h4 className={`font-serif text-base sm:text-lg font-bold leading-tight ${
                  isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'
                }`}>
                  MERN Stack Specialization
                </h4>
              </div>
              <p className={`text-xs font-sans mt-4 pt-3 border-t ${
                isDarkMode ? 'border-stone-700 text-stone-400' : 'border-[#14342b]/10 text-stone-500'
              }`}>
                Advanced Development Deployment — <span className={`font-semibold ${isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'}`}>Final Year Certification</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}