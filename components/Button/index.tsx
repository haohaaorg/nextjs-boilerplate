import { Fragment, ReactChild, ReactEventHandler } from 'react'
import styles from './Button.module.scss'

type Props = {
  type?: 'button' | 'reset' | 'submit'
  icon?: ReactChild
  label?: String | ReactChild
  state?: 'loading' | 'disable' | ''
  variant?: 'filled' | 'outline' | 'text'
  className?: String
  onClick?: ReactEventHandler
}

const Button = ({ icon, type = 'button', label, state = '', variant = 'filled', className, onClick }: Props) => {
  return (
    <button
      type={type}
      className={`${styles.root} ${styles[state]} ${styles[variant]} ${className}`}
      onClick={(e) => state !== 'loading' && state !== 'disable' && onClick && onClick(e)}
    >
      {state === 'loading' ? (
        <i className={styles.spinner} />
      ) : (
        <Fragment>
          {!!icon && <i className={styles.icon}>{icon}</i>}
          {!!label && <span className={styles.label}>{label}</span>}
        </Fragment>
      )}
    </button>
  )
}

export default Button
