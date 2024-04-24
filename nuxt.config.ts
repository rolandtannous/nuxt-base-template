// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  modules: [
    "@nuxt/test-utils/module",
    "@nuxt/ui",
    [
      "@nuxtjs/eslint-module",
      {
        lintOnStart: false,
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoimports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "nuxt-lodash",
    "@vueuse/nuxt",
    "nuxt-schema-org",
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
