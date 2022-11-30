import { toast, ToastOptions } from 'react-toastify'

interface IToast extends ToastOptions {
  message: string
}

export const notifyToast = ({
  message,
  position = 'top-right',
  autoClose = 5000,
  hideProgressBar = false,
  theme = 'light',
  closeOnClick = false,
  ...props
}: IToast) => {
  return toast(message, {
    ...props,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    theme,
  })
}
