import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  buttonType?: 'button' | 'submit'
}
const Button = ({ href, onClick, buttonType, children }: Props) => {
  const styles = 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-xl md:px-10'
  if (!href && !onClick) return null

  if (href) {
    return (
      <a href={href} className={styles}>{children}</a>
    )
  }

  return (
    <button
      className={styles}
      role='button'
      type={buttonType}
      onClick={onClick}
    >
      {children}
    </button>
  )

}

Button.defaultProps = { buttonType: 'button'}

export default Button
