import DefaultLayout from '@layouts/Default'

import type { SitePage } from '@site/types'
import Contact from '@components/Contact'

type Props = { page: SitePage }
const ContactPage = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Contact />
    </DefaultLayout>
  )
}

export default ContactPage
