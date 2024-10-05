/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "blue-light": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            background: "#D5E1F8",
            foreground: "#ffffff",
            primary: {
              50: "#D5E1F8",
              100: "#D5E1F8",
              200: "#AEC3F1",
              300: "#7D96D6",
              400: "#536AAD",
              500: "#253877",
              600: "#1B2A66",
              700: "#121E55",
              800: "#0B1445",
              900: "#070D39",
              DEFAULT: "#253877",
              foreground: "#ffffff",
            },
            focus: "#7D96D6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      }
    })
  ],
}

