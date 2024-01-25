import type { Icon } from 'app.types'
import clsx from 'clsx'
import styles from './style.module.scss'

export const Button = ({ className, disabled, Icon, onClick }: TProps) => (
  <button
    onClick={() => onClick()}
    disabled={disabled}
    className={clsx({
      [styles.root]: disabled,
      className,
    })}
  >
    <Icon className={clsx(styles.icon, !disabled && styles.icon_enabled)} />
  </button>
)

export type TProps = {
  className?: string
  disabled?: boolean
  Icon: Icon

  onClick: () => void
}
