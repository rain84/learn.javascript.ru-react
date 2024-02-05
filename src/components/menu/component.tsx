import { Dish } from 'components/dish'
import { type TRestaurant } from 'constants/normalized-mock'
import styles from './styles.module.scss'

export const Menu = ({ menu }: { menu: TRestaurant['menu'] }) => {
  return (
    <div>
      <h3 className={styles.title}>Menu</h3>
      {menu.map((id) => (
        <Dish key={id} id={id} className={styles.dish} />
      ))}
    </div>
  )
}
