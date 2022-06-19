import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

const AboutMe = () => {
  const intl = useIntl()
  return (
    <PageWrapper id='sobre-mi' bgColor='white'>
      <PageContent>
        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-10 sm:space-y-0">
          <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
            <img className="object-cover shadow-lg rounded-lg" src='https://tonifiguera.com/static/9fbdca0210ec524bb4e1bbe783d64052/a7715/toni-blanco-y-negro.jpg' alt='Toni Figuera' />
          </div>
          <div className="h-full sm:col-span-2 space-y-4 flex flex-col justify-center">
            <div className="space-y-1">
              <h2 className="text-base text-rose-500 uppercase tracking-wide">
                {intl.formatMessage({
                  id: '0OAotW',
                  defaultMessage: 'Sobre mí'
                })}
              </h2>
              <h3 className='font-serif text-4xl leading-10 font-medium '>Toni Figuera</h3>
              <p className="text-slate-900 text-xl font-sans">
                {intl.formatMessage({
                  id: 'mJqcsd',
                  defaultMessage: 'Presentador y Maestro de ceremonias'
                })}
              </p>
            </div>
            <div className="space-y-4 text-base sm:text-lg">
              <p className="text-slate-600">
                {intl.formatMessage({
                  id: '2WHEEl',
                  defaultMessage: 'Me llamo Toni Figuera y soy actor y director de teatro y eventos. Tengo más de 20 años de experiencia trabajando en el mundo del espectáculo con lo que he hecho absolutamente de todo: teatro de texto, teatro musical, teatro de calle, televisión, eventos de empresa, eventos privados, oficiante de bodas, maestro de ceremonias… celebraciones de todo tipo y en todas las situaciones que puedas imaginar. He actuado en teatros llenos antes 1200 personas, y en comidas privadas con 10 comensales. Me he cambiado en camerinos de 50 m2 con mi nombre en la puerta y un catering estupendo, y en el lavabo de un restaurante para actuar en un cumpleaños. Así es la vida del artista y me encanta.'
                })}
              </p>
              <p className="text-slate-600">
                {intl.formatMessage({
                  id: 'W4zTHZ',
                  defaultMessage: 'Después de muchos años y tanta experiencia acumulada, he conseguido tener los conocimientos ideales para poderte ofrecer un trabajo justo a medida de tus necesidades y expectativas, sólo tenemos que hablar un rato y podré hacerte una propuesta ajustada a tu evento o celebración. Con trabajo y pasión podemos crear algo inolvidable.'
                })}
              </p>
            </div>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default AboutMe
