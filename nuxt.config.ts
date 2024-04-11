// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/test-utils',
  ],
  ui: {},
  content: {},
  colorMode: {
    preference: 'dark',
  },

  eslint: {
    config: {
      stylistic: true
    }
  }
})
