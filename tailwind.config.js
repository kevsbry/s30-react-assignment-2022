module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "420px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
    },
    extend: {
      colors: {
        "primary-color": "#00BF94",
        page: "#F6F6F6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
