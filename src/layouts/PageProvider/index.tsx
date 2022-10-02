import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { LocaleOption, SitePage } from '@site/types'
import useLanguageOptions from '@hooks/useLanguageOptions'

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

type IUsePage = ContextProps & {
  localeOptions: LocaleOption[]
}
export const usePage = (): IUsePage => {
  const context = useContext(PageContext)
  const localeOptions = useLanguageOptions({ urls: context.page.allUrls })
  return {
    ...context,
    localeOptions
  }
}
