import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import BgPatterns from '@components/PageWrapper/BgPatterns'

import microfono from './images/toni-microfono-en-mano.png'
import TitleLabel from '@components/TitleLabel'

const useOfferings = () => {
  const intl = useIntl()
  return [
    intl.formatMessage({ id: 'Apw5IF', defaultMessage: 'Presentaciones' }),
    intl.formatMessage({ id: 'vH1w0N', defaultMessage: 'Congresos' }),
    intl.formatMessage({ id: 'ywEnFG', defaultMessage: 'Eventos deportivos' }),
    intl.formatMessage({ id: 'dMaTpi', defaultMessage: 'Meetings' }),
    intl.formatMessage({ id: 'xEfisW', defaultMessage: 'Ferias' }),
    intl.formatMessage({ id: 'fXy2KF', defaultMessage: 'Competiciones' }),
  ]
}

export default function Intro () {
  const intl = useIntl()
  const offerings = useOfferings()
  return (
    <PageWrapper id='intro-speaker' bgColor='white'>
      <BgPatterns thirdVisible={false} />
      <PageContent>
        <div className='grid sm:grid-cols-12 sm:gap-x-8 bg-white sm:border border-gray-200 rounded-lg overflow-hidden'>
          <div className='order-last sm:order-first col-span-6 relative bg-gray-900 rounded-lg sm:rounded-none overflow-hidden'>
            <img
              src={microfono}
              width={300}
              height={485}
              className='drop-shadow-homeHero object-cover '
              alt="Toni en una presentación de un evento"
            />
            <div className='absolute left-0 bottom-0 right-0 py-4 px-8 bg-gradient-to-t from-gray-900'>
              <p className='col-span-8 flex items-center text-lg text-gray-50'>
                {intl.formatMessage({
                  id: 'ZRjPw+',
                  defaultMessage: 'Micrófono en mano puedo dinamizar cualquier acto al aire libre o en interior, adaptando el tono y el lenguaje a la naturaleza del evento.'
                })}
              </p>
            </div>
          </div>
          <div className='col-span-6 flex flex-col gap-y-6 justify-between py-4 sm:pr-8'>
            <div>
              <TitleLabel align='left'>
                {intl.formatMessage({
                  id: 't/UNWZ',
                  defaultMessage: 'Una voz e imagen para tu evento'
                })}
              </TitleLabel>
              <p className='text-base sm:text-xl text-gray-900'>
                {intl.formatMessage({
                  id: 'U9/ger',
                  defaultMessage: 'Me encargaré de presentar, dar la información necesaria, anunciar sponsors y patrocinadores, informar de las actividades, resultados, juegos o actuaciones.'
                })}
              </p>
            </div>
            <ul className='grid sm:grid-cols-2 h-full bg-rose-100 gap-px'>
              {offerings.map((offering, index) =>
                <li
                  key={index}
                  className='flex items-center p-4 bg-white'
                >
                  <span className='text-base sm:text-xl text-gray-900'>{offering}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}
