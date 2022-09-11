import homeMetadata from '@site/metadata/services/weddings'
import { PAGE_PATHS_LOCALIZED } from '@site/constants'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...homeMetadata.es,
    menuText: 'Speaker',
    path: `${PAGE_PATHS_LOCALIZED.es.services}/speaker`
  },
  ca: {
    ...homeMetadata.ca,
    menuText: 'Speaker',
    path: `${PAGE_PATHS_LOCALIZED.ca.services}/speaker`
  }
}

export default metadata
