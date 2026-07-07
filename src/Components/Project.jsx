import React from 'react';

// 1. Component header par isDarkMode prop accept kiya
export default function Projects({ isDarkMode }) {
  const projectsData = [
    {
      title: "E-Side Web Clone",
      category: "Full-Stack Web App",
      description: "A pixel-perfect clone of the E-Side application featuring dynamic layout handling, fully responsive flex grids, and seamless interactive core states.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      liveLink: "https://enside-clone.vercel.app/",
      image: "/enside.png"
    },
    {
      title: "Netflix Streaming Clone",
      category: "Entertainment UI / UX",
      description: "Highly polished Netflix frontend featuring real-time TMDB dynamic movie rows integration, smooth lazy loading images, video preview models, and interactive hover scales.",
      tech: ["React.js", "Tailwind CSS", "TMDB API"],
      liveLink: "https://netflix-clone-html-css-ruddy.vercel.app/",
      image: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
    },
    {
      title: "My Portfolio",
      category: "FinTech Data Tracking",
      description: "A premium modern financial dashboard utilizing live webhooks data to render cryptocurrency market analysis graphs with crisp transitions.",
      tech: ["React.js", "Tailwind CSS", "JavaScript.js"],
      liveLink: "https://my-portfolio-six-teal-20.vercel.app/",
      image: "/portfolio.png"
    }
  ];

  return (
    // 2. Section dynamic theme structural tracking set ki
    <section 
      id="projects" 
      className={`w-full py-14 md:py-20 px-6 sm:px-8 md:px-16 border-t transition-colors duration-500 ${
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
            <span>My Showcase</span>
            <span className={`w-4 h-[1.5px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            My Projects<span className="text-amber-600">.</span>
          </h2>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className={`rounded-[1.8rem] shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] border-2 ${
                isDarkMode 
                  ? 'bg-[#1a3f35] border-stone-700 hover:border-[#fbf9f4]' 
                  : 'bg-white border-[#14342b]/80 hover:border-[#14342b]'
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div>
                {/* PROJECT IMAGE OVERLAY */}
                <div className={`relative overflow-hidden aspect-[21/9] md:aspect-[16/8] border-b-2 transition-colors duration-500 ${
                  isDarkMode ? 'border-stone-700' : 'border-[#14342b]/80'
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className={`absolute inset-0 transition-colors duration-300 ${
                    isDarkMode ? 'bg-black/10 group-hover:bg-transparent' : 'bg-[#14342b]/5 group-hover:bg-transparent'
                  }`}></div>
                </div>

                {/* PROJECT INFO CONTENT */}
                <div className="p-4 sm:p-5 space-y-2">
                  <span className={`text-[9px] font-bold uppercase tracking-widest block transition-colors duration-500 ${
                    isDarkMode ? 'text-stone-400' : 'text-stone-500'
                  }`}>
                    {project.category}
                  </span>
                  <h3 className={`font-serif text-lg font-bold tracking-tight leading-tight transition-colors duration-500 ${
                    isDarkMode ? 'text-[#fbf9f4]' : 'text-[#14342b]'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs font-sans leading-relaxed line-clamp-3 transition-colors duration-500 ${
                    isDarkMode ? 'text-stone-300/90' : 'text-stone-600'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* TECH TAGS & LIVE DEMO CTA BUTTON */}
              <div className="p-4 sm:p-5 pt-0 space-y-3">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-[8px] font-bold px-2 py-0.5 rounded-md tracking-wide transition-colors duration-500 ${
                        isDarkMode 
                          ? 'bg-[#14342b] text-[#fbf9f4]' 
                          : 'bg-[#14342b]/5 text-[#14342b]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo Action Trigger */}
                <a 
                  href={project.liveLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center py-2 px-4 rounded-xl font-bold text-xs tracking-wider border transition-all duration-300 shadow-sm ${
                    isDarkMode 
                      ? 'bg-[#fbf9f4] text-[#14342b] border-transparent hover:bg-transparent hover:text-[#fbf9f4] hover:border-[#fbf9f4]' 
                      : 'bg-[#14342b] text-[#fbf9f4] border-transparent hover:bg-transparent hover:text-[#14342b] hover:border-[#14342b]/80'
                  }`}
                >
                  Launch Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}