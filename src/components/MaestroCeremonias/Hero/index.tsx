import { FormattedMessage, useIntl } from 'react-intl'

import Button from '@components/Button'
import PageWrapper from '@components/PageWrapper'
import PageContent from '@components/PageContent'
import { usePage } from '@layouts/PageProvider'
import imageSrc from './toni-maestro-ceremonias.jpg'

export default function Hero() {
  const { site } = usePage()
  const phone = site.site.phoneNumber
  const intl = useIntl()

  return (
    <PageWrapper id='hero-section' bgColor='white' verticalSpace='none'>
      <PageContent>
        <div className='relative z-20 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>
          <main className='pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28'>
            <div className='sm:text-center lg:text-left'>
              <p className='font-serif text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl'>
                <FormattedMessage
                  id='n71Uwf'
                  defaultMessage='<hightlight>Conectar con la gente</hightlight> <normal>compartir emociones.</normal>'
                  values={{
                    hightlight: function hightlight(chunks) {
                      return (
                        <span className='block text-slate-900 xl:inline-block mb-2'>
                          {chunks}
                        </span>
                      )
                    },
                    normal: function normal(chunks) {
                      return (
                        <span className='block text-rose-600 xl:inline'>
                          {chunks}
                        </span>
                      )
                    }
                  }}
                />
              </p>
              <h1 className='mt-3 text-base text-slate-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                {intl.formatMessage({
                  id: '4Y3qdy',
                  defaultMessage:
                    'Maestro de ceremonias, oficiante de bodas, presentador.'
                })}
              </h1>
              <p className='mt-1 text-sm text-slate-500 sm:text-base sm:max-w-xl sm:mx-auto md:text-lg lg:mx-0'>
                {intl.formatMessage({
                  id: 'VUgx65',
                  defaultMessage:
                    'Hacer que tu boda sea especial para ti y tus invitados. Crear recuerdos imborrables. Una celebración de vuestro amor para compartirla con vuestra familia y allegados.'
                })}
              </p>
              <div className='mt-5 sm:mt-8 sm:flex justify-center lg:justify-start'>
                <div className='space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center'>
                  <div>
                    <Button href='#contactame'>
                      {intl.formatMessage({
                        id: 'ik0QqA',
                        defaultMessage: 'Solicita información'
                      })}
                    </Button>
                  </div>
                  <div className='text-center sm:text-left flex-0'>
                    <FormattedMessage
                      id='7GtpBL'
                      defaultMessage='<callTag>O llama al</callTag> <phoneTag></phoneTag>'
                      values={{
                        callTag: function callTag(chunks) {
                          return (
                            <span className='text-base text-slate-400'>
                              {chunks}
                            </span>
                          )
                        },
                        phoneTag: function phoneTag(chunks) {
                          return (
                            <a
                              href={`tel:${phone.trim()}`}
                              className='block sm:inline-block text-xl text-slate-900'
                            >
                              +34 {phone}
                              {chunks}
                            </a>
                          )
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </PageContent>

      <div className='relative z-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src={imageSrc}
          alt={intl.formatMessage({
            id: 'rjQbxZ',
            defaultMessage:
              'Toni Figuera maestro de ceremonias oficiando una boda'
          })}
        />
      </div>
    </PageWrapper>
  )
}
