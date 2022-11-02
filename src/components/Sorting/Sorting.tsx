import React, { FC, ReactNode } from 'react';
import style from './sorting.module.scss'

interface SortingProps {

}

const Sorting: FC<SortingProps> = () => {
  const [chosenMethodIndex, setChosenMethodIndex] = React.useState<number>(0)
  const [methodsListIsOpened, setMethodsListIsOpened] = React.useState<Boolean>(false)
  const methodsListRef = React.useRef(null)
  const methodsListIsOpenedRef = React.useRef(methodsListIsOpened)

  const methods: String[] = [
    'популярности',
    'цене',
    'алфавиту'
  ]

  React.useEffect(() => {
    methodsListIsOpenedRef.current = methodsListIsOpened
  }, [methodsListIsOpened])

  React.useEffect(() => {
    window.addEventListener('click', e => {
      const target: any = e.target
      if (methodsListIsOpenedRef.current && target.parentNode !== methodsListRef.current) {
        toggleMethodsList()
      }
    })

  }, [])


  const toggleMethodsList = () => {
    setMethodsListIsOpened(isOpened => !isOpened)
  }

  const choseMethod = (methodIndex: number): void => {
    setChosenMethodIndex(methodIndex)
  }


  return (
    <div className={style.sort}>
      <button ref={methodsListRef} className={style.sort_button} onClick={toggleMethodsList}>
        <span>Сортировать по: </span>
        <span className={style.chosen_method}>{methods[chosenMethodIndex]}</span>
      </button>

      <ul className={`${style.methods_list} ${methodsListIsOpened ? style.opened : style.closed} ui_element`}>
        {
          methods.map(((method, index) => {
            return (
              <li
                className={`${style.method} ${index === chosenMethodIndex ? style.active : ''}`}
                key={index}
                onClick={() => choseMethod(index)}
              >{method}</li>
            )
          }))
        }
      </ul>

    </div>
  );
}

export default Sorting;