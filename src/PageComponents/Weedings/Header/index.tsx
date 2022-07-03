import { useIntl } from 'react-intl'
import cn from 'classnames'

import PageContent from '@components/PageContent'
import logoSrc from './logo.svg'

type MenuItemProps = { url: string; text: string }
const MenuItem = ({ url, text }: MenuItemProps) => (
  <a
    href={url}
    className='bg-slate-100 rounded-full text-base text-slate-600 leading-6 pt-1 px-3 sm:py-0 sm:px-0 sm:bg-transparent sm:text-xl sm:font-medium sm:text-slate-900 hover:text-rose-600 '
  >
    {text}
  </a>
)
const Header = () => {
  const intl = useIntl()
  const logoAlt = intl.formatMessage({
    id: '/m71Vx',
    defaultMessage: 'Toni figuera, maestro de ceremonias'
  })
  const menuItems = [
    {
      url: '#opciones-para-bodas',
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
        defaultMessage: 'Contáctame'
      })
    }
  ]
  const paddingLeft = 'px-l sm:pl-6 lg:pl-8'
  return (
    <>
      <div id='inicio' className='bg-white sm:mb-3'>
        <PageContent>
          <div className={cn('relative pt-2 sm:pt-8', paddingLeft)}>
            <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <a href='/'>
                  <span className='sr-only'>{logoAlt}</span>
                  <img src={logoSrc} alt={logoAlt} className='h-16' />
                </a>
              </div>
            </div>
          </div>
        </PageContent>
      </div>

      <nav
        className='sticky top-0 z-40 flex flex-col items-start'
        aria-label='Menu de navegación'
      >
        <div className='absolute inset-0 bg-white sm:bg-white/60 sm:backdrop-blur-sm' />
        <div className='w-full relative z-10'>
          <div className='relative max-w-7xl mx-auto pl-6 '>
            <div className='sm:hidden absolute z-10 right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white' />
            <div
              className={cn(
                'pt-2 sm:pt-4 pb-2 w-full space-x-2 sm:space-x-4',
                'md:space-x-8 border-rose-600 ',
                'flex flex-row flex-nowrap overflow-auto whitespace-nowrap no-scrollbar',
                paddingLeft
              )}
            >
              {menuItems.map((menuItem: MenuItemProps, index: number) => (
                <MenuItem key={index} {...menuItem} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
