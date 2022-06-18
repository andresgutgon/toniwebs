import type { ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  children: ReactNode
  verticalSpace: 'none' | 'normal'
  bgColor: 'white' | 'transparent'
}
const PageWrapper = ({ bgColor, verticalSpace, children }: Props) => (
  <div
    className={cn('relative bg-white overflow-hidden', {
      'py-16 sm:py-28': verticalSpace === 'normal',
      'bg-white': bgColor === 'white',
      'bg-transparent': bgColor === 'transparent'
    })}
  >
    {children}
  </div>
)

PageWrapper.defaultProps = { bgColor: 'transparent', verticalSpace: 'normal' }
export default PageWrapper
