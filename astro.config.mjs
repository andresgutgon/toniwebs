import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://maestroyoficiantedeceremonias.com',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          es: 'es', // The `defaultLocale` value must present in `locales` keys
          ca: 'ca'
        }
      }
    })
  ]
})
