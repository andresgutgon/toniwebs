import type { Locale } from '@types'
import type { SitePage, Page, LocaleOption, Domain, Site } from './types'
import { DOMAINS } from './domains'

type PageLocale = { locale: Locale; localeLabel: string }
const OG_TYPE = 'website'
const OG_IMAGE_URL = '/og-image.jpg'
const OG_IMAGE_DIMENSIONS = { width: 880, height: 495 }
const PAGE_LOCALE: Record<Locale, PageLocale> = {
  es: { locale: 'es', localeLabel: 'Castellano' },
  ca: { locale: 'ca', localeLabel: 'Catalá' }
}
export const sites: Record<string, Site> = {
  maestroCeremoniasCat: {
    phoneNumber: '606 979 735',
    domain: DOMAINS.maestroCeremonias,
    pages: {
      home: {
        es: {
          ...PAGE_LOCALE.es,
          canonical: true,
          meta: {
            title: 'Maestro de ceremonias',
            description:
              'Maestro de ceremonias oficiante de bodas presentador actor para eventos más de 20 años de experiencia Toni Figuera con mi experiencia y pasión podemos crear un evento inolvidable'
          },
          openGraph: {
            basic: {
              title: 'Maestro de ceremonias, oficiante de bodas, presentador.',
              type: OG_TYPE,
              image: OG_IMAGE_URL
            },
            image: {
              alt: 'Toni Figuera maestro de ceremonias oficiando una boda',
              url: OG_IMAGE_URL,
              ...OG_IMAGE_DIMENSIONS
            }
          }
        },
        ca: {
          ...PAGE_LOCALE.ca,
          path: 'ca',
          meta: {
            title: 'Maestro de ceremonias',
            description:
              'Maestro de ceremonias oficiante de bodas presentador actor para eventos más de 20 años de experiencia Toni Figuera con mi experiencia y pasión podemos crear un evento inolvidable'
          },
          openGraph: {
            basic: {
              title: 'Maestro de ceremonias, oficiante de bodas, presentador.',
              type: OG_TYPE,
              image: OG_IMAGE_URL
            },
            image: {
              alt: 'Toni Figuera maestro de ceremonias oficiando una boda',
              url: OG_IMAGE_URL,
              ...OG_IMAGE_DIMENSIONS
            }
          }
        }
      }
    }
  }
}

export const buildUrl = (domain: Domain, path: string | null): string => {
  const base = 'https://'
  const domainWithBase = `${base}${domain}`

  if (!path) return domainWithBase

  return `${domainWithBase}/${path}`
}

export const getPage = (
  site: Site,
  pageKey: string,
  currentLocale: Locale
): SitePage => {
  const i18nPage = site.pages[pageKey]
  const domain = site.domain
  const page = i18nPage[currentLocale]
  const localeOptions = Object.keys(i18nPage).reduce(
    (memo: LocaleOption[], locale: Locale) => {
      const page = i18nPage[locale]
      memo.push({
        label: page.localeLabel,
        value: page.locale
      })
      return memo
    },
    []
  )
  const pages = Object.values(i18nPage) as Page[]
  const nonCurrentPages = pages.filter((p) => p.locale !== currentLocale)
  const canonicalPage: Page = pages.find((p: Page) => p.canonical)
  const nonCanonicalPages: Page[] = pages.filter((p: Page) => !p.canonical)
  const alternateUrls = nonCanonicalPages.map((page: Page) => ({
    url: buildUrl(domain, page.path),
    locale: page.locale
  }))
  const path = canonicalPage.path
  const currentUrl = buildUrl(domain, page.path)
  const canonicalUrl = {
    url: buildUrl(domain, path),
    locale: canonicalPage.locale
  }
  const localeAlternate = nonCurrentPages.map((p) => p.locale)

  return {
    site,
    page,
    localeOptions,
    canonicalUrl,
    alternateUrls,
    currentUrl,
    locale: currentLocale,
    localeAlternate
  }
}
