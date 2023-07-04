/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // ...
        primary: "#55BDB3",
        secondary: "#F0F8F8",
        darken: "#0F2435",
        hover: "rgba(242, 242, 242, 0.60)",
        // ...
      },
      // Shadow
      boxShadow: {
        gg: "0px 10px 30px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
