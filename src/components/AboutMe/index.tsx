import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import toniSrc from './toni-figuera.jpg'

const AboutMe = () => {
  const intl = useIntl()
  return (
    <PageWrapper id='sobre-mi' bgColor='white'>
      <PageContent>
        <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-x-8 sm:space-y-0'>
          <div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
            <img
              loading='lazy'
              className='object-cover shadow-lg rounded-lg aspect-square'
              src={toniSrc}
              alt='Toni Figuera'
            />
          </div>
          <div className='h-full sm:col-span-2 space-y-4 flex flex-col justify-center'>
            <div className='space-y-1'>
              <h2 className='text-base text-rose-500 uppercase tracking-wide'>
                {intl.formatMessage({
                  id: '0OAotW',
                  defaultMessage: 'Sobre mí'
                })}
              </h2>
              <h3 className='font-serif text-4xl leading-10 font-medium '>
                Toni Figuera
              </h3>
              <p className='text-slate-900 text-xl font-sans'>
                {intl.formatMessage({
                  id: 'mJqcsd',
                  defaultMessage: 'Presentador y Maestro de ceremonias'
                })}
              </p>
            </div>
            <div className='space-y-4 text-base sm:text-lg'>
              <p className='text-slate-600'>
                {intl.formatMessage({
                  id: '2WHEEl',
                  defaultMessage:
                    'Me llamo Toni Figuera y soy actor y director de teatro y eventos. Tengo más de 20 años de experiencia trabajando en el mundo del espectáculo con lo que he hecho absolutamente de todo: teatro de texto, teatro musical, teatro de calle, televisión, eventos de empresa, eventos privados, oficiante de bodas, maestro de ceremonias… celebraciones de todo tipo y en todas las situaciones que puedas imaginar. He actuado en teatros llenos ante 1200 personas, y en comidas privadas con 10 comensales. Me he cambiado en camerinos de 50 m2 con mi nombre en la puerta y un catering estupendo, y en el lavabo de un restaurante para actuar en un cumpleaños. Así es la vida del artista y me encanta.'
                })}
              </p>
            </div>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default AboutMe
