import type { ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  id: string
  children: ReactNode
  verticalSpace: 'none' | 'normal'
  bgColor: 'white' | 'gray' | 'transparent'
}
const PageWrapper = ({ id, bgColor, verticalSpace, children }: Props) => (
  <div
    id={id}
    className={cn('antialiased relative bg-white overflow-hidden', 'border-b border-slate-100', {
      'py-16 sm:py-28': verticalSpace === 'normal',
      'bg-white': bgColor === 'white',
      'bg-transparent': bgColor === 'transparent',
      'bg-slate-50': bgColor === 'gray'
    })}
  >
    {children}
  </div>
)

PageWrapper.defaultProps = { bgColor: 'transparent', verticalSpace: 'normal' }
export default PageWrapper
