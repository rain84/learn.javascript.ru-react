import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import styles from './styles.module.scss'

export const Button = forwardRef<HTMLButtonElement, TProps>(
  ({ className, children, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.root, className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)

type TProps = ComponentPropsWithoutRef<'button'> & {
  className?: string
  children?: ReactNode
  onClick?: () => void
}
