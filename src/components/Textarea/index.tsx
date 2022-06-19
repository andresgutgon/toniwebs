import Field from '@components/Field'
import useInputStyles from '@hooks/useInputStyles'
import { TextareaHTMLAttributes } from 'react'

type Props = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'> & {
  label: string
}
const Textarea = ({ label, id, ...rest }: Props) => {
  const styles = useInputStyles()
  return (
    <Field label={label} id={id}>
      <textarea rows={8} name={id} id={id} className={styles} {...rest} />
    </Field>
  )
}

export default Textarea
