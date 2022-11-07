import React, { FunctionComponent } from 'react'
import style from './header.module.scss'
import { NavLink } from 'react-router-dom'

//additional imports
import logo from '../../assets/img/logo.png'
import cartIcon from '../../assets/img/icons/cart.svg'


interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className={style.header}>
      <NavLink to='/' className={style.left_side}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.service}>
          <h1 className={style.name}>pizza</h1>
          <p className={style.subtitle}>сервис по доставке пиццы</p>
        </div>
      </NavLink>
      <div className={style.right_side}>
        <NavLink to={'/cart'} className={`${style.shopping_info} ui_element`}>
          <div className={style.money}>
            520 ₽
          </div>
          <div className={style.cart}>
            <img src={cartIcon} alt='cart icon' /> <span>3</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;