import DefaultLayout from '@layouts/Default'
import { useIntl } from 'react-intl'

import Header from '@components/Header'
import Hero from '@PageComponents/Services/Hero'

import { SitePage } from '@site/types'

import imageSrc from './toni-figuera-como-reportero-tv.png'

const ReportersTVHero = () => {
  const intl = useIntl()
  const sectionName = intl.formatMessage({
    id: 'gkkTKW',
    defaultMessage: 'Reporteros'
  })
  const sectionClaim = intl.formatMessage({
    id: 'l3x1dl',
    defaultMessage: 'La TV en tu evento.'
  })
  const h1 = intl.formatMessage({
    id: 'IcUlg8',
    defaultMessage: 'Entrevista a tus invitados para contar la fiesta.'
  })
  const description = intl.formatMessage({
    id: 'Y2kNwV',
    defaultMessage:
      'Entrevistas divertidas y diferentes o serias y funcionales si lo prefieres. Tendrás imágenes y entrevistas de tu evento. Al finalizar montaremos un vídeo para que lo uses.'
  })
  const imageAlt = intl.formatMessage({
    id: '8eedt8',
    defaultMessage: 'Toni Figuera como reportero de TV'
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
      <ReportersTVHero />
    </DefaultLayout>
  )
}

export default Content
