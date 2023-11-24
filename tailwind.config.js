/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-1': '#333',
      'gray-2': '#4f4f4f',
      'gray-3': '#828282',
      'gray-6': '#f2f2f2',
      'blue-1': '#2F80ED',
      'purple': '#8785FF',
      'orange': '#F8B76B',
    },
    extend: {},
  },
  plugins: [],
}

