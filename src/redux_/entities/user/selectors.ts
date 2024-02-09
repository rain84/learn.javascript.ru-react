import type { TRootState } from 'redux_'

const selectModule = (state: TRootState) => state.user

const selectAll = (state: TRootState) => selectModule(state).entities

const selectById = (id: string) => (state: TRootState) =>
  selectModule(state).entities[id]

export const userSelectors = { selectAll, selectById, selectModule }
