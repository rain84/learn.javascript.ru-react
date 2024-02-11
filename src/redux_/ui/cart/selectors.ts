import type { TRootState } from 'redux_'

const selectModule = (state: TRootState) => state.cart

const selectProductAmountById = (id: string) => (state: TRootState) =>
  selectModule(state)[id] || 0

const selectTotalAmount = (state: TRootState) =>
  selectModule(state)
    ? Object.values(selectModule(state)).reduce(
        (acc, amount) => acc + amount,
        0
      )
    : 0

export const cartSelectors = { selectProductAmountById, selectTotalAmount }
