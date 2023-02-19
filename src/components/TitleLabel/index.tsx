import cn from 'classnames'

type Props = { children: string; align: 'left' | 'center'; underline?: boolean }
export default function TitleLabel({ children, align, underline = false }: Props) {
  return (
    <h3 className={cn('space-y-2 flex flex-col ', { 'items-center': align === 'center'})}>
      <span className={cn('block text-base text-rose-600 tracking-wide uppercase', {
        'text-left': align === 'left',
        'text-center': align === 'center'
      })}>
        {children}
      </span>
      {underline && <div className='w-10 h-px bg-rose-200 rounded-full' />}
    </h3>
  )
}
