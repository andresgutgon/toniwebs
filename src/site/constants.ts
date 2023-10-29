import type { Locale } from '@types'

export const OG_TYPE = 'website'
export const OG_IMAGE_URL = '/og-image.jpg'
export const OG_IMAGE_DIMENSIONS = { width: 880, height: 495 }

type PageLocale = { locale: Locale; localeLabel: string }
export const PAGE_LOCALE: Record<Locale, PageLocale> = {
  es: { locale: 'es', localeLabel: 'Castellano' },
  ca: { locale: 'ca', localeLabel: 'Catalá' }
}
export const PAGE_PATHS_LOCALIZED = {
  es: {
    services: '/servicios',
    aboutMe: '/sobre-mi'
  },
  ca: {
    services: '/ca/serveis',
    aboutMe: '/ca/cosas-meves'
  }
}

export const SERVICES_SLUGS = {
  weddings: {
    es: 'bodas',
    ca: 'bodas'
  },
  moderator: {
    es: 'presentador',
    ca: 'presentador'
  },
  speaker: {
    es: 'speaker',
    ca: 'speaker'
  }
}
