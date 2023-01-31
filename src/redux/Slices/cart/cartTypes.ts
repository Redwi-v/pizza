import { IPizzaItem } from '../../../models/PizzaItem';

type ItemCount = number;
export type ItemStructure = [ItemCount, IPizzaItem];
export type delSettings = {
    delAll?: boolean;
    item: IPizzaItem;
};

export interface ICartState {
    itemsCount: number;
    prise: number;
    items: Array<ItemStructure>;
    uniqueItems: Array<ItemStructure>;
}
