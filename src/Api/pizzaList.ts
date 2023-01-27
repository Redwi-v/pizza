import axios from 'axios';
import { IPizzaItem } from '../models/PizzaItem';

const axiosConfig = axios.create({
    baseURL: 'https://6367e63cd1d09a8fa61d0196.mockapi.io',
});

export type Id = number | string;
interface CategoryParams {
    categoryId?: number;
    sortProperty?: string;
}

class PizzaList {
    async getPizzaList({ categoryId, sortProperty }: CategoryParams) {
        const categoryParam = categoryId ? `category=${categoryId}` : '';
        const order = sortProperty?.includes('+') ? 'asc' : 'desc';
        const sorting = sortProperty?.replace('+', '');

        const res = await axiosConfig.get<IPizzaItem[]>(`/items?${categoryParam}&sortBy=${sorting}&order=${order}`);
        return res.data;
    }

    public async getPizzaById(id: Id) {
        const { data } = await axiosConfig.get<IPizzaItem[]>(`/items?id=${id}`);
        return data;
    }
}

export default new PizzaList();
