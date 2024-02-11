import clsx from 'clsx'
import { Popover } from 'components/popover'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { cartSelectors } from 'redux_/ui/cart'
import styles from './styles.module.scss'

export const Cart = ({ className }: TProps) => {
  const totalAmount = useSelector(cartSelectors.selectTotalAmount)
  const ref = useRef(null)

  return (
    <div className={clsx(className)} ref={ref}>
      <span>
        Корзина: <span className={styles.total}>{totalAmount}</span>
      </span>
      <Popover className={styles.popover} containerRef={ref}>
        Popover
      </Popover>
    </div>
  )
}

type TProps = {
  className: string
}
