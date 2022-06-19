import DefaultLayout from '@layouts/Default'

import Hero from '@components/MaestroCeremonias/Hero'
import Header from '@components/MaestroCeremonias/Header'
import Planning from '@components/MaestroCeremonias/Planning'
import MyWeddings from '@components/MaestroCeremonias/MyWeddings'
import Offerings from '@components/MaestroCeremonias/Offering'
import AboutMe from '@components/MaestroCeremonias/AboutMe'

import { SitePage } from '@sites/types'

type Props = { site: SitePage }
const Content = ({ site }: Props) => {
  return (
    <DefaultLayout site={site} bgColor='white'>
      <Header />
      <Hero />

      <Offerings />
      <Planning />
      <MyWeddings />
      <AboutMe />
    </DefaultLayout>
  )
}

export default Content
