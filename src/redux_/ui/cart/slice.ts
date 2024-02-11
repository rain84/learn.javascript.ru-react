import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {} as TState,
  reducers: {
    increment: (state, { payload: productId }) => {
      state[productId] = (state[productId] || 0) + 1
    },
    decrement: (state, { payload: productId }) => {
      state[productId] = (state[productId] || 0) - 1

      if (state[productId] <= 0) {
        delete state[productId]
      }
    },
  },
})

export const cartActions = cartSlice.actions

type TProductId = string
type TState = Record<TProductId, number>
