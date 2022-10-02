import { ReactNode, useMemo } from 'react'
import GlobeAltIcon from '@heroicons/react/24/outline/GlobeAltIcon.js'
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon.js'
import PhoneIcon from '@heroicons/react/20/solid/PhoneIcon.js'

import useMenuItems from '@hooks/useMenuItems'
import DesktopNavigation, { NavItem } from '@components/Header/DesktopMenu'
import PageContent from '@components/PageContent'
import SimpleMenu, { simpleMenuInteractiveProps } from '@components/SimpleMenu'
import Logo from '@components/Logo'
import MobileMenu from './MobileMenu'
import { usePage } from '@layouts/PageProvider'
import { LocaleOption } from '@site/types'

export type MenuItemProps = {
  children: ReactNode
  selected: boolean
  href?: string
}

const LanguageSwitcherButton = () => {
  const {
    localeOptions,
    page: { locale }
  } = usePage()
  const { trigger } = simpleMenuInteractiveProps
  const label = useMemo(
    () =>
      localeOptions.find((lo: LocaleOption) => lo.identifier === locale)
        .shortLabel,
    [locale]
  )
  return (
    <button {...trigger} type='button' className='flex items-center space-x-1'>
      <GlobeAltIcon
        className='text-gray-400 flex-shrink-0 h-6 w-6'
        aria-hidden='true'
      />
      <span className='uppercase text-xs text-gray-700 top-px relative'>
        {label}
      </span>
      <ChevronDownIcon
        className='text-gray-400 ml-1 h-5 w-5'
        aria-hidden='true'
      />
    </button>
  )
}

const Header = () => {
  const { personal, services } = useMenuItems()
  const { localeOptions } = usePage()
  const phone = personal.phone
  return (
    <div className='sticky top-0 z-40 bg-white shadow'>
      <PageContent>
        <div className='flex items-center justify-between'>
          <Logo />
          <DesktopNavigation items={services} />
          <div className='min-w-0 flex items-center space-x-2'>
            <div className='hidden lg:flex'>
              <NavItem
                selected={personal.aboutMe.selected}
                href={personal.aboutMe.href}
              >
                {personal.aboutMe.text}
              </NavItem>
            </div>
            <a
              href={`tel:${phone.trim()}`}
              className='flex grow overflow-hidden items-center rounded-full py-1 px-3 space-x-1 bg-gray-100'
            >
              <PhoneIcon
                className='text-gray-400 flex-shrink-0 h-4 sm:h-5 w-4 sm:w-5'
                aria-hidden='true'
              />
              <span className='truncate text-xs xs:text-base font-light text-gray-900 relative top-0.5'>
                +34 {phone}
              </span>
            </a>

            <MobileMenu />
            <div className='hidden lg:flex'>
              <SimpleMenu
                size='small'
                trigger={<LanguageSwitcherButton />}
                items={localeOptions.map((lo: LocaleOption) => ({
                  text: lo.label,
                  href: lo.url
                }))}
              />
            </div>
          </div>
        </div>
      </PageContent>
    </div>
  )
}

export default Header
