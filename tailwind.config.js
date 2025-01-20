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
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slightBounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
          },
          "50%": {
            transform: "none",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        slightBounce: "slightBounce 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
