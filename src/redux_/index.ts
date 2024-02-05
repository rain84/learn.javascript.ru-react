import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { dishSlice } from 'redux_/entities/dish'
import { restaurantSlice } from 'redux_/entities/restaurant'
import { reviewSlice } from 'redux_/entities/review'
import { userSlice } from 'redux_/entities/user'

export const store = configureStore({
  reducer: combineSlices(restaurantSlice, dishSlice, reviewSlice, userSlice),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
