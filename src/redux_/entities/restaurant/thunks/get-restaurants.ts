import { createAsyncThunk } from '@reduxjs/toolkit'

export const getRestaurants = createAsyncThunk('restaurants', async () => {
  const response = await fetch('http://localhost:3001/api/restaurants')
  return await response.json()
})
