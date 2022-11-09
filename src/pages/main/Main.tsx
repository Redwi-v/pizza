import React, { FunctionComponent, useEffect } from 'react'
import axios from 'axios';

import style from './main.module.scss'
import { PizzaItemProps } from '../../components/PizzaItem/pizzaItemProps'
import Loader from '../../components/_commons/Loader/Loader';
import PizzaItem from '../../components/PizzaItem/PizzaItem';
import Categories from '../../components/Categories/Categories';
import Sorting from '../../components/Sorting/Sorting';

interface MainProps {

}

const Main: FunctionComponent<MainProps> = () => {
  const [pizzaItems, setPizzaItems] = React.useState<PizzaItemProps[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  useEffect(() => {
    axios.get('https://6367e63cd1d09a8fa61d0196.mockapi.io/items').then(res => {
      setIsLoading(false)
      setPizzaItems(res.data)
    })
  }, [])

  return (
    <div className={style.main}>
      <div className={style.filters}>
        <Categories />
        <Sorting />
      </div>
      <h1 className={style.main_title}>Все пиццы</h1>
      <ul className={style.pizza_list}>
        {
          !isLoading ? pizzaItems.map(pizza => {
            return (
              <li className={style.pizza} key={pizza.id}>
                <PizzaItem {...pizza} />
              </li>
            )
          })
            : [...new Array(6)].map((value, index) => {
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

