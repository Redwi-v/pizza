import { Console } from 'console'
import React, { FunctionComponent } from 'react'
import style from './categories.module.scss'

interface CategoriesProps {

}

const categoriesArray: String[] = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories: FunctionComponent<CategoriesProps> = () => {

  const [activeCategory, setActiveCategory] = React.useState<number>(0)
  console.log(activeCategory)


  return (
    <ul className={style.categories_list}>
      {
        categoriesArray.map((category, index) => {
          return (
            <li
              className={`${style.category} ${index === activeCategory ? style.active : ''} ui_element`}
              key={index}
              onClick={() => setActiveCategory(index)}
            >
              {category}
            </li>
          )
        })
      }
    </ul>
  );
}

export default Categories;