/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#80E27E', // lighter variant of primary color
          DEFAULT: '#4CAF50', // original primary color
          dark: '#087f23' // darker variant of primary color
        },
        secondary: {
          light: '#6EC6FF', // lighter variant of secondary color
          DEFAULT: '#2196F3', // original secondary color
          dark: '#0b5b9e' // darker variant of secondary color
        },
        tertiary: {
          light: '#FFE082', // lighter variant of tertiary color
          DEFAULT: '#FFC107', // original tertiary color
          dark: '#bf8f04' // darker variant of tertiary color
        },
        quaternary: {
          light: '#D05AEC', // lighter variant of quaternary color
          DEFAULT: '#9C27B0', // original quaternary color
          dark: '#6a0080' // darker variant of quaternary color
        },
        quinary: {
          light: '#FF8A65', // lighter variant of quinary color
          DEFAULT: '#FF5722', // original quinary color
          dark: '#c41c00' // darker variant of quinary color
        },
        onerror: '#FF0000',
      },
      keyframes: {
        flip: {
          '0%': {transform: 'scale(1)'}, 
          '50%': {transform: 'scale(1.05) rotateY(90deg)'}, 
          '90%': {transform: 'scale(1.1) rotateY(180deg)'},
          '100%': {transform: 'scale(1) rotateY(180deg)'},
        },
        flipback: {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.05) rotateY(-90deg)'},
          '90%': {transform: 'scale(1.1) rotateY(-180deg)'},
          '100%': {transform: 'scale(1) rotateY(-180deg)'},
        },
      },
      animation: {
        flip: 'flip 0.2s',
        flipback: 'flipback 0.2s',
      },
    }
  },
  plugins: [],
}