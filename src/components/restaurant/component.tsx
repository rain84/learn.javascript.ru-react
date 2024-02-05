import { ReviewForm } from 'components/review-form'
import { Reviews } from 'components/reviews'
import type { TRestaurant } from 'constants/normalized-mock'
import { Menu } from '../menu'
import styles from './styles.module.scss'

export const Restaurant = ({ name, menu, reviews }: TRestaurant) => {
  const onSubmit = (data: unknown): void => console.info(data)

  return (
    <section className={styles.root}>
      <h1>Name: {name}</h1>
      <Menu menu={menu} />
      <Reviews ids={reviews} />
      <ReviewForm className={styles.review_form} onSubmit={onSubmit} />
    </section>
  )
}
