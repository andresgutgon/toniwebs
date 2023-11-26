import { useIntl } from 'react-intl'
import Paragraph from '@components/Paragraph'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

export default function WhyAProfessionalModerator() {
  const intl = useIntl()
  return (
    <PageWrapper id='imagenes-presentador' bgColor='gray' verticalSpace='small'>
      <PageContent>
        <div className='flex flex-col sm:grid sm:grid-cols-12 gap-y-6 sm:gap-x-8'>
          <div className='col-span-6'>
            <h2 className='font-serif mt-2 block text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {intl.formatMessage({
                id: 'LDjWIZ',
                defaultMessage:
                  '¿Por qué necesitas un presentador de eventos profesional? '
              })}
            </h2>
          </div>
          <div className='hidden sm:block sm:col-span-6' />
          <div className='sm:col-span-6 space-y-6 flex flex-col justify-between'>
            <div className='flex space-y-2 flex-col'>
              <Paragraph align='left'>
                {intl.formatMessage({
                  id: '+Glk5E',
                  defaultMessage:
                    'Un presentador de eventos te garantiza una buena imagen para tu empresa, y como se suele decir que una imagen vale más que mil palabras. Está claro que presentar un evento es siempre una responsabilidad porque del presentador depende el ritmo, los tiempos, la fluidez y con ello el éxito del evento.'
                })}
              </Paragraph>
            </div>
          </div>
          <div className='col-span-6'>
            <Paragraph align='left'>
              {intl.formatMessage({
                id: 'ixbSeK',
                defaultMessage:
                  'Hay que conocer la naturaleza y el ambiente que se quiere crear, y en función de ello darle al acto un tono u otro según convenga. Trabajo todos los eventos de forma personalizada, y escribo o adapto los textos y guiones que sean necesarios.'
              })}
            </Paragraph>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}
