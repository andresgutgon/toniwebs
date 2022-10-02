import { ReactNode } from 'react'
import cn from 'classnames'

type SimpleMenuItem = {
  text: string
  href?: string
  onClick?: () => void
  selected?: boolean
}

export const simpleMenuInteractiveProps = {
  menu: {
    ['x-id']: "['dropdown-button']",
    ['x-on:keydown.escape.prevent.stop']: 'close($refs.button)',
    ['x-on:focusin.window']: '!$refs.panel.contains($event.target) && close()',
    ['x-data']: `{
      open: false,
      toggle() {
        if (this.open) {
          return this.close()
        }

        this.$refs.button.focus()

        this.open = true
      },
      close(focusAfter) {
        if (!this.open) return

        this.open = false

        focusAfter && focusAfter.focus()
      }
    }`
  },
  trigger: {
    ['x-ref']: 'button',
    ['x-on:click']: 'toggle()',
    [':aria-expanded']: 'open',
    [':aria-controls']: "$id('dropdown-button')"
  },
  content: {
    ['id']: "$id('dropdown-button')",
    ['x-ref']: 'panel',
    ['x-show']: 'open',
    ['x-transition.origin.top.right']: '',
    ['x-on:click.outside']: 'close($refs.button)'
  }
}

type Props = {
  trigger: ReactNode
  items: SimpleMenuItem[]
  size: 'small' | 'normal'
}
const SimpleMenu = ({ items, trigger, size }: Props) => {
  const { menu, content } = simpleMenuInteractiveProps
  return (
    <div className='relative' {...menu}>
      {trigger}
      <div
        {...content}
        style={{ display: 'none' }}
        className={cn('absolute right-0 z-10 mt-1 min-w-[160px] max-w-xs', {
          'w-screen': size === 'normal'
        })}
      >
        <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='relative grid bg-white py-1'>
            {items.map((item: SimpleMenuItem, index: number) => (
              <a
                key={index}
                href={item.href || '#'}
                className={cn(
                  'block py-1.5 p-3',
                  'transition duration-150 ease-in-out ',
                  'hover:bg-gray-50 focus-visible:outline-none',
                  'focus-visible:bg-gray-50',
                  'text-sm font-medium text-gray-900',
                  {
                    'bg-gray-200 hover:bg-gray-200 focus-visible:bg-gray-200':
                      item.selected
                  }
                )}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleMenu
