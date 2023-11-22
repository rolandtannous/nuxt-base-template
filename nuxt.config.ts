// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-vitest",
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "nuxt-schema-org",
    "@nuxt/ui",
    "nuxt-icon",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
