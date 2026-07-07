import React from 'react';

export default function Stats({ isDarkMode }) {
  const statsData = [
    { number: "100+", label: "Github Commits" },
    { number: "3+", label: "Live Projects" },
    { number: "3+", label: "Languages" },
    { number: "400+", label: "Coding Hours" }
  ];

  return (
    <section className={`w-full py-8 md:py-10 px-4 sm:px-8 md:px-16 border-t transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#fbf9f4] text-[#14342b] border-[#14342b]/10' 
        : 'bg-[#14342b] text-[#fbf9f4] border-[#fbf9f4]/10'
    }`}>
      
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 sm:gap-x-6 text-center items-center">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-1 group w-full">
            
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight transition-transform duration-300 group-hover:scale-105 select-none">
              {stat.number}
            </span>
            
            <span className={`text-[11px] sm:text-xs md:text-sm font-sans tracking-wide max-w-[130px] sm:max-w-[160px] leading-snug break-words transition-colors duration-500 ${
              isDarkMode ? 'text-stone-600' : 'text-stone-300/80'
            }`}>
              {stat.label}
            </span>
            
          </div>
        ))}
      </div>
    </section>
  );
}