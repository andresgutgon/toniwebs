import { useIntl } from 'react-intl'
import cn from 'classnames'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import BgPatterns from '@components/PageWrapper/BgPatterns'

import reading from './images/toni-leyendo.jpg'
import uvic from './images/toni-uvic.jpg'
import blanxart from './images/toni-figuera-presentacion-blanxart.jpg'
import entregaPremios from './images/toni-figuera-entregando-premios.jpg'
import mozar from './images/toni-disfrazado-mozar.jpg'
import skoda from './images/skoda.jpg'
import TitleLabel from '@components/TitleLabel'

const ImageMiniature = ({ src, alt, text }) => {
  return (
    <div className='relative rounded-lg overflow-hidden'>
      <img
        loading='lazy'
        width={400}
        height={400}
        decoding='async'
        className={cn(
          'h-full object-cover mb-6 sm:mb-0 rounded-lg sm:rounded-none',
          'shadow-xl ring-1 ring-black ring-opacity-5'
        )}
        alt={alt}
        src={src}
      />
      <div
        className={cn(
          'z-10 absolute inset-0 p-4',
          'text-lg flex items-end text-white/90'
        )}
      >
        {text}
      </div>
    </div>
  )
}

export default function Advantages() {
  const intl = useIntl()
  return (
    <PageWrapper id='porque-un-presentador-profesional' bgColor='transparent'>
      <BgPatterns />
      <PageContent>
        <div className='grid sm:grid-cols-12'>
          <div className='sm:col-start-3 sm:col-span-8 space-y-4'>
            <TitleLabel align='center'>
              {intl.formatMessage({
                id: 'Oy1QPr',
                defaultMessage: 'Transmitir el mensaje que quieres'
              })}
            </TitleLabel>
            <p className='text-center text-base sm:text-2xl text-gray-900'>
              {intl.formatMessage({
                id: 'IAW6mL',
                defaultMessage:
                  'Estar delante de una audiencia y ser capaz de conectar con ellos requiere de formación y experiencia, hay que estar preparado y saber lo que se necesita en cada momento.'
              })}
            </p>
          </div>
        </div>
        <div className='mt-8 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <ImageMiniature
            src={reading}
            alt='Toni leyendo en una entrega de premios'
            text={intl.formatMessage({
              id: 'VQTSTt',
              defaultMessage: 'Eventos de empresa'
            })}
          />
          <ImageMiniature
            src={blanxart}
            alt='Toni presentando un evento para Blanxart'
            text={intl.formatMessage({
              id: '1oIR+o',
              defaultMessage: 'Presentaciones de producto'
            })}
          />
          <ImageMiniature
            src={skoda}
            alt='Toni en una presentación para Skoda'
            text={intl.formatMessage({
              id: '/Ovnza',
              defaultMessage: 'Team buildings'
            })}
          />
          <ImageMiniature
            src={uvic}
            alt='Toni en las jornades de portes obertas de UVIC'
            text={intl.formatMessage({
              id: 'P/dpZG',
              defaultMessage: 'Ferias y Congresos'
            })}
          />
          <ImageMiniature
            src={mozar}
            alt='Toni disfrazado'
            text={intl.formatMessage({
              id: 'g7R08O',
              defaultMessage: 'Galas'
            })}
          />
          <ImageMiniature
            src={entregaPremios}
            alt='Toni en una presentación para Skoda'
            text={intl.formatMessage({
              id: '9AfghM',
              defaultMessage: 'Entregas de premios'
            })}
          />
        </div>
      </PageContent>
    </PageWrapper>
  )
}
