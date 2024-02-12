import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getRestaurants } from './thunks/get-restaurants'

const entityAdapter = createEntityAdapter<TRestaurant>()

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload)
      })
      .addCase(getRestaurants.rejected, () => {}),
})

export type TRestaurant = {
  id: string
  name: string
  menu: string[]
  reviews: string[]
}
