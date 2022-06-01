import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import type { FormProps } from './types'

const Form = ({ watch, schema, defaults, children, className, onSubmit }: FormProps) => {
  const form = useForm({ resolver: yupResolver(schema), defaultValues: defaults })

  if (watch) form.watch(watch === true ? undefined : watch)

  return (
    <FormProvider {...form}>
      <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
        {typeof children === 'function' ? children(form) : children}
      </form>
    </FormProvider>
  )
}

export default Form
