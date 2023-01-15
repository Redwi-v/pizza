import { IPizzaItem } from "../../models/cartPizzaItem"

export interface MainProps {
  selectedCategory: number
  pizzaList: any[],
  pizzaListIsLoading: boolean,
  sort: any,
  setFlagsFromString: (sort: any) => void
  setCategory: (categoryId: number) => void
  addItem: (item: any) => void
  items: Array<any>
  delItem: (item: IPizzaItem) => void
}