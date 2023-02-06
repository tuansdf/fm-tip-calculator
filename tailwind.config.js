const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(172, 67%, 45%)",
      neutral: {
        0: "hsl(0, 0%, 100%)",
        100: "hsl(189, 41%, 97%)",
        200: "hsl(185, 41%, 84%)",
        300: "hsl(184, 14%, 56%)",
        400: "hsl(186, 14%, 43%)",
        500: "hsl(183, 100%, 15%)",
      },
      error: colors.red,
      transparent: colors.transparent,
    },
  },
  plugins: [],
};
