export type TIngredients = string[]

export type TTDish = Pick<TMenu, 'name' | 'price' | 'ingredients'>

export type TMenu = {
  id: string
  name: string
  price: number
  ingredients: TIngredients
}

export type TReview = {
  id: string
  user: string
  text: string
  rating: number
}

export type TRestaurant = {
  id: string
  name: string
  menu: TMenu[]
  reviews: TReview[]
}
