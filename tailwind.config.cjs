/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./pages/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#00040f",
          secondary: "#00f6ff",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
        },
        fontFamily: {
          outfit: ["Outfit"],
        },
      },
      screens: {
        es: "280px",
        xxs: "350px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        mmd: "1130px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  };