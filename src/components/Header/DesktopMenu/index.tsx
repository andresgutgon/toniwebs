import { FC } from 'react'
import cn from 'classnames'

import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon.js'
import type { MenuItem } from '@hooks/useMenuItems'
import SimpleMenu, { simpleMenuInteractiveProps } from '@components/SimpleMenu'
import { MenuItemProps } from '@components/Header'

export const NavItem: FC<MenuItemProps> = ({
  selected,
  href,
  target,
  children
}) => {
  const triggerProps = simpleMenuInteractiveProps.trigger
  const className = cn(
    'font-medium text-base group relative top-0.5',
    'focus-visible:outline-none',
    'flex items-center px-3 py-4 transition'
  )

  if (!href) {
    return (
      <button {...triggerProps} className={className} type='button'>
        {children}
        <ChevronDownIcon
          className='text-gray-600 ml-1 h-5 w-5 -top-0.5 relative'
          aria-hidden='true'
        />
      </button>
    )
  }

  return (
    <a href={href} target={target} className={className}>
      {children}
      <span
        className={cn(
          'z-10 absolute left-0 right-0 ',
          'bottom-px h-px bg-rose-500',
          'transition-opacity',
          'group-hover:opacity-100',
          {
            'opacity-0': !selected,
            'opacity-100': selected
          }
        )}
      />
    </a>
  )
}

type Props = { items: MenuItem[] }
export default function DesktopNavigation({ items }: Props) {
  return (
    <nav className='hidden lg:flex h-full'>
      <ul className='flex px-3 text-sm font-medium text-zinc-800'>
        {items.map((item: MenuItem) => (
          <li key={item.href}>
            <NavItem
              selected={item.selected}
              href={item.href}
              target={item.target}
            >
              {item.text}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  )
}
