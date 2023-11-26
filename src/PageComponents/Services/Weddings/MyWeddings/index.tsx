import { useIntl } from 'react-intl'
import cn from 'classnames'

import PageWrapper from '@components/PageWrapper'
import perfectWeddingSrc from './images/la-boda-perfecta.jpg'
import ceremonyOcean from './images/toni-figuera-celebrando-ceremonia.jpg'

function ImageBlock({
  title,
  description,
  layout,
  img
}: {
  layout: 'image_first' | 'image_last'
  img: { src: string; alt: string }
  title?: string
  description: string
}) {
  return (
    <div className='flex flex-col gap-y-6 sm:gap-x-6'>
      <div
        className={cn('sm:col-span-6', {
          'sm:order-first sm:col-start-2': layout === 'image_first',
          'sm:order-last': layout === 'image_last'
        })}
      >
        <img
          loading='lazy'
          alt={img.alt}
          src={img.src}
          className='block w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5'
        />
      </div>
      <div
        className={cn(
          'sm:col-span-4 space-y-6 flex flex-col justify-between h-full',
          { 'sm:col-start-2': layout === 'image_last' }
        )}
      >
        <div className='flex flex-col justify-end space-y-4 h-full'>
          {title && (
            <h3 className='font-serif text-2xl sm:text-3xl tracking-tight font-extrabold text-slate-900'>
              {title}
            </h3>
          )}
          <p className='text-base text-gray-900'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function MyWeddings() {
  const intl = useIntl()
  const perfectWeddingAlt = intl.formatMessage({
    id: 'HYitF5',
    defaultMessage: 'Os ayudo a conseguir la boda perfecta'
  })
  return (
    <PageWrapper id='las-bodas-que-yo-hago' bgColor='white'>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <h3>
            <span className='block text-base text-center text-rose-600 tracking-wide uppercase'>
              {intl.formatMessage({
                id: '7StwJn',
                defaultMessage: 'ceremonias personalizadas'
              })}
            </span>
            <span className='font-serif mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {intl.formatMessage({
                id: 'LaU95V',
                defaultMessage: 'Todo lo que sueñas es posible'
              })}
            </span>
          </h3>
        </div>
        <div className='mt-16 grid sm:grid-cols-12 sm:gap-x-12 space-y-12 max-w-7xl mx-auto'>
          <div className='sm:col-span-6'>
            <ImageBlock
              layout='image_last'
              img={{
                src: ceremonyOcean,
                alt: 'Toni figuera celebrando ceremonia al lado del mar'
              }}
              title={intl.formatMessage({
                id: '2b6DBw',
                defaultMessage: 'Una ceremonia personalizada'
              })}
              description={intl.formatMessage({
                id: '+mbFn4',
                defaultMessage:
                  'Me adaptaré en el idioma o idiomas que necesites. Con músicas y canciones elegidas por vosotros para toda la ceremonia. Con participación de la familia y amigos. Con algún ritual o con votos matrimoniales. Con humor o diversión si lo queréis. Y siempre, siempre, con mucho amor.'
              })}
            />
          </div>
          <div className='sm:col-span-6'>
            <ImageBlock
              layout='image_first'
              img={{ src: perfectWeddingSrc, alt: perfectWeddingAlt }}
              title={intl.formatMessage({
                id: 'W7X4to',
                defaultMessage: 'Una ceremonia única'
              })}
              description={intl.formatMessage({
                id: 'lZ+cxx',
                defaultMessage:
                  'Cuéntame qué imaginas, tus expectativas e ilusiones y déjame que te ayude a que sea posible. Una boda a medida, un evento perfecto, una ceremonia única. Preparemos el timming y escaleta de la ceremonia para que todo esté controlado en todo momento. '
              })}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
