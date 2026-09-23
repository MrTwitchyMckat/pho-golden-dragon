// https://nuxt.com/docs/api/configuration/nuxt-config

const sanityProjectId =
  process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '03e15w02'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/sanity'],

  runtimeConfig: {
    public: {
      sanityProjectId:
        process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '03e15w02',
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
    },
  },

  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '03e15w02',
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
    // Use a dated API + `published` so anonymous CDN requests work in the browser.
    // `raw` (the module default) is for drafts/preview and often fails without a token.
    apiVersion: '2025-02-19',
    perspective: 'published',
    useCdn: true,
    // Dev-only proxy. `nuxt build` sets NODE_ENV=production, so the static
    // Netlify bundle keeps fetching published content directly from the CDN.
    // In `nuxt dev`, queries go through /api/sanity/query, which serves drafts
    // when the gd-draft-preview cookie is set (/api/draft/enable).
    queryEndpoint: process.env.NODE_ENV === 'production' ? '' : '/api/sanity/query',
  },

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
          href: `https://${sanityProjectId}.apicdn.sanity.io`,
          crossorigin: 'anonymous',
        },
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
