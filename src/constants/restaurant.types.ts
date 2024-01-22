export type TMenu = {
  id: string
  name: string
  price: number
  ingredients: string[]
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
