import React, { useState } from 'react';

// Component header par isDarkMode prop receive kiya
export default function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Nayi State: Loading spinner aur success/error messages handle karne ke liye
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Request start hote hi loading true aur purane messages clear
    setStatus({ loading: true, success: '', error: '' });

    try {
      // Browser ke built-in fetch se API hit ki
     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Success par input fields clear aur green notification set
        setStatus({ loading: false, success: 'Thank you! Your message has been saved in MongoDB. 🎉', error: '' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Agar backend error return kare (jaise validation issue)
        setStatus({ loading: false, success: '', error: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setStatus({ 
        loading: false, 
        success: '', 
        error: 'Server connection failed! Please make sure your Node.js backend is running on port 5000.' 
      });
    }
  };

  const contactInfo = [
    {
      type: "Email Address",
      value: "zainulabedeen2418@gmail.com",
      link: "mailto:zainulabedeen2418@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      type: "LinkedIn Profile",
      value: "linkedin.com/in/zain-ul-abedeen",
      link: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      type: "Phone / WhatsApp",
      value: "+92 300 1234567",
      link: "https://wa.me/923001234567",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.582-6.582l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="contact" 
      className={`w-full py-14 md:py-20 px-6 sm:px-8 md:px-16 overflow-hidden border-t transition-colors duration-500 ${
        isDarkMode ? 'bg-[#14342b] text-[#fbf9f4] border-stone-800' : 'bg-[#fbf9f4] text-[#14342b] border-stone-200'
      }`}
    >
      <div className="mx-auto max-w-5xl">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className={`flex items-center space-x-2 text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${
            isDarkMode ? 'text-stone-400' : 'text-stone-500'
          }`}>
            <span className={`w-4 h-[1.5px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
            <span>Let's Collaborate</span>
            <span className={`w-4 h-[1.5px] ${isDarkMode ? 'bg-[#fbf9f4]/60' : 'bg-[#14342b]/60'}`}></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Get In Touch<span className="text-amber-600">.</span>
          </h2>
        </div>

        {/* SPLIT LAYOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT COLUMN: Contact Details */}
          <div className="space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] delay-[100ms]">
            <h3 className="font-serif text-2xl font-bold tracking-tight mb-4">
              Contact Channels
            </h3>
            <p className={`text-sm font-sans leading-relaxed mb-6 transition-colors duration-500 ${
              isDarkMode ? 'text-stone-300' : 'text-stone-600'
            }`}>
              Have an exciting project, full-time opportunity, or just want to discuss technical architectures? Feel free to reach out through any of these platforms.
            </p>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-[1.5rem] border-2 shadow-sm transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-[#1a3f35] border-stone-700 hover:border-[#fbf9f4] hover:bg-[#fbf9f4] hover:text-[#14342b]' 
                      : 'bg-white border-[#14342b]/80 hover:border-[#14342b] hover:bg-[#14342b] hover:text-[#fbf9f4]'
                  }`}
                >
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${
                    isDarkMode 
                      ? 'bg-[#14342b] text-[#fbf9f4] group-hover:bg-[#14342b]/10 group-hover:text-[#14342b]' 
                      : 'bg-[#14342b]/5 text-[#14342b] group-hover:bg-white/10 group-hover:text-white'
                  }`}>
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span className={`text-[9px] font-bold uppercase tracking-wider block transition-colors duration-300 ${
                      isDarkMode ? 'text-stone-400 group-hover:text-[#14342b]/60' : 'text-stone-500 group-hover:text-amber-400'
                    }`}>
                      {info.type}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold tracking-tight block truncate">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Messaging Box */}
          <div className={`p-6 sm:p-8 rounded-[2rem] border-2 shadow-sm opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] delay-[200ms] transition-colors duration-500 ${
            isDarkMode ? 'bg-[#1a3f35] border-stone-700' : 'bg-white border-[#14342b]/80'
          }`}>
            <h3 className="font-serif text-2xl font-bold tracking-tight mb-6">
              Drop a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="space-y-1">
                <label className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-[#14342b] text-[#fbf9f4] border-stone-700 focus:border-[#fbf9f4]' 
                      : 'bg-[#fbf9f4] text-[#14342b] border-2 border-[#14342b]/60 focus:border-[#14342b]'
                  }`}
                />
              </div>

              <div className="space-y-1">
                <label className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-[#14342b] text-[#fbf9f4] border-stone-700 focus:border-[#fbf9f4]' 
                      : 'bg-[#fbf9f4] text-[#14342b] border-2 border-[#14342b]/60 focus:border-[#14342b]'
                  }`}
                />
              </div>

              <div className="space-y-1">
                <label className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>Your Message</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Let's build something great..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-colors duration-200 resize-none ${
                    isDarkMode 
                      ? 'bg-[#14342b] text-[#fbf9f4] border-stone-700 focus:border-[#fbf9f4]' 
                      : 'bg-[#fbf9f4] text-[#14342b] border-2 border-[#14342b]/60 focus:border-[#14342b]'
                  }`}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status.loading}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wider border transition-all duration-300 shadow-sm mt-2 ${
                  status.loading ? 'opacity-50 cursor-not-allowed' : ''
                } ${
                  isDarkMode 
                    ? 'bg-[#fbf9f4] text-[#14342b] border-transparent hover:bg-transparent hover:text-[#fbf9f4] hover:border-[#fbf9f4]' 
                    : 'bg-[#14342b] text-[#fbf9f4] border-transparent hover:bg-transparent hover:text-[#14342b] hover:border-[#14342b]/80'
                }`}
              >
                {status.loading ? 'Sending Message...' : 'Send Message ↗'}
              </button>
            </form>

            {/* STATUS UI NOTIFICATIONS */}
            {status.success && <p className="text-emerald-500 font-sans text-xs font-semibold mt-4 text-center">{status.success}</p>}
            {status.error && <p className="text-rose-500 font-sans text-xs font-semibold mt-4 text-center">{status.error}</p>}
          </div>

        </div>

        {/* FOOTER AREA */}
        <div className={`mt-20 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans tracking-wide transition-colors duration-500 ${
          isDarkMode ? 'border-stone-800 text-stone-400' : 'border-stone-200 text-stone-500'
        }`}>
          <div>
            © {new Date().getFullYear()} Zain Ul Abedeen. All rights reserved. Built with pixel-perfection.
          </div>
          
          <div className={`flex items-center space-x-5 transition-colors duration-500 ${isDarkMode ? 'text-[#fbf9f4]/70' : 'text-[#14342b]/70'}`}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors duration-300" title="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors duration-300" title="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors duration-300" title="WhatsApp">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.046c1.66.986 3.296 1.489 4.905 1.49 5.275 0 9.56-4.283 9.564-9.555.002-2.553-1.001-4.955-2.813-6.72s-4.243-2.73-6.796-2.73c-5.283 0-9.565 4.284-9.57 9.555-.002 1.708.475 3.381 1.378 4.846l-.994 3.63 3.73-.978zm11.579-5.182c-.326-.163-1.925-.95-2.222-1.058-.297-.108-.513-.163-.73.163-.216.325-.838 1.056-1.027 1.274-.19.216-.378.243-.705.082-.326-.163-1.378-.508-2.625-1.622-.969-.865-1.624-1.932-1.815-2.258-.19-.325-.02-.501.143-.662.147-.146.326-.38.489-.571.163-.19.216-.325.326-.543.11-.217.054-.407-.027-.57-.081-.163-.73-1.758-.999-2.413-.263-.636-.53-.55-.73-.56h-.623c-.216 0-.568.081-.865.407s-1.137 1.112-1.137 2.713c0 1.601 1.163 3.146 1.325 3.363.163.217 2.289 3.496 5.545 4.901.774.333 1.379.533 1.85.683.778.247 1.487.212 2.047.128.623-.093 1.925-.787 2.196-1.547.271-.76.271-1.41.19-1.547-.081-.136-.297-.217-.622-.38z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}