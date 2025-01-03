/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-900': '#1a1a2e',
        'gray-800': '#16213e',
        'blue-500': '#4a6fa5',
        'blue-600': '#3d5a80',
      },
    },
  },
  plugins: [],
};

