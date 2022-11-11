/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        blue: "0 0px 9px rgba(73,200,255, 1)",
        pink: "0 0px 9px rgba(252,122,213, 1)",
        white: "0 0px 9px rgba(255,255,255, 1)",
        green: "0 0px 9px rgba(30, 255, 26, 1)",
        lightblue: "0 4px 9px rgba(21, 219, 255, 1)",
      },
      fontFamily: { ops: ["Black Ops One", "cursive"] },
    },
  },
  plugins: [],
};
