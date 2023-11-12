import { ReactNode } from 'react'
import cn from 'classnames'

export default function Paragraph({
  children,
  size = 'normal',
  align = 'center',
  dark = false
}: {
  children: ReactNode
  size?: 'normal' | 'small'
  dark?: boolean
  align?: 'left' | 'center' | 'right'
}) {
  return (
    <p
      className={cn({
        'text-left': align === 'left',
        'text-right': align === 'right',
        'text-left sm:text-center': align === 'center',
        'text-base sm:text-xl': size === 'normal',
        'text-base text-gray-600': size === 'small',
        'text-gray-900': size === 'normal' && !dark,
        'text-gray-600': size === 'small' && !dark,
        'text-gray-50': size === 'normal' && dark,
        'text-gray-300': size === 'small' && dark
      })}
    >
      {children}
    </p>
  )
}
