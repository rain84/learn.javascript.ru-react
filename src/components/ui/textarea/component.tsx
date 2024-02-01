import clsx from 'clsx'
import { forwardRef, type ComponentPropsWithRef } from 'react'
import styles from './styles.module.scss'

export const Textarea = forwardRef<HTMLTextAreaElement, TProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={clsx(styles.root, className)} {...props} />
  )
)

type TProps = ComponentPropsWithRef<'textarea'> & {
  className?: string
}
