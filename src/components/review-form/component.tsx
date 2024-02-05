import clsx from 'clsx'
import { Button, Rating, Textarea } from 'components/ui'
import { TReview } from 'constants/normalized-mock'
import { useAuth } from 'contexts/auth'
import { nanoid } from 'nanoid'
import { useReducer } from 'react'
import styles from './styles.module.scss'

export const ReviewForm = ({ className, onSubmit: onSubmit_ }: TProps) => {
  const { isAuthorized, name } = useAuth.state()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  if (!isAuthorized) return null

  /* prettier-ignore */
  const onChange = {
    text: (e: TEvent) => dispatch({ type: 'text', value: e.target.value }),
    rating: (value: number) => dispatch({ type: 'rating', value }),
  }

  const onSubmit = () => {
    if (!isValid(state)) {
      alert('Some fields are missing')
      return
    }

    onSubmit_?.({ ...state, name, id: nanoid() })
    dispatch({ type: 'reset' })
  }

  return (
    <section className={clsx(styles.root, className)}>
      <div className={styles.container}>
        <h1 className={styles.title}>Review</h1>
        <div className={styles.item}>
          <span>Name: {name}</span>
        </div>
        <div className={styles.item}>
          <label htmlFor="text">Text</label>
          <Textarea
            name="text"
            className={styles.textarea}
            value={state.text}
            onChange={onChange.text}
          />
        </div>
        <div className={styles.item}>
          <span>Rating</span>
          <Rating
            className={styles.rating}
            size={5}
            value={state.rating}
            onChange={onChange.rating}
            editable
          />
        </div>
        <div className={styles.button__container}>
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </div>
    </section>
  )
}

const INITIAL_STATE: TState = {
  rating: 0,
  text: '',
}

const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
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
  if (!state.text) return false
  if (!state.rating) return false
  return true
}

type TProps = {
  className?: string
  onSubmit?: (data: TState & Record<'name' | 'id', string>) => void
}
type TState = Omit<TReview, 'id' | 'userId'>
type TAction =
  | { type: 'text'; value: string }
  | { type: 'rating'; value: number }
  | { type: 'reset' }

type TEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
