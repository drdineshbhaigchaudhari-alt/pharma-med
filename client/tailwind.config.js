/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette taken from the university seal: deep forest green, rich gold, leaf green.
        brand: {
          50: '#EAF4EE',
          100: '#CFE6D8',
          600: '#0E5A38',
          700: '#0A4A2E',
          800: '#063A23',
          900: '#012817',
        },
        accent: { 50: '#EEF7E6', 500: '#5AA832', 600: '#3F7D1F', 700: '#33661A' },
        gold: '#C9952F',
        saffron: { 400: '#F4C961', 500: '#DFA83E', 600: '#C17F19' },
      },
      fontFamily: {
        brand: ['Cinzel', 'Georgia', 'serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 40s linear infinite' },
    },
  },
  plugins: [],
};
