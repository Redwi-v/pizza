import { ICartState } from '../redux/Slices/cart/cartTypes';

export const getCartFromSlice = () => {
    const data = window.localStorage.getItem('cart');

    if (data) {
        const dataObj = JSON.parse(data);
        return dataObj as ICartState;
    }
    return { items: [], itemsCount: 0, prise: 0, uniqueItems: [] } as ICartState;
};

export const setCartFromSlice = (data: ICartState) => {
    window.localStorage.setItem('cart', JSON.stringify(data));
};
