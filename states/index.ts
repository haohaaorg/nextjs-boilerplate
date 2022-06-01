import { atom } from 'recoil'
import { ToastProps } from 'types'

const toastsInitState: ToastProps[] = []

export const countState = atom({
  key: 'count',
  default: 5,
})

export const toastsState = atom({
  key: 'TOASTS_ACROSS_APP',
  default: toastsInitState,
})
