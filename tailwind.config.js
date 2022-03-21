module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#00BF94",
        page: "#F6F6F6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
