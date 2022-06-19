import Field from '@components/Field'
import useInputStyles from '@hooks/useInputStyles'
import { InputHTMLAttributes } from 'react'

type TextType = 'text' | 'number'
type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  type?: TextType
}
const Input = ({ label, id, type, ...rest }: Props) => {
  const styles = useInputStyles()
  return (
    <Field label={label} id={id}>
      <input type={type} name={id} id={id} className={styles} {...rest} />
    </Field>
  )
}

Input.defaultProps = { type: 'text' }

export default Input
