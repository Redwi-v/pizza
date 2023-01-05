import React, { FC } from 'react'
import style from './pizzaItem.module.scss'

//additional imports
import { PizzaItemProps } from './pizzaItemProps'
import starIcon from '../../assets/img/icons/star.png'
import Counter from '../Counter/Counter'



// settings data
const pizza_doughs: string[] = ['тонкое', 'традиционное']
const pizzaSizes: number[] = [26, 30, 40]


// Component
const PizzaItem: FC<PizzaItemProps> = (props) => {
  const { id, imageUrl, name, prise, types, sizes, category, rating, addItem, count } = props


  //logic
  const [selectedSize , setSelectedSize] = React.useState<number | null>(null)
  const [selectedDought , setSelectedDought] = React.useState<number | null>(null)

  const addPizza = () => {
    
    addItem({
      id: id,
      prise: prise,
      img: imageUrl,
      name: name,
      doughType: selectedDought,
      size: selectedSize,
    })
  }

  // --additional renders
  const renderPizzaSizes = (): React.ReactNode => {
    return pizzaSizes.map((pizzaSize, index) => {
      return <Select text={pizzaSize} availableItems={sizes} item={pizzaSize} selectedItem={selectedSize} setSelectedItem={setSelectedSize} key={index}/>
    })
  }

  const renderPizzaDoughs = (): React.ReactNode => {
    return pizza_doughs.map((dough, doughsIndex) => {

      

      return <Select text={dough} availableItems={types} item={doughsIndex} selectedItem={selectedDought} setSelectedItem={setSelectedDought} key={doughsIndex} />
    })
  }

  return (
    <div className={style.pizza_item}>
      <div className={style.pizza_preview}>
        <img src={imageUrl} alt="pizza image" />
      </div>
      <h2 className={style.name}>{name}</h2>
      <div className={style.rating}>
        <img src={starIcon} alt="star icon" className={style.star} />
        <span className={style.rating_number}>{rating}</span>
      </div>
      <div className={style.purchase}>
        <div className={style.prise_block}>
          <span className={style.currency}>₽</span>
          <span className={style.prise}>{prise}</span>
        </div>
        <Counter count={count} minusCallBack={() => {}} plusCallBack={addPizza}/>
      </div>
      <ul className={style.doughs}>
        {
          renderPizzaDoughs()
        }
      </ul>
      <ul className={style.choose_size}>
        {
          renderPizzaSizes()
        }
      </ul>
    </div>
  );
}


// Select helper 
interface SelectProps {
  availableItems: Array<number | string> // items приходящие к нам с объектом (для проверки лежит ли в этом масиве item)
  item: number | string // нужно для сравнения и хранения (может принимать значение поля text)
  selectedItem: string | number | null
  text: string | number // то что будет выводится  
  setSelectedItem: (value: any) => void
}

const Select: FC<SelectProps> = ({availableItems, item, text,  selectedItem, setSelectedItem}) => {

  // задаем начальное значение (первый существующий элемент)
  React.useEffect(() => {
    setSelectedItem((prevItem: any) => {
      if(prevItem === null && isAvailable) {
        return item
      }
      return prevItem
    })
  }, [])


  
  
  const isAvailable = availableItems.indexOf(item) === -1 ? false : true
  const isSelected = selectedItem === item
   

  const availableClass = isAvailable ? style.available : ''
  const selectedClass = isSelected ? style.selectedElement : ''
  



  const setSize = () => {
    if(isAvailable) setSelectedItem(item)
  }

  return (
    <li>
      <button onClick={setSize} className={`${style.settings_button} ${availableClass} ${selectedClass} ui_element`}>
        {text}
      </button>
    </li>
  )
}




export default PizzaItem;
