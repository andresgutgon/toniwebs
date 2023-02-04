import type { Locale } from '@types'
import type { SitePage, Page, Site } from './types'

// Pages metadata and top menu info
import home from '@site/metadata/home'
import aboutMe from '@site/metadata/aboutMe'
import notFound from '@site/metadata/notFound'

// Services
import weddings from '@site/metadata/services/weddings'
import moderator from '@site/metadata/services/moderator'
import speaker from '@site/metadata/services/speaker'
import fakeWaiter from '@site/metadata/services/fakeWaiter'
import infiltratedCharacter from '@site/metadata/services/infiltratedCharacter'
import reporterTv from '@site/metadata/services/reporterTv'

const PAGES = {
  home,
  aboutMe,
  weddings,
  moderator,
  speaker,
  fakeWaiter,
  infiltratedCharacter,
  reporterTv,
  notFound
}

export type PageKey = keyof typeof PAGES
export const site: Site = {
  phoneNumber: '618 059 259',
  email: 'toni@tonifiguera.com',
  domain: import.meta.env.PROD ? 'actorymaestroceremonias.com' : '',
  pages: PAGES
}

export const buildUrl = (domain: string, path: string | null): string => {
  const base = 'https://'
  const domainWithBase = domain === '' ? '' : `${base}${domain}`

  if (!path) return domainWithBase

  return `${domainWithBase}${path}`
}

export const getPage = (
  site: Site,
  pageKey: PageKey,
  currentLocale: Locale
): SitePage => {
  const i18nPage = site.pages[pageKey]
  const domain = site.domain
  const currentPage = i18nPage[currentLocale]
  const pages = Object.values(i18nPage) as Page[]
  const nonCurrentPages = pages.filter((p) => p.locale !== currentLocale)
  const canonicalPage: Page = pages.find((p: Page) => p.canonical)
  const nonCanonicalPages: Page[] = pages.filter((p: Page) => !p.canonical)
  const allUrls = [canonicalPage, ...nonCanonicalPages].map((page: Page) => ({
    url: buildUrl(domain, page.path),
    locale: page.locale
  }))
  const alternateUrls = nonCanonicalPages.map((page: Page) => ({
    url: buildUrl(domain, page.path),
    locale: page.locale
  }))
  const path = canonicalPage.path
  const currentUrl = buildUrl(domain, currentPage.path)
  const canonicalUrl = {
    url: buildUrl(domain, path),
    locale: canonicalPage.locale
  }
  const localeAlternate = nonCurrentPages.map((p) => p.locale)

  return {
    site,
    pageKey,
    currentPage,
    canonicalUrl,
    alternateUrls,
    currentUrl,
    allUrls,
    locale: currentLocale,
    localeAlternate
  }
}
