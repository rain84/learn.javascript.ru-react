import { createSlice } from '@reduxjs/toolkit'
import {
  normalizedRestaurants,
  type TRestaurant,
} from 'constants/normalized-mock'
import { createInitialState } from '../../util'

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: createInitialState<TRestaurant>(normalizedRestaurants),
  reducers: {},
})
