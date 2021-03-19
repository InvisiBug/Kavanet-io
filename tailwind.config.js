module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#fff",
    },
    extend: { textColor: ["primary"] },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
