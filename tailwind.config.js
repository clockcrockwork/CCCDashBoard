/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5865F2',
          50: '#FFFFFF',
          100: '#F2F3FE',
          200: '#C5C9FB',
          300: '#989FF8',
          400: '#6B75F5',
          500: '#5865F2',
          600: '#1D2EEE',
          700: '#1424CB',
          800: '#0F1B96',
          900: '#0A1261'
        },
        discord: '#5865F2',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};