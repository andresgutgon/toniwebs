import { useIntl } from 'react-intl'
import Paragraph from '@components/Paragraph'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

export default function WhyAProfessional() {
  const intl = useIntl()
  return (
    <PageWrapper id='imagenes-presentador' bgColor='gray' verticalSpace='small'>
      <PageContent>
        <div className='flex flex-col sm:grid sm:grid-cols-12 gap-y-6 sm:gap-x-8'>
          <div className='col-span-6'>
            <h2 className='font-serif mt-2 block text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {intl.formatMessage({
                id: 'gP4W0e',
                defaultMessage: '¿Por qué un Maestro de Ceremonias profesional?'
              })}
            </h2>
          </div>
          <div className='hidden sm:block sm:col-span-6' />
          <div className='sm:col-span-6 space-y-6 flex flex-col justify-between'>
            <div className='flex space-y-2 flex-col'>
              <Paragraph align='left'>
                {intl.formatMessage({
                  id: '6hoCdx',
                  defaultMessage:
                    'Un Maestro de Ceremonias tiene que conectar con los novios, con los invitados y saber compartir emociones con todos los presentes. La ceremonia es el momento más importante de una boda, es el recuerdo que os va a quedar en la memoria para siempre, y hay que darle la importancia y el valor que se merece. Es importante que os sintáis a gusto con vuestro Maestro de Ceremonias y haya confianza y empatía.'
                })}
              </Paragraph>
            </div>
          </div>
          <div className='col-span-6'>
            <Paragraph align='left'>
              {intl.formatMessage({
                id: 'dmULS+',
                defaultMessage:
                  'Cercanía, sensibilidad, cariño… vamos a celebrar vuestro amor y juntos haremos que sea especial para vosotros y todos los invitados. Y lo haremos a vuestro gusto, para que sintáis que la ceremonia os representa, que es como vosotros sois, que es lo que vosotros queréis. Una ceremonia totalmente personalizada, hablando de vosotros, de vuestra historia de amor, de vuestras familias, de como habéis llegado hasta aquí, hasta el día de vuestra boda.'
              })}
            </Paragraph>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}
