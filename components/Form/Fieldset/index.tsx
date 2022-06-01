import { useFormContext, useWatch } from 'react-hook-form'
import type { FieldsetProps } from '../types'
import styles from './Fieldset.module.scss'

const Fieldset = ({ name, label, message, children, className }: FieldsetProps) => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext()

  useWatch({ name })

  const msg = errors[name]?.message || message || ' '
  const error = !!errors[name]

  return (
    <fieldset className={`${styles.root} ${className} ${error && styles.error}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {children({
        value: getValues(name),
        register: register(name),
        onChange: (value: any) => setValue(name, value),
      })}
      <span className={styles.message}>{msg}</span>
    </fieldset>
  )
}

export default Fieldset
