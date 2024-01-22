import { type TRestaurant } from 'constants/restaurant.types'
import { Menu } from '../menu'
import { Reviews } from '../reviews'
import styles from './style.module.scss'

export const Restaurant = ({
  name,
  menu,
  reviews,
}: Omit<TRestaurant, 'id'>) => {
  return (
    <section className={styles.restaurant}>
      <h1>Name: {name}</h1>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </section>
  )
}
