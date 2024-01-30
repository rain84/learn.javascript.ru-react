import styles from './style.module.scss'
import { TReview } from 'constants/restaurant.types'

export const Rating = ({ rating }: TProps) => {
  return (
    <span className={styles.rating}>{Array(rating).fill('⭐️').join(' ')}</span>
  )
}

type TProps = {
  rating: TReview['rating']
}
