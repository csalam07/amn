module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        foodie: {
          first: "#ed5a6c",
          second: "#2e050a",
          third: "#fdf1f3",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
