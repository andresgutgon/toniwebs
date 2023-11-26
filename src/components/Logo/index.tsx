import { Locale } from '@types'
import { usePage } from '@layouts/PageProvider'
import { FormattedMessage } from 'react-intl'

export default function Logo() {
  const {
    page: { site, locale: loc }
  } = usePage()
  const locale = loc as Locale
  const home = site.pages.home[locale]
  return (
    <a
      className='py-0 xl:pl-8 relative -top-1 xl:top-0 focus-visible:outline-0'
      href={home.path}
    >
      <FormattedMessage
        id='YOCjIA'
        defaultMessage='<master>Maestro</master> <of>de</of> <ceremonies>ceremonias</ceremonies>'
        values={{
          master: function hightlight(chunks) {
            return (
              <span className='relative top-2.5 xl:top-0 text-xs xl:text-2xl xl:font-serif text-gray-600 xl:text-rose-600'>
                {chunks}
              </span>
            )
          },
          of: function ofWord(chunks) {
            return (
              <span className='relative top-2.5 xl:top-0 text-xs xl:text-base text-gray-600'>
                {chunks}
              </span>
            )
          },
          ceremonies: function normal(chunks) {
            return (
              <span className='block xl:inline text-xl xl:text-2xl font-serif text-rose-600'>
                {chunks}
              </span>
            )
          }
        }}
      />
    </a>
  )
}
