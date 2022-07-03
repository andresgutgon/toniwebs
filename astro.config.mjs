import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://maestroyoficiantedeceremonias.com',
  base: process.env.NODE_ENV === 'production' ? '/toniwebs' : null,
  integrations: [tailwind(), react()]
})
