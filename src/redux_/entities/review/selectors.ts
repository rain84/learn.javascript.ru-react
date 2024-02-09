import type { TRootState } from 'redux_'

const selectModule = (state: TRootState) => state.review

const selectAll = (state: TRootState) => selectModule(state).entities

const selectById = (id: string) => (state: TRootState) =>
  selectModule(state).entities[id]

export const reviewSelectors = { selectAll, selectById, selectModule }
