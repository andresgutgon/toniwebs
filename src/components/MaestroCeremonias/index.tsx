import type { Locale } from '../../types'

type Props = {
  locale: Locale
  title: string
}

const MaestroCeremonias = ({ title }: Props) => {
  return (
    <h2 className='text-red-600 text-8xl'>{title}</h2>
  )
}

export default MaestroCeremonias
