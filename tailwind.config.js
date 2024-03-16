/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '440': '440px',
      '510': '510px',
      '640': '640px',
      '780': '780px',
      '1100': '1100px',
      '2400': '2400px'
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
      },
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

