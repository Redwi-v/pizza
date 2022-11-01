import React, { FunctionComponent } from 'react'
import style from './main.module.scss'
import CategoriesContainer from '../../components/Categories/CategoriesContainer';
import HeaderContainer from '../../components/Header/HeaderContainer';
import SortingContainer from '../../components/Sorting/SortingContainer';


interface MainProps {

}

const Main: FunctionComponent<MainProps> = () => {
  return (
    <div className="">
      <HeaderContainer />
      <div className={style.filters}>
        <CategoriesContainer />
        <SortingContainer />

      </div>
    </div>
  );
}

export default Main;

