import {
  OG_TYPE,
  OG_IMAGE_URL,
  OG_IMAGE_DIMENSIONS,
  PAGE_LOCALE
} from '@site/constants'
import { I18nPage } from '@site/types'

const metadata: I18nPage = {
  es: {
    ...PAGE_LOCALE.es,
    menuText: 'Bodas',
    canonical: true,
    path: '/',
    meta: {
      title: 'Maestro de ceremonias',
      description:
        'Maestro de ceremonias oficiante de bodas presentador actor para eventos más de 20 años de experiencia Toni Figuera con mi experiencia y pasión podemos crear un evento inolvidable'
    },
    openGraph: {
      basic: {
        title: 'Maestro de ceremonias, oficiante de bodas, presentador.',
        type: OG_TYPE,
        image: OG_IMAGE_URL
      },
      image: {
        alt: 'Toni Figuera maestro de ceremonias oficiando una boda',
        url: OG_IMAGE_URL,
        ...OG_IMAGE_DIMENSIONS
      }
    }
  },
  ca: {
    ...PAGE_LOCALE.ca,
    menuText: 'Casaments',
    canonical: false,
    path: `/${PAGE_LOCALE.ca.locale}`,
    meta: {
      title: 'Mestre de cerimònies',
      description:
        "Mestre de cerimònies oficiant de casaments presentador actor per a esdeveniments més de 20 anys d'experiència Toni Figuera amb la meva experiència i passió podem crear un esdeveniment inoblidable"
    },
    openGraph: {
      basic: {
        title: 'Mestre de cerimònies, oficiant de casaments, presentador.',
        type: OG_TYPE,
        image: OG_IMAGE_URL
      },
      image: {
        alt: 'Toni Figuera mestre de cerimònies oficiant un casaments',
        url: OG_IMAGE_URL,
        ...OG_IMAGE_DIMENSIONS
      }
    }
  }
}

export default metadata
