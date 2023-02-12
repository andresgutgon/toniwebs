import { ReactNode } from 'react'
import { useIntl } from 'react-intl'
import cn from 'classnames'

import PageWrapper from '@components/PageWrapper'
import PageContent from '@components/PageContent'
import marta from './images/marta-blanxart.png'
import monica from './images/monica-sero.jpg'
import nikira from './images/nikira.jpg'
import patriciaAvatar from './images/patricia-fernandez.png'

const CELEBRENS_URL =
  'https://www.celebrents.es/toni-figuera-actor-y-maestro-de-ceremonias-245998/#valorations'
type SimpleQuoteProps = {
  children: ReactNode
  name: string
  src: string
  date: string
}
const SimpleQuote = ({ children, name, src, date }: SimpleQuoteProps) => {
  return (
    <div
      itemScope
      itemType='https://schema.org/Review'
      className={cn('py-6 flex flex-col justify-between', 'space-y-3')}
    >
      <div className='flex space-x-2'>
        <img
          src={src}
          alt={name}
          className='w-12 h-12 rounded-full shadow border-gray-100 border'
        />
        <div className='flex flex-col space-y-1'>
          <span
            className='text-sm sm:text-base text-gray-900'
            itemProp='author'
            itemScope
            itemType='https://schema.org/Person'
          >
            <span itemProp='name'>{name}</span>
          </span>
          <div className='space-y-1'>
            <a
              className='underline text-sm text-gray-300'
              href={CELEBRENS_URL}
              target='_blank'
            >
              <div
                itemProp='publisher'
                itemScope
                itemType='https://schema.org/Organization'
              >
                <meta itemProp='name' content='Celebrens' />
              </div>
              {date}
            </a>
          </div>
        </div>
      </div>
      <blockquote
        className={cn(
          'text-sm text-gray-500 flex flex-col space-y-2',
          'line-clamp-3 max-w-lg'
        )}
      >
        {children}
      </blockquote>
    </div>
  )
}

const BigQuote = () => {
  return (
    <div className='h-full flex flex-col justify-between rounded-md p-4 bg-rose-600'>
      <blockquote className='pt-10'>
        <svg
          className='h-12 w-12 text-white opacity-25'
          fill='currentColor'
          viewBox='0 0 32 32'
          aria-hidden='true'
        >
          <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
        </svg>
        <p className='mt-2 text-base font-medium text-white'>
          Contratamos a Toni para un evento corporativo y no pudo ser una
          elección más acertada. En todo momento, se preocupó por tener toda la
          información del evento, la empresa, y poder prepararse el evento de la
          forma más personalizada posible, adaptándose en todo momento a
          nuestras necesidades y demostrando su sobrada experiencia y
          profesionalidad. Que decir que supo conducir el evento y ayudarnos en
          todo momento a que fuera un éxito.
        </p>
      </blockquote>
      <footer className='mt-6 flex space-x-2'>
        <img
          className='rounded-full bg-white border border-white/40 w-12 h-12'
          src={patriciaAvatar}
          alt='Patricia Fernández de Casanova Foto'
        />
        <div>
          <p className='text-base font-medium text-white'>Patricia Fernández</p>
          <p className='text-base font-medium text-rose-100'>Casanova Foto</p>
        </div>
      </footer>
    </div>
  )
}

const Testimonials = () => {
  const intl = useIntl()
  return (
    <>
      <PageWrapper id='other-testimonials' bgColor='white'>
        <PageContent>
          <div className='space-y-8'>
            <h3 className='space-y-2 flex flex-col items-center'>
              <span className='block text-base text-center text-rose-600 tracking-wide uppercase'>
                {intl.formatMessage({
                  id: 'Ns3gp+',
                  defaultMessage: 'Opiniones'
                })}
              </span>
              <div className='w-10 h-px bg-rose-200 rounded-full' />
            </h3>
            <div className='sm:grid grid-cols-12 gap-6'>
              <div className='col-start-2 col-span-5'>
                <BigQuote />
              </div>
              <div className='col-span-6'>
                <SimpleQuote
                  date='25/10/2022'
                  name='Nikira i Ionut'
                  src={nikira}
                >
                  Hemos realizado nuestra boda hace unas semanas y el momento
                  más precioso, emotivo, bonito y perfecto fue la ceremonia!
                  Deciros que Toni es un gran profesional, hizo de nuestra
                  ceremonia un momento inolvidable, plasma cercanía, emoción, al
                  hablar sus palabras hacen que lleguen. Al terminar la
                  ceremonia los invitados nos felicitaron y quedaron encantados
                  por tan bonito momento! Así que toni MAESTRO! Te damos mil mil
                  mil gracias por hacer de nuestra boda magia! Sin duda alguna
                  si buscais que vuestra boda sea perfecta, toni os la realizara
                </SimpleQuote>
                <SimpleQuote date='24/11/2022' name='Marta' src={marta}>
                  Toni es un gran profesional! Hizo de presentador en nuestro
                  evento corporativo y supo poner el tono y la energía adecuada
                  a cada momento. El resultado...una maravillosa velada.
                </SimpleQuote>
                <SimpleQuote
                  date='24/10/2022'
                  name='Monica Seró Moreno'
                  src={monica}
                >
                  Excepcional, no tengo palabras para describirlo mejor!!! Todo
                  el mundo super contento, y lo mejor de todo es que hicieron
                  tanto para el cumpleañero como para el resto de invitados que
                  fuera una fiesta inolvidable.
                </SimpleQuote>
              </div>
            </div>
          </div>
        </PageContent>
      </PageWrapper>
    </>
  )
}

export default Testimonials
