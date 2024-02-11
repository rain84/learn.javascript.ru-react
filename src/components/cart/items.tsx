import { TrashIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { dishSelectors } from 'redux_/entities/dish'
import { cartActions, cartSelectors } from 'redux_/ui/cart'
import styles from './styles.module.scss'
import clsx from 'clsx'

export const Items = ({ className }: TProps) => {
  const carts = useSelector(cartSelectors.selectModule)
  const dishes = useSelector(dishSelectors.selectAll)

  const dispatch = useDispatch()
  const onClick = (id: string) => () => dispatch(cartActions.delete(id))

  return (
    <div className={className}>
      {Object.entries(carts).map(([id, count]) => (
        <p className={styles.items}>
          <span>{dishes[id].name}:</span>
          <span className={styles.icon_container}>
            <span>{count}</span>
            <TrashIcon
              onClick={onClick(id)}
              className={clsx(styles.icon_trash)}
            />
          </span>
        </p>
      ))}
    </div>
  )
}

type TProps = {
  className?: string
}
