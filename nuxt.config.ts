// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: [
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  alias: {
    "@": "/<srcDir>",
    "@@": "/<rootDir>",
  },
  devtools: { enabled: true },
});
