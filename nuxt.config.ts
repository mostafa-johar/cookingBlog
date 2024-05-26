// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        // ------- start google font-------------------
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
        },
         // ------- End google font-------------------
      ]
    }
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  runtimeConfig:{
    MONGO_URL : process.env.MONGO_URL
  }
})
