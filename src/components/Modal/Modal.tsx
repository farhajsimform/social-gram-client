import { FC, ReactNode } from 'react'
import { Modal, ModalProps } from 'react-bootstrap'
interface IModalwrapper extends ModalProps {
  title?: string
  onClose: () => void
  visible: boolean
  children?: ReactNode
  footer?: ReactNode
}
export const ModalWrapper: FC<IModalwrapper> = ({
  title,
  onClose,
  visible,
  children,
  footer,
  ...props
}) => {
  return (
    <Modal show={visible} onHide={onClose} {...props}>
      <Modal.Header closeButton>{title ? <Modal.Title>{title}</Modal.Title> : null}</Modal.Header>
      {children ? <Modal.Body>{children}</Modal.Body> : null}
      {footer ? <Modal.Footer>{footer}</Modal.Footer> : null}
    </Modal>
  )
}
