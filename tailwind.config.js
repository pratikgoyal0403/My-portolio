module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      accent: "rgb(60, 200, 224)",
      black: "rgb(0, 0, 0)",
      white: "rgb(255, 255, 255)",
      grey: "rgb(229, 229, 234)",
      "light-grey": "rgb(242, 242, 247)",
      "dark-grey": "rgb(142, 142, 137)",
      border1: "rgb(48, 176, 199)",
      border2: "rgb(64, 200, 224)",
      border3: "rgb(100, 210, 255)",
    },
    fontFamily: {
      motserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
