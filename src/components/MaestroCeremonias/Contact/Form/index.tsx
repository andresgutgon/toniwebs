import { useIntl } from 'react-intl'

import Button from '@components/Button'
import Input from '@components/Input'
import Textarea from '@components/Textarea'

const Form = () => {
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
  return (
    <form action='#' method='POST' className='grid grid-cols-1 gap-y-6'>
      <Input required id='name' label={name} placeholder={name} />
      <Input required id='phone' label={phone} placeholder={phone} />
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

export default Form
