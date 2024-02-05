import { createSlice } from '@reduxjs/toolkit'
import { normalizedDishes, type TTDish } from 'constants/normalized-mock'
import { createInitialState } from '../util'

export const dishSlice = createSlice({
  name: 'dish',
  initialState: createInitialState<TTDish>(normalizedDishes),
  reducers: {},
  selectors: {
    selectAll: ({ entities }) => entities,
    selectById: ({ entities }, id) => entities[id],
  },
})

export const dishSelectors = dishSlice.selectors
