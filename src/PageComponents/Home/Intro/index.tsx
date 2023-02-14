import { FormattedMessage, useIntl } from 'react-intl'
import cn from 'classnames'
import PageWrapper from '@components/PageWrapper'
import BgPatterns from '@components/PageWrapper/BgPatterns'
import PageContent from '@components/PageContent'

import boda from './images/toni-figuera-oficiante-de-bodas.jpg'
import blanxartPresentacion from './images/presentacion-para-blanxart.jpg'
import presentador from './images/presentador.jpg'
import teatroElefant from './images/teatro-obra-elefant.jpg'
import camarero from './images/toni-actuacion-camarero-falso.jpg'
import { ReactNode } from 'react'

type PhotoProps = { src: string; alt: string; extraClassCss?: string }
const PhotoGridItem = ({ src, alt, extraClassCss }: PhotoProps) => (
  <img
    loading='lazy'
    className={cn('object-cover w-full h-full', extraClassCss)}
    src={src}
    alt={alt}
  />
)
const TEXT_SHADOW = '[text-shadow:0_1px_1px_rgba(0,0,0,0.12)]'
type GridTextProps = {
  src: string
  alt: string
  text?: string
  textTag?: ReactNode
  extraClassCss?: string
}
const GridText = ({
  src,
  alt,
  text,
  textTag,
  extraClassCss
}: GridTextProps) => {
  return (
    <div
      className={cn(
        'relative flex items-end overflow-hidden w-full',
        'rounded-md shadow-md',
        extraClassCss
      )}
    >
      <PhotoGridItem src={src} alt={alt} />
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-gray-900' />
      {text && (
        <h2
          className={cn(
            'absolute p-3 z-20 font-serif text-xl tracking-tight font-extrabold sm:text-2xl text-white ',
            TEXT_SHADOW
          )}
        >
          {text}
        </h2>
      )}
      {textTag && textTag}
    </div>
  )
}

const Intro = () => {
  const intl = useIntl()
  return (
    <PageWrapper id='mi-trabajo' bgColor='gray'>
      <BgPatterns thirdVisible={false} />
      <PageContent>
        <div className='flex flex-col sm:grid sm:grid-cols-12 gap-2'>
          <GridText
            text={intl.formatMessage({
              id: 'VQTSTt',
              defaultMessage: 'Eventos de empresa'
            })}
            src={presentador}
            alt='Acto de presentación para un evento de Skoda'
            extraClassCss='order-1 sm:col-span-4'
          />
          <GridText
            src={boda}
            alt='Toni celebrando una boda'
            extraClassCss='order-last sm:order-2 sm:col-span-4'
            text={intl.formatMessage({
              id: 'zkXTrr',
              defaultMessage: 'Bodas'
            })}
          />
          <GridText
            text={intl.formatMessage({
              id: 'Apw5IF',
              defaultMessage: 'Presentaciones'
            })}
            src={blanxartPresentacion}
            alt='Presentacón para Blanxart'
            extraClassCss='order-3 sm:col-span-4'
          />
          <GridText
            text={intl.formatMessage({
              id: 'MDyQk5',
              defaultMessage: 'Dirección artística'
            })}
            src={teatroElefant}
            alt="Actuando en obra de teatro L'Elefant Hipotecat"
            extraClassCss='order-4 sm:col-span-3 '
          />
          <GridText
            text={intl.formatMessage({
              id: 'aL0Hl8',
              defaultMessage: 'Actuación cómica'
            })}
            src={camarero}
            alt='Toni en una celebración actuando como camarero falso'
            extraClassCss='order-6 sm:order-5 sm:col-span-3'
          />
          <div className='order-5 py-10 sm:py-0 sm:order-6 px-3 flex flex-col space-y-2 lg:w-2/3 sm:col-span-5  sm:justify-end '>
            <p
              className={cn(
                'font-serif text-xl tracking-tight font-extrabold lg:text-4xl text-gray-600',
                TEXT_SHADOW
              )}
            >
              <FormattedMessage
                id='BRw1sx'
                defaultMessage='Creo recuerdos <memorable>imborrables</memorable>'
                values={{
                  memorable: function memorableTag(chunks) {
                    return <span className='text-gray-900'>{chunks}</span>
                  }
                }}
              />
            </p>
            <p className='text-sm lg:text-base text-gray-700'>
              {intl.formatMessage({
                id: 'R1k1LC',
                defaultMessage:
                  'Me apasiona mi trabajo. Soy un actor y presentador versátil que tanto puede presentar tu evento de empresa como celebrar el día más bonito de tu vida.'
              })}
            </p>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Intro
