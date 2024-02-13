import type { TRootState } from 'redux_'

const selectModule = (state: TRootState) => state.restaurant

const selectAll = (state: TRootState) => selectModule(state).entities

const selectIds = (state: TRootState) => selectModule(state).ids

const selectById = (id: string) => (state: TRootState) =>
  selectModule(state).entities[id]

export const restaurantSelectors = {
  selectAll,
  selectById,
  selectModule,
  selectIds,
}
