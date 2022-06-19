import { ReactNode } from 'react'

import Label from '@components/Label'

type Props = {
  id: string
  label: string
  children: ReactNode
}
const Field = ({ id, label, children }: Props) => {
  return (
    <div>
      <Label htmlFor={id} srOnly>
        {label}
      </Label>
      {children}
    </div>
  )
}

export default Field
