export type ToastProps = {
  type?: 'success' | 'error' | 'warning'
  title: String
  description: String
  onClose?: Function
}
