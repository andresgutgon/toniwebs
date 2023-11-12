import { useIntl } from 'react-intl'
import SmileIcon from '@heroicons/react/24/outline/FaceSmileIcon.js'
import MicroIcon from '@heroicons/react/24/outline/MicrophoneIcon.js'
import AcademicCap from '@heroicons/react/24/outline/AcademicCapIcon.js'
import ArrowTrendingIcon from '@heroicons/react/24/outline/ArrowTrendingUpIcon.js'
import ChatBubbleIcon from '@heroicons/react/24/outline/ChatBubbleLeftRightIcon.js'
import PlayPauseIcon from '@heroicons/react/24/outline/PlayPauseIcon.js'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

import mainImage from './images/toni-entrega-premios.jpg'

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

export default function Advantages() {
  const intl = useIntl()
  const advantages = useAdvantages()
  return (
    <PageWrapper id='ventajas-presentador-profesional' bgColor='gray'>
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
  )
}
