import { useIntl } from 'react-intl'

import { usePage } from '@layouts/PageProvider'
import { Locale } from '@types'

export type MenuItem = {
  href: string
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
  const intl = useIntl()
  const {
    page: { pageKey, site, locale: loc }
  } = usePage()

  const locale = loc as Locale
  const home = site.pages.home[locale]
  const aboutMe = site.pages.aboutMe[locale]
  const moderator = site.pages.moderator[locale]
  const speaker = site.pages.speaker[locale]
  const fakeWaiter = site.pages.fakeWaiter[locale]
  const infiltratedCharacter = site.pages.infiltratedCharacter[locale]
  const reporterTv = site.pages.reporterTv[locale]
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
      selected: pageKey === 'home',
      href: home.path,
      text: home.menuText
    },
    {
      selected: pageKey === 'moderator',
      href: moderator.path,
      text: moderator.menuText
    },
    {
      selected: pageKey === 'speaker',
      href: speaker.path,
      text: speaker.menuText
    },
    {
      selected: false,
      href: '#',
      text: intl.formatMessage({
        id: 'OvIhir',
        defaultMessage: 'Otros servicios'
      }),
      submenuItems: [
        {
          selected: pageKey === 'fakeWaiter',
          href: fakeWaiter.path,
          text: fakeWaiter.menuText
        },
        {
          selected: pageKey === 'infiltratedCharacter',
          href: infiltratedCharacter.path,
          text: infiltratedCharacter.menuText
        },
        {
          selected: pageKey === 'reporterTv',
          href: reporterTv.path,
          text: reporterTv.menuText
        }
      ]
    }
  ]

  return { services, personal }
}

export default useMenuItems
