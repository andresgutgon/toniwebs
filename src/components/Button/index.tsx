import type { ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  children: ReactNode
  widthFull?: boolean
  href?: string
  onClick?: () => void
  buttonType?: 'button' | 'submit'
  disabled?: boolean
}
const Button = ({
  href,
  onClick,
  disabled,
  buttonType,
  widthFull,
  children
}: Props) => {
  const styles = cn(
    'full flex items-center justify-center px-8 py-3 ',
    'border border-transparent text-lg font-medium rounded-md',
    'text-white bg-rose-600 hover:bg-rose-700',
    'md:py-4 md:text-xl md:px-10',
    {
      'opacity-40': disabled,
      'w-full': widthFull
    }
  )

  if (!href && !onClick && buttonType !== 'submit') return null

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  const buttonProps = onClick ? { onClick } : {}
  return (
    <button className={styles} role='button' type={buttonType} {...buttonProps}>
      {children}
    </button>
  )
}

Button.defaultProps = { widthFull: true, buttonType: 'button' }

export default Button
