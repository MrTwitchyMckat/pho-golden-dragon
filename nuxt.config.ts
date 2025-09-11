// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Configure for static generation (SSG)
  ssr: false,
  nitro: {
    preset: 'static'
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
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        {
          property: 'og:title',
          content: 'Golden Dragon - Pho & Vietnamese Cuisine'
        },
        {
          property: 'og:description',
          content: 'Experience authentic pho and Vietnamese cuisine at Golden Dragon in Reno, NV. Fresh ingredients, traditional recipes, and exceptional service.'
        },
        {
          property: 'og:image',
          content: '/golden-dragon-og.jpg'
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '630'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://phogoldendragon.com'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:image',
          content: '/golden-dragon-og.jpg'
        },
        {
          name: 'description',
          content: 'Experience authentic pho and Vietnamese cuisine at Golden Dragon in Reno, NV. Fresh ingredients, traditional recipes, and exceptional service.'
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
