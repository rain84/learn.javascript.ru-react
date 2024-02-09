import { Rating } from 'components/ui/rating'
import { useSelector } from 'react-redux'
import { reviewSelectors } from 'redux_/entities/review'
import { userSelectors } from 'redux_/entities/user'
import styles from './styles.module.scss'

export const Review = ({ id }: TProps) => {
  const review = useSelector(reviewSelectors.selectById(id))
  const users = useSelector(userSelectors.selectAll)

  return (
    <div key={id}>
      <p>
        <span>
          {users[review.userId].name}: {review.text}
        </span>
        <Rating size={5} value={review.rating} className={styles.rating} />
      </p>
    </div>
  )
}

type TProps = {
  id: string
}
