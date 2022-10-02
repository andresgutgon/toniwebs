import DefaultLayout from '@layouts/Default'
import { useIntl } from 'react-intl'

import Header from '@components/Header'
import Hero from '@PageComponents/Services/Hero'

import { SitePage } from '@site/types'

import imageSrc from './toni-figuera-como-enric-el-camarero-falso.png'

const FakeWaiterHero = () => {
  const intl = useIntl()
  const sectionName = intl.formatMessage({
    id: '+mV4j+',
    defaultMessage: 'Camarero falso'
  })
  const sectionClaim = intl.formatMessage({
    id: 'bKaUyD',
    defaultMessage: 'Risas inolvidables'
  })
  const h1 = intl.formatMessage({
    id: 'lnKhYI',
    defaultMessage: 'Camarero falso: bodas, cumpleaños y eventos de empresa '
  })
  const description = intl.formatMessage({
    id: 'RS703h',
    defaultMessage:
      'Enric, mi personaje, el auténtico camarero falso. Más de 20 años de experiencia y más de 600 actuaciones por todo el país, haciendo este personaje cómico que hará reír a todo el mundo.'
  })
  const imageAlt = intl.formatMessage({
    id: 'SDhEt/',
    defaultMessage: 'Toni Figuera caracterizado como Enric, el camarero falso'
  })
  return (
    <Hero
      sectionName={sectionName}
      sectionClaim={sectionClaim}
      h1={h1}
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  )
}
type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <FakeWaiterHero />
    </DefaultLayout>
  )
}

export default Content
