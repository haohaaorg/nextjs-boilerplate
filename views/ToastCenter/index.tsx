import * as Toast from '@radix-ui/react-toast'
import { useRemoveToast } from 'hooks/useSetToast'
import { useRecoilValue } from 'recoil'
import { toastsState } from 'states'
import styles from './ToastCenter.module.scss'

export default function ToastCenter() {
  const toasts = useRecoilValue(toastsState)
  const removeToast = useRemoveToast()

  return (
    <Toast.Provider>
      {toasts.map(({ type = '', title, description, onClose }, i) => (
        <Toast.Root
          key={i}
          open={true}
          className={`${styles.item} ${styles[type]}`}
          onOpenChange={open => {
            !open && onClose && onClose()
            removeToast(description)
          }}
        >
          <Toast.Title className={styles.title}>{title}</Toast.Title>
          <Toast.Description className={styles.description}>{description}</Toast.Description>
        </Toast.Root>
      ))}
      <Toast.Viewport className={styles.viewport} />
    </Toast.Provider>
  )
}
