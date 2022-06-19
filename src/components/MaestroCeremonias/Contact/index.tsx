import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { usePage } from '@layouts/PageProvider'
import Button from '@components/Button'
import Input from '@components/Input'
import Textarea from '@components/Textarea'
import FieldGroup from '@components/FieldRow'

const Form = () => {
  const intl = useIntl()
  const name = intl.formatMessage({ id: 'mKjzSK', defaultMessage: 'Tu nombre' })
  const phone = intl.formatMessage({
    id: 'wl6aCz',
    defaultMessage: 'Tu número de teléfono'
  })
  const eventDate = intl.formatMessage({
    id: '3dnvt4',
    defaultMessage: 'Fecha del evento'
  })
  const day = intl.formatMessage({
    id: '+AAB8p',
    defaultMessage: 'Día'
  })
  const month = intl.formatMessage({
    id: '2wycFf',
    defaultMessage: 'Mes'
  })
  const year = intl.formatMessage({
    id: 'lruu5m',
    defaultMessage: 'Año'
  })
  const numOfInvitations = intl.formatMessage({
    id: 'R/mhJZ',
    defaultMessage: 'Número aprox. de invitados'
  })
  const message = intl.formatMessage({
    id: 'acQBQS',
    defaultMessage: 'Explica un poco cómo quieres que sea tu evento'
  })
  return (
    <form action='#' method='POST' className='grid grid-cols-1 gap-y-6'>
      <FieldGroup label={eventDate}>
        <Input required id='day' label={day} placeholder={day} />
        <Input required id='month' label={month} placeholder={month} />
        <Input required id='year' label={year} placeholder={year} />
      </FieldGroup>
      <Input required id='name' label={name} placeholder={name} />
      <Input required id='phone' label={phone} placeholder={phone} />
      <Input
        id='numOfInvitations'
        label={numOfInvitations}
        placeholder={numOfInvitations}
      />
      <Textarea required id='message' label={message} placeholder={message} />
      <div>
        <Button onClick={() => {}}>
          {intl.formatMessage({
            id: 'N7yh1n',
            defaultMessage: 'Enviar mensaje'
          })}
        </Button>
      </div>
    </form>
  )
}

const Contact = () => {
  const intl = useIntl()
  const { site } = usePage()
  const phone = site.site.phoneNumber
  const email = site.site.email
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
                defaultMessage:
                  'Enviame un mensaje explicando un poco como queréis la ceremonia y me pondré en contacto lo antes posible.'
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
