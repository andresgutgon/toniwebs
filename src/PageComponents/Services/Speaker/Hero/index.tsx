import { useIntl } from 'react-intl'

import Hero from '@PageComponents/Services/Hero'
import imageSrc from './toni-figuera-speaker.jpg'

export default function SpeakerHero() {
  const intl = useIntl()
  const h1 = intl.formatMessage({
    id: 'NmKYYc',
    defaultMessage: 'Speaker, una voz profesional'
  })
  const h2 = intl.formatMessage({
    id: '/12G36',
    defaultMessage:
      'Speaker dinamizador de eventos de empresa, institucionales o deportivos'
  })
  const description = intl.formatMessage({
    id: 'rFNyQq',
    defaultMessage:
      'Speaker, una voz profesional capaz de transmitir emoción, de presentar y conducir actos al aire libre o en interiores. Conduciendo juegos o actividades participativas. Anunciando sponsors y patrocinadores. Informando de las actividades y resultados.'
  })
  const imageAlt = intl.formatMessage({
    id: 'Q7JOYR',
    defaultMessage: 'Toni Figuera speaker para tus eventos'
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
