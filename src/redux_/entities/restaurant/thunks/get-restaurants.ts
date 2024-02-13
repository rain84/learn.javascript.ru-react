import { createAppAsyncThunk } from 'hooks/use-create-app-async-thunk'

export const getRestaurants = createAppAsyncThunk(
  'restaurants',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants')
    return await response.json()
  },
  {
    // condition: (_, { getState }) =>
    //   restaurantSelectors.selectIds(getState() as TRootState).length === 0,
  }
)
