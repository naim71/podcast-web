/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue' : '#503AE7',
      'dark-blue' : '#3E2DB2',
      'purple' : '#832BC1',
      'black' : '#14142B',
      'grey' : '#AFB0B9',
      'off-white' : '#F4F2FF',
      'green' : '#1AD993',
      'green-secondary' : '#ABFFE0' 
    },
    extend: {},
  },
  plugins: [],
}
