import { FormattedMessage } from 'react-intl'

import DefaultLayout from '@layouts/Default'
import type { SitePage } from '@sites/types'

type Props = { site: SitePage }
const MaestroCeremonias = ({ site }: Props) => {
  return (
    <DefaultLayout site={site}>
      <h2 className='text-red-600 text-8xl'>{site.page.meta.title}</h2>
      <p>
        <FormattedMessage id='n+D0mx' defaultMessage='Adios' />
      </p>
    </DefaultLayout>
  )
}

export default MaestroCeremonias
