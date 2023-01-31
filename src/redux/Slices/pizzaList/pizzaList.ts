import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import pizzaListExtraReducers from './pizzaListExtraReducers';
import pizzaListReducers from './pizzaListReducers';
import { pizzaListState, SortProperties } from './pizzaListTypes';

const initialState: pizzaListState = {
    categoryId: 0,
    sort: {
        title: 'Популярности',
        sortProperty: SortProperties.rating,
    },
    list: [],
    isLoading: true,
};

export const pizzaList = createSlice({
    name: 'pizzaList',
    initialState,
    reducers: pizzaListReducers,
    extraReducers: pizzaListExtraReducers,
});

export const pizzaListSelector = (state: RootState) => state.pizzaList;

export default pizzaList.reducer;
