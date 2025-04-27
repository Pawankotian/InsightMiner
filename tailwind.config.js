/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Blue 
          dark: '#003380',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1E1E1E',
          light: '#2D2D2D', 
        },
        light: {
          DEFAULT: '#FFFFFF',
          darker: '#F5F5F5',
          dark: '#E8E8E8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 