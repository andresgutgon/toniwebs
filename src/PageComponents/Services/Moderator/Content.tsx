import DefaultLayout from '@layouts/Default'

import Header from '@components/Header'

import { SitePage } from '@site/types'
import Hero from './Hero'
import Advantages from './Advantages'
import TypesOfEvents from './TypesOfEvents'
import WhyAProfessionalModerator from './WhyAProfessionalModerator'

type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <Hero />
      <WhyAProfessionalModerator />
      <TypesOfEvents />
    </DefaultLayout>
  )
}

export default Content
