// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  css: [
    'assets/styles/main.css',
  ],
  // experimental features
  experimental: {
    reactivityTransform: true,
  },
  routeRules: {
    // Render these routes with SPA
    '/**': { ssr: false },
  },
})
