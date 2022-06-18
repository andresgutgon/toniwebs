import DefaultLayout from '@layouts/Default'
import type { SitePage } from '@sites/types'
import Hero from '@components/MaestroCeremonias/Hero'
import Planning from '@components/MaestroCeremonias/Planning'
import MyWeddings from '../MyWeddings'

type Props = { site: SitePage }
const MaestroCeremonias = ({ site }: Props) => {
  return (
    <DefaultLayout site={site} bgColor='gray'>
      <Hero />
      <Planning />
      <MyWeddings />
    </DefaultLayout>
  )
}

export default MaestroCeremonias
