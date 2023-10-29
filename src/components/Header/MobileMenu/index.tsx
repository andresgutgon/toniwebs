import cn from 'classnames'
import Bars2Icon from '@heroicons/react/24/outline/Bars2Icon.js'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon.js'

import useMenuItems, { MenuItem } from '@hooks/useMenuItems'
import { simpleMenuInteractiveProps } from '@components/SimpleMenu'
import { useIntl } from 'react-intl'
import { ReactNode } from 'react'
import { usePage } from '@layouts/PageProvider'
import { LocaleOption } from '@site/types'

type ItemProps = MenuItem & { size: 'small' | 'normal' }
const Item = ({ size, text, href, selected }: ItemProps) => {
  return (
    <a
      href={href}
      className={cn(
        'block font-medium',
        'py-2.5 px-3 hover:bg-gray-50',
        'focus-visible:outline-none focus-visible:bg-gray-50',
        {
          'text-rose-600': selected,
          'text-gray-000': !selected && size === 'normal',
          'text-gray-600': !selected && size === 'small',
          'text-base': size === 'normal',
          'text-sm': size === 'small'
        }
      )}
    >
      {text}
    </a>
  )
}

type TriggerProps = {
  children: ReactNode
  interactiveTriggerProps: Object
  srOnlyText: string
}
const Trigger = ({
  children,
  srOnlyText,
  interactiveTriggerProps
}: TriggerProps) => (
  <button
    {...interactiveTriggerProps}
    className='flex items-center space-x-1 focus-visible:outline-none'
    type='button'
  >
    <span className='sr-only'>{srOnlyText}</span>
    {children}
  </button>
)
type TitleProps = { children: ReactNode }
const Title = ({ children }: TitleProps) => (
  <h3 className='px-3 text-lg text-gray-900'>{children}</h3>
)
const Separator = () => <hr className='border-t border-gray-100 mb-2' />
const MobileMenu = () => {
  const intl = useIntl()
  const { localeOptions } = usePage()
  const menuItems = useMenuItems()
  const { menu, trigger, content } = simpleMenuInteractiveProps
  const services = menuItems.services.filter(
    (item: MenuItem) => !item?.submenuItems?.length
  )
  return (
    <div {...menu} className='flex flex-1l lg:hidden'>
      <Trigger interactiveTriggerProps={trigger} srOnlyText='Abrir menu'>
        <span className='hidden xs:block relative top-0.5'>Menu</span>
        <Bars2Icon className='h-6 w-6' aria-hidden='true' />
      </Trigger>
      <div
        {...content}
        style={{ display: 'none' }}
        className={cn('fixed top-2 left-2 sm:left-auto sm:w-80 right-2 z-10')}
      >
        <div className='overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 space-y-2'>
          <div className='flex items-center justify-end pt-2 px-3 pb-1 border-b border-b-gray-100'>
            <Trigger interactiveTriggerProps={trigger} srOnlyText='Cerrar menu'>
              <XMarkIcon className='h-6 w-6 text-gray-400' aria-hidden='true' />
            </Trigger>
          </div>
          <div>
            <div className='relative grid'>
              <Title>
                {intl.formatMessage({
                  id: 'DQj22Z',
                  defaultMessage: 'Servicios'
                })}
              </Title>
              <ul className='pl-2'>
                {services.map((item: MenuItem, index: number) => (
                  <li key={index}>
                    <Item size='small' {...item} />
                  </li>
                ))}
              </ul>
            </div>
            <Separator />
            <Item size='normal' {...menuItems.personal.aboutMe} />
            <Separator />
            <Title>
              {intl.formatMessage({
                id: 'fo3Ho5',
                defaultMessage: 'Idiomas'
              })}
            </Title>
            <ul>
              {localeOptions.map((item: LocaleOption, index: number) => (
                <li key={index}>
                  <Item size='small' href={item.url} text={item.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
