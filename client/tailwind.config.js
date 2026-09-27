/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EAF2F8',
          100: '#CFE0EE',
          600: '#12507A',
          700: '#0B3C5D',
          800: '#082E47',
          900: '#061F31',
        },
        accent: { 50: '#E8F7F1', 500: '#1FA67A', 600: '#178A65', 700: '#126F51' },
        gold: '#B8912F',
        saffron: { 400: '#F7B733', 500: '#F4A300', 600: '#D18B00' },
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
