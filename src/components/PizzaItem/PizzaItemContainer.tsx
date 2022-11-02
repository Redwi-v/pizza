import React, { FC } from 'react'
import PizzaItem from './PizzaItem';


interface PizzaItemContainerProps {
}
const PizzaItemContainer: FC<PizzaItemContainerProps> = (props) => {
  const { } = props
  return (<PizzaItem {...props} />);
}



export default PizzaItemContainer;