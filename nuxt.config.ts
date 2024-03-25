// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/test-utils"
  ],
  ui: {},
  content: {},
  colorMode: {
    preference: 'dark'
  },
})