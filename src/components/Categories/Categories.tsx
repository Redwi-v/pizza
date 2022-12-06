import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import style from './categories.module.scss'

import { Category } from './Category'

interface CategoriesProps {
  selectedCategory: number
  setCategory: (categoryId: number) => void
}

const categoriesArray: Category[] = [
  {
    title: 'Все',
    categoryId: 0
  },
  {
    title: 'Мясные',
    categoryId: 1
  },
  {
    title: 'Вегетарианская',
    categoryId: 2
  },
  {
    title: 'Гриль',
    categoryId: 3
  },
  {
    title: 'Острые',
    categoryId: 4
  },
  {
    title: 'Закрытые',
    categoryId: 5
  },
]

const Categories: FunctionComponent<CategoriesProps> = ({ selectedCategory, setCategory }) => {

  // если в url есть параметры сетаем их 
  const { categoryId } = useParams()
  React.useEffect(() => {
    if (categoryId) {
      setCategory(+categoryId)
    }
  }, [])


  const category = categoriesArray.find(({ categoryId }) => selectedCategory === categoryId)

  return (
    <ul className={style.categories_list}>
      {
        categoriesArray.map(({ title, categoryId }) => {
          return (
            <li
              className={`${style.category} ${categoryId === category?.categoryId ? style.active : ''} ui_element`}
              key={categoryId}
              onClick={() => setCategory(categoryId)}
            >
              {title}
            </li>
          )
        })
      }
    </ul>
  );
}

export default Categories;