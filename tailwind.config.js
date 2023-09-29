/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans'],
        'bowlby': ['Bowlby One SC', 'sans'],
        'rancho': ['Rancho', 'cursive'],
        'poppins': ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
}
