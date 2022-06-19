import { useIntl } from 'react-intl'

import PageWrapper from '@components/PageWrapper'
import BgPatterns from '@components/PageWrapper/BgPatterns'
import perfectWeddingSrc from './la-boda-perfecta.png'

const MyWeddings = () => {
  const intl = useIntl()
  const perfectWeddingAlt = intl.formatMessage({
    id: 'HYitF5',
    defaultMessage: 'Os ayudo a conseguir la boda perfecta'
  })
  return (
    <PageWrapper id='las-bodas-que-yo-hago' bgColor='gray'>
      <BgPatterns />
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <h2>
            <span className='block text-base text-center text-rose-600 tracking-wide uppercase'>
              {intl.formatMessage({
                id: '7StwJn',
                defaultMessage: 'las bodas que yo hago'
              })}
            </span>
            <span className='font-serif mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {intl.formatMessage({
                id: 'LaU95V',
                defaultMessage: 'Todo lo que quieras podemos hacerlo posible'
              })}
            </span>
          </h2>
        </div>
        <div className='mt-6 prose prose-rose prose sm:prose-xl text-gray-500 mx-auto'>
          <p>
            {intl.formatMessage({
              id: 'pKwwNm',
              defaultMessage:
                'Como maestro de ceremonias cuando oficio una boda creo que no debe ser sólo oficiar la ceremonia, hacer alguna broma o chiste ingenioso y leer algún texto sobre el amor. Creo que la figura del maestro de ceremonias va más allá. Me gusta que los novios se sientan los protagonistas y que los invitados se sientan parte de la celebración. Por eso me gusta recibir a los invitados, hablar con ellos, conocer a la familia y amigos durante unos minutos para poder crear un ambiente festivo y alegre entre todos antes de recibir a los novios. '
            })}
          </p>
          <blockquote className='font-serif text-slate-400 sm:text-2xl'>
            {intl.formatMessage({
              id: 'SxgkbE',
              defaultMessage: 'El estilo y el ambiente lo eliges tú.'
            })}
          </blockquote>
          <figure>
            <img
              className='w-full rounded-lg'
              src={perfectWeddingSrc}
              alt={perfectWeddingAlt}
              width='800'
              height='426'
            />
            <figcaption className='prose-figcaption:text-sm'>
              {perfectWeddingAlt}
            </figcaption>
          </figure>
          <p>
            {intl.formatMessage({
              id: 'YwsmHE',
              defaultMessage:
                'Me gusta preparar, a gusto de los novios, unas presentaciones personalizadas y adaptadas al estilo que queráis en vuestro enlace para que cuando entréis por el pasillo se os ponga la piel de gallina y la emoción sea compartida con todos los asistentes. '
            })}
          </p>
          <p>
            {intl.formatMessage({
              id: 'TCi2JO',
              defaultMessage:
                'Creo necesario hacer una escaleta con el timming del enlace, canciones, participación de testigos o invitados, etc, todo coordinado con la música para darle al enlace un empaque de espectáculo. Y puede ser grande, majestuoso y épico, o romántico, mágico y detallista. El estilo y el ambiente lo eliges tú.'
            })}
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default MyWeddings
