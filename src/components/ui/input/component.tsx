import clsx from 'clsx'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

export const Input = forwardRef<HTMLInputElement, TProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={clsx(styles.root, className)} {...props} />
  )
)

type TProps = ComponentPropsWithoutRef<'input'> & {
  className?: string
}
