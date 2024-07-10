/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/preline/preline.js',
  ],
  daisyui: {
    themes: ["light"]
  },
  theme: {
    
    extend: {
      height:{
        '128':'32rem',
      }
    },
  },
  plugins: [require('preline/plugin'),
    require('daisyui'),
  ],
}