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
  return (
    <PageWrapper id='planear-tu-boda' bgColor='transparent'>
      <PageContent>
        <div className='grid sm:grid-cols-12 gap-10'>
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
