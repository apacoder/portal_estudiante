// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  compatibilityDate: '2024-07-15',
  plugins: [
    '~/plugins/init.client.ts',
  ],
  app: {
    head: {
      script: [ { src: 'https://accounts.google.com/gsi/client' } ],
    },
  },
  runtimeConfig: {
    public: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      API_GESTION_AUTORIZACION: process.env.API_GESTION_AUTORIZACION,
    },
  },
})
