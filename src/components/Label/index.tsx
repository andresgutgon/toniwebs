import { LabelHTMLAttributes } from 'react'
import cn from 'classnames'
type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  srOnly?: boolean
}
const Label = ({ srOnly, children, ...rest }: Props) => {
  return (
    <label
      {...rest}
      className={cn('text-base text-slate-900', { 'sr-only': srOnly })}
    >
      {children}
    </label>
  )
}

Label.defaultProps = { srOnly: false }

export default Label
