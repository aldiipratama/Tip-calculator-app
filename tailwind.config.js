/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "space-mono": ["'Space Mono', sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
