import { FormattedMessage } from 'react-intl'

import DefaultLayout from "@layouts/Default"
import type { MetaTags } from "@layouts/Default"


type Props = {
  meta: MetaTags
}
const MaestroCeremonias = ({ meta }: Props) => {
  return (
    <DefaultLayout meta={meta}>
      <h2 className='text-red-600 text-8xl'>{meta.title}</h2>
      <p><FormattedMessage id='n+D0mx' defaultMessage='Adios' /></p>

    </DefaultLayout>
  )
}

export default MaestroCeremonias
