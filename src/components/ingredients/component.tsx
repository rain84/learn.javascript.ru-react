import { type TIngredients } from 'constants/restaurant.types'
import styles from './styles.module.scss'

export const Ingredients = ({ ingredients }: TProps) => {
  return (
    <p>
      Ingredients:
      {ingredients.map((ingredient) => (
        <span key={ingredient} className={styles.ingredient}>
          {ingredient}
        </span>
      ))}
    </p>
  )
}

type TProps = {
  ingredients: TIngredients
}
