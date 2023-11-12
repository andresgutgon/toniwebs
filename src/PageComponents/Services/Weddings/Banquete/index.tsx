import { useIntl } from 'react-intl'
import CheckIcon from '@heroicons/react/24/outline/CheckIcon.js'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

export default function Banquete() {
  const intl = useIntl()
  const offerings = [
    {
      name: intl.formatMessage({
        id: 'WiqsVz',
        defaultMessage: 'Presentación de la entrada de los novios al banquete'
      })
    },
    {
      name: intl.formatMessage({
        id: 'o/1U5f',
        defaultMessage: 'Presentación de los menús.'
      })
    },
    {
      name: intl.formatMessage({
        id: '7aeSNJ',
        defaultMessage:
          'Presentación de invitados ilustres elegidos por vosotros.'
      })
    },
    {
      name: intl.formatMessage({
        id: 'Nzdye4',
        defaultMessage: 'Presentación de regalos.'
      })
    },
    {
      name: intl.formatMessage({
        id: 'PH7b4G',
        defaultMessage: 'Presentación de discursos.'
      })
    },
    {
      name: intl.formatMessage({
        id: 'b6CVca',
        defaultMessage: 'Presentación de actuaciones.'
      })
    },
    {
      name: intl.formatMessage({
        id: '6sO5KF',
        defaultMessage: 'Juegos participativos para los invitados.'
      })
    },
    {
      name: intl.formatMessage({
        id: '6sO5KF',
        defaultMessage: 'Narración de historias de familiares y amigos.'
      })
    },
    {
      name: intl.formatMessage({
        id: '958YGm',
        defaultMessage: 'Presentación del pastel nupcial.'
      })
    },
    {
      name: intl.formatMessage({
        id: 'L2+dto',
        defaultMessage: 'Presentación del baile nupcial.'
      })
    },
    {
      name: intl.formatMessage({
        id: 'VpUTKw',
        defaultMessage: 'Presentación del baile y fiesta final.'
      })
    }
  ]

  return (
    <PageWrapper id='opciones-para-bodas' bgColor='gray'>
      <PageContent>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8'>
          <div className='col-start-2 col-span-4'>
            <h2 className='mt-2 font-serif text-3xl font-extrabold text-slate-900'>
              {intl.formatMessage({
                id: 'CyRCtC',
                defaultMessage: 'Maestro de ceremonias en banquete de bodas'
              })}
            </h2>
            <div className='mt-4 space-y-3'>
              <p className='text-base text-slate-600'>
                {intl.formatMessage({
                  id: '7PVMQk',
                  defaultMessage:
                    'Con ésta opción tendréis un servicio exclusivo durante toda vuestra boda. Haremos una ceremonia memorable y única.'
                })}
              </p>
              <p className='text-base text-slate-600'>
                {intl.formatMessage({
                  id: 'UYKKqk',
                  defaultMessage:
                    'Tendréis acompañamiento durante todo el banquete, dónde seré el presentador/conductor de todo el evento.'
                })}
              </p>
            </div>
          </div>
          <div className='mt-12 lg:mt-0 lg:col-span-6'>
            <dl className='space-y-1 sm:grid sm:grid-cols-2 sm:gap-x-4'>
              {offerings.map((offering) => (
                <div key={offering.name} className='relative'>
                  <dt>
                    <CheckIcon
                      className='absolute h-6 w-6 text-rose-500'
                      aria-hidden='true'
                    />
                    <h3 className='ml-9 text-base leading-6 text-slate-900'>
                      {offering.name}
                    </h3>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}
