/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      grays: "#f5f5f5",
    },
    // fontFamily: {
    //   sans: ["Oxygen", ...defaultTheme.fontFamily.sans],
    // },
    extend: {},
  },
  plugins: ["@tailwindcss/forms"],
};
// its 31 August when i start the code , omg
