import { configureStore, combineReducers } from '@reduxjs/toolkit';
import pizzaList from './Slices/pizzaList/pizzaList';
import cart from './Slices/cart/cart';

const reducers = combineReducers({
    pizzaList,
    cart,
});

const store = () =>
    configureStore({
        reducer: reducers,
    });

export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export default store();
