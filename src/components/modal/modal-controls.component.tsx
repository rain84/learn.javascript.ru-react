import clsx from 'clsx'
import styles from './styles.module.scss'

export const ModalControls = ({ children, className }: TProps) => (
  <div className={clsx(styles.modal__controls, className)}>{children}</div>
)

type TProps = {
  className?: string
  children: React.ReactNode
}
