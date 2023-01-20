import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizzaItem } from '../../models/cartPizzaItem';
import isEqual from '../../utils/isEqual';
import { RootState } from '../store';

type ItemCount = number;
type ItemStructure = [ItemCount, IPizzaItem];
type delSettings = {
    delAll?: boolean;
    item: IPizzaItem;
};

interface ICartState {
    itemsCount: number;
    prise: number;
    items: Array<ItemStructure>;
    uniqueItems: Array<ItemStructure>;
}

const initialState = {
    itemsCount: 0,
    prise: 0,
    items: [],
    uniqueItems: [],
} as ICartState;

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<IPizzaItem>) {
            let isFounded: boolean = false;
            let isFoundedEqual: boolean = false;

            state.items.forEach((item) => {
                const obj = item[1];

                if (obj.id === action.payload.id && !isFounded) {
                    item[0] += 1;
                    isFounded = true;
                }
            });

            state.uniqueItems.forEach((item) => {
                if (isEqual(item[1], action.payload) && !isFoundedEqual) {
                    item[0] += 1;
                    isFoundedEqual = true;
                }
            });

            if (!isFoundedEqual) {
                state.uniqueItems.push([1, action.payload]);
            }

            if (!isFounded) {
                state.items.push([1, action.payload]);
            }

            // count and prise
            state.prise += Number(action.payload.prise);
            state.itemsCount++;
        },

        deleteItem(state, action: PayloadAction<delSettings>) {
            const { item: payloadItem, delAll = false } = action.payload;

            const reduceParameters = (count: number, prise: number) => {
                state.itemsCount -= count;
                state.prise -= prise;
            };
            if (delAll) {
                let DeletedItemsPrise: number = 0;
                let itemsDeleted: number = 0;

                state.uniqueItems = state.uniqueItems.filter(([count, item]) => {
                    if (isEqual(item, payloadItem)) {
                        DeletedItemsPrise = Number(item.prise) * count;
                        itemsDeleted = count;
                        return false;
                    }
                    return item;
                });
                state.items = state.items.filter(([count, item], index) => {
                    const isFound = item.id === payloadItem.id;

                    if (isFound && itemsDeleted === count) {
                        return false;
                    }
                    if (isFound) {
                        state.items[index][0] -= itemsDeleted;
                    }

                    return item;
                });

                reduceParameters(itemsDeleted, DeletedItemsPrise);
            } else {
                for (let i = 0; i < state.uniqueItems.length; i++) {
                    const [count, item] = state.uniqueItems[i];
                    const isFound = isEqual(item, payloadItem);

                    if (isFound) {
                        reduceParameters(1, Number(item.prise));
                    }
                    if (isFound && count === 1) {
                        state.uniqueItems.splice(i, 1);
                        break;
                    }
                    if (isFound) {
                        --state.uniqueItems[i][0];
                        break;
                    }
                }

                for (let i = 0; i < state.items.length; i++) {
                    const [count, item] = state.items[i];

                    const isFound = item.id === payloadItem.id;

                    if (isFound && count === 1) {
                        state.items.splice(i, 1);
                        break;
                    }
                    if (isFound) {
                        --state.items[i][0];
                        break;
                    }
                }
            }
        },

        clear(state) {
            state.items = [];
            state.uniqueItems = [];
            state.prise = 0;
            state.itemsCount = 0;
        },
    },
});

export const cartSelector = (state: RootState) => state.cart;

export default cart.reducer;
