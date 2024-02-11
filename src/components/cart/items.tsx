import { TrashIcon } from '@radix-ui/react-icons'
import { Dish } from 'components/dish'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, cartSelectors } from 'redux_/ui/cart'
import styles from './styles.module.scss'

export const Items = () => {
  const carts = useSelector(cartSelectors.selectModule)
  const totalPrice = useSelector(cartSelectors.selectTotalPrice)

  const dispatch = useDispatch()
  const onClick = (id: string) => () => dispatch(cartActions.delete(id))

  return (
    <div>
      {Object.keys(carts).map((id) => (
        <div key={id} className={styles.item}>
          <Dish id={id} showIngredients={false} />
          <TrashIcon onClick={onClick(id)} className={styles.icon_trash} />
        </div>
      ))}
      <p className={styles.totalPrice}>Total price: {totalPrice}</p>
    </div>
  )
}
