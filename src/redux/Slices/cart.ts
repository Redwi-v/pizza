import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IPizzaItem {
  id: number | string,
  prise: number | string
  img: String,
  name: String,
  doughType: String,
  size: Number,
}


type ItemStructure = [IPizzaItem, number]

interface ICartState {
  itemsCount: number,
  prise: number,
  items: Array<ItemStructure>
}

const initialState = {
  itemsCount: 0,
  prise: 0,
  items: []
} as ICartState

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IPizzaItem>) {

      state.items.push([action.payload, 1])
    }

  },
})

export default cart.reducer