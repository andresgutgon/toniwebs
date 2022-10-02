import DefaultLayout from '@layouts/Default'
import { useIntl } from 'react-intl'

import Header from '@components/Header'
import Hero from '@PageComponents/Services/Hero'

import { SitePage } from '@site/types'

import imageSrc from './toni-figuera-speaker.jpg'

const SpeakerHero = () => {
  const intl = useIntl()
  const sectionName = intl.formatMessage({
    id: 'MU0ket',
    defaultMessage: 'Speaker'
  })
  const sectionClaim = intl.formatMessage({
    id: 'l6tgYx',
    defaultMessage: 'Una voz profesional.'
  })
  const h1 = intl.formatMessage({
    id: 'NmKYYc',
    defaultMessage: 'Speaker para dinamizar eventos, ferias y congresos'
  })
  const description = intl.formatMessage({
    id: 'rFNyQq',
    defaultMessage:
      'Una voz que se se oirá a lo largo de toda la jornada explicando y dando información a los visitantes, anunciando sponsors y patrocinadores. Informando de las actividades'
  })
  const imageAlt = intl.formatMessage({
    id: 'Q7JOYR',
    defaultMessage: 'Toni Figuera speaker para tus eventos'
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
      <SpeakerHero />
    </DefaultLayout>
  )
}

export default Content
