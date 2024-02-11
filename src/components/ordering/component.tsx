import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, cartSelectors } from 'redux_/ui/cart'
import { Minus } from './buttons/minus'
import { Plus } from './buttons/plus'
import styles from './styles.module.scss'

export const Ordering = ({
  max = 5,
  className,
  productId,
  onChange,
}: TProps) => {
  const dispatch = useDispatch()
  const amount = useSelector(cartSelectors.selectProductAmountById(productId))

  const isDisabled = {
    increase: amount === max,
    decrease: amount === 0,
  }

  const decrease = () => {
    if (isDisabled.decrease) return

    dispatch(cartActions.decrement(productId))
    onChange?.(amount - 1)
  }
  const increase = () => {
    if (isDisabled.increase) return

    dispatch(cartActions.increment(productId))
    onChange?.(amount + 1)
  }

  return (
    <span className={clsx(styles.root, className)}>
      <Minus onClick={decrease} disabled={isDisabled.decrease} />
      <span className={styles.counter}>{amount}</span>
      <Plus onClick={increase} disabled={isDisabled.increase} />
    </span>
  )
}

type TProps = {
  max?: number
  className?: string
  productId: string
  onChange?: (value: number) => void
}
