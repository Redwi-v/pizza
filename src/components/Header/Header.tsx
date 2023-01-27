import React, { FunctionComponent } from 'react';
import style from './header.module.scss';
import { NavLink } from 'react-router-dom';

//additional imports
import logo from '../../assets/img/logo.png';
import cartIcon from '../../assets/img/icons/cart.svg';
import { useAppSelector } from '../../redux/redux';
import { cartSelector } from '../../redux/Slices/cart';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <div className={style.header}>
            <NavLink to="/" className={style.left_side}>
                <img className={style.logo} src={logo} alt="logo" />
                <div className={style.service}>
                    <h1 className={style.name}>pizza</h1>
                    <p className={style.subtitle}>сервис по доставке пиццы</p>
                </div>
            </NavLink>
            <div className={style.right_side}>
                <CartBlock />
            </div>
        </div>
    );
};

const CartBlock = () => {
    const { itemsCount, prise } = useAppSelector(cartSelector);

    return (
        <NavLink to={'/cart'} className={`${style.shopping_info} ui_element`}>
            <div className={style.money}>{prise} ₽</div>
            <div className={style.cart}>
                <img src={cartIcon} alt="cart icon" /> <span>{itemsCount}</span>
            </div>
        </NavLink>
    );
};

export default Header;
