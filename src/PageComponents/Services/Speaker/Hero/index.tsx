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
      'Una voz capaz de transmitir emoción, de presentar y conducir actos al aire libre o en interiores. Adaptando el tono y el lenguaje a la naturaleza del evento y al público asistente. Anunciando sponsors y patrocinadores. Informando de las actividades. Conduciendo juegos o actividades participativas.'
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
