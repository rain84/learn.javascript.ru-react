import { Rating } from 'components/ui/rating'
import { useSelector } from 'react-redux'
import { RootState } from 'redux_'
import { reviewSelectors } from 'redux_/entities/review'
import { userSelectors } from 'redux_/entities/user'
import styles from './styles.module.scss'

export const Reviews = ({ ids }: TProps) => {
  const reviews = useSelector((state: RootState) =>
    reviewSelectors.selectByIds(state, ids)
  )
  const users = useSelector(userSelectors.selectAll)

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, rating, text, userId }) => (
        <div key={id}>
          <p>
            <span>
              {users[userId].name}: {text}
            </span>
            <Rating size={5} value={rating} className={styles.rating} />
          </p>
        </div>
      ))}
    </div>
  )
}

type TProps = {
  ids: string[]
}
