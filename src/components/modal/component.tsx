import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

export const Modal = ({ children, open, onClose }: TProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    if (!modalRef.current) return

    document.body.style.overflow = 'hidden'

    const focusableElements = [
      ...modalRef.current.querySelectorAll(SELECTOR_FOR_FOCUSABLE_ELEMENTS),
    ] as HTMLElement[]

    const onKeyPressed = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()

      /* trap for focusable elements */
      if (e.key === 'Tab') {
        if (!focusableElements.length) return

        const isFirst =
          e.shiftKey && document.activeElement === focusableElements[0]

        if (isFirst) {
          focusableElements.at(-1)!.focus()
          e.preventDefault()
          return
        }

        const isLast =
          !e.shiftKey && document.activeElement === focusableElements.at(-1)

        if (isLast) {
          focusableElements[0].focus()
          e.preventDefault()
        }
      }
    }
    const onClickOutside = (e: Event) => {
      if (!e.currentTarget) return
      if ((e.target as HTMLElement).classList.contains('modal-container'))
        onClose()
    }

    document.addEventListener('keydown', onKeyPressed)
    document.addEventListener('click', onClickOutside)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyPressed)
      document.removeEventListener('keydown', onClickOutside)
    }
  }, [open, onClose])

  if (!open) return null

  const modalJSX = (
    <div className={clsx(styles.root, 'modal-container')} ref={modalRef}>
      <div className={styles.modal}>{children}</div>
    </div>
  )

  return createPortal(modalJSX, document.body)
}

const ModalContent = ({ children, className }: TProps_ModalElements) => (
  <div className={clsx(styles.modal__content, className)}>{children}</div>
)

const ModalControls = ({ children, className }: TProps_ModalElements) => (
  <div className={clsx(styles.modal__controls, className)}>{children}</div>
)

Modal.Content = ModalContent
Modal.Controls = ModalControls

const SELECTOR_FOR_FOCUSABLE_ELEMENTS =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'

type TProps_ModalElements = {
  className?: string
  children: React.ReactNode
}

type TProps = {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}
