import { useIntl } from 'react-intl'

import { usePage } from '@layouts/PageProvider'
import { Locale } from '@types'

export type MenuItem = {
  href: string
  target?: string
  text: string
  selected?: boolean
  submenuItems?: MenuItem[]
}

type TopMenu = {
  services: MenuItem[]
  personal: {
    phone: string
    aboutMe: MenuItem
  }
}
const useMenuItems = (): TopMenu => {
  const {
    page: { pageKey, site, locale: loc }
  } = usePage()

  const locale = loc as Locale
  const aboutMe = site.pages.aboutMe[locale]
  const weddings = site.pages.weddings[locale]
  const moderator = site.pages.moderator[locale]
  const speaker = site.pages.speaker[locale]
  const personal = {
    phone: site.phoneNumber,
    aboutMe: {
      selected: pageKey === 'aboutMe',
      href: aboutMe.path,
      text: aboutMe.menuText
    }
  }
  const services = [
    {
      selected: pageKey === 'moderator',
      href: moderator.path,
      text: moderator.menuText
    },
    {
      selected: pageKey === 'weddings',
      href: weddings.path,
      text: weddings.menuText
    },
    {
      selected: pageKey === 'speaker',
      href: speaker.path,
      text: speaker.menuText
    },
    {
      selected: false,
      href: 'https://tonifiguera.com',
      text: 'Actor',
      target: '_blank'
    }
  ]

  return { services, personal }
}

export default useMenuItems
