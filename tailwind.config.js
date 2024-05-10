/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        formGrey: '#F6F6F6',
        formDarkGrey: '#B9B9B9',
      },
      zIndex: {
        100: '100',
      },
      boxShadow: {
        primary: '0 0 20 4 #bfbfbf25',
      },
    },
  },
  plugins: [require('daisyui')],
};
