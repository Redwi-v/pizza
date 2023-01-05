import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzaItem } from "../../models/cartPizzaItem";
import isEqual from "../../utils/isEqual";




type ItemCount = number 
type ItemStructure = [ItemCount, IPizzaItem]

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
        
        if(obj.id === action.payload.id && !isFounded) {
          item[0] += 1
          isFounded = true
        }
        
      })

      state.uniqueItems.forEach(item => {
        const gg = isEqual( item[1] , action.payload)

        console.log(`unical ${gg}`);
        

        if(isEqual( item[1] , action.payload) && !isFoundedEqual){
          console.log('check');
          
          item[0] += 1
          isFoundedEqual = true
        }
      })

      if(!isFoundedEqual) {
        state.uniqueItems.push([1, action.payload])
      }

      if(!isFounded) {
        state.items.push([1, action.payload])
      }


    }

  },
})

export default cart.reducer