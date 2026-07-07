import React, { useState } from 'react';

// 1. App.jsx se aane wale parameters ko accept kiya + onAuthClick prop add kiya
export default function Navbar({ isDarkMode, onToggleTheme, onAuthClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`w-full sticky top-0 z-50 border-b transition-colors duration-500 ${
      isDarkMode ? 'bg-[#14342b] text-[#fbf9f4] border-stone-800' : 'bg-[#fbf9f4] text-[#14342b] border-stone-200'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        
        {/* LEFT SIDE: Logo & Name */}
        <div className={`group flex flex-shrink-0 items-center space-x-2 sm:space-x-3 cursor-pointer p-1.5 sm:p-2 border border-transparent rounded-xl transition-all duration-300 ${
          isDarkMode ? 'hover:border-[#fbf9f4]/60' : 'hover:border-[#14342b]/60'
        }`}>
          <div className={`h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 overflow-hidden rounded-full border bg-stone-200 ${
            isDarkMode ? 'border-[#fbf9f4]/20' : 'border-[#14342b]/20'
          }`}>
            <img 
              src="/logo.jpg" 
              alt="Zain Ul Abedeen" 
              className="h-full w-full object-cover"
            />
          </div>
          <span className={`font-serif text-base sm:text-lg font-bold tracking-tight whitespace-nowrap ${
            isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'
          }`}>
            <span className="inline sm:hidden xs:inline">Zain</span>
            <span className="hidden sm:inline">Zain Ul Abedeen</span>
            <span className="text-amber-600">.</span>
          </span>
        </div>

        {/* CENTER SIDE: Desktop Menu Links */}
        <div className={`hidden space-x-2 font-sans text-sm font-medium tracking-wide lg:flex ${
          isDarkMode ? 'text-stone-300' : 'text-stone-600'
        }`}>
          <a href="#home" className={`px-3 py-2 border border-transparent rounded-xl font-semibold transition-all duration-300 ${
            isDarkMode ? 'hover:border-[#fbf9f4]/60 text-[#fbf9f4]' : 'hover:border-[#14342b]/60 text-[#14342b]'
          }`}>Home</a>
          
          <a href="#about" className={`px-3 py-2 border border-transparent rounded-xl transition-all duration-300 ${
            isDarkMode ? 'hover:border-[#fbf9f4]/60 hover:text-[#fbf9f4]' : 'hover:border-[#14342b]/60 hover:text-[#14342b]'
          }`}>About Me</a>
          
          <a href="#skills" className={`px-3 py-2 border border-transparent rounded-xl transition-all duration-300 ${
            isDarkMode ? 'hover:border-[#fbf9f4]/60 hover:text-[#fbf9f4]' : 'hover:border-[#14342b]/60 hover:text-[#14342b]'
          }`}>Skills</a>
          
          <a href="#projects" className={`px-3 py-2 border border-transparent rounded-xl transition-all duration-300 ${
            isDarkMode ? 'hover:border-[#fbf9f4]/60 hover:text-[#fbf9f4]' : 'hover:border-[#14342b]/60 hover:text-[#14342b]'
          }`}>Projects</a>
          
          <a href="#reviews" className={`px-3 py-2 border border-transparent rounded-xl transition-all duration-300 ${
            isDarkMode ? 'hover:border-[#fbf9f4]/60 hover:text-[#fbf9f4]' : 'hover:border-[#14342b]/60 hover:text-[#14342b]'
          }`}>Reviews</a>
          
          <a href="#contact" className={`px-3 py-2 border border-transparent rounded-xl transition-all duration-300 ${
            isDarkMode ? 'hover:border-[#fbf9f4]/60 hover:text-[#fbf9f4]' : 'hover:border-[#14342b]/60 hover:text-[#14342b]'
          }`}>Contact</a>
        </div>

        {/* RIGHT SIDE: Theme, Auth, LinkedIn & Hamburger */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          
          {/* Moon/Sun Icon Button */}
          <button
            onClick={onToggleTheme}
            className={`flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl border bg-transparent transition-all duration-300 relative ${
              isDarkMode ? 'border-stone-700 text-[#fbf9f4] hover:border-[#fbf9f4]/60' : 'border-stone-300 text-stone-700 hover:border-[#14342b]/60'
            }`}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.64 6.36l1.58-1.58M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-stone-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25c0 5.385 4.365 9.75 9.75 9.75 4.523 0 8.354-3.209 9.272-7.498Z" />
              </svg>
            )}
            <span className="absolute bottom-1 h-1 w-1 rounded-full bg-amber-600"></span>
          </button>

          {/* NEW BUTTON: Portal Access (Signup / Login Trigger) */}
          <button
            onClick={onAuthClick}
            className={`flex h-9 sm:h-10 px-3 sm:px-4 flex-shrink-0 items-center justify-center rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider uppercase border-2 transition-all duration-300 shadow-sm whitespace-nowrap ${
              isDarkMode 
                ? 'border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-[#14342b]' 
                : 'border-[#14342b] text-[#14342b] hover:bg-[#14342b] hover:text-[#fbf9f4]'
            }`}
          >
            {/* Mobile View Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            {/* Desktop View Text */}
            <span className="hidden sm:inline">Portal Access</span>
          </button>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 sm:h-10 px-3 sm:px-4 flex-shrink-0 items-center justify-center rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-sm whitespace-nowrap ${
              isDarkMode 
                ? 'bg-[#fbf9f4] text-[#14342b] hover:bg-transparent hover:text-[#fbf9f4] border border-transparent hover:border-[#fbf9f4]/60' 
                : 'bg-[#14342b] text-[#fbf9f4] hover:bg-transparent hover:text-[#14342b] border border-transparent hover:border-[#14342b]/60'
            }`}
          >
            <svg className="w-4 h-4 sm:mr-1.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="hidden sm:inline">in</span>
          </a>

          {/* HAMBURGER ICON BUTTON (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex lg:hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
              isDarkMode ? 'border-stone-700 text-[#fbf9f4]' : 'border-stone-300 text-[#14342b]'
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* MOBILE & TABLET DROPDOWN DRAWER */}
      {isOpen && (
        <div className={`lg:hidden border-t px-4 py-4 space-y-2 font-sans text-sm font-medium transition-colors duration-500 ${
          isDarkMode ? 'bg-[#102a22] border-stone-800 text-stone-300' : 'bg-[#fbf9f4] border-stone-200 text-stone-600'
        }`}>
          <a onClick={() => setIsOpen(false)} href="#home" className={`block px-4 py-2 border border-transparent rounded-xl font-semibold ${isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'}`}>Home</a>
          <a onClick={() => setIsOpen(false)} href="#about" className="block px-4 py-2 border border-transparent rounded-xl hover:text-amber-500">About Me</a>
          <a onClick={() => setIsOpen(false)} href="#skills" className="block px-4 py-2 border border-transparent rounded-xl hover:text-amber-500">Skills</a>
          <a onClick={() => setIsOpen(false)} href="#projects" className="block px-4 py-2 border border-transparent rounded-xl hover:text-amber-500">Projects</a>
          <a onClick={() => setIsOpen(false)} href="#reviews" className="block px-4 py-2 border border-transparent rounded-xl hover:text-amber-500">Reviews</a>
          <a onClick={() => setIsOpen(false)} href="#contact" className="block px-4 py-2 border border-transparent rounded-xl hover:text-amber-500">Contact</a>
          
          {/* Mobile Drawer Auth Link */}
          <button 
            onClick={() => { setIsOpen(false); onAuthClick(); }} 
            className="w-full text-left block px-4 py-2 border border-transparent rounded-xl text-amber-500 font-bold"
          >
            Portal Access ↗
          </button>
        </div>
      )}
    </nav>
  );
}