/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "guard-green": "#032B32",
      "guard-red": "#DD303E",
      black: "#000",
      white: "#FFF",
      green: "#00FF00",
      yellow: "#FFFF33",
      orange: "#FFA100",
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
