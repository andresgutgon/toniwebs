import type { Locale } from '@types'

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
  meta: {
    title: string
    description: string
  }
  openGraph: OpenGraph
  locale: Locale
  localeLabel: string
  path?: string // Home no path
  canonical?: boolean // Home canonical: true
}

export type I18nPage = Record<Locale, Page>
export type Site = {
  domain: string
  phoneNumber: string
  email: string
  pages: Record<string, I18nPage>
}

export type LocaleOption = { label: string; value: Locale }
type CanonicalUrl = { url: string; locale: Locale }
export type SitePage = {
  site: Site
  currentPage: Page
  localeOptions: LocaleOption[]
  currentUrl: string
  canonicalUrl: CanonicalUrl
  alternateUrls: CanonicalUrl[]
  locale: string
  localeAlternate: string[]
}
