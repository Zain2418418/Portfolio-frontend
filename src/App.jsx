import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import About from './Components/About';
import Skills from './Components/Skills';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Projects from './Components/Project';
import AuthModal from './Components/AuthModal'; // 1. AuthModal component ko import kiya

export default function App() {
  // Centralized Theme State Controller
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Auth Modal State Controller (By default false/closed rahega)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Toggle utility handler
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    // Pure app wrapper ka layout dynamic variables ke sath
    <div className={`min-h-screen antialiased transition-colors duration-500 ${
      isDarkMode ? 'bg-[#14342b] text-[#fbf9f4]' : 'bg-[#fbf9f4] text-[#14342b]'
    }`}>
      
      {/* 3. Navbar ko states ke sath onAuthClick function bhej diya */}
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleTheme={toggleTheme} 
        onAuthClick={() => setIsAuthModalOpen(true)} 
      />
      
      {/* Prop tracking standard inject to all internal features */}
      <Hero isDarkMode={isDarkMode} />
      <Stats isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Reviews isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />

      {/* 4. AuthModal component ko layout ke end par render kiya */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        isDarkMode={isDarkMode} 
      />
      
    </div>
  );
}