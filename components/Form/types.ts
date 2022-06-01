import type { AnyObjectSchema } from 'yup'
import type { ReactChild, ReactChildren, ReactNode } from 'react'
import type { FieldValues, SubmitHandler, WatchInternal } from 'react-hook-form'

type Addon = string | undefined | ReactChild

type BaseProps = { name: string; label?: string | ReactChild; message?: string }

export type Option = {
  label: string
  value: any
}

export type FormProps = {
  watch?: any
  schema: AnyObjectSchema
  children: Function | ReactNode | ReactChild
  defaults?: object
  className: string
  onSubmit: SubmitHandler<FieldValues>
}

export type FieldsetProps = BaseProps & {
  children: Function
  className?: string
}

export type ChildrenProps = {
  value: any
  register: object
  onChange: (value: any) => void
}

export type InputBoxProps = {
  prefix?: Addon
  children: any
  postfix?: Addon
}

export type InputProps = BaseProps & {
  type?: string
  prefix?: Addon
  postfix?: Addon
  placeholder?: string
}

export type SelectProps = InputProps & {
  options: Option[]
  multiple?: boolean
}

export type RadioProps = BaseProps & {
  options: Option[]
}

export type CheckboxProps = BaseProps & { options?: Option[] }
