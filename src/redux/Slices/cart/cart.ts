import { createSlice } from '@reduxjs/toolkit';
import { getCartFromSlice } from '../../../utils/cartLocalStorage';
import { RootState } from '../../store';
import { ICartState } from './cartTypes';
import cartReducers from './redusers';

const stateCart = getCartFromSlice();

const initialState = {
    itemsCount: stateCart.itemsCount,
    prise: stateCart.prise,
    items: stateCart.items,
    uniqueItems: stateCart.uniqueItems,
} as ICartState;

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: cartReducers,
});

export const cartSelector = (state: RootState) => state.cart;

export default cart.reducer;
