import React, { FC } from 'react'
import style from './pizzaItem.module.scss'



interface PizzaItemProps {
  preview?: string
  name?: string
  prise?: number
  types?: number[]
}

enum PizzaTypes {
  'Тонкое' = 0,
  'Традиционное' = 5,
}
const PizzaItem: FC<PizzaItemProps> = (props) => {
  const { preview, name, types } = props

  return (
    <div className={''}>
      {PizzaTypes[3]}
    </div>
  );
}



export default PizzaItem;
