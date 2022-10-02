import homeMetadata from '@site/metadata/services/weddings'
import { PAGE_PATHS_LOCALIZED } from '@site/constants'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...homeMetadata.es,
    menuText: 'Sobre mí',
    path: PAGE_PATHS_LOCALIZED.es.aboutMe
  },
  ca: {
    ...homeMetadata.ca,
    menuText: 'Coses meves',
    path: PAGE_PATHS_LOCALIZED.ca.aboutMe
  }
}

export default metadata
