import { createSlice } from '@reduxjs/toolkit'
import { normalizedReviews, type TReview } from 'constants/normalized-mock'
import { createInitialState } from '../../util'

export const reviewSlice = createSlice({
  name: 'review',
  initialState: createInitialState<TReview>(normalizedReviews),
  reducers: {},
})
