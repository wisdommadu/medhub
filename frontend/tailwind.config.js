/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{'primary':"#d85315ff"}
    },
    gridTemplateColumns:{
      'auto':'repeat(auto-fill, minmax(200px, 1fr))'
    }
  },
  plugins: [],
}

