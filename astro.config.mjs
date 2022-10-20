import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  site: 'https://actorymaestroceremonias.com',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          ca: 'ca'
        }
      }
    }),
    alpinejs()
  ]
})
