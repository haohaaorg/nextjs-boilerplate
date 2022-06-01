import CheckIcon from 'icons/Check'
import Fieldset from '../Fieldset'
import type { CheckboxProps, ChildrenProps } from '../types'
import styles from './Checkbox.module.scss'

const _Checkbox = ({ options, label, ...props }: CheckboxProps) => {
  const isSingle = options === undefined

  return (
    <Fieldset {...props} label={!isSingle ? label : undefined} className={styles.select}>
      {({ value = '', onChange }: ChildrenProps) => {
        const items = isSingle ? [{ label, value }] : options

        return (
          <ul className={styles.list}>
            {items.map(({ label, value: _value }, i) => {
              const isActive = isSingle ? !!value : value?.includes(_value)
              const handleToggle = () => {
                isSingle
                  ? onChange(!value)
                  : onChange(isActive ? value?.filter((v: string) => v !== _value) : [...value, _value])
              }
              return (
                <li key={i} className={`${styles.checkbox} ${isActive && styles.active}`} onClick={handleToggle}>
                  <CheckIcon className={styles.icon} />
                  <span>{label}</span>
                </li>
              )
            })}
          </ul>
        )
      }}
    </Fieldset>
  )
}

export default _Checkbox
