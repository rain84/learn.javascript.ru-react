import { Rating } from 'components/rating'
import { type TReview } from 'constants/restaurant.types'

export const Reviews = ({ reviews }: { reviews: TReview[] }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, rating, text, user }) => (
        <div key={id}>
          <p>
            <span>
              {user}: {text}
            </span>
            <Rating rating={rating} />
          </p>
        </div>
      ))}
    </div>
  )
}
