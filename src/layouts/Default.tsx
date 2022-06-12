import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'

import type { SitePage } from '@sites/types'

import ES_LOCALE from '../locales/compiled/es.json'
import CA_LOCALE from '../locales/compiled/ca.json'

type Props = {
  children: ReactNode
  site: SitePage
}
const DefaultLayout = ({ site, children }: Props) => {
  const locale = site.page.locale
  const messages = useMemo(() => {
    switch (locale) {
      case 'es':
        return ES_LOCALE
      case 'ca':
        return CA_LOCALE
      default:
        return ES_LOCALE
    }
  }, [locale])

  // TODO: Do provider to page sitePage
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export default DefaultLayout
