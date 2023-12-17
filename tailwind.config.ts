/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"; // https://tailwindcss.com/docs/theme#referencing-the-default-theme

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js, vue, ts}",
    "./layouts/**/*.{js, vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      // anything under extend extends the default Theme
      font: {
        // if for any reason you would like to reference the defaultTheme require the theme and spread it as shown below
        sans: ['"Inter Var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
