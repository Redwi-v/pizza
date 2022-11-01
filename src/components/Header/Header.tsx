import React, { FunctionComponent } from 'react'
import style from './header.module.scss'

//additional imports
import logo from '../../assets/img/logo.png'
import cartIcon from '../../assets/img/icons/cart.svg'


interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className={style.header}>
      <div className={style.left_side}>
        <a href="#">
          <img className={style.logo} src={logo} alt="logo" />
        </a>
        <div className={style.service}>
          <a href="#">
            <h1 className={style.name}>pizza</h1>
          </a>
          <p className={style.subtitle}>сервис по доставке пиццы</p>
        </div>
      </div>
      <div className={style.right_side}>
        <div className={`${style.shopping_info} ui_element`}>
          <button className={style.money}>
            520 ₽
          </button>
          <button className={style.cart}>
            <img src={cartIcon} alt='cart icon' /> <span>3</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;