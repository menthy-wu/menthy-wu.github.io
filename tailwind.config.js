/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        270: "270deg",
      },
      colors: {
        nav: "#D9D9D9",
        gray: "#ECECEC",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        abril: ["Abril Fatface", "cursive"],
        poiret: ["Poiret One", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      zIndex: {
        100: "100",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "10xl": "6.052rem",
        "11xl": "6.25rem",
        "12xl": "7.5rem",
        "15xl": "9.052rem",
      },
    },
  },
  plugins: [],
};
