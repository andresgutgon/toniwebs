import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useIntl } from 'react-intl'
import CheckBadgeIcon from '@heroicons/react/24/outline/CheckBadgeIcon.js'

import Button from '@components/Button'
import Input from '@components/Input'
import Textarea from '@components/Textarea'
import { usePage } from '@layouts/PageProvider'

// NOTE on CORS: setting in fetch `mode: 'no-cors'` allow to send from localhost
const CORS_MODE = 'cors'
// Same Google sheet as tonifiguera.com
const BASE_API = 'https://script.google.com/macros/s'
const VERSION =
  'AKfycbxIJcuDaVeChFLR6DGlC6ki9Kood2XGMzdms_uNws7IB3oKAUO3usuXEbtm9G9VxiWcsw'
const URL = `${BASE_API}/${VERSION}/exec`

const Form = () => {
  const [sending, setSending] = useState<boolean>(false)
  const [sent, setSent] = useState<boolean>(false)
  const { page } = usePage()
  const formRef = useRef(null)
  const intl = useIntl()
  const name = intl.formatMessage({ id: 'mKjzSK', defaultMessage: 'Tu nombre' })
  const phone = intl.formatMessage({
    id: 'wl6aCz',
    defaultMessage: 'Tu número de teléfono'
  })
  const message = intl.formatMessage({
    id: 'acQBQS',
    defaultMessage: 'Explica un poco cómo quieres que sea tu evento'
  })
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setSending(true)
    event.preventDefault()

    if (!formRef.current) return

    const data = new FormData(formRef.current)

    data.append(
      'subject',
      `[${data.get('name')}] contacto de ${page.site.domain}`
    )
    const { ok } = await fetch(URL, {
      method: 'POST',
      mode: CORS_MODE,
      body: data
    })

    setSending(false)
    setSent(true)

    // Show again form
    setTimeout(() => {
      setSent(false)
    }, 5000) // 5 seconds

    console.log('OK', ok)
  }

  const messageSentTitle = intl.formatMessage({
    id: 'kxRPrz',
    defaultMessage: '¡Mensaje enviado!'
  })
  const messageSentDescription = intl.formatMessage({
    id: 'vSXIpl',
    defaultMessage:
      'Me pondré en contacto con vosotros lo antes posible. Un saludo coordial'
  })
  const buttonLabel = intl.formatMessage({
    id: 'N7yh1n',
    defaultMessage: 'Enviar mensaje'
  })
  const sendingButtonLabel = intl.formatMessage({
    id: 'TeuDtf',
    defaultMessage: 'Enviando...'
  })

  if (sent) {
    return (
      <div className='flex flex-col items-center justify-center p-10 space-y-4'>
        <CheckBadgeIcon className='text-green-500 h-10 w-10' />
        <div className='space-y-2 flex flex-col items-center'>
          <h3 className='text-3xl text-center'>{messageSentTitle}</h3>
          <p className='text-center'>{messageSentDescription}</p>
        </div>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      action={URL}
      method='POST'
      className='grid grid-cols-1 gap-y-6'
    >
      <Input required id='name' label={name} placeholder={name} />
      <Input required id='phone' label={phone} placeholder={phone} />
      <Textarea required id='message' label={message} placeholder={message} />
      <div>
        <Button disabled={sending} buttonType='submit'>
          {sending ? sendingButtonLabel : buttonLabel}
        </Button>
      </div>
    </form>
  )
}

export default Form
