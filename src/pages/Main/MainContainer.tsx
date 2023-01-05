import Main from "./Main";
import React from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import { pizzaList } from '../../redux/Slices/pizzaList'
import { fetchPizzas } from '../../redux/Slices/pizzaList'
import { useNavigate, useParams } from "react-router-dom";
import {cart} from "../../redux/Slices/cart";
import { IPizzaItem } from "../../models/cartPizzaItem";
interface MainContainerProps {

}

const MainContainer: React.FC<MainContainerProps> = (props) => {
  //redux logic
  const { setCategoryId, setFlagsFromString } = pizzaList.actions
  const { categoryId, list, isLoading, sort } = useAppSelector(state => state.pizzaList)
  const {addItem} = cart.actions
  const {items}   = useAppSelector(state => state.cart)  
  const dispatch = useAppDispatch()


  

  //main logic
  const [urlParamsChecked, setUrlParamsChecked] = React.useState<Boolean>(false)
  const isMounted = React.useRef(false)

  const navigate = useNavigate()


  // изменяем url только после 2го рендера
  React.useEffect(() => {
    if (isMounted.current) {
      navigate(`/${sort.sortProperty}/${categoryId}`)
    }
    setUrlParamsChecked(true)
    isMounted.current = true
  }, [categoryId, sort])

  // после проверки url параметров отправляем запрос 
  React.useEffect(() => {
    if (urlParamsChecked) {
      dispatch(fetchPizzas({ selectedCategory: categoryId, sortProperty: sort.sortProperty }))
    }
  }, [categoryId, sort, urlParamsChecked])

  // middleware
  const setSorting = (sort: any) => {
    dispatch(setFlagsFromString(sort))
  }
  const setCategory = (id: number) => {
    dispatch(setCategoryId(id))
  }
  


  return (
    <Main items={items} addItem={(item: IPizzaItem) => dispatch(addItem(item))} selectedCategory={categoryId} sort={sort} setFlagsFromString={setSorting} setCategory={setCategory} pizzaList={list} pizzaListIsLoading={isLoading} />
  );
}


export default MainContainer
