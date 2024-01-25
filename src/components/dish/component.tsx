import { Ingredients } from 'components/ingredients'
import { type TTDish } from 'constants/restaurant.types'
import styles from './style.module.scss'

export const Dish = ({ dish }: TProps) => {
  return (
    <div>
      <p>
        <span className={styles.name}>{dish.name}</span>
        <span className={styles.price}>Price: {dish.price} $</span>
      </p>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  )
}

type TProps = {
  dish: TTDish
}
