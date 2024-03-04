/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#4CAF50',
      secondary: '#2196F3',
      tertiary: '#FFC107',
      quaternary: '#9C27B0',
      quinary: '#FF5722',
      },
    },
  },
  plugins: [],
}

