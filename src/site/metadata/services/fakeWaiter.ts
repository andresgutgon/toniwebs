import homeMetadata from '@site/metadata/services/weddings'
import { PAGE_PATHS_LOCALIZED } from '@site/constants'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...homeMetadata.es,
    menuText: 'Camarero falso',
    path: `${PAGE_PATHS_LOCALIZED.es.services}/camarero-falso`
  },
  ca: {
    ...homeMetadata.ca,
    menuText: 'Cambrer fals',
    path: `${PAGE_PATHS_LOCALIZED.ca.services}/cambrer-fals`
  }
}

export default metadata
