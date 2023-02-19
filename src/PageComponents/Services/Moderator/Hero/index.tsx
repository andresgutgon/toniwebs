import { useIntl } from 'react-intl'

import Hero from '@PageComponents/Services/Hero'
import imageSrc from './images/toni-figuera-como-presentador.jpg'

export default function ModeratorHero () {
  const intl = useIntl()
  const sectionName = intl.formatMessage({
    id: 'FILuxH',
    defaultMessage: 'Presentador'
  })
  const sectionClaim = intl.formatMessage({
    id: 'lp+gEa',
    defaultMessage: 'Crear expectativas y comunicar.'
  })
  const h1 = intl.formatMessage({
    id: 'JCUq5o',
    defaultMessage: 'Tu evento ganará con un presentador profesional'
  })
  const description = intl.formatMessage({
    id: 'ooc11H',
    defaultMessage:
      'Las ventajas de tener a un presentador profesional son muchas: presencia escénica, dominio del ritmo y el escenario, fluidez y naturalidad en el habla y el lenguaje y control del lenguaje corporal.'
  })
  const imageAlt = intl.formatMessage({
    id: 'v5XiOI',
    defaultMessage: 'Toni Figuera como presentador'
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
