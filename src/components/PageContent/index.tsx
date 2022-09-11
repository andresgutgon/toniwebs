import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const PageContent = ({ children }: Props) => (
  <div className='relative max-w-7xl mx-auto px-4 sm:px-6'>{children}</div>
)
export default PageContent
