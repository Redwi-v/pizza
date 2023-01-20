import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import pizzaGuyImage from '../../assets/img/pizzaGuy.png';
import style from './emptyCart.module.scss';

interface EmptyСartProps {}
const EmptyСart: FC<EmptyСartProps> = (props) => {
    const {} = props;
    return (
        <div className={style.empty_cart}>
            <h1 className={style.title}>Корзина пустая 🍽</h1>
            <p className={style.explanation}>выберете на главной странице пару пицц и они появятся здесь</p>
            <img className={style.pizza_guy} src={pizzaGuyImage} alt="just pizza guy" about="я ее украл простите (" />
            <NavLink className={style.link} to="/">
                Главная
            </NavLink>
        </div>
    );
};

export default EmptyСart;
