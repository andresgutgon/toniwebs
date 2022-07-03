import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { SitePage } from '@site/types'

export type ContextProps = { page: SitePage }
export const PageContext = createContext<ContextProps>({
  page: null
})
type Props = {
  children: ReactNode
  page: SitePage
}
export const PageProvider = ({ page, children }: Props) => (
  <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
)
export const usePage = () => useContext(PageContext)
