import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzaItem } from "../../models/cartPizzaItem";
import isEqual from "../../utils/isEqual";




type ItemCount = number
type ItemStructure = [ItemCount, IPizzaItem]
type ItemId = number

interface ICartState {
  itemsCount: number,
  prise: number,
  items: Array<ItemStructure>
  uniqueItems: Array<ItemStructure>
}

const initialState = {
  itemsCount: 0,
  prise: 0,
  items: [],
  uniqueItems: [],
} as ICartState

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IPizzaItem>) {

      let isFounded: boolean = false
      let isFoundedEqual: boolean = false

      state.items.forEach(item => {
        const obj = item[1]

        if (obj.id === action.payload.id && !isFounded) {
          item[0] += 1
          isFounded = true
        }

      })

      state.uniqueItems.forEach(item => {
        if (isEqual(item[1], action.payload) && !isFoundedEqual) {
          item[0] += 1
          isFoundedEqual = true
        }
      })

      if (!isFoundedEqual) {
        state.uniqueItems.push([1, action.payload])
      }

      if (!isFounded) {
        state.items.push([1, action.payload])
      }

      // count and prise
      state.prise += Number(action.payload.prise)
      state.itemsCount++
    },

    deleteItem(state, action: PayloadAction<ItemId>) {

      const itemForDele = action.payload

      state.items.forEach(([count, item]) => {
        if (item.id === itemForDele) {

          state.prise -= Number(item.prise)
        }
      })
      --state.itemsCount
      deleteArrItem(state.items, itemForDele)
      deleteArrItem(state.uniqueItems, itemForDele)



    }


  },
})

function deleteArrItem(array: ItemStructure[], itemId: ItemId) {
  array.forEach(([count, obj]: [number, IPizzaItem], index) => {

    if (obj.id === itemId && (count - 1) === 0) {
      array.splice(index, 1)
    } else if (obj.id === itemId) {
      --array[index][0]
    }
  })
}

export default cart.reducer