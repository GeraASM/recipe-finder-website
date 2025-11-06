export interface Dish {
  id: number
  title: string
  slug: string
  image: Image
  overview: string
  servings: number
  prepMinutes: number
  cookMinutes: number
  ingredients: string[]
  instructions: string[]
}

export interface Image {
  large: string
  small: string
}
