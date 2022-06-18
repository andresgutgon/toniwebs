import { FormattedMessage, useIntl } from 'react-intl'

import PageWrapper from '@components/PageWrapper'
import PageContent from '@components/PageContent'
import logoSrc from './logo.svg'
import imageSrc from './toni-maestro-ceremonias.jpg'

type MenuItemProps = { url: string; text: string }
const MenuItem = ({ url, text }: MenuItemProps) => (
  <a
    href={url}
    className='text-lg sm:text-xl font-medium text-slate-900 hover:text-rose-600'
  >
    {text}
  </a>
)
export default function Hero() {
  const intl = useIntl()

  const logoAlt = intl.formatMessage({
    id: '/m71Vx',
    defaultMessage: 'Toni figuera, maestro de ceremonias'
  })
  const menuItems = [
    {
      url: '#ejemplos-de-boda',
      text: intl.formatMessage({
        id: '9u7E3s',
        defaultMessage: 'Bodas'
      })
    },
    {
      url: '#sobre-mi',
      text: intl.formatMessage({
        id: '0OAotW',
        defaultMessage: 'Sobre mí'
      })
    },
    {
      url: '#contactame',
      text: intl.formatMessage({
        id: '88sEW8',
        defaultMessage: 'Contactame'
      })
    }
  ]
  return (
    <PageWrapper bgColor='white' verticalSpace='none'>
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
          <div className='relative pt-6 sm:pt-14 px-4 sm:px-6 lg:px-8'>
            <nav
              className='relative flex flex-col items-start space-y-4'
              aria-label='Menu de navegación'
            >
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <a href='/'>
                    <span className='sr-only'>{logoAlt}</span>
                    <img src={logoSrc} alt={logoAlt} className='h-16' />
                  </a>
                </div>
              </div>
              <div className='pt-2 pb-4 w-full space-x-8 border-rose-600 flex'>
                {menuItems.map((menuItem: MenuItemProps, index: number) => (
                  <MenuItem key={index} {...menuItem} />
                ))}
              </div>
            </nav>
          </div>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <p className='font-serif text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
                <FormattedMessage
                  id='n71Uwf'
                  defaultMessage='<hightlight>Conectar y compartir</hightlight> <normal>emociones.</normal>'
                  values={{
                    hightlight: function hightlight(chunks) {
                      return (
                        <span className='block text-rose-600 xl:inline'>
                          {chunks}
                        </span>
                      )
                    },
                    normal: function normal(chunks) {
                      return (
                        <span className='block text-slate-900 xl:inline'>
                          {chunks}
                        </span>
                      )
                    }
                  }}
                />
              </p>
              <h1 className='mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                {intl.formatMessage({
                  id: '4Y3qdy',
                  defaultMessage:
                    'Maestro de ceremonias, oficiante de bodas, presentador.'
                })}
              </h1>
              <p className='text-base text-slate-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0'>
                {intl.formatMessage({
                  id: 'VUgx65',
                  defaultMessage:
                    'Hacer que tu boda sea especial para ti y tus invitados. Crear recuerdos imborrables. Una celebración de vuestro amor para compartirla con vuestra familia y allegados.'
                })}
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='#contactame'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-xl md:px-10'
                  >
                    {intl.formatMessage({
                      id: 'tklU5R',
                      defaultMessage: 'Informáte sin compromiso'
                    })}
                  </a>
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
