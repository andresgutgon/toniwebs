import type { Locale } from '@types'
import { DOMAINS } from './domains'

export type DomainKeys = keyof typeof DOMAINS
export type Domain = typeof DOMAINS[DomainKeys]

export type Page = {
  meta: {
    title: string
    description: string
  }
  locale: Locale
  localeLabel: string
  path?: string // Home no path
  canonical?: boolean // Home canonical: true
}

export type I18nPage = Record<Locale, Page>
export type Site = {
  domain: Domain
  pages: Record<string, I18nPage>
}

export type LocaleOption = { label: string; value: Locale }
type CanonicalUrl = { url: string; locale: Locale }
export type SitePage = {
  domain: Domain
  page: Page
  localeOptions: LocaleOption[]
  currentUrl: string
  canonicalUrl: CanonicalUrl
  alternateUrls: CanonicalUrl[]
  locale: string
  localeAlternate: string[]
}
