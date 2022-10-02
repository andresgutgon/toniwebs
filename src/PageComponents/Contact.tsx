import DefaultLayout from '@layouts/Default'

import type { SitePage } from '@site/types'
import Contact from '@components/Contact'
import { PageWrapperBgColor } from '@components/PageWrapper'

type Props = { page: SitePage; bgColor: PageWrapperBgColor }
const ContactPage = ({ bgColor, page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Contact bgColor={bgColor} />
    </DefaultLayout>
  )
}

export default ContactPage
