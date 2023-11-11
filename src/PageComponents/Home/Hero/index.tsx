import { useIntl } from 'react-intl'
import cn from 'classnames'

import PageWrapper from '@components/PageWrapper'
import PageContent from '@components/PageContent'

import heroImage from './toni-figurea-maestro-de-ceremonias.png'
import { CallToActionHero } from '@PageComponents/Services/Hero'
const Hero = () => {
  const intl = useIntl()
  const intro = intl.formatMessage({
    id: 'NuIcmS',
    defaultMessage: 'Maestro de Ceremonias y Presentador de Eventos'
  })
  const description = intl.formatMessage({
    id: 'Q7m7JZ',
    defaultMessage:
      'Un profesional con más de 20 años de experiencia en escenarios y eventos por todo el país'
  })
  return (
    <PageWrapper id='home-hero' verticalSpace='none' bgColor='dark'>
      <PageContent>
        <main className='relative z-20 top-5 sm:top-0 sm:grid sm:grid-cols-12 gap-6'>
          <div
            className={cn(
              'col-span-7 lg:col-span-6 xl:pl-8 flex flex-col justify-center',
              'relative h-full flex justify-end mt-20 sm:mt-0 py-8 sm:py-16'
            )}
          >
            <h1
              className={cn(
                'font-serif text-rose-600 tracking-tight font-extrabold',
                'text-3xl sm:text-4xl md:text-5xl',
                'mt-12'
              )}
            >
              <span className='text-gray-50 block md:text-5xl mb-2'>
                Toni Figuera. Actor
              </span>
              {intro}
            </h1>
            <div className='mt-3 text-base text-slate-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
              {description}
            </div>
            <CallToActionHero inverted alwaysAlignedLeft />
          </div>
        </main>
      </PageContent>
      <div
        className={cn(
          'sm:col-span-4 lg:col-end-12 flex items-end bg-gray-900',
          'z-10 absolute top-0 right-0 w-full md:w-1/2 h-full'
        )}
      >
        <div className='absolute bottom-0 top-0 md:top-auto right-0 md:right-auto left-0 lg:left-20 flex items-end justify-end md:justify-start md:w-[450px] md:h-[349px]'>
          <div className='z-10 absolute inset-0 sm:hidden bg-gradient-to-t from-slate-900' />
          <img
            loading='lazy'
            alt='Toni Figuera maestro de ceremonias'
            src={heroImage}
            className='drop-shadow-homeHero object-cover block max-[390px]:w-full max-[390px]:h-full'
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Hero
