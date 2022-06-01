import StarIcon from 'icons/Star'
import Fieldset from '../Fieldset'
import type { ChildrenProps, InputProps } from '../types'
import styles from './Rating.module.scss'

export default function Rating(props: InputProps) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <Fieldset {...props}>
      {({ value, onChange }: ChildrenProps) => (
        <div className={styles.list}>
          {stars.map((star) => (
            <StarIcon
              key={star}
              className={`${styles.star} ${star <= value && styles.active}`}
              onClick={() => onChange(star === value ? star - 1 : star)}
            />
          ))}
        </div>
      )}
    </Fieldset>
  )
}
