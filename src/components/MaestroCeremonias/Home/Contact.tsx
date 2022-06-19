import DefaultLayout from '@layouts/Default'

import type { SitePage } from '@sites/types'
import Contact from '@components/MaestroCeremonias/Contact'

type Props = { site: SitePage }
const Content = ({ site }: Props) => {
  return (
    <DefaultLayout site={site} bgColor='white'>
      <Contact />
    </DefaultLayout>
  )
}

export default Content
