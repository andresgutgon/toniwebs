import cn from 'classnames'
import PageWrapper from '@components/PageWrapper'
import PageContent from '@components/PageContent'
import { useIntl } from 'react-intl'

import ayuntamentBarcelona from './images/ayuntament-barcelona.svg'
import hotelBarcelo from './images/barcelo-hotel.jpg'
import corteIngles from './images/el-corte-ingles.svg'
import firaBarcelona from './images/fira-barcelona.svg'
import hotelPalace from './images/hotel-palace.jpg'
import mapfre from './images/mapfre.svg'
import pinterest from './images/pinterest.svg'
import skoda from './images/skoda.svg'
import tibidabo from './images/tibidabo.svg'
import blanxart from './images/blanxart.png'
import tv3 from './images/tv3.svg'
import casanovaFoto from './images/casanova-foto.jpg'

type LogoProps = { hideOnSmall?: boolean; src: string; alt: string }
const Logo = ({ hideOnSmall, src, alt }: LogoProps) => {
  return (
    <div
      className={cn('sm:flex items-center justify-center relative bg-white', {
        hidden: hideOnSmall,
        flex: !hideOnSmall
      })}
    >
      <div className='absolute inset-0 ' />
      <img loading='lazy' src={src} width={150} height={150} alt={alt} />
    </div>
  )
}

const LogosGrid = () => {
  return (
    <div className='sm:border-gray-100 sm:border grid grid-cols-2 sm:grid-cols-4 bg-gray-100 gap-px'>
      <Logo src={skoda} alt='Skoda' />
      <Logo src={pinterest} alt='Pinterest' />
      <Logo src={blanxart} alt='Blaxart' />
      <Logo src={hotelBarcelo} alt='Hotel Barceló' />
      <Logo src={corteIngles} alt='El Corte Inglés' />
      <Logo src={hotelPalace} alt='Hotel Palace' />
      <Logo src={ayuntamentBarcelona} alt='Ayuntament de Barcelona' />
      <Logo src={mapfre} alt='Mapfre seguros' />
      <Logo src={tibidabo} alt='Parc del Tibidabo' />
      <Logo src={firaBarcelona} alt='La Fira de Barcelona' />
      <Logo src={casanovaFoto} alt='Casanova foto' />
      <Logo src={tv3} alt='TV3 televisió' />
    </div>
  )
}

const Logos = () => {
  const intl = useIntl()
  return (
    <PageWrapper id='entidades' bgColor='white'>
      <PageContent>
        <div className='space-y-8'>
          <h3 className='space-y-2 flex flex-col items-center'>
            <span className='block text-base text-center text-rose-600 tracking-wide uppercase'>
              {intl.formatMessage({
                id: 'oQ06of',
                defaultMessage: 'trabajo profesional'
              })}
            </span>
            <div className='w-10 h-px bg-rose-200 rounded-full' />
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-12 gap-y-10 sm:gap-x-6'>
            <div className='order-2 col-span-1 sm:order-1 sm:col-start-2 sm:col-span-7'>
              <LogosGrid />
            </div>
            <div className='col-span-1 order-1 sm:order-2 sm:col-span-4 flex flex-col justify-center space-y-3'>
              <h2 className='mt-2 font-serif text-3xl font-extrabold text-slate-900'>
                {intl.formatMessage({
                  id: 'BtmTUc',
                  defaultMessage: 'Eventos para entidades y empresas'
                })}
              </h2>
              <div className='space-y-2'>
                <p className='text-base sm:text-xl text-slate-900'>
                  {intl.formatMessage({
                    id: '+MaJ7w',
                    defaultMessage:
                      'Pongo mi creatividad, mi experiencia y mi corazón en cada proyecto que hago.'
                  })}
                </p>
                <p className='text-base sm:text-lg text-gray-600'>
                  {intl.formatMessage({
                    id: '8FOgzN',
                    defaultMessage:
                      'Algunas de las empresas con las que he trabajado'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Logos
