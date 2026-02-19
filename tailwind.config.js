/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d4dde8',
          200: '#a9bbcf',
          300: '#7e99b6',
          400: '#53779d',
          500: '#2d5a85',
          600: '#1e3f62',
          700: '#152d47',
          800: '#0f2137',
          900: '#0a1628',
          950: '#060d18',
        },
        gold: {
          50: '#faf6ee',
          100: '#f2e8d0',
          200: '#e6d1a1',
          300: '#d9b972',
          400: '#c9a96e',
          500: '#b8944d',
          600: '#a07a3a',
          700: '#7d5f2d',
          800: '#5a4420',
          900: '#372913',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
