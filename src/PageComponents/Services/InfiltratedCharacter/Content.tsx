import DefaultLayout from '@layouts/Default'
import { useIntl } from 'react-intl'

import Header from '@components/Header'
import Hero from '@PageComponents/Services/Hero'

import { SitePage } from '@site/types'

import imageSrc from './toni-figuera-como-personaje-infiltrado.jpg'

const InfiltratedCharacterHero = () => {
  const intl = useIntl()
  const sectionName = intl.formatMessage({
    id: 'y/kDTo',
    defaultMessage: 'Personaje infiltrado'
  })
  const sectionClaim = intl.formatMessage({
    id: '5EEnOC',
    defaultMessage: 'Sorprender y provocar.'
  })
  const h1 = intl.formatMessage({
    id: 'G/FnW3',
    defaultMessage: 'Personaje infiltrado para dinamizar tus eventos'
  })
  const description = intl.formatMessage({
    id: '3tgYEd',
    defaultMessage:
      'Tú eliges el personaje, yo lo creo y me infiltro como uno más en tu evento. Bromas a amigos, compañeros, trabajadores, familiares o invitados. Cualquier personaje que se te ocurra podrá ser realidad.'
  })
  const imageAlt = intl.formatMessage({
    id: 'mvXmDJ',
    defaultMessage: 'Toni Figuera como personaje infiltrado'
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
      <InfiltratedCharacterHero />
    </DefaultLayout>
  )
}

export default Content
