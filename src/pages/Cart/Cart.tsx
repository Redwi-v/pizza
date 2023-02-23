import React, { FC } from 'react';
import style from './cart.module.scss';

//images
import CartItem from '../../components/CartItem/CartItem';
import CartIcon from '../../assets/img/icons/cart.svg';
import clearIcon from '../../assets/img/icons/clear.svg';
import arrowIcon from '../../assets/img/icons/arrow.svg';
import { cart, cartSelector } from '../../redux/Slices/cart/cart';
import { useAppDispatch, useAppSelector } from '../../redux/redux';
import { IPizzaItem } from '../../models/PizzaItem';
import EmptyСart from '../EmptyСart/EmptyСart';
import PayPoopUp from './PayPoopUp/PayPoopUp';
import { NavLink } from 'react-router-dom';

interface CartProps {}
const Cart: FC<CartProps> = (props) => {
    const {} = props;

    //redux logic
    const { deleteItem, clear, addItem } = cart.actions;
    const { uniqueItems, prise, itemsCount } = useAppSelector(cartSelector);
    const dispatch = useAppDispatch();

    //poopUp condition
    const [isOpen, setCondition] = React.useState(false);

    const delItem = (item: IPizzaItem, delAll?: boolean) => {
        dispatch(
            deleteItem({
                item: item,
                delAll,
            })
        );
    };
    const clearAction = () => {
        dispatch(clear());
    };

    // TODO: разбить на модули
    return (
        <>
            <PayPoopUp isOpen={isOpen} setCondition={setCondition} />
            {itemsCount ? (
                <div className={style.container}>
                    <div className={style.top}>
                        <h1 className={style.title}>
                            <img src={CartIcon} alt="cart" /> Корзина
                        </h1>
                        <button onClick={clearAction} className={style.clear}>
                            <img src={clearIcon} alt="clear" />
                            <span> Очистить корзину</span>
                        </button>
                    </div>
                    <ul className={style.list}>
                        {uniqueItems.map(([count, item], index) => {
                            const uniqueKey = String(item.id) + item.doughType + item.size;

                            return (
                                <li key={uniqueKey}>
                                    <CartItem
                                        item={item}
                                        addItem={() => dispatch(addItem(item))}
                                        delItem={delItem}
                                        count={count}
                                    />
                                </li>
                            );
                        })}
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
                        <NavLink to={'/'} className={style.back_btn}>
                            <img src={arrowIcon} alt="back" />
                            Вернуться назад
                        </NavLink>
                        <button onClick={() => setCondition(true)} className={style.pay_btn}>
                            Оформить заказ
                        </button>
                    </div>
                </div>
            ) : (
                <EmptyСart />
            )}
        </>
    );
};

export default Cart;
