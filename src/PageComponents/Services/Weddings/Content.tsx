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
  const h1 = intl.formatMessage(
    {
      id: '4Y3qdy',
      defaultMessage:
        '<master>Maestro de ceremonias</master><wedding>Oficiante de bodas</wedding>'
    },
    {
      master: function(chunks: any) {
        return <span>{chunks}</span>
      },
      wedding: function(chunks: any) {
        return <div>{chunks}</div>
      }
    }
  )
  const h2 = intl.formatMessage({
    id: 'DW3BY1',
    defaultMessage: 'La boda de tus sueños'
  })
  const description = intl.formatMessage({
    id: 'VUgx65',
    defaultMessage:
      'Maestro de ceremonias y oficiante de bodas: Hacer que tu boda sea especial para ti y vuestros invitados. Crear recuerdos imborrables. Una celebración de vuestro amor para compartirla con vuestra familia y amigos.'
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
