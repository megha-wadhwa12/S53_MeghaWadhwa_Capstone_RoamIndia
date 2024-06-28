const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    mytheme: {
      "white": "#ffffff",

      "black": "#00000",

      "green": "#0C3A25",

      "gray": "#e5e9f0",

      "blue": "#24758f",

      "sea-green": "#133039",

      "teal": "#42a69a",

      "maroon": "#640000",

      "pink": "#ec4c9b",
    },
    fontFamily: {
      navbar: ["Jacques Francois"],
      lifelong: ["Bentham"],
    },
    fontColor: {
      Brown: "AA5151",
    },
    height: {
      128: "12rem",
    },
    animation: {
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },  
    },
  },

  plugins: [require("daisyui"), addVariablesForColors],
  daisyui: {
    themes: [
      {
        "light": {
          ".black-btn": {
            "background-color": "#000000",
            "border": "none",
          },
          ".blue-light": {
            "color": "#24758F",
          },
          ".teal-light":{
            "color": "#386367",
          },
          ".red-light":{
            "color": "#640000",
          },
          ".seagreen-light":{
            "color": "#359388B3",
          },
          ".green-light":{
            "color": "#0C3A25",
          },
          
        },
      },
      {
        "black": {
          ...require("daisyui/src/theming/themes")["black"],
          ".green":{
            "color": "#34bb7e"
          },
          ".blue" : {
            "color": "#5ac6cf"
          },
          ".white" : {
            "color": "#c9c6c6"
          },
          "dark-shadow": {
            "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          },
        }
      },
    ],
  },
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
