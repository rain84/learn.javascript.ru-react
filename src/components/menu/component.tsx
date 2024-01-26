import { Dish } from 'components/dish'
import { type TMenu } from 'constants/restaurant.types'
import styles from './style.module.scss'

export const Menu = ({ menu }: { menu: TMenu[] }) => {
  return (
    <div>
      <h3 className={styles.title}>Menu</h3>
      {menu.map(({ id, ...dish }) => (
        <Dish key={id} dish={dish} className={styles.dish} />
      ))}
    </div>
  )
}
