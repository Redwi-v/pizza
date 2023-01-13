import React, { FC } from 'react'

import style from './cart.module.scss'

//images
import testPizza from '../../assets/img/test_pizza.png'
import CartItem from '../../components/CartItem/CartItem';
import CartIcon from '../../assets/img/icons/cart.svg'
import clearIcon from '../../assets/img/icons/clear.svg'
import arrowIcon from '../../assets/img/icons/arrow.svg'
import { cart } from '../../redux/Slices/cart';
import { useAppDispatch, useAppSelector } from '../../redux/redux';


interface CartProps {
}
const Cart: FC<CartProps> = (props) => {

  const { } = props



  //redux logic 
  const { deleteItem } = cart.actions
  const { uniqueItems } = useAppSelector(selector => selector.cart)
  const dispatch = useAppDispatch()

  const delItem = (delItem: number) => {
    dispatch(deleteItem(delItem))
  }


  return (
    <div className="">
      <div className={style.container}>

        <div className={style.top}>
          <h1 className={style.title}><img src={CartIcon} alt="cart" /> Корзина</h1>
          <button className={style.clear} >
            <img src={clearIcon} alt="clear" />
            Очистить корзину
          </button>
        </div>
        <ul className={style.list}>
          {
            uniqueItems.map(([count, item], index) => {
              const tempArr = []

              for (let i = 0; i < count; i++) {
                console.log('rend');

                tempArr.push(
                  <li key={String(item.id) + i}>
                    <CartItem imgUrl={item.img} delItem={() => delItem(Number(item.id))} />
                  </li>
                )
              }
              return tempArr
            })
          }
        </ul>

        <div className={style.general_information}>
          <div className={style.pizza_count}>
            Всего пицц: <span>3 шт.</span>
          </div>
          <div className={style.check}>
            Сумма заказа: <span>900 ₽</span>
          </div>
        </div>
        <div className={style.actions}>
          <button className={style.back_btn}>
            <img src={arrowIcon} alt="back" />
            Вернуться назад
          </button>
          <button className={style.pay_btn}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}



export default Cart;