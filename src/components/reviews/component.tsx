import { Rating } from 'components/rating'
import { type TReview } from 'constants/restaurant.types'

export const Reviews = ({ reviews }: TProps) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, rating, text, user }) => (
        <div key={id}>
          <p>
            <span>
              {user}: {text}
            </span>
            <Rating size={5} rating={rating} />
          </p>
        </div>
      ))}
    </div>
  )
}

type TProps = {
  reviews: TReview[]
}
