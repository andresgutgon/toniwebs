import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { Locale } from '@types'
import { IntlProvider } from 'react-intl'

import ES_LOCALE from '../locales/compiled/es.json'
import CA_LOCALE from '../locales/compiled/ca.json'

export type MetaTags = {
  locale: Locale
  title: string
  description: string
  keywords: string
}
type Props = {
  children: ReactNode
  meta: MetaTags
}
const DefaultLayout = ({ meta, children }: Props) => {
  const messages = useMemo(() => {
    switch (meta.locale) {
      case 'es':
        return ES_LOCALE
      case 'ca':
        return CA_LOCALE
      default:
        return ES_LOCALE
    }
  }, [meta.locale])

  return (
    <IntlProvider locale={meta.locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export default DefaultLayout
