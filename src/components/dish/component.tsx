import { Ingredients } from 'components/ingredients'
import { Ordering } from 'components/ordering'
import { type TTDish } from 'constants/restaurant.types'
import styles from './styles.module.scss'

export const Dish = ({ dish, className }: TProps) => {
  return (
    <div className={className}>
      <p className={styles.info}>
        <span className={styles.name}>{dish.name}</span>
        <Ordering className={styles.ordering} />
        <span className={styles.price}>Price: {dish.price} $</span>
      </p>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  )
}

type TProps = {
  dish: TTDish
  className?: string
}
