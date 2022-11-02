import React, { FunctionComponent } from 'react'
import style from './main.module.scss'
import CategoriesContainer from '../../components/Categories/CategoriesContainer';
import HeaderContainer from '../../components/Header/HeaderContainer';
import SortingContainer from '../../components/Sorting/SortingContainer';
import PizzaItemContainer from '../../components/PizzaItem/PizzaItemContainer';


interface MainProps {

}



const Main: FunctionComponent<MainProps> = () => {
  const pizza = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
              <li className={style.pizza}>
                <PizzaItemContainer />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Main;

