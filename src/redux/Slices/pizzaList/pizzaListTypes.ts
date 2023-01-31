import { IPizzaItem } from '../../../models/PizzaItem';

export enum SortProperties {
    rating = 'rating',
    tile = 'tile',
    prise = 'prise',
    '+prise' = '+prise',
}

export type sort = {
    title: string;
    sortProperty: SortProperties;
};

export interface pizzaListState {
    categoryId: number;
    sort: sort;
    list: IPizzaItem[];
    isLoading: boolean;
}
