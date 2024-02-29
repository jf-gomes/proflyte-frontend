/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '440': '440px',
      '640': '640px',
      '780': '780px'
    },
    extend: {
      colors: {
        'darkerBlue': '#051923',
        'darkBlue': '#003554',
        'blue': '#006494',
        'lightBlue': '#0582CA',
        'lighterBlue': '#00A6FB',
        'grey': 'grey'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}

