import DefaultLayout from '@layouts/Default'
import { useIntl } from 'react-intl'

import Header from '@components/Header'
import Hero from '@PageComponents/Services/Hero'

import { SitePage } from '@site/types'

import imageSrc from './toni-figuera-como-presentador.jpg'

const ModeratorHero = () => {
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
type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <ModeratorHero />
    </DefaultLayout>
  )
}

export default Content
