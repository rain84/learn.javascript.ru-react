import type { TRootState } from 'redux_'

const selectModule = (state: TRootState) => state.cart

const selectProductAmountById = (id: string) => (state: TRootState) =>
  selectModule(state)[id] || 0

const selectTotalPrice = (state: TRootState) => {
  const dishes = state.dish.entities
  const totalPrice = Object.keys(selectModule(state)).reduce(
    (acc, id) => acc + dishes[id].price,
    0
  )
  return totalPrice
}

const selectTotalAmount = (state: TRootState) =>
  selectModule(state)
    ? Object.values(selectModule(state)).reduce(
        (acc, amount) => acc + amount,
        0
      )
    : 0

export const cartSelectors = {
  selectProductAmountById,
  selectTotalAmount,
  selectModule,
  selectTotalPrice,
}
