/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    screens: {
      sm: "375px",
      md: "450px",
      lg: "900px",
      xl: "1430px",
    },
    extend: {
      colors: {
        // primary
        lightRed: "hsl(356, 100%, 66%)", // CTA text
        veryLightRed: "hsl(355, 100%, 74%)", // CTA hover background
        veryDarkBlue: "hsl(208, 49%, 24%)", // headings
        // neutral
        white: "hsl(0, 0%, 100%)", // text
        grayishBlue: "hsl(240, 2%, 79%)", // footer text
        veryDarkGrayishBlue: "hsl(207, 13%, 34%)", // body copy
        veryDarkBlackBlue: "hsl(240, 10%, 16%)", // footer background
        // gradient
        // Background gradient - Intro/CTA mobile nav
        orangeRed: "hsl(13, 100%, 72%)",
        lighterRed: "hsl(353, 100%, 62%)",
        // Background gradient - body
        veryDarkGrayBlue: "hsl(237, 17%, 21%)",
        veryDarkDesaturatedBlue: "hsl(237, 23%, 32%)",
        lightPink: "#FF7B86",
        lightGray: "#efeff1",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      content: {
        arrowLight: 'url("./images/icon-arrow-light.svg")',
        arrowDark: 'url("./images/icon-arrow-dark.svg")',
      },
    },
  },
  plugins: [],
};
