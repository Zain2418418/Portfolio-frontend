import React from 'react';

// 1. Header par isDarkMode prop accept kiya
export default function Skills({ isDarkMode }) {
  const skillsData = [
    { name: "React.js", level: "Frontend Core", icon: "⚛️", delay: "delay-[0ms]" },
    { name: "Next.js", level: "SSR & Framework", icon: "▲", delay: "delay-[75ms]" },
    { name: "Node.js", level: "Backend Runtime", icon: "🟢", delay: "delay-[150ms]" },
    { name: "Express.js", level: "Server Framework", icon: "🚂", delay: "delay-[225ms]" },
    { name: "MongoDB", level: "Database", icon: "🍃", delay: "delay-[300ms]" },
    { name: "JavaScript", level: "Language Core", icon: "💛", delay: "delay-[375ms]" },
    { name: "Tailwind CSS", level: "Styling Precision", icon: "🎨", delay: "delay-[450ms]" },
    { name: "Git & GitHub", level: "Version Control", icon: "🐙", delay: "delay-[525ms]" }
  ];

  return (
    // 2. Main Section wrapper ko template literals ke sath structural theme handle ki
    <section 
      id="skills" 
      className={`w-full py-12 md:py-16 px-6 sm:px-8 md:px-16 overflow-hidden border-t transition-colors duration-500 ${
        isDarkMode ? 'bg-[#14342b] text-[#fbf9f4] border-stone-800' : 'bg-[#fbf9f4] text-[#14342b] border-stone-200'
      }`}
    >
      <div className="mx-auto max-w-5xl">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className={`flex items-center space-x-2 text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${
            isDarkMode ? 'text-stone-400' : 'text-stone-500'
          }`}>
            <span className={`w-4 h-[1.5px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
            <span>My Technical Arsenal</span>
            <span className={`w-4 h-[1.5px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Skills & Technologies<span className="text-amber-600">.</span>
          </h2>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] ${skill.delay} p-5 rounded-[1.8rem] shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300 flex flex-col justify-between group border-2 ${
                isDarkMode 
                  ? 'bg-[#1a3f35] border-stone-700 hover:border-[#fbf9f4]' 
                  : 'bg-white border-[#14342b]/80 hover:border-[#14342b]'
              }`}
            >
              {/* Top Row: Icon & Status Dot */}
              <div className="flex justify-between items-center mb-3">
                <div className="text-2xl select-none filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></div>
              </div>

              {/* Bottom Row: Name & Level */}
              <div className="space-y-0.5">
                <h4 className={`font-serif text-base sm:text-lg font-bold tracking-tight transition-colors duration-500 ${
                  isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'
                }`}>
                  {skill.name}
                </h4>
                <p className={`text-[11px] font-sans tracking-wide font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-stone-400' : 'text-stone-500'
                }`}>
                  {skill.level}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}