import homeMetadata from '@site/metadata/services/weddings'
import { PAGE_PATHS_LOCALIZED } from '@site/constants'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...homeMetadata.es,
    menuText: 'Personaje inflitrado',
    path: `${PAGE_PATHS_LOCALIZED.es.services}/personaje-infiltrado`
  },
  ca: {
    ...homeMetadata.ca,
    menuText: 'Personatge inflitrat',
    path: `${PAGE_PATHS_LOCALIZED.ca.services}/personatge-inflitrat`
  }
}

export default metadata
