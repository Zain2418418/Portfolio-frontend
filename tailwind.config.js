/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fbf9f4',
          100: '#f4f1de',
        },
        forest: {
          900: '#0b251e',
          800: '#14342b',
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
      },
      animation: {
        'brutal-float': 'brutalFloat 4s ease-in-out infinite',
      },
      keyframes: {
        brutalFloat: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-2px, -6px)' },
        }
      }
    },
  },
  plugins: [],
}