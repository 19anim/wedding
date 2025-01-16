/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      playfairDisplay: ['"Playfair Display"', "serif"],
      montserrat: ['"Montserrat"', "sans-serif"],
      Poppins: ['"Poppins"', "sans-serif"],
      greatVibes: ["Great Vibes", "serif"],
      cursive: ["cursive"],
    },
    extend: {},
  },
  plugins: [],
};
