import React, { ChangeEvent, FC, ReactElement } from 'react';
import CustomField from '../CustomField/CustomField';
import style from './select.module.scss';

interface SelectProps {
    options: string[];
    selectedOption: string;
    placeholder?: string;
    setSelectedOption: (fieldName: string, option: string) => void;
    name: string;
    error: string | undefined;
    touched: boolean | undefined;
}
const Select: FC<SelectProps> = ({ options, selectedOption, placeholder, setSelectedOption, name, error, touched }) => {
    const RenderOptions = (): Array<ReactElement> | ReactElement => {
        const optionsList: Array<ReactElement> = [];

        options.forEach((option, index) => {
            if (!option.toLowerCase().includes(inputValue.toLowerCase())) {
                return;
            }

            optionsList.push(
                <li
                    onClick={() => {
                        setSelectedOption(name, option);
                        setInputSelected(false);
                    }}
                    key={index}
                    className={style.option}
                >
                    {option}
                </li>
            );
        });

        return optionsList.length > 0 ? optionsList : <li className={style.notFound}>Мы не работаем в этом городе ¯\_(ツ)_/¯</li>;
    };

    const [inputSelected, setInputSelected] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const selected = () => {
        setInputSelected(true);
    };

    React.useEffect(() => {
        setInputValue(selectedOption);
        setInputSelected(false);
    }, [selectedOption]);

    const toggleOptionsList = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setInputSelected((value) => !value);
    };

    return (
        <>
            <div className={style.select}>
                <div>
                    <button onClick={toggleOptionsList} className={style.openButton}>
                        ▼
                    </button>

                    <CustomField
                        placeholder={placeholder}
                        onSelect={selected}
                        value={inputValue}
                        name={name}
                        error={error}
                        touched={touched}
                        type="text"
                    ></CustomField>
                </div>
                <div className={`${style.select_list_wrapper} ${inputSelected && style.active}`}>
                    <ul className={style.select_list}>{RenderOptions()}</ul>
                </div>
            </div>
        </>
    );
};

export default Select;
