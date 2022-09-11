import DefaultLayout from '@layouts/Default'

import Header from '@components/Header'
import AboutMe from '@components/AboutMe'

import { SitePage } from '@site/types'

type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <AboutMe />
    </DefaultLayout>
  )
}

export default Content
