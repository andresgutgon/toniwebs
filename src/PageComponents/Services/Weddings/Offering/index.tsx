import { useIntl } from 'react-intl'
import CheckIcon from '@heroicons/react/24/outline/CheckIcon.js'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

const Offerings = () => {
  const intl = useIntl()
  const offerings = [
    {
      name: intl.formatMessage({ id: 'fo3Ho5', defaultMessage: 'Idiomas' }),
      description: intl.formatMessage({
        id: '1lOQI2',
        defaultMessage:
          'Una ceremonia en varios idiomas para que vosotros y vuestros invitados os sintáis cómodos y disfrutéis de la velada: Castellano, catalán, inglés, italiano, francés y lo que necesitéis.'
      })
    },
    {
      name: intl.formatMessage({ id: 'jIQVf0', defaultMessage: 'Boda con DJ' }),
      description: intl.formatMessage({
        id: 'CA9eY5',
        defaultMessage:
          'Haz tu ceremonia más dinámica y entretenida con un dj que pondrá canciones y músicas en todas las partes de la ceremonia, dejando de lado los silencios incómodos y las esperas.'
      })
    },
    {
      name: intl.formatMessage({ id: 'AHJaaS', defaultMessage: 'Boda cómica' }),
      description: intl.formatMessage({
        id: '/ES52+',
        defaultMessage:
          'Dale a tu ceremonia un toque cómico con un cura o un juez de paz muy particulares y divertidos. Sorprende a tus invitados con risas y diversión en una ceremonia que no deja a nadie indiferente.'
      })
    },
    {
      name: intl.formatMessage({ id: 'LU7byF', defaultMessage: 'Musical' }),
      description: intl.formatMessage(
        {
          id: 'SSXizG',
          defaultMessage:
            'Personaliza tu ceremonia con <specialSong>vuestra canción o canciones favoritas</specialSong>. Como actor y cantante he trabajado en muchos musicales, si quieres incluir alguna canción o canciones en tu ceremonia podemos hacerlo posible.'
        },
        {
          specialSong: (chunks) => <strong>{chunks}</strong>
        }
      )
    }
  ]

  return (
    <PageWrapper id='opciones-para-bodas' bgColor='gray'>
      <PageContent>
        <div className='lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div>
            <h3 className='mt-2 font-serif text-3xl font-extrabold text-slate-900'>
              {intl.formatMessage({
                id: 'wTo87j',
                defaultMessage: 'Algunos ejemplos o ideas que te pueden ayudar'
              })}
            </h3>
          </div>
          <div className='mt-12 lg:mt-0 lg:col-span-2'>
            <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
              {offerings.map((offering) => (
                <div key={offering.name} className='relative'>
                  <dt>
                    <CheckIcon
                      className='absolute h-6 w-6 text-rose-500'
                      aria-hidden='true'
                    />
                    <h3 className='ml-9 text-lg leading-6 font-bold text-slate-900'>
                      {offering.name}
                    </h3>
                  </dt>
                  <dd className='mt-2 ml-9 text-base text-slate-600'>
                    {offering.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Offerings
