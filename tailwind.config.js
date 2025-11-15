/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fde7c5',
          200: '#fbcf8b',
          300: '#f9b751',
          400: '#f79f17',
          500: '#e68a00',
          600: '#b36b00',
          700: '#804d00',
          800: '#4d2e00',
          900: '#1a1000',
        },
        accent: {
          50: '#e6f7f1',
          100: '#ccefe3',
          200: '#99dfc7',
          300: '#66cfab',
          400: '#33bf8f',
          500: '#00af73',
          600: '#008c5c',
          700: '#006945',
          800: '#00462e',
          900: '#002317',
        }
      },
    },
  },
  plugins: [],
}
