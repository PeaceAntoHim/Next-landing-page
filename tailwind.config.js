const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: [ "IBM Plex Mono", "ui-monospace"]
      },
      colors: {
        "yellow": {
          "50": "#FEFDEC",
          "100": "#FCFBD4",
          "200": "#F9F7AF",
          "300": "#F5F384",
          "400": "#F2F059",
          "500": "#EFED32",
          "600": "#D5D211",
          "700": "#A19E0D",
          "800": "#6D6B09",
          "900": "#343304"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
        const utilities = {
          ".bg-hero": {
            "background-image": "url(/hero.png)"
          }
        };

        addUtilities(utilities);
     })
  ],
}
