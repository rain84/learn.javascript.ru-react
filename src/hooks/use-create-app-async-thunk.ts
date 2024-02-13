import { createAsyncThunk } from '@reduxjs/toolkit'
import { type TAppDispatch, type TRootState } from 'redux_'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: TRootState
  dispatch: TAppDispatch
}>()
