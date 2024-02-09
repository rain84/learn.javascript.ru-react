import type { TRootState } from 'redux_'

const selectModule = (state: TRootState) => state.dish

const selectAll = (state: TRootState) => selectModule(state).entities

const selectById = (id: string) => (state: TRootState) =>
  selectModule(state).entities[id]

export const dishSelectors = { selectAll, selectById, selectModule }
