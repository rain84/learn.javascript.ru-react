import { combineSlices, configureStore } from '@reduxjs/toolkit'
import {
  useDispatch as useDispatch_,
  useSelector as useSelector_,
  type TypedUseSelectorHook,
} from 'react-redux'
import { dishSlice } from 'redux_/entities/dish'
import { restaurantSlice } from 'redux_/entities/restaurant'
import { reviewSlice } from 'redux_/entities/review'
import { userSlice } from 'redux_/entities/user'
import { cartSlice } from 'redux_/ui/cart'

export const store = configureStore({
  reducer: combineSlices(
    restaurantSlice,
    dishSlice,
    reviewSlice,
    userSlice,
    cartSlice
  ),
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

export const useDispatch: () => TAppDispatch = useDispatch_
export const useSelector: TypedUseSelectorHook<TRootState> = useSelector_
