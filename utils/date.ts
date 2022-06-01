import { format } from 'date-fns'

export const dateFormat = (date: any, fm = 'dd MMMM HH:mm:ss') => {
  const result = format(date, fm)
  return result
}
