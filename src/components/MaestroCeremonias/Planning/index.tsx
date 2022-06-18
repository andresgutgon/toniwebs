import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import planingWeddingImageSrc from './planeando-la-boda.jpg'

const Planning = () => {
  const intl = useIntl()
  const planningAlt = intl.formatMessage({
    id: 'BIAord',
    defaultMessage: 'Pensando en los detalles de tu boda'
  })

  return (
    <PageWrapper>
      <PageContent>
        <div className='grid sm:grid-cols-2'>
          <div>
            <img
              alt={planningAlt}
              src={planingWeddingImageSrc}
              className='block w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 '
            />
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Planning
