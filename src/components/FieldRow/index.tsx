import { ReactNode } from 'react'

import Label from '@components/Label'

type Props = {
  children: ReactNode
  label: string
}
const FieldGroup = ({ label, children }: Props) => {
  return (
    <div>
      <Label>{label}</Label>
      <div className='flex space-x-3'>{children}</div>
    </div>
  )
}

export default FieldGroup
