import { useContext } from 'react'
import { AuthAPI, AuthState } from './auth'

const useAuthState = () => useContext(AuthState)
const useAuthAPI = () => useContext(AuthAPI)

export const useAuth = {
  state: useAuthState,
  API: useAuthAPI,
}
