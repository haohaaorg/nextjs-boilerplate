import { EyeIcon, EyeOffIcon } from 'icons'
import { useState } from 'react'
import Fieldset from '../Fieldset'
import InputBox from '../InputBox'
import type { ChildrenProps, InputProps } from '../types'
import styles from './Inputs.module.scss'

export const Input = ({ type = 'text', prefix, postfix, placeholder, ...rest }: InputProps) => {
  return (
    <Fieldset {...rest}>
      {({ register }: ChildrenProps) => (
        <InputBox prefix={prefix} postfix={postfix}>
          <input id={rest.name} type={type} placeholder={placeholder} className={styles.input} {...register} />
        </InputBox>
      )}
    </Fieldset>
  )
}

export const Password = (props: InputProps) => {
  const [isVisible, setVisible] = useState(false)
  const handleToggle = () => setVisible(!isVisible)
  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      postfix={
        isVisible ? (
          <EyeIcon onClick={handleToggle} className={styles.visibility} />
        ) : (
          <EyeOffIcon onClick={handleToggle} className={styles.visibility} />
        )
      }
    />
  )
}
