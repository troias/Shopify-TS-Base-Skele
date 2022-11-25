/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "secondary-grey": "#4D4D4D",
        "menu-grey": "#666666",
        "dm-grey": "#191919",
      },
      screens: {
        xxs: "350",
        xs: "450",
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
    ],
  },
}
