import { useIntl } from 'react-intl'

import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'

const AboutMe = () => {
  const intl = useIntl()
  return (
    <PageWrapper id='sobre-mi' bgColor='white'>
      <PageContent>
        <p>
          {intl.formatMessage({
            id: '2WHEEl',
            defaultMessage: 'Me llamo Toni Figuera y soy actor y director de teatro y eventos. Tengo más de 20 años de experiencia trabajando en el mundo del espectáculo con lo que he hecho absolutamente de todo: teatro de texto, teatro musical, teatro de calle, televisión, eventos de empresa, eventos privados, oficiante de bodas, maestro de ceremonias… celebraciones de todo tipo y en todas las situaciones que puedas imaginar. He actuado en teatros llenos antes 1200 personas, y en comidas privadas con 10 comensales. Me he cambiado en camerinos de 50 m2 con mi nombre en la puerta y un catering estupendo, y en el lavabo de un restaurante para actuar en un cumpleaños. Así es la vida del artista y me encanta.'
          })}
        </p>
        <p>
          {intl.formatMessage({
            id: 'W4zTHZ',
            defaultMessage: 'Después de muchos años y tanta experiencia acumulada, he conseguido tener los conocimientos ideales para poderte ofrecer un trabajo justo a medida de tus necesidades y expectativas, sólo tenemos que hablar un rato y podré hacerte una propuesta ajustada a tu evento o celebración. Con trabajo y pasión podemos crear algo inolvidable.'
          })}
        </p>
      </PageContent>
    </PageWrapper>
  )
}

export default AboutMe
