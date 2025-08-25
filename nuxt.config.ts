// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Configure for static generation (SSG)
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  
  // Configure for Netlify deployment
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quando&display=swap'
        }
      ],
      style: [
        {
          innerHTML: `
            :root {
              --font-primary: 'Montserrat', sans-serif;
              --font-secondary: 'Quando', serif;
            }
          `
        }
      ]
    }
  }
})
