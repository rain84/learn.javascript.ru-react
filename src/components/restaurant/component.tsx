import { ReviewForm } from 'components/review-form'
import type { TRestaurant, TReview } from 'constants/restaurant.types'
import { useState } from 'react'
import { Menu } from '../menu'
import { Reviews } from '../reviews'
import styles from './style.module.scss'

export const Restaurant = ({ name, menu, reviews: reviews_ }: TRestaurant) => {
  const [reviews, setReviews] = useState(reviews_)

  const onSubmit = (data: TReview): void =>
    setReviews((prev) => [...prev, data])

  return (
    <section className={styles.root}>
      <h1>Name: {name}</h1>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <ReviewForm className={styles.review_form} onSubmit={onSubmit} />
    </section>
  )
}
