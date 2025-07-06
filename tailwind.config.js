module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
        medium: { min: "790px", max: "900px" },
      },
      colors: {
        darkbg: "#1E293B",
      },
    },
  },
  plugins: [],
};
