import RSelect from 'react-select'
import Fieldset from '../Fieldset'
import InputBox from '../InputBox'
import type { ChildrenProps, Option, SelectProps } from '../types'
import styles from './Select.module.scss'

const Select = ({ multiple, options, placeholder, ...props }: SelectProps) => {
  return (
    <Fieldset {...props}>
      {({ value, onChange }: ChildrenProps) => (
        <InputBox>
          <RSelect
            value={options.filter((option) => value?.includes(option.value))}
            options={options}
            isMulti={multiple}
            placeholder={placeholder}
            className={styles.select}
            classNamePrefix="react-select"
            onChange={(option: any) => {
              !multiple
                ? onChange(option.value)
                : onChange(option.length > 0 ? option.map((option: Option) => option.value) : undefined)
            }}
          />
        </InputBox>
      )}
    </Fieldset>
  )
}

export default Select
