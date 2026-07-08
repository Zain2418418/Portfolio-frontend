import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, isDarkMode }) {
  const [isLoginView, setIsLoginView] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  if (!isOpen) return null; // Agar modal open nahi hai to kuch render nahi hoga

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });

    // --- PRODUCTION FALLBACK BACKEND URL SETUP ---
    // Agar VITE_API_URL env nahi milega toh direct live URL hit hoga
    const backendBaseUrl = import.meta.env.VITE_API_URL || 'https://portfolio-backend-zain-dev.vercel.app';

    // Dynamic URL based on current view (Login ya Signup) - Strict clean endpoints without trailing slashes
    const apiUrl = isLoginView 
      ? `${backendBaseUrl}/api/auth/login` 
      : `${backendBaseUrl}/api/auth/signup`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        if (isLoginView) {
          setStatus({ loading: false, success: 'Welcome back! Login Successful. 🎉', error: '' });
          setTimeout(() => {
            onClose(); // 1.5s baad modal auto-close ho jayega
          }, 1500);
        } else {
          setStatus({ 
            loading: false, 
            success: 'Registration successful! Please check your Ethereal inbox to verify your email. ✉️', 
            error: '' 
          });
          setFormData({ name: '', email: '', password: '' }); // Form clear
        }
      } else {
        setStatus({ loading: false, success: '', error: data.error || 'Authentication failed.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: '', error: 'Server connection failed. Make sure backend is running!' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      {/* Modal Box */}
      <div className={`relative w-full max-w-md p-6 sm:p-8 rounded-[2rem] border-2 shadow-2xl transition-all duration-300 font-sans ${
        isDarkMode ? 'bg-[#1a3f35] border-stone-700 text-[#fbf9f4]' : 'bg-white border-[#14342b]/80 text-[#14342b]'
      }`}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className={`absolute top-5 right-5 p-1.5 rounded-full transition-colors ${
            isDarkMode ? 'hover:bg-[#14342b] text-stone-400 hover:text-[#fbf9f4]' : 'hover:bg-stone-100 text-stone-500 hover:text-[#14342b]'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Title */}
        <h3 className="font-serif text-3xl font-bold tracking-tight mb-2 text-center">
          {isLoginView ? 'Welcome Back' : 'Create Account'}<span className="text-amber-600">.</span>
        </h3>
        <p className={`text-xs text-center mb-6 ${isDarkMode ? 'text-stone-300/80' : 'text-stone-500'}`}>
          {isLoginView ? 'Sign in to access your dashboard' : 'Register to get full-stack portal access'}
        </p>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Field - Only visible on Signup View */}
          {!isLoginView && (
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Zain Ul Abedeen"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-colors duration-200 ${
                  isDarkMode ? 'bg-[#14342b] border-stone-700 focus:border-[#fbf9f4]' : 'bg-[#fbf9f4] border-[#14342b]/60 focus:border-[#14342b]'
                }`}
              />
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="zain@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-colors duration-200 ${
                isDarkMode ? 'bg-[#14342b] border-stone-700 focus:border-[#fbf9f4]' : 'bg-[#fbf9f4] border-[#14342b]/60 focus:border-[#14342b]'
              }`}
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-colors duration-200 ${
                isDarkMode ? 'bg-[#14342b] border-stone-700 focus:border-[#fbf9f4]' : 'bg-[#fbf9f4] border-[#14342b]/60 focus:border-[#14342b]'
              }`}
            />
          </div>

          {/* Submit Button */}
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
            {status.loading ? 'Processing...' : isLoginView ? 'Sign In ↗' : 'Register Now ↗'}
          </button>
        </form>

        {/* Status Messages */}
        {status.success && <p className="text-emerald-500 text-xs font-semibold mt-4 text-center">{status.success}</p>}
        {status.error && <p className="text-rose-500 text-xs font-semibold mt-4 text-center">{status.error}</p>}

        {/* Toggle View Footer */}
        <div className={`mt-6 pt-4 border-t text-xs text-center ${isDarkMode ? 'border-stone-700/60 text-stone-400' : 'border-stone-200 text-stone-500'}`}>
          {isLoginView ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => {
              setIsLoginView(!isLoginView);
              setStatus({ loading: false, success: '', error: '' }); 
            }}
            className="font-bold underline text-amber-600 hover:text-amber-500 transition-colors ml-1"
          >
            {isLoginView ? 'Register here' : 'Login here'}
          </button>
        </div>

      </div>
    </div>
  );
}