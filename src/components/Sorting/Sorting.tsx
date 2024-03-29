import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import style from './sorting.module.scss';

interface SortingProps {
    selectedSortItem: SortItem;
    setSelectedSortItem: (sortItem: SortItem) => void;
}
interface SortItem {
    title: string;
    sortProperty: string;
}

const methods: SortItem[] = [
    {
        title: 'Популярности',
        sortProperty: 'rating',
    },
    {
        title: 'Сначала дешевле ',
        sortProperty: '+prise',
    },
    {
        title: 'Сначала дорогие',
        sortProperty: 'prise',
    },
    {
        title: 'Алфавиту',
        sortProperty: 'title',
    },
];
const Sorting: FC<SortingProps> = ({ selectedSortItem, setSelectedSortItem }) => {
    const [methodsListIsOpened, setMethodsListIsOpened] = React.useState<Boolean>(false);
    const methodsListRef = React.useRef(null);
    const methodsListIsOpenedRef = React.useRef(methodsListIsOpened);
    const { sort } = useParams();

    // если при первом рендаре в url нашли параметры сетаем их
    React.useEffect(() => {
        if (sort) {
            const selectedSortInUrl = methods.find((sortMethod) => sortMethod.sortProperty === sort);
            selectedSortInUrl && setSelectedSortItem(selectedSortInUrl);
        }
    }, []);

    React.useEffect(() => {
        methodsListIsOpenedRef.current = methodsListIsOpened;
    }, [methodsListIsOpened]);

    React.useEffect(() => {
        const toggleSortPanel = (e: Event) => {
            const target: any = e.target;
            if (methodsListIsOpenedRef.current && target.parentNode !== methodsListRef.current) {
                toggleMethodsList();
            }
        };

        window.addEventListener('click', toggleSortPanel);
        return () => {
            window.removeEventListener('click', toggleSortPanel);
        };
    }, []);

    const toggleMethodsList = () => {
        setMethodsListIsOpened((isOpened) => !isOpened);
    };

    return (
        <div className={style.sort}>
            <button ref={methodsListRef} className={style.sort_button} onClick={toggleMethodsList}>
                <span>Сортировать по: </span>
                <span className={style.chosen_method}>{selectedSortItem.title}</span>
            </button>

            <ul className={`${style.methods_list} ${methodsListIsOpened ? style.opened : style.closed} ui_element`}>
                {methods.map((sortItem) => {
                    const { sortProperty, title } = sortItem;
                    return (
                        <li
                            className={`${style.method} ${sortProperty === selectedSortItem.sortProperty ? style.active : ''}`}
                            key={sortProperty}
                            onClick={() => setSelectedSortItem(sortItem)}
                        >
                            {title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sorting;
