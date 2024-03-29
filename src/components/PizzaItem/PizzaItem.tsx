import React, { FC } from 'react';
import style from './pizzaItem.module.scss';

//additional imports
import { PizzaItemProps } from './pizzaItemProps';
import starIcon from '../../assets/img/icons/star.png';
import Counter from '../Counter/Counter';
import settingsData from './settingsData';
import { IPizzaItem } from '../../models/PizzaItem';

//settings data
const pizza_doughs = settingsData.pizza_doughs;
const pizzaSizes = settingsData.pizzaSizes;

// Component
const PizzaItem: FC<PizzaItemProps> = (props) => {
    const { id, imageUrl, name, prise, types, sizes, category, rating, addItem, cartPizza, delItem } = props;

    const [count, setCount] = React.useState<number>(0);

    // find pizza count in cart
    React.useEffect(() => {
        let isFind = false;

        cartPizza.forEach((item: any) => {
            if (item[1].id === id) {
                setCount(item[0]);
                isFind = true;
            }
        });

        if (!isFind) setCount(0);
    });

    //logic
    const [selectedSize, setSelectedSize] = React.useState<number | null>(null);
    const [selectedDought, setSelectedDought] = React.useState<number | null>(null);

    const [priceWithSettings, setPriceWithSettings] = React.useState<number>(prise);

    const item: IPizzaItem = {
        id: id,
        prise: priceWithSettings,
        imageUrl: imageUrl,
        name: name,
        doughType: selectedDought || 0,
        size: selectedSize || 30,
    };

    const addPizza = () => {
        addItem(item);
    };

    React.useEffect(() => {
        switch (selectedSize) {
            case 30:
                setPriceWithSettings(prise + 40);
                break;
            case 40:
                setPriceWithSettings(prise + 70);
                break;
            default:
                setPriceWithSettings(prise);
        }
    }, [selectedSize]);

    const minusPizza = () => {
        delItem(item);
    };

    // --additional renders
    const renderPizzaSizes = (): React.ReactNode => {
        return pizzaSizes.map((pizzaSize, index) => {
            return (
                <Select
                    text={pizzaSize}
                    availableItems={sizes}
                    item={pizzaSize}
                    selectedItem={selectedSize}
                    setSelectedItem={setSelectedSize}
                    key={index}
                />
            );
        });
    };

    const renderPizzaDoughs = (): React.ReactNode => {
        return pizza_doughs.map((dough, doughsIndex) => {
            return (
                <Select
                    text={dough}
                    availableItems={types}
                    item={doughsIndex}
                    selectedItem={selectedDought}
                    setSelectedItem={setSelectedDought}
                    key={doughsIndex}
                />
            );
        });
    };

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
                    <span className={style.prise}>{priceWithSettings}</span>
                </div>
                <Counter count={count} minusCallBack={minusPizza} plusCallBack={addPizza} />
            </div>
            <ul className={style.doughs}>{renderPizzaDoughs()}</ul>
            <ul className={style.choose_size}>{renderPizzaSizes()}</ul>
        </div>
    );
};

// Select helper
interface SelectProps {
    availableItems: Array<number | string>; // items приходящие к нам с объектом (для проверки лежит ли в этом масиве item)
    item: number | string; // нужно для сравнения и хранения (может принимать значение поля text)
    selectedItem: string | number | null;
    text: string | number; // то что будет выводится
    setSelectedItem: (value: any) => void;
}

const Select: FC<SelectProps> = ({ availableItems, item, text, selectedItem, setSelectedItem }) => {
    // задаем начальное значение (первый существующий элемент)
    React.useEffect(() => {
        setSelectedItem((prevItem: any) => {
            if (prevItem === null && isAvailable) {
                return item;
            }
            return prevItem;
        });
    }, []);

    const isAvailable = availableItems.indexOf(item) === -1 ? false : true;
    const isSelected = selectedItem === item;

    const availableClass = isAvailable ? style.available : '';
    const selectedClass = isSelected ? style.selectedElement : '';

    const setSize = () => {
        if (isAvailable) setSelectedItem(item);
    };

    return (
        <li>
            <button onClick={setSize} className={`${style.settings_button} ${availableClass} ${selectedClass} ui_element`}>
                {text}
            </button>
        </li>
    );
};

export default PizzaItem;
