import React, { FunctionComponent, useEffect } from 'react'

import style from './main.module.scss'
import { PizzaItemProps } from '../../components/PizzaItem/pizzaItemProps'
import Loader from '../../components/_commons/Loader/Loader';
import PizzaItem from '../../components/PizzaItem/PizzaItem';
import Categories from '../../components/Categories/Categories';
import Sorting from '../../components/Sorting/Sorting';
import pizzaListApi from '../../Api/pizzaList'

interface MainProps {
  selectedCategory: number
  setCategory: (categoryId: number) => void
}

const Main: FunctionComponent<MainProps> = ({ selectedCategory, setCategory }) => {
  const [pizzaItems, setPizzaItems] = React.useState<PizzaItemProps[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [selectedSortItem, setSelectedSortItem] = React.useState({
    title: 'Популярности',
    sortProperty: 'rating'
  })


  useEffect(() => {
    setIsLoading(true)
    pizzaListApi.getPizzaList({ categoryId: selectedCategory, sortProperty: selectedSortItem.sortProperty }).then(pizza => {
      setIsLoading(false)
      setPizzaItems(pizza)
    })
  }, [selectedCategory, selectedSortItem])

  return (
    <div className={style.main}>
      <div className={style.filters}>
        <Categories setCategory={setCategory} selectedCategory={selectedCategory} />
        <Sorting selectedSortItem={selectedSortItem} setSelectedSortItem={setSelectedSortItem} />
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

