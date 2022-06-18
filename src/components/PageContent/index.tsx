import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const PageContent = ({ children }: Props) => (
  <div className='max-w-7xl mx-auto px-6'>{children}</div>
)
export default PageContent
