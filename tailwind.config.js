/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'primary': {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#4f46e5', // indigo-600 equivalent
          '700': '#4338ca', // indigo-700 equivalent
          '800': '#3730a3', // indigo-800 equivalent
          '900': '#312e81',
        },
        // Dark mode specific colors
        'dark': {
          'bg': '#121212',
          'surface': '#1e1e1e',
          'primary': '#1f1f1f',
          'secondary': '#2d2d2d',
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}