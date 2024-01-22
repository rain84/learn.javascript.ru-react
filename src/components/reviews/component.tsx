import { type TReview } from 'constants/restaurant.types'
import styles from './style.module.scss'

export const Reviews = ({ reviews }: { reviews: TReview[] }) => {
  return (
    <>
      <h3>Reviews</h3>
      {reviews.map(({ id, rating, text, user }) => (
        <div key={id}>
          <p>
            <span>
              {user}: {text}
            </span>
            <span className={styles.rating}>
              {Array(rating).fill('⭐️').join(' ')}
            </span>
          </p>
        </div>
      ))}
    </>
  )
}
