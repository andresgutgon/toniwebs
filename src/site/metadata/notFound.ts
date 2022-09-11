import homeMetadata from '@site/metadata/services/weddings'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...homeMetadata.es,
    meta: {
      ...homeMetadata.es.meta,
      title: 'Pagina no encontrada',
      description: 'La página a la que intentas acceder no existe'
    },
    path: '/'
  },
  ca: {
    ...homeMetadata.ca,
    meta: {
      ...homeMetadata.es.meta,
      title: 'Pagina no trobada',
      description: 'La página a la que intentas acceder no existe'
    },
    path: '/'
  }
}

export default metadata
