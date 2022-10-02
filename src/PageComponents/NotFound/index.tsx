import DefaultLayout from '@layouts/Default'
import Header from '@components/Header'

import Button from '@components/Button'
import PageContent from '@components/PageContent'
import PageWrapper from '@components/PageWrapper'
import { SitePage } from '@site/types'
import imageSrc from './toni-figuera-te-dice-que-esta-pagina-no-existe.png'

type Props = { page: SitePage }
const Content = ({ page }: Props) => {
  return (
    <DefaultLayout page={page} bgColor='white'>
      <Header />
      <PageWrapper id='not-found-page' bgColor='white'>
        <PageContent>
          <div className='grid grid-cols-2 items-center gap-x-8'>
            <div className='mb-3'>
              <h1 className='font-serif text-3xl tracking-tight font-extrabold sm:block text-gray-900 xl:inline'>
                Página no encontrada
              </h1>
              <p className='text-base text-slate-900 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl mt-2'>
                Uy! esta página no existe. Prueba desde la página de inicio
              </p>
              <div className='mt-8'>
                <Button widthFull={false} href='/'>
                  Ir a inicio
                </Button>
              </div>
            </div>
            <img
              loading='lazy'
              className='animate-spin rounded-full bg-rose-600 shadow-lg'
              src={imageSrc}
              alt='Toni Figuera te dice que esta página no existe'
            />
          </div>
        </PageContent>
      </PageWrapper>
    </DefaultLayout>
  )
}

export default Content
