import React, { FC } from 'react'
import PizzaItem from './PizzaItem';

import { PizzaItemProps } from './pizzaItemProps';

const PizzaItemContainer: FC<PizzaItemProps> = (props) => {

  return (<PizzaItem {...props} />);
}



export default PizzaItemContainer;