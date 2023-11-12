import { useIntl } from 'react-intl'
import cn from 'classnames'
import PageWrapper from '@components/PageWrapper'
import BgPatterns from '@components/PageWrapper/BgPatterns'
import PageContent from '@components/PageContent'

import boda from './images/toni-figuera-oficiante-de-bodas.jpg'
import blanxartPresentacion from './images/presentacion-para-blanxart.jpg'
import presentador from './images/presentador.jpg'
import { ReactNode } from 'react'
import { usePage } from '@layouts/PageProvider'
import Paragraph from '@components/Paragraph'

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
            'absolute p-3 z-20 font-serif text-2xl sm:text-3xl tracking-tight font-extrabold text-white ',
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

export default function Intro() {
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
        <div className='flex flex-col justify-center items-center space-y-6 mb-9'>
          <h2 className='max-w-2xl'>
            <span className='font-serif mt-2 block text-2xl sm:text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {intl.formatMessage({
                id: 'GehNhJ',
                defaultMessage:
                  'Eventos de empresa, eventos institucionales y eventos privados'
              })}
            </span>
          </h2>
          <div className='flex space-y-2 flex-col max-w-4xl'>
            <Paragraph>
              {intl.formatMessage({
                id: 'ixbSeK',
                defaultMessage:
                  'Comunicar, transmitir, compartir… todo forma parte de un mismo todo: estar delante de una audiencia y hacer llegar un mensaje, una idea o una emoción. Pongo mi creatividad, mi experiencia y mi corazón en cada proyecto que hago.'
              })}
            </Paragraph>
            <Paragraph size='small'>
              {intl.formatMessage({
                id: 'fPjLVE',
                defaultMessage:
                  'Trabajos personalizados y adaptados a vuestras necesidades y expectativas. Escritura de guiones, soporte artístico, creación de timing y escaletas… todo lo necesario para que vuestro evento sea un auténtico éxito.'
              })}
            </Paragraph>
          </div>
        </div>
        <div className='flex flex-col sm:grid sm:grid-cols-12 gap-8'>
          <GridText
            text={intl.formatMessage({
              id: 'Apw5IF',
              defaultMessage: 'Presentaciones'
            })}
            src={blanxartPresentacion}
            href={moderator.path}
            alt='Presentacón para Blanxart'
            extraClassCss='sm:col-span-4'
          />
          <GridText
            src={boda}
            alt='Toni celebrando una boda'
            extraClassCss='sm:col-span-4'
            href={weddings.path}
            text={intl.formatMessage({
              id: 'zkXTrr',
              defaultMessage: 'Bodas'
            })}
          />
          <GridText
            text={intl.formatMessage({
              id: 'VQTSTt',
              defaultMessage: 'Eventos de empresa'
            })}
            href={speaker.path}
            src={presentador}
            alt='Acto de presentación para un evento de Skoda'
            extraClassCss='sm:col-span-4'
          />
        </div>
      </PageContent>
    </PageWrapper>
  )
}
