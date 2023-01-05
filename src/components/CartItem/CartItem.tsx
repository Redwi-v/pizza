import React, { FC } from 'react'
import Counter from '../Counter/Counter'

import style from './cartItem.module.scss'

// images
import crossIcon from '../../assets/img/icons/cross.png'
import crossRedIcon from '../../assets/img/icons/crossRed.png'

export interface CartItemProps {
  imgUrl: string
}

const CartItem: FC<CartItemProps> = (props) => {
  const { imgUrl } = props
  return (
    <div className={`${style.item} ui_element`}>
      <div className={style.left_side}>
        <img className={style.preview} src={imgUrl} alt="pizza preview" />
        <div className={style.info}>
          <h2 className={style.pizza_name}>
            Сырный цыпленок
          </h2>
          <div className={style.params}>
            тонкое тесто, 26 см
          </div>
        </div>
      </div>
      {/* <Counter /> */}
      <h2 className={style.prise}>770 <span>₽</span></h2>
      <button className={style.delete}>
        <img src={crossIcon} alt="delete" />
        <img src={crossRedIcon} alt="delete" />
      </button>

    </div>
  );
}



export default CartItem;