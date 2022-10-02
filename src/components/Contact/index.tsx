import { useIntl } from 'react-intl'
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon.js'
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon.js'

import PageContent from '@components/PageContent'
import { usePage } from '@layouts/PageProvider'
import PageWrapper, { PageWrapperBgColor } from '@components/PageWrapper'
import Form from './Form'

type Props = { bgColor: PageWrapperBgColor }
const Contact = ({ bgColor }: Props) => {
  const intl = useIntl()
  const { page } = usePage()
  const phone = page.site.phoneNumber
  const email = page.site.email
  return (
    <PageWrapper id='contactame' bgColor={bgColor}>
      <PageContent>
        <div className='sm:grid sm:grid-cols-12 gap-6 space-y-4'>
          <div className='col-span-4 col-start-2'>
            <h2 className='font-serif text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              {intl.formatMessage({
                id: 'ScnA6d',
                defaultMessage: 'Solicita información'
              })}
            </h2>
            <dl className='mt-8 text-base text-gray-500'>
              <div className='mt-6'>
                <dt className='sr-only'>
                  {intl.formatMessage({
                    id: 'S6W4PT',
                    defaultMessage: 'Teléfono'
                  })}
                </dt>
                <dd className='flex'>
                  <PhoneIcon
                    className='text-rose-600flex-shrink-0 h-6 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                  <a
                    href={`tel:${phone.trim()}`}
                    className='text-rose-600 underline ml-3'
                  >
                    +34 {phone}
                  </a>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>Email</dt>
                <dd className='flex'>
                  <EnvelopeIcon
                    className='flex-shrink-0 h-6 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                  <a
                    href={`mailto:${email}`}
                    className='text-rose-600 underline ml-3'
                  >
                    {email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className='col-span-6'>
            <Form />
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Contact
