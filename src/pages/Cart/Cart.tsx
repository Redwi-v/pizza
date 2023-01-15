import React, { FC } from 'react'

import style from './cart.module.scss'

//images
import CartItem from '../../components/CartItem/CartItem';
import CartIcon from '../../assets/img/icons/cart.svg'
import clearIcon from '../../assets/img/icons/clear.svg'
import arrowIcon from '../../assets/img/icons/arrow.svg'
import { cart } from '../../redux/Slices/cart';
import { useAppDispatch, useAppSelector } from '../../redux/redux';
import { IPizzaItem } from '../../models/cartPizzaItem';


interface CartProps {
}
const Cart: FC<CartProps> = (props) => {

  const { } = props



  //redux logic 
  const { deleteItem, clear, addItem } = cart.actions
  const { uniqueItems, prise, itemsCount } = useAppSelector(selector => selector.cart)
  const dispatch = useAppDispatch()

  const delItem = (item: IPizzaItem, delAll?: boolean) => {
    dispatch(deleteItem({
      item: item,
      delAll
    }))
  }
  const clearAction = () => {
    dispatch(clear())
  }


  return (
    <>
      <div className={style.container}>

        <div className={style.top}>
          <h1 className={style.title}><img src={CartIcon} alt="cart" /> Корзина</h1>
          <button onClick={clearAction} className={style.clear} >
            <img src={clearIcon} alt="clear" />
            Очистить корзину
          </button>
        </div>
        <ul className={style.list}>
          {
            uniqueItems.map(([count, item], index) => {

              const uniqueKey = String(item.id) + item.doughType + item.size


              return (
                <li key={uniqueKey}>
                  <CartItem item={item} addItem={() => dispatch(addItem(item))} delItem={delItem} count={count} />
                </li>
              )
            })
          }
        </ul>

        <div className={style.general_information}>
          <div className={style.pizza_count}>
            Всего пицц: <span>{itemsCount} шт.</span>
          </div>
          <div className={style.check}>
            Сумма заказа: <span>{prise} ₽</span>
          </div>
        </div>
        <div className={style.actions}>
          <button className={style.back_btn}>
            <img src={arrowIcon} alt="back" />
            Вернуться назад
          </button>
          <button className={style.pay_btn}>Оформить заказ</button>
        </div>
      </div>
    </>
  );
}



export default Cart;