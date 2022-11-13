import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://6367e63cd1d09a8fa61d0196.mockapi.io',
});

interface CategoryParams {
  categoryId?: number
}


class PizzaList {
  async getPizzaList({ categoryId }: CategoryParams) {
    const categoryParam = categoryId ? `category=${categoryId}` : '';

    const res = await axiosConfig.get(`/items?${categoryParam}`);
    return res.data;
  }
}

export default new PizzaList();
