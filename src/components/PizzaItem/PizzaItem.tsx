import React, { FC, ReactNode } from 'react'
import style from './pizzaItem.module.scss'

//additional imports
import { PizzaItemProps } from './pizzaItemProps'
import starIcon from '../../assets/img/icons/star.png'
import Counter from '../Counter/Counter'




const pizza_doughs: string[] = ['тонкое', 'традиционное']
const pizzaSizes: number[] = [24, 30, 40]

const PizzaItem: FC<PizzaItemProps> = (props) => {
  const { id, imageUrl, name, prise, types, sizes, category, rating } = props


  // additional renders

  const renderPizzaSizes = (): React.ReactNode => {
    return pizzaSizes.map((pizzaSize) => {
      let thisSizeAvailable: boolean = false

      sizes.forEach(size => {
        if (size === pizzaSize) thisSizeAvailable = true
      })

      return (
        <li key={pizzaSize}>
          <button className={`${style.settings_button} ${thisSizeAvailable ? style.available : ''} ui_element`}>
            {pizzaSize}
          </button>
        </li>
      )
    })
  }

  const renderPizzaDoughs = (): React.ReactNode => {
    return pizza_doughs.map((dough, doughsIndex) => {
      let thisPizzaAvailable: boolean = false

      types.forEach(index => {
        if (index === doughsIndex) {
          thisPizzaAvailable = true
        }
      })

      return (
        <li key={doughsIndex}>
          <button className={`${style.settings_button} ${thisPizzaAvailable ? style.available : ''} ui_element`}>
            {dough}
          </button>
        </li>
      )
    })
  }

  return (
    <div className={style.pizza_item}>
      <div className={style.pizza_preview}>
        <img src={imageUrl} alt="pizza image" />
      </div>
      <h2 className={style.name}>{name}</h2>
      <div className={style.rating}>
        <img src={starIcon} alt="star icon" className={style.star} />
        <span className={style.rating_number}>{rating}</span>
      </div>
      <div className={style.purchase}>
        <div className={style.prise_block}>
          <span className={style.currency}>₽</span>
          <span className={style.prise}>{prise}</span>
        </div>
        <Counter />
      </div>
      <ul className={style.doughs}>
        {
          renderPizzaDoughs()
        }
      </ul>
      <ul className={style.choose_size}>
        {
          renderPizzaSizes()
        }
      </ul>
    </div>
  );
}



export default PizzaItem;
