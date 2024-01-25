import { Restaurant } from 'components/restaurant'
import { type TRestaurant } from 'constants/restaurant.types'
import styles from './style.module.scss'

export const Restaurants = ({ restaurants }: TProps) => {
  return (
    <div className={styles.container}>
      {restaurants.map(({ id, ...restaurant }) => (
        <Restaurant key={id} {...restaurant} />
      ))}
    </div>
  )
}

type TProps = {
  restaurants: TRestaurant[]
}
