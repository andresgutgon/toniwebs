import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

import lineaDeMeta from './images/toni-figuera-vic-linea-de-meta.jpg'
import hablando from './images/toni-figuera-presentando-vicactivat.jpg'

function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      loading='lazy'
      alt={alt}
      src={src}
      className='block w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5'
    />
  )
}

export default function ImageGallery() {
  const intl = useIntl()
  return (
    <PageWrapper id='planear-tu-boda' bgColor='transparent'>
      <PageContent>
        <div className='grid sm:grid-cols-12'>
          <div className='sm:col-start-3 sm:col-span-8 space-y-4'>
            <div className='space-y-2 flex flex-col'>
              <span className='block text-base text-rose-600 tracking-wide uppercase text-center'>
                {intl.formatMessage({
                  id: '+9UIWM',
                  defaultMessage: 'Donde queráis'
                })}
              </span>
            </div>
            <h3 className='text-center text-base sm:text-2xl text-gray-900'>
              {intl.formatMessage({
                id: 'MeqYUs',
                defaultMessage:
                  'Me desplazo para hacer vuestro evento dónde necesitéis. Speaker en Barcelona, Girona, Tarragona, Lleida, Zaragoza, Andorra, Mallorca...'
              })}
            </h3>
          </div>
        </div>
        <div className='mt-8 grid sm:grid-cols-12 gap-10'>
          <div className='col-span-6'>
            <Image
              src={hablando}
              alt="Toni Figuera hablando delante en Vicactiva't"
            />
          </div>
          <div className='col-span-6'>
            <Image
              src={lineaDeMeta}
              alt='Toni Figuera en la línea de meta de una carrera'
            />
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}
