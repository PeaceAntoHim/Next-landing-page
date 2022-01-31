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
      color: {
        yellow: {
          "50": "#FFFDEB",
          "100": "#FEFAD7",
          "200": "#FEF5AA",
          "300": "#FDF181",
          "400": "#FDEC59",
          "500": "#FCE72D",
          "600": "#ECD503",
          "700": "#B09F02",
          "800": "#746802",
          "900": "#3C3601"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
