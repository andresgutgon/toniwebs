import DefaultLayout from '@layouts/Default'

import { SitePage } from '@site/types'

import Header from '@components/Header'
import Hero from './Hero'
import Intro from './Intro'
import Logos from './Logos'
import Testimonials from './Testimonials'

type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <Hero />
      <Intro />
      <Testimonials />
      <Logos />
    </DefaultLayout>
  )
}

export default Content
