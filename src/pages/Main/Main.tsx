import React, { FunctionComponent, useEffect } from 'react'

import style from './main.module.scss'
import { PizzaItemProps } from '../../components/PizzaItem/pizzaItemProps'
import Loader from '../../components/_commons/Loader/Loader';
import PizzaItem from '../../components/PizzaItem/PizzaItem';
import Categories from '../../components/Categories/Categories';
import Sorting from '../../components/Sorting/Sorting';
import { MainProps } from './props';


const Main: FunctionComponent<MainProps> = (props) => {
  const { selectedCategory, setCategory, pizzaList, pizzaListIsLoading, sort, setFlagsFromString , addItem, items} = props 


  return (
    <div className={style.main}>
      <div className={style.filters}>
        <Categories setCategory={setCategory} selectedCategory={selectedCategory} />
        <Sorting selectedSortItem={sort} setSelectedSortItem={setFlagsFromString} />
      </div>
      <h1 className={style.main_title}>Все пиццы</h1>
      <ul className={style.pizza_list}>
        {
          !pizzaListIsLoading ? pizzaList.map(pizza => {

            

            return (
              <li className={style.pizza} key={pizza.id}>
                <PizzaItem {...pizza} addItem={addItem}  />
              </li>
            )
          })
            : [...new Array(8)].map((value, index) => {
              return (
                <li key={index}>
                  <Loader />

                </li>
              )
            })

        }
      </ul>
    </div>
  );
}

export default Main;

