import DefaultLayout from '@layouts/Default'
import { useIntl } from 'react-intl'

import Header from '@components/Header'
import Hero from '@PageComponents/Services/Hero'
import Planning from './Planning'
import MyWeddings from './MyWeddings'
import Offerings from './Offering'

import { SitePage } from '@site/types'

import imageSrc from './toni-figuera-oficiante-de-bodas.jpg'
import WhyAProfessional from './WhyAProfessional'
import Banquete from './Banquete'
import ImageGallery from './ImageGallery'

const WeddingHero = () => {
  const intl = useIntl()
  const h1 = intl.formatMessage({
    id: '4Y3qdy',
    defaultMessage: 'Maestro de ceremonias'
  })
  const h2 = intl.formatMessage({
    id: 'DW3BY1',
    defaultMessage:
      'Oficiante de bodas. La boda de tus sueños, la ceremonia que tú quieres'
  })
  const description = intl.formatMessage({
    id: 'VUgx65',
    defaultMessage:
      'Maestro de ceremonias, oficiante de bodas. Hacer que tu boda sea especial para ti y vuestros invitados. Crear recuerdos imborrables. Una celebración de vuestro amor para compartirla con vuestra familia y amigos.'
  })
  const imageAlt = intl.formatMessage({
    id: '7iDOUc',
    defaultMessage: 'Toni Figuera oficiante de bodas'
  })
  return (
    <Hero
      h1={h1}
      h2={h2}
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
      <WhyAProfessional />
      <MyWeddings />
      <Banquete />
      <Planning />
      <Offerings />
      <ImageGallery />
    </DefaultLayout>
  )
}

export default Content
