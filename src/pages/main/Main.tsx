import React, { FunctionComponent, useEffect } from 'react'
import style from './main.module.scss'
import CategoriesContainer from '../../components/Categories/CategoriesContainer';
import HeaderContainer from '../../components/Header/HeaderContainer';
import SortingContainer from '../../components/Sorting/SortingContainer';
import PizzaItemContainer from '../../components/PizzaItem/PizzaItemContainer';
import axios from 'axios';
import { PizzaItemProps } from '../../components/PizzaItem/pizzaItemProps'
import Loader from '../../components/_commons/Loader/Loader';

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
      <HeaderContainer />
      <div className={style.filters}>
        <CategoriesContainer />
        <SortingContainer />
      </div>
      <h1 className={style.main_title}>Все пиццы</h1>
      <ul className={style.pizza_list}>
        {
          !isLoading ? pizzaItems.map(pizza => {
            return (
              <li className={style.pizza} key={pizza.id}>
                <PizzaItemContainer {...pizza} />
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

