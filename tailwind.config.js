/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-color': 'rgb(149 41 148 / 79%)', // Add your custom color here
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

