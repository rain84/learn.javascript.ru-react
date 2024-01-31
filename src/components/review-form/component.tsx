import clsx from 'clsx'
import { Rating } from 'components/rating'
import { TReview } from 'constants/restaurant.types'
import { nanoid } from 'nanoid'
import { useReducer } from 'react'
import styles from './style.module.scss'

export const ReviewForm = ({ className, onSubmit: onSubmit_ }: TProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  /* prettier-ignore */
  const onChange = {
    user: (e: TEvent) => dispatch({ type: 'user', value: e.target.value }),
    text: (e: TEvent) => dispatch({ type: 'text', value: e.target.value }),
    rating: (value: number) => dispatch({ type: 'rating', value }),
  }

  const onSubmit = () => {
    if (!isValid(state)) {
      alert('Some fields are missing')
      return
    }

    onSubmit_?.({ ...state, id: nanoid() })
    dispatch({ type: 'reset' })
  }

  return (
    <section className={clsx(styles.root, className)}>
      <h1 className={styles.title}>Review</h1>
      <div className={styles.item}>
        <label htmlFor="user">Name</label>
        <input
          type="text"
          name="user"
          value={state.user}
          className={styles.input}
          onChange={onChange.user}
        />
      </div>

      <div className={styles.item}>
        <label htmlFor="text">Text</label>
        <textarea
          name="text"
          className={styles.textarea}
          value={state.text}
          onChange={onChange.text}
        />
      </div>

      <div className={styles.item}>
        <span>Rating</span>
        <Rating
          size={5}
          value={state.rating}
          onChange={onChange.rating}
          editable
        />
      </div>

      <div className={styles.button__container}>
        <button className={styles.button} onClick={onSubmit}>
          Submit
        </button>
      </div>
    </section>
  )
}

const INITIAL_STATE: TState = {
  rating: 0,
  text: '',
  user: '',
}

const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'user':
      return { ...state, user: action.value }
    case 'text':
      return { ...state, text: action.value }
    case 'rating':
      return { ...state, rating: action.value }
    case 'reset':
      return INITIAL_STATE
    default:
      return state
  }
}

const isValid = (state: TState) => {
  if (!state.user) return false
  if (!state.text) return false
  if (!state.rating) return false
  return true
}

type TProps = { className?: string; onSubmit?: (data: TReview) => void }
type TState = Omit<TReview, 'id'>
type TAction =
  | { type: 'user'; value: string }
  | { type: 'text'; value: string }
  | { type: 'rating'; value: number }
  | { type: 'reset' }

type TEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
