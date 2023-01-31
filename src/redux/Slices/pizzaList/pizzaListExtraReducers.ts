import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IPizzaItem } from '../../../models/PizzaItem';
import { pizzaListState } from './pizzaListTypes';
import pizzaListApi from '../../../Api/pizzaList';

export const fetchPizzas = createAsyncThunk(
    'pizzaList/fetchPizzas',
    async (payload: { selectedCategory: number; sortProperty: string }): Promise<IPizzaItem[]> => {
        const { selectedCategory, sortProperty } = payload;
        const data = await pizzaListApi.getPizzaList({ categoryId: selectedCategory, sortProperty: sortProperty });

        return data;
    }
);

const pizzaListExtraReducers = (builder: ActionReducerMapBuilder<pizzaListState>) => {
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
};

export default pizzaListExtraReducers;
