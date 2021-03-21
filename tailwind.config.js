module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#000",
      nav: "#fff",
    },
    extend: { textColor: ["primary"] },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
