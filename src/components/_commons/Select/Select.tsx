import React, { FC, ReactElement } from 'react';
import style from './select.module.scss';

interface SelectProps {
    options: string[];
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}
const Select: FC<SelectProps> = ({ options, selectedOption, setSelectedOption }) => {
    const RenderOptions = (): ReactElement[] => {
        return options.map((option, index) => {
            return (
                <li key={index} className={style.option}>
                    {option}
                </li>
            );
        });
    };

    return (
        <div className={style.select}>
            <div className={style.selected_option}>
                <span>{selectedOption}</span>
            </div>
            <div className={style.select_list_wrapper}>
                <ul className={style.select_list}>{RenderOptions()}</ul>
            </div>
        </div>
    );
};

export default Select;
