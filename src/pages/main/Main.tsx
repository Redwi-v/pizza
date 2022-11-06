import React, { FunctionComponent } from 'react'
import style from './main.module.scss'
import CategoriesContainer from '../../components/Categories/CategoriesContainer';
import HeaderContainer from '../../components/Header/HeaderContainer';
import SortingContainer from '../../components/Sorting/SortingContainer';
import PizzaItemContainer from '../../components/PizzaItem/PizzaItemContainer';

import testPizza from '../../assets/img/test_pizza.png'

const pizza = [
  {
    id: 0,
    imageUrl: testPizza,
    name: "Пепперони Фреш с перцем",
    types: [1],
    sizes: [26, 30, 40],
    category: 0,
    rating: 4.1,
    prise: 420,

  },
  {
    id: 1,
    imageUrl: testPizza,
    name: "Cырная",
    types: [0, 1],
    sizes: [26, 30, 40],
    category: 0,
    rating: 4.5,
    prise: 500,

  },
  {
    id: 2,
    imageUrl: testPizza,
    name: "С грибами",
    types: [0, 1],
    sizes: [26, 30, 40],
    category: 0,
    rating: 5.9,
    prise: 340,

  },
  {
    id: 3,
    imageUrl: testPizza,
    name: "Креветки по-азиатски",
    types: [0, 1],
    sizes: [26, 30, 40],
    category: 4.8,
    rating: 4.1,
    prise: 480,

  },
  {
    id: 4,
    imageUrl: testPizza,
    name: "Сырный цыпленок",
    types: [0, 1],
    sizes: [26, 30, 40],
    category: 0,
    rating: 4.2,
    prise: 550,

  },
  {
    id: 5,
    imageUrl: testPizza,
    name: "Тоже пицца",
    types: [0, 1],
    sizes: [26, 30, 40],
    category: 0,
    rating: 4.1,
    prise: 440,
  },
  {
    id: 6,
    imageUrl: testPizza,
    name: "не пицца с креветками",
    types: [0, 1],
    sizes: [26, 30, 40],
    category: 0,
    rating: 4.0,
    prise: 240,

  },
  {
    id: 7,
    imageUrl: testPizza,
    name: "не пицца с креветками",
    types: [0, 1],
    sizes: [26, 30, 40],
    category: 0,
    rating: 4.4,
    prise: 640,

  },
  {
    id: 8,
    imageUrl: testPizza,
    name: "не пицца с креветками",
    types: [0, 1],
    sizes: [26, 30],
    category: 0,
    rating: 4.7,
    prise: 660,

  },
]

interface MainProps {

}



const Main: FunctionComponent<MainProps> = () => {

  return (
    <div className={style.main}>
      <HeaderContainer />
      <div className={style.filters}>
        <CategoriesContainer />
        <SortingContainer />
      </div>
      <h1 className={style.main_title}>Все пиццы</h1>
      <ul className={style.pizza_list}>
        {
          pizza.map(pizza => {
            return (
              <li className={style.pizza} key={pizza.id}>
                <PizzaItemContainer {...pizza} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Main;

