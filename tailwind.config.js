/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    fontFamily: {
      poppins: 'Poppins, sans-serif'
    },
    colors: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      'dark-blue': 'hsl(249, 10%, 26%)',
      'grayish-blue': 'hsl(246, 25%, 77%)'
    },
    backgroundImage: {
      'desktop-wallpaper': "url('./assets/bg-intro-desktop.png')",
      'mobile-wallpaper': "url('./assets/bg-intro-mobile.png')",
    },
    extend: {},
  },
  plugins: [],
}

