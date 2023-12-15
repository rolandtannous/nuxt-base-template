// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-vitest",
    [
      "@nuxtjs/eslint-module",
      {
        lintOnStart: false,
      },
    ],
    ["@pinia/nuxt",{
      autoImports: ["defineStore","acceptHMRUpdate"]
    }],
    "nuxt-schema-org",
    "@nuxt/ui",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-lodash",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
