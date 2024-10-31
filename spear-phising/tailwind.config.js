/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFB400', // Updated orange color closer to the original
        'primary-dark': '#E09400', // Darker shade for hover states
        secondary: '#1C1C1C',
        accent: '#F5F5F5',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
