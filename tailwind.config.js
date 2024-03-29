/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        machina: ["NeueMachina", "serif"],
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/forms")],
};
