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
          50: '#fef9f3',
          100: '#fdf3e7',
          200: '#fae6cf',
          300: '#f7d9b7',
          400: '#f4cc9f',
          500: '#d4a574',
          600: '#b8845d',
          700: '#8b6447',
          800: '#5e4330',
          900: '#31221a',
        },
        accent: {
          50: '#fff5ed',
          100: '#ffebdb',
          200: '#ffd7b7',
          300: '#ffc393',
          400: '#ffaf6f',
          500: '#e8833a',
          600: '#c96d2e',
          700: '#9a5423',
          800: '#6b3b18',
          900: '#3c220d',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf7f0',
          300: '#f7f3e9',
          400: '#f4efe2',
          500: '#f0e9d8',
        },
      },
    },
  },
  plugins: [],
}
