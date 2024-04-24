/* import("tailwind".Config) */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./nuxt.config.ts",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
