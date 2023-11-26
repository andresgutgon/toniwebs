import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

import aireLibre from './images/toni-figuera-celebrando-boda-al-arie-libre.jpg'
import hablando from './images/toni-figuera-hablando-delante-invitados-en-ceremonia.jpg'

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
                id: 't7tkL4',
                defaultMessage:
                  'Me desplazo para haceros la ceremonia dónde queráis. Maestro de ceremonias en Barcelona, Girona, Tarragona, Lleida, Zaragoza, Andorra, Mallorca...'
              })}
            </h3>
          </div>
        </div>
        <div className='mt-8 grid sm:grid-cols-12 gap-10'>
          <div className='col-span-6'>
            <Image
              src={hablando}
              alt='Toni Figuera hablando delante de invitados'
            />
          </div>
          <div className='col-span-6'>
            <Image
              src={aireLibre}
              alt='Toni Figuera celebrando boda al aire libre'
            />
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}
