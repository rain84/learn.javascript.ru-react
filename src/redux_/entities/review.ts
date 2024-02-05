import { createSlice } from '@reduxjs/toolkit'
import { normalizedReviews, type TReview } from 'constants/normalized-mock'
import { createInitialState } from '../util'

export const reviewSlice = createSlice({
  name: 'review',
  initialState: createInitialState<TReview>(normalizedReviews),
  reducers: {},
  selectors: {
    selectAll: ({ entities }) => entities,
    selectById: ({ entities }, id: string) => entities[id],
    selectByIds: ({ entities }, ids: string[]) => ids.map((id) => entities[id]),
  },
})

export const reviewSelectors = reviewSlice.selectors
