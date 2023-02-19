import type { ReactNode } from 'react'
import cn from 'classnames'

export const BG_GRAY = 'bg-slate-50'
export type PageWrapperBgColor = 'white' | 'gray' | 'transparent' | 'dark'
type Props = {
  id: string
  children: ReactNode
  verticalSpace: 'none' | 'normal'
  bgColor: PageWrapperBgColor
}
const PageWrapper = ({ id, bgColor, verticalSpace, children }: Props) => (
  <div
    id={id}
    className={cn(
      'antialiased relative bg-white overflow-hidden',
      'border-b border-slate-100',
      {
        'py-16 sm:py-28': verticalSpace === 'normal',
        'bg-white': bgColor === 'white',
        'bg-transparent': bgColor === 'transparent',
        [BG_GRAY]: bgColor === 'gray',
        'bg-gray-900': bgColor === 'dark'
      }
    )}
  >
    {children}
  </div>
)

PageWrapper.defaultProps = { bgColor: 'transparent', verticalSpace: 'normal' }
export default PageWrapper
