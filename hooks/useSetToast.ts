import { useSetRecoilState } from 'recoil'
import { toastsState } from 'states'
import type { ToastProps } from 'types'

const useAddToast = () => {
  const setToasts = useSetRecoilState(toastsState)
  return (toast: ToastProps) => {
    setToasts((toasts: ToastProps[]) => [...toasts, toast])
  }
}

const useRemoveToast = () => {
  const setToasts = useSetRecoilState(toastsState)
  return (description: String) => {
    setToasts((toasts: ToastProps[]) => toasts.filter((toast: ToastProps) => toast.description !== description))
  }
}

export { useAddToast, useRemoveToast }
