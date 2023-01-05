export interface PizzaItemProps {
  id: number
  imageUrl: string
  name: string
  prise: number
  types: number[]
  sizes: number[]
  category: number
  rating: number
  addItem: (item: any) => void
  count: number
}

