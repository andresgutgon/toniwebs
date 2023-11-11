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
import bodasNet from './images/bodas-net.png'
import uvic from './images/uvic.png'
import allianz from './images/allianz.jpg'
import casanovaFoto from './images/casanova-foto.jpg'
import TitleLabel from '@components/TitleLabel'

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
  const intl = useIntl()
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
      <Logo src={bodasNet} alt='Bodas.net' />
      <Logo src={uvic} alt='Universitat de Vic' />
      <Logo src={allianz} alt='Allianz Seguros' />
      <div className='flex items-center justify-center uppercase text-xs text-gray-400'>
        {intl.formatMessage({
          id: 'dLLPUd',
          defaultMessage: 'Tu empresa'
        })}
      </div>
    </div>
  )
}

const Logos = () => {
  const intl = useIntl()
  return (
    <PageWrapper id='entidades' bgColor='white'>
      <PageContent>
        <div className='space-y-8'>
          <TitleLabel underline align='center'>
            {intl.formatMessage({
              id: 'oQ06of',
              defaultMessage: 'Algunas empresas con las que he trabajado'
            })}
          </TitleLabel>
          <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-1 sm:col-start-2 sm:col-span-10'>
              <LogosGrid />
            </div>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Logos
