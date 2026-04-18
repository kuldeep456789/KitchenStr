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
        omin: {
          brand: '#000000',
          accent: '#A67C52',
          light: '#F8F9FA',
          dark: '#1a1a1a',
          sale: '#2563EB', // Blue for summer sale
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Newsreader"', 'serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
