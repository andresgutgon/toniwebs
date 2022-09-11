import homeMetadata from '@site/metadata/services/weddings'
import { PAGE_PATHS_LOCALIZED } from '@site/constants'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...homeMetadata.es,
    menuText: 'Reporteros TV',
    path: `${PAGE_PATHS_LOCALIZED.es.services}/reporteros-tv`
  },
  ca: {
    ...homeMetadata.ca,
    menuText: 'Reporters TV',
    path: `${PAGE_PATHS_LOCALIZED.ca.services}/reporters-tv`
  }
}

export default metadata
