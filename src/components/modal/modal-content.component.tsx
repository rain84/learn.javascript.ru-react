import clsx from 'clsx'
import styles from './styles.module.scss'

export const ModalContent = ({ children, className }: TProps) => (
  <div className={clsx(styles.modal__content, className)}>{children}</div>
)
type TProps = {
  className?: string
  children: React.ReactNode
}
