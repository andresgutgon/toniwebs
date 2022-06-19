import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { SitePage } from '@sites/types'

export type ContextProps = { site: SitePage }
export const PageContext = createContext<ContextProps>({
  site: null
})
type Props = {
  children: ReactNode
  site: SitePage
}
export const PageProvider = ({ site, children }: Props) => (
  <PageContext.Provider value={{ site }}>{children}</PageContext.Provider>
)
export const usePage = () => useContext(PageContext)
