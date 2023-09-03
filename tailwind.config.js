/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anticDidone: ["var(--font-anticDidone)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        custom: {
          black: "#000000",
          white: "#ffffff",
          theme: "#5200FF",
        },
      },
      animation: {
        rolling: "rolling 25s linear infinite",
      },
      keyframes: {
        rolling: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
