import { FormattedMessage, useIntl } from 'react-intl'
import cn from 'classnames'

import Button from '@components/Button'
import PageWrapper from '@components/PageWrapper'
import PageContent from '@components/PageContent'
import { usePage } from '@layouts/PageProvider'

type CallToActionHeroProps = { inverted?: boolean; alwaysAlignedLeft?: boolean }
export const CallToActionHero = ({
  alwaysAlignedLeft = false,
  inverted = false
}: CallToActionHeroProps) => {
  const { page } = usePage()
  const phone = page.site.phoneNumber
  const intl = useIntl()
  return (
    <div
      className={cn('mt-5 sm:mt-8 sm:flex', {
        'justify-center lg:justify-start': !alwaysAlignedLeft
      })}
    >
      <div className='space-y-4 sm:space-x-4 flex flex-col items-center'>
        <div className='w-full'>
          <Button href='#contactame'>
            {intl.formatMessage({
              id: 'ik0QqA',
              defaultMessage: 'Solicita información'
            })}
          </Button>
        </div>
        <div className='text-center sm:text-left flex-0'>
          <FormattedMessage
            id='7GtpBL'
            defaultMessage='<callTag>O llama al</callTag> <phoneTag></phoneTag>'
            values={{
              callTag: function callTag(chunks) {
                return (
                  <span className='text-base text-slate-400'>{chunks}</span>
                )
              },
              phoneTag: function phoneTag(chunks) {
                return (
                  <a
                    href={`tel:${phone.trim()}`}
                    className={cn('block sm:inline-block text-xl ', {
                      'text-slate-50': inverted,
                      'text-slate-900': !inverted
                    })}
                  >
                    +34 {phone}
                    {chunks}
                  </a>
                )
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const HeroPattern = () => (
  <svg
    className='h-full text-white hidden lg:block absolute w-48 right-0 inset-y-0 transform translate-x-1/2'
    fill='currentColor'
    viewBox='0 0 100 100'
    preserveAspectRatio='none'
    aria-hidden='true'
  >
    <polygon points='50,0 100,0 50,100 0,100' />
  </svg>
)

type Props = {
  h1: string
  h2: string
  description: string
  imageSrc: string
  imageAlt: string
}
export default function Hero({
  h1,
  h2,
  description,
  imageSrc,
  imageAlt
}: Props) {
  return (
    <PageWrapper id='hero-section' bgColor='white' verticalSpace='none'>
      <PageContent>
        <div className='relative z-20 bg-white pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:max-w-2xl lg:w-full '>
          <main className='pt-10 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28'>
            <div className='sm:text-center lg:text-left'>
              <div className='font-serif tracking-tight font-extrabold text-3xl sm:text-4xl md:text-5xl'>
                <h1 className='block md:text-4xl text-slate-900 mb-2'>{h1}</h1>
                <h2 className='leading-10 sm:block text-rose-600 xl:inline'>
                  {h2}
                </h2>
              </div>
              <p className='mt-3 text-base md:text-lg text-slate-500 sm:text-base sm:max-w-xl sm:mx-auto lg:mx-0'>
                {description}
              </p>
              <CallToActionHero />
            </div>
          </main>
        </div>
      </PageContent>

      <div className='relative z-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </PageWrapper>
  )
}
