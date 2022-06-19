import { useRef } from 'react'
import type { FormEvent } from 'react'
import { useIntl } from 'react-intl'

import Button from '@components/Button'
import Input from '@components/Input'
import Textarea from '@components/Textarea'
import { usePage } from '@layouts/PageProvider'

// Info: https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
// Same Google sheet as tonifiguera.com
const BASE_API = 'https://script.google.com/macros/s'
const VERSION =
  'AKfycbzrYyHkVn3OPASsBBDbqCkabFd9FRHeMmK0Yfm-gsi8MDzV3C4oySpTbw86rJn4Z8rYBQ'
const URL = `${BASE_API}/${VERSION}/exec`

const Form = () => {
  const { site } = usePage()
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
    event.preventDefault()

    if (!formRef.current) return

    const data = new FormData(formRef.current)

    data.append(
      'subject',
      `[${data.get('name')}] contacto de ${site.site.domain}`
    )
    const { ok } = await fetch(URL, {
      method: 'POST',
      body: data
    })
    console.log('OK', ok)
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
        <Button buttonType='submit'>
          {intl.formatMessage({
            id: 'N7yh1n',
            defaultMessage: 'Enviar mensaje'
          })}
        </Button>
      </div>
    </form>
  )
}

export default Form
