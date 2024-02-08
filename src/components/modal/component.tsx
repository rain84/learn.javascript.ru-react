import clsx from 'clsx'
import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useClickHandler, useFocusTrap, useKeyHandler } from './hooks'
import { ModalContent } from './modal-content.component'
import { ModalControls } from './modal-controls.component'
import styles from './styles.module.scss'

export const Modal = ({ children, open, onClose }: TProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useFocusTrap(modalRef, open)
  useKeyHandler('Escape', onClose, open)
  useClickHandler('modal-container', onClose, open)

  if (!open) return null

  return createPortal(
    <div className={clsx(styles.root, 'modal-container')} ref={modalRef}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.body
  )
}

Modal.Content = ModalContent
Modal.Controls = ModalControls

type TProps = {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}
