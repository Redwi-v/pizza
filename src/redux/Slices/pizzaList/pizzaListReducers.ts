import { PayloadAction } from '@reduxjs/toolkit';
import { pizzaListState, sort } from './pizzaListTypes';

const pizzaListReducers = {
    setCategoryId(state: pizzaListState, { payload }: PayloadAction<number>) {
        state.categoryId = payload;
    },

    setFlagsFromString(state: pizzaListState, { payload }: PayloadAction<sort>) {
        state.sort = payload;
    },
};

export default pizzaListReducers;
