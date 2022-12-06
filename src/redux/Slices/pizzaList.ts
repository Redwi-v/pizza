import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setFlagsFromString } from "v8";
import pizzaListApi from '../../Api/pizzaList'




export const fetchPizzas = createAsyncThunk('pizzaList/fetchPizzas', async (payload: { selectedCategory: number, sortProperty: string }) => {
  const { selectedCategory, sortProperty } = payload
  const data = await pizzaListApi.getPizzaList({ categoryId: selectedCategory, sortProperty: sortProperty })
  console.log(data);

  return data
})

const initialState = {
  categoryId: 0,
  sort: {
    title: 'Популярности',
    sortProperty: 'rating'
  },
  list: [],
  isLoading: true,
}


export const pizzaList = createSlice({
  name: 'pizzaList',
  initialState,
  reducers: {
    setCategoryId(state, { payload }) {
      state.categoryId = payload
    },

    setFlagsFromString(state, { payload }) {
      console.log('sort');
      console.log(payload);

      state.sort = payload
    },


  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.list = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      alert('не удалось загрузить список пицц попробуйте чуть позже ')
      state.isLoading = false
    })
  }

})

console.log(pizzaList);

export default pizzaList.reducer
