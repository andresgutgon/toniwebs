import DefaultLayout from '@layouts/Default'

import Header from '@components/Header'

import { SitePage } from '@site/types'
import Hero from './Hero'
import Advantages from './Advantages'

type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <Hero />
      <Advantages />
    </DefaultLayout>
  )
}

export default Content
