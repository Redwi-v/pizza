import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://6367e63cd1d09a8fa61d0196.mockapi.io',
});

interface CategoryParams {
    categoryId?: number;
    sortProperty?: string;
}

class PizzaList {
    async getPizzaList({ categoryId, sortProperty }: CategoryParams) {
        const categoryParam = categoryId ? `category=${categoryId}` : '';
        const order = sortProperty?.includes('+') ? 'asc' : 'desc';
        const sorting = sortProperty?.replace('+', '');

        const res = await axiosConfig.get(`/items?${categoryParam}&sortBy=${sorting}&order=${order}`);
        return res.data;
    }
}

export default new PizzaList();
