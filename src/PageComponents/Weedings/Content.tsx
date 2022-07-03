import DefaultLayout from '@layouts/Default'

import Header from './Header/'
import Hero from './Hero'
import Planning from './Planning'
import MyWeddings from './MyWeddings'
import Offerings from './Offering'
import AboutMe from '@components/AboutMe'

import { SitePage } from '@site/types'

type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
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
