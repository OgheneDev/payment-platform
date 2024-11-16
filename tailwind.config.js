/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0070ba',
        'custom-grey': '#666',
        'custom-light-blue': '#d1f1ff',
        'custom-ash': 'rgb(250, 248, 245)'
      }
    },
  },
  plugins: [],
}

