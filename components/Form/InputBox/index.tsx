import type { InputBoxProps } from '../types'
import styles from './InputBox.module.scss'

const Addon = ({ children }: any) => (children ? <i className={styles.addon}>{children}</i> : null)

const InputBox = ({ children, prefix, postfix }: InputBoxProps) => {
  return (
    <div className={styles.root}>
      <Addon>{prefix}</Addon>
      {children}
      <Addon>{postfix}</Addon>
    </div>
  )
}

export default InputBox
