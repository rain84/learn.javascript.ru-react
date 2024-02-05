import { createSlice } from '@reduxjs/toolkit'
import { normalizedUsers, type TUser } from 'constants/normalized-mock'
import { createInitialState } from '../util'

export const userSlice = createSlice({
  name: 'user',
  initialState: createInitialState<TUser>(normalizedUsers),
  reducers: {},
  selectors: {
    selectAll: ({ entities }) => entities,
  },
})

export const userSelectors = userSlice.selectors
