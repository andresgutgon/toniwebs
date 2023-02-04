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
  const aboutMe = site.pages.aboutMe[locale]
  const weddings = site.pages.weddings[locale]
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
      href: '#',
      text: intl.formatMessage({
        id: 'OvIhir',
        defaultMessage: 'Actor'
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
