import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline/index.js'
import { usePage } from '@layouts/PageProvider'
import Form from './Form'

const Contact = () => {
  const intl = useIntl()
  const { page } = usePage()
  const phone = page.site.phoneNumber
  const email = page.site.email
  return (
    <PageWrapper id='contactame' bgColor='gray'>
      <PageContent>
        <div className='sm:grid sm:grid-cols-12 gap-6 space-y-4'>
          <div className='col-span-4 col-start-2'>
            <h2 className='font-serif text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              {intl.formatMessage({
                id: 'ScnA6d',
                defaultMessage: 'Solicita información'
              })}
            </h2>
            <p className='hidden sm:block mt-3 text-lg leading-6 text-gray-500'>
              {intl.formatMessage({
                id: 'cBWDft',
                defaultMessage: 'Explícame el evento que quieres preparar'
              })}
            </p>
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
                  <MailIcon
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
