import type { Locale } from '@types'
import { PageKey } from '.'

export type OpenGraph = {
  basic: {
    title: string
    type: string
    image: string
  }
  image: {
    alt: string
    url: string
    width: number
    height: number
  }
}
export type Page = {
  menuText: string
  meta: {
    title: string
    description: string
  }
  openGraph: OpenGraph
  locale: Locale
  localeLabel: string
  path: string
  canonical: boolean
}

export type I18nPage = Record<Locale, Page>
export type Site = {
  domain: string
  phoneNumber: string
  email: string
  pages: Record<PageKey, I18nPage>
}

export type LocaleOption = {
  label: string
  shortLabel: string
  identifier: Locale
  url: string
}
export type CanonicalUrl = { url: string; locale: Locale }
export type SitePage = {
  site: Site
  pageKey: PageKey
  currentPage: Page
  currentUrl: string
  canonicalUrl: CanonicalUrl
  alternateUrls: CanonicalUrl[]
  allUrls: CanonicalUrl[]
  locale: Locale
  localeAlternate: string[]
}
