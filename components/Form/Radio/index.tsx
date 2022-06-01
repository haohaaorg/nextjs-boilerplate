import Fieldset from '../Fieldset'
import type { ChildrenProps, Option, RadioProps } from '../types'
import styles from './Radio.module.scss'

const Radio = ({ options, ...props }: RadioProps) => {
  return (
    <Fieldset {...props} className={styles.select}>
      {({ value, onChange }: ChildrenProps) => (
        <ul className={styles.list}>
          {options.map(({ label, value: _value }: Option, i) => {
            const isActive = value === _value
            return (
              <li
                key={i}
                className={`${styles.radio} ${isActive && styles.active}`}
                onClick={() => onChange(isActive ? undefined : _value)}
              >
                <i className={styles.icon} />
                <span>{label}</span>
              </li>
            )
          })}
        </ul>
      )}
    </Fieldset>
  )
}

export default Radio
