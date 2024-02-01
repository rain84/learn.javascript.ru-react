import clsx from 'clsx'
import { useState } from 'react'
import { Minus } from './buttons/minus'
import { Plus } from './buttons/plus'
import styles from './styles.module.scss'

export const Ordering = ({ max = 5, className, onChange }: TProps) => {
  const [ordering, setOrdering] = useState(0)

  const isDisabled = {
    increase: ordering === max,
    decrease: ordering === 0,
  }

  const decrease = () => {
    if (isDisabled.decrease) return

    const next = ordering - 1
    setOrdering(next)
    onChange?.(next)
  }
  const increase = () => {
    if (isDisabled.increase) return

    const next = ordering + 1
    setOrdering(next)
    onChange?.(next)
  }

  return (
    <span className={clsx(styles.root, className)}>
      <Minus onClick={decrease} disabled={isDisabled.decrease} />
      <span className={styles.counter}>{ordering}</span>
      <Plus onClick={increase} disabled={isDisabled.increase} />
    </span>
  )
}

type TProps = {
  max?: number
  className?: string
  onChange?: (value: number) => void
}
