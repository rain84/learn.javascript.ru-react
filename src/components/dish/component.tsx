import { Ingredients } from 'components/ingredients'
import { Ordering } from 'components/ordering'
import { useSelector } from 'react-redux'
import { dishSelectors } from 'redux_/entities/dish'
import styles from './styles.module.scss'
import { RootState } from 'redux_'

export const Dish = ({ id, className }: TProps) => {
  const dish = useSelector((state: RootState) =>
    dishSelectors.selectById(state, id)
  )

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
  id: string
  className?: string
}
