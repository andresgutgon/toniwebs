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
        <div className='grid sm:grid-cols-2 gap-10'>
          <div>
            <img
              alt={planningAlt}
              src={planingWeddingImageSrc}
              className='block w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 '
            />
          </div>
          <div className='order-first sm:order-last flex flex-col items-start justify-center space-y-8'>
            <h3 className='font-serif text-3xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-slate-900'>
              {intl.formatMessage({
                id: '3xDpCF',
                defaultMessage: 'Tu ceremonia como tú quieres.'
              })}
            </h3>
            <p className='text-base sm:text-xl text-slate-900'>
              {intl.formatMessage({
                id: 'z3dPJe',
                defaultMessage:
                  'Si estás preparando tu boda estoy seguro que ya te la has imaginado en muchas ocasiones. Cuéntame qué imaginas, tus expectativas e ilusiones, cómo te gustaría que fuera tu ceremonia y déjame que te ayude a que sea posible. Una boda a medida, un evento perfecto, una ceremonia única.'
              })}
            </p>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Planning
