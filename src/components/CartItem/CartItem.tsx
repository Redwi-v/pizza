import React, { FC } from 'react'
import Counter from '../Counter/Counter'

import style from './cartItem.module.scss'

// images
import crossIcon from '../../assets/img/icons/cross.png'
import crossRedIcon from '../../assets/img/icons/crossRed.png'
import { IPizzaItem } from '../../models/cartPizzaItem'
import settingsData from '../PizzaItem/settingsData'
import { useAppDispatch, useAppSelector } from '../../redux/redux'
export interface CartItemProps {
  item: IPizzaItem
  delItem: (item: IPizzaItem, delAll?: boolean) => void
  count: number
  addItem: () => void
}


const CartItem: FC<CartItemProps> = (props) => {
  const { addItem, delItem, item, count } = props
  const { doughType, id, img, name, prise, size } = item



  return (
    <div className={`${style.item} ui_element`}>
      <div className={style.left_side}>
        <img className={style.preview} src={img} alt="pizza preview" />
        <div className={style.info}>
          <h2 className={style.pizza_name}>
            {name}
          </h2>
          <div className={style.params}>
            {settingsData.pizza_doughs[doughType]} тесто, {size} см
          </div>
        </div>
      </div>
      <Counter count={count} minusCallBack={() => delItem(item)} plusCallBack={addItem} />
      <h2 className={style.prise}>{Number(prise) * count}<span>₽</span></h2>
      <button onClick={() => delItem(item, true)} className={style.delete}>
        <img src={crossIcon} alt="delete" />
        <img src={crossRedIcon} alt="delete" />
      </button>

    </div>
  );
}



export default CartItem;