import DefaultLayout from '@layouts/Default'

import Header from '@components/Header'

import { SitePage } from '@site/types'
import SpeakerHero from './Hero'
import Intro from './Intro'
import ImageGallery from './ImageGallery'

type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <SpeakerHero />
      <Intro />
      <ImageGallery />
    </DefaultLayout>
  )
}

export default Content
