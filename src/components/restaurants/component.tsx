import { Restaurant } from 'components/restaurant'
import { type TRestaurant } from 'constants/restaurant.types'
import styles from './styles.module.scss'

export const Restaurants = ({ restaurants }: TProps) => {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} {...restaurant} />
      ))}
    </div>
  )
}

type TProps = {
  restaurants: TRestaurant[]
}
