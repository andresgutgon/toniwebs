import { useMemo } from 'react'
import type { ReactNode } from 'react'
import cn from 'classnames'
import { IntlProvider } from 'react-intl'

import type { SitePage } from '@site/types'
import { PageProvider } from '@layouts/PageProvider'

import ES_LOCALE from '../locales/compiled/es.json'
import CA_LOCALE from '../locales/compiled/ca.json'

type Props = {
  children: ReactNode
  page: SitePage
  bgColor: 'gray' | 'white'
}
const DefaultLayout = ({ bgColor, page, children }: Props) => {
  const locale = page.currentPage.locale
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
  return (
    <PageProvider page={page}>
      <IntlProvider locale={locale} messages={messages}>
        <div
          className={cn({
            'bg-white': bgColor === 'white',
            'bg-slate-50': bgColor === 'gray'
          })}
        >
          {children}
        </div>
      </IntlProvider>
    </PageProvider>
  )
}

export default DefaultLayout
