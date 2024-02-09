import { Review } from 'components/review'
import { ReviewForm } from 'components/review-form'
import type { TRestaurant } from 'constants/normalized-mock'
import { Menu } from '../menu'
import styles from './styles.module.scss'

export const Restaurant = ({ name, menu, reviews }: TRestaurant) => {
  const onSubmit = (data: unknown): void => console.info(data)

  return (
    <section className={styles.root}>
      <h1>Name: {name}</h1>
      <Menu menu={menu} />
      <section>
        <h3>Reviews</h3>
        {reviews.map((id) => (
          <Review key={id} id={id} />
        ))}
      </section>
      <ReviewForm className={styles.review_form} onSubmit={onSubmit} />
    </section>
  )
}
