// tailwind.config.js
module.exports = {
  content: ["./*.html", "./src/styles/**/*.css"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        body: "#171B1A",
        header: "#121414",
        black: "#000000",
        white: "#FFFFFF",
        main: "rgb(245,189,77)",
      },
      fontFamily: {
        main: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
