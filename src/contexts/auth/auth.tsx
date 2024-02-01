import { createContext, useMemo, useReducer } from 'react'

const INITIAL_STATE = {
  name: '',
  email: '',
  isAuthorized: false,
}

const API = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (state: TLogin) => {},
  logout: () => {},
}

const reducer = (state: TState, { type, payload }: TAction) => {
  switch (type) {
    case 'login': {
      const { email, name } = payload
      const isAuthorized = email.trim() !== '' && name.trim() !== ''

      return { ...payload, isAuthorized }
    }

    case 'logout':
      return { ...INITIAL_STATE }

    default:
      return state
  }
}

export const AuthState = createContext(INITIAL_STATE)
export const AuthAPI = createContext(API)

export const AuthProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const API = useMemo(
    () => ({
      login: (payload: TLogin) => dispatch({ type: 'login', payload }),
      logout: () => dispatch({ type: 'logout', payload: undefined }),
    }),
    []
  )

  return (
    <AuthState.Provider value={state}>
      <AuthAPI.Provider value={API}>{children}</AuthAPI.Provider>
    </AuthState.Provider>
  )
}

type TProps = {
  children: React.ReactNode
}

type TState = typeof INITIAL_STATE
type TLogin = Omit<TState, 'isAuthorized'>
type TAction =
  | { type: 'login'; payload: TLogin }
  | { type: 'logout'; payload: undefined }
