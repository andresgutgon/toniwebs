import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import BgPatterns from '@components/PageWrapper/BgPatterns'
import planingWeddingImageSrc from './planeando-la-boda.jpeg'

export default function Planning() {
  const intl = useIntl()
  const planningAlt = intl.formatMessage({
    id: 'BIAord',
    defaultMessage: 'Pensando en los detalles de tu boda'
  })

  return (
    <PageWrapper id='planear-tu-boda' bgColor='transparent'>
      <BgPatterns thirdVisible={false} />
      <PageContent>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div>
            <img
              loading='lazy'
              alt={planningAlt}
              src={planingWeddingImageSrc}
              className='block w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 '
            />
          </div>
          <div className='order-first sm:order-last flex flex-col items-start justify-center space-y-8'>
            <h3 className='font-serif text-3xl tracking-tight font-extrabold sm:text-5xl text-slate-900'>
              {intl.formatMessage({
                id: '3xDpCF',
                defaultMessage: 'Contacta para un entrevista'
              })}
            </h3>
            <p className='text-base sm:text-xl text-slate-900'>
              {intl.formatMessage({
                id: 'z3dPJe',
                defaultMessage:
                  'Cuéntame qué imaginas, tus expectativas e ilusiones y déjame que te ayude a que sea posible. Una boda a medida, un evento perfecto, una ceremonia única.'
              })}
            </p>
            <a
              className='text-base sm:text-xl text-rose-600 underline'
              href='#contactame'
            >
              {intl.formatMessage({
                id: 'xGfqJO',
                defaultMessage: 'Pregúntame lo que necesites'
              })}
            </a>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}
