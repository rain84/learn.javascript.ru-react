import { type TMenu } from 'constants/restaurant.types'
import styles from './style.module.scss'

export const Menu = ({ menu }: { menu: TMenu[] }) => {
  return (
    <>
      <h3 className={styles.title}>Menu</h3>
      {menu.map(({ id, ingredients, name, price }) => (
        <div key={id}>
          <p>
            <span className={styles.name}>{name}</span>{' '}
            <span className={styles.price}>Price: {price} $</span>
          </p>
          <p>
            Ingredients:
            {ingredients.map((ingredient) => (
              <span key={ingredient} className={styles.ingredient}>
                {ingredient}
              </span>
            ))}
          </p>
        </div>
      ))}
    </>
  )
}
