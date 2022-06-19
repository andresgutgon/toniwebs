import DefaultLayout from '@layouts/Default'
import type { SitePage } from '@sites/types'
import Hero from '@components/MaestroCeremonias/Hero'
import Header from '@components/MaestroCeremonias/Header'
import Planning from '@components/MaestroCeremonias/Planning'
import MyWeddings from '@components/MaestroCeremonias/MyWeddings'
import Offerings from '@components/MaestroCeremonias/Offering'
import AboutMe from '@components/MaestroCeremonias/AboutMe'

type Props = { site: SitePage }
const MaestroCeremonias = ({ site }: Props) => {
  return (
    <DefaultLayout site={site} bgColor='white'>
      <Header />
      <Hero />

      <Offerings />
      <Planning />
      <AboutMe />
      <MyWeddings />
    </DefaultLayout>
  )
}

export default MaestroCeremonias
