/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        Header: ["Luckiest Guy", "sans-serif"],
        para: ["Gorditas", "cursive"],
        special: ["Titan One", "sans-serif"],
      },
      padding: {
        big: "150px",
        small: "50px",
      },
    },
  },
  plugins: [],
};
