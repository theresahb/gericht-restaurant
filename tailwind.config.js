/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cormorant: ['Cormorant Upright', 'serif'],
        Open: ['Assistant', 'sans-serif'],
      },
      
      colors:{
        primaryColor: '#DCCA87',
        secondaryColor: '#AAA',
        bgColor: '#0C0B08',
      },
    },

    screens: {
      'sx': {'min': '100px', 'max': '500px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

