import { useIntl } from 'react-intl'

import { Locale } from '@types'
import { CanonicalUrl, LocaleOption } from '@site/types'
import { useMemo } from 'react'

type LocaleLabel = Record<Locale, string>
type Props = {
  urls?: CanonicalUrl[]
}
const useLanguageOptions = ({ urls }: Props): LocaleOption[] => {
  const intl = useIntl()
  return useMemo(() => {
    const shortLabels: LocaleLabel = {
      es: intl.formatMessage({
        id: 'JIpkFd',
        defaultMessage: 'es'
      }),
      ca: intl.formatMessage({
        id: 'j7nW78',
        defaultMessage: 'ca'
      })
    }
    const labels: LocaleLabel = {
      es: intl.formatMessage({
        id: 'SXP7Jc',
        defaultMessage: 'Castellano'
      }),
      ca: intl.formatMessage({
        id: 'Zpf9z8',
        defaultMessage: 'Catalán'
      })
    }

    if (!urls) return []

    return urls.map((alternate: CanonicalUrl) => ({
      label: labels[alternate.locale],
      shortLabel: shortLabels[alternate.locale],
      identifier: alternate.locale,
      url: alternate.url
    }))
  }, [])
}

export default useLanguageOptions
