import homeMetadata from '@site/metadata/services/weddings'
import { PAGE_PATHS_LOCALIZED } from '@site/constants'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...homeMetadata.es,
    menuText: 'Presentador',
    path: `${PAGE_PATHS_LOCALIZED.es.services}/presentador`
  },
  ca: {
    ...homeMetadata.ca,
    menuText: 'Presentador',
    path: `${PAGE_PATHS_LOCALIZED.ca.services}/presentador`
  }
}

export default metadata
