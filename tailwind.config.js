/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'licorice': ['Licorice', 'cursive'],
        'tilt': ['Tilt Neon', 'cursive', ...defaultTheme.fontFamily.sans],//全局默认
        'Nunito': ['Nunito', 'cursive']
      }
    },
  },
  plugins: [],
}


