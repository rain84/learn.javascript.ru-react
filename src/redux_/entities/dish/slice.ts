import { createSlice } from '@reduxjs/toolkit'
import { normalizedDishes, type TTDish } from 'constants/normalized-mock'
import { createInitialState } from '../../util'

export const dishSlice = createSlice({
  name: 'dish',
  initialState: createInitialState<TTDish>(normalizedDishes),
  reducers: {},
})
