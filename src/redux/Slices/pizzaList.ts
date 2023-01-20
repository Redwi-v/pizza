import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import pizzaListApi from '../../Api/pizzaList';
import { RootState } from '../store';

export const fetchPizzas = createAsyncThunk(
    'pizzaList/fetchPizzas',
    async (payload: { selectedCategory: number; sortProperty: string }) => {
        const { selectedCategory, sortProperty } = payload;
        const data = await pizzaListApi.getPizzaList({ categoryId: selectedCategory, sortProperty: sortProperty });

        return data;
    }
);

const initialState = {
    categoryId: 0,
    sort: {
        title: 'Популярности',
        sortProperty: 'rating',
    },
    list: [],
    isLoading: true,
};

export const pizzaList = createSlice({
    name: 'pizzaList',
    initialState,
    reducers: {
        setCategoryId(state, { payload }) {
            state.categoryId = payload;
        },

        setFlagsFromString(state, { payload }) {
            state.sort = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            alert('не удалось загрузить список пицц попробуйте чуть позже ');
            state.isLoading = false;
        });
    },
});

export const pizzaListSelector = (state: RootState) => state.pizzaList;

export default pizzaList.reducer;
