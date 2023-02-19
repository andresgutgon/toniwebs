import { useIntl } from 'react-intl'
import cn from 'classnames'
import SmileIcon from '@heroicons/react/24/outline/FaceSmileIcon.js'
import MicroIcon from '@heroicons/react/24/outline/MicrophoneIcon.js'
import AcademicCap from '@heroicons/react/24/outline/AcademicCapIcon.js'
import ArrowTrendingIcon from '@heroicons/react/24/outline/ArrowTrendingUpIcon.js'
import ChatBubbleIcon from '@heroicons/react/24/outline/ChatBubbleLeftRightIcon.js'
import PlayPauseIcon from '@heroicons/react/24/outline/PlayPauseIcon.js'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

import mainImage from './images/toni-entrega-premios.jpg'
import reading from './images/toni-leyendo.jpg'
import uvic from './images/toni-uvic.jpg'
import mozar from './images/toni-disfrazado-mozar.jpg'
import skoda from './images/skoda.jpg'
import TitleLabel from '@components/TitleLabel'

const useAdvantages = () => {
  const intl = useIntl()
  return [
    {
      title: intl.formatMessage({
        id: '47iI2x',
        defaultMessage: 'Presencia escénica'
      }),
      Icon: MicroIcon
    },
    {
      title: intl.formatMessage({
        id: 'Aq+3st',
        defaultMessage: 'Dominio del escenario'
      }),
      Icon: AcademicCap
    },
    {
      title: intl.formatMessage({
        id: '0wZoYx',
        defaultMessage: 'Control del ritmo y el timming'
      }),
      Icon: ArrowTrendingIcon
    },
    {
      title: intl.formatMessage({
        id: 'x4xTNv',
        defaultMessage: 'Fluidez y naturalidad en el habla y el lenguaje'
      }),
      Icon: ChatBubbleIcon
    },
    {
      title: intl.formatMessage({
        id: 'yxFb/g',
        defaultMessage: 'Control y dominio del lenguaje corporal'
      }),
      Icon: PlayPauseIcon
    },
    {
      title: intl.formatMessage({
        id: '78ta1L',
        defaultMessage: 'Capacidad de transmitir mensajes y emociones'
      }),
      Icon: SmileIcon
    }
  ]
}

const ImageMiniature = ({ src, alt, text }) => {
  return (
    <div className='relative rounded-lg overflow-hidden'>
      <img
        loading='lazy'
        width={400}
        height={400}
        decoding='async'
        className={cn(
          'object-cover mb-6 sm:mb-0 rounded-lg sm:rounded-none',
          'shadow-xl ring-1 ring-black ring-opacity-5'
        )}
        alt={alt}
        src={src}
      />
      <div
        className={cn(
          'z-10 absolute inset-0 p-4',
          'text-lg flex items-end text-white/70'
        )}
      >
        {text}
      </div>
    </div>
  )
}

export default function Advantages() {
  const intl = useIntl()
  const advantages = useAdvantages()
  return (
    <>
      <PageWrapper id='ventajas-presentador-profesional' bgColor='white'>
        <PageContent>
          <div className='grid sm:grid-cols-12 gap-y-6 sm:gap-x-6'>
            <div className='order-last sm:order-first sm:col-span-5'>
              <img
                loading='lazy'
                alt='Toni disfrazado para un representación'
                src={mainImage}
                className='block w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5'
              />
            </div>
            <div className='sm:col-span-7 space-y-6 flex flex-col justify-between'>
              <div className='space-y-4'>
                <h3 className='font-serif text-3xl tracking-tight font-extrabold sm:text-5xl text-slate-900'>
                  {intl.formatMessage({
                    id: 'WjUBO0',
                    defaultMessage:
                      'Un presentador profesional al servicio de tu empresa'
                  })}
                </h3>
                <p className='text-base sm:text-lg text-gray-900'>
                  {intl.formatMessage({
                    id: 'CTkDVU',
                    defaultMessage:
                      'Es importante conocer la naturaleza y el ambiente que se quiere crear, y en función de ello darle al acto un tono u otro según convenga. Trabajo todos los eventos de forma personalizada, y escribo o adapto los textos y guiones que sean necesarios.'
                  })}
                </p>
              </div>
              <div className='space-y-3'>
                <p className='text-base text-gray-900'>
                  {intl.formatMessage({
                    id: 'a2sH+L',
                    defaultMessage:
                      'Las ventajas de tener a un actor y presentador profesional son muchas:'
                  })}
                </p>
                <ul className='grid sm:grid-cols-2 gap-4'>
                  {advantages.map((advantage, index) => (
                    <li key={index} className='flex items-center space-x-2'>
                      <div className='bg-rose-50 rounded-xl flex items-center justify-center p-2'>
                        {<advantage.Icon className='w-6 h-6 text-rose-500' />}
                      </div>
                      <h3>{advantage.title}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </PageContent>
      </PageWrapper>
      <PageWrapper id='imagenes-presentador' bgColor='gray'>
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
                    'Presentar un evento es siempre una responsabilidad, porque del presentador dependen el ritmo, los tiempos y la fluidez del mismo. '
                })}
              </p>
            </div>
          </div>
          <div className='mt-8 sm:mt-16 grid sm:grid-cols-4 gap-4'>
            <ImageMiniature
              src={reading}
              alt='Toni leyendo en una entrega de premios'
              text={intl.formatMessage({
                id: 'VQTSTt',
                defaultMessage: 'Eventos de empresa'
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
              src={skoda}
              alt='Toni en una presentación para Skoda'
              text={intl.formatMessage({
                id: '/Ovnza',
                defaultMessage: 'Team buildings'
              })}
            />
          </div>
        </PageContent>
      </PageWrapper>
    </>
  )
}
