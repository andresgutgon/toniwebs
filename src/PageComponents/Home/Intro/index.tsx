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
import { usePage } from '@layouts/PageProvider'

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
  href: string
  text?: string
  textTag?: ReactNode
  extraClassCss?: string
}
const GridText = ({
  src,
  alt,
  text,
  href,
  textTag,
  extraClassCss
}: GridTextProps) => {
  return (
    <a
      href={href}
      className={cn(
        'relative flex items-end overflow-hidden w-full',
        'rounded-md shadow-md',
        extraClassCss
      )}
    >
      <PhotoGridItem src={src} alt={alt} />
      <div className='absolute inset-0 z-10' />
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
    </a>
  )
}

const Intro = () => {
  const intl = useIntl()
  const {
    page: { site, locale }
  } = usePage()
  const weddings = site.pages.weddings[locale]
  const moderator = site.pages.moderator[locale]
  const speaker = site.pages.speaker[locale]
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
            href={speaker.path}
            src={presentador}
            alt='Acto de presentación para un evento de Skoda'
            extraClassCss='order-1 sm:col-span-4'
          />
          <GridText
            src={boda}
            alt='Toni celebrando una boda'
            extraClassCss='order-last sm:order-2 sm:col-span-4'
            href={weddings.path}
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
            href={moderator.path}
            alt='Presentacón para Blanxart'
            extraClassCss='order-3 sm:col-span-4'
          />
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Intro
