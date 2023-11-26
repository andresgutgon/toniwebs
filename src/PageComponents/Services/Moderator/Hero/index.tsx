import { useIntl } from 'react-intl'

import Hero from '@PageComponents/Services/Hero'
import imageSrc from './images/toni-figuera-como-presentador.jpg'

export default function ModeratorHero() {
  const intl = useIntl()
  const h1 = intl.formatMessage({
    id: 'auRDAz',
    defaultMessage: 'Presentador de eventos en Barcelona'
  })
  const h2 = intl.formatMessage({
    id: 'GSHqXL',
    defaultMessage: 'Eventos de empresa y eventos institucionales'
  })
  const description = intl.formatMessage({
    id: 'ooc11H',
    defaultMessage:
      'Presentador de eventos: Comunicar y poder de oratoria, buena presencia escénica, dominio del ritmo y del escenario, naturalidad y fluidez en el habla, naturalidad en el lenguaje corporal, control de la situación y sobre todo conectar con la audencia.'
  })
  const imageAlt = intl.formatMessage({
    id: 'v5XiOI',
    defaultMessage: 'Toni Figuera como presentador'
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
