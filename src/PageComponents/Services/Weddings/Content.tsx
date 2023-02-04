import DefaultLayout from '@layouts/Default'
import { useIntl } from 'react-intl'

import Header from '@components/Header'
import Hero from '@PageComponents/Services/Hero'
import Planning from './Planning'
import MyWeddings from './MyWeddings'
import Offerings from './Offering'

import { SitePage } from '@site/types'

import imageSrc from './toni-figuera-oficiante-de-bodas.jpeg'

const WeddingHero = () => {
  const intl = useIntl()
  const sectionName = intl.formatMessage({
    id: 'zkXTrr',
    defaultMessage: 'Bodas'
  })
  const sectionClaim = intl.formatMessage({
    id: 'w+TK7p',
    defaultMessage: 'Compartir emociones.'
  })
  const h1 = intl.formatMessage({
    id: '4Y3qdy',
    defaultMessage: 'Maestro de ceremonias, oficiante de bodas, presentador.'
  })
  const description = intl.formatMessage({
    id: 'VUgx65',
    defaultMessage:
      'Hacer que tu boda sea especial para ti y tus invitados. Crear recuerdos imborrables. Una celebración de vuestro amor para compartirla con vuestra familia y amigos.'
  })
  const imageAlt = intl.formatMessage({
    id: '7iDOUc',
    defaultMessage: 'Toni Figuera oficiante de bodas'
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
      <WeddingHero />
      <MyWeddings />
      <Planning />
      <Offerings />
    </DefaultLayout>
  )
}

export default Content
