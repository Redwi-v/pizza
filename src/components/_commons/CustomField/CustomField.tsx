import CustomFieldProps from './customFieldProps';
import { FC } from 'react';
import { Field } from 'formik';
import style from '../../../pages/Cart/PayPoopUp/payPoopUp.module.scss';

const CustomField: FC<CustomFieldProps> = (props) => {
    const { error, touched, name, placeholder, type, max, onSelect } = props;

    let { value } = props;

    if (value && max) {
        value = String(value).length > max ? Number(value.toString().slice(0, max)) : value;
    }

    return (
        <div className={style.custom_field}>
            <Field
                className={`${style.field} ${error && touched && style.err_field}`}
                name={name}
                placeholder={placeholder || ''}
                type={type}
                value={value}
                onSelect={onSelect}
            />
            {error && touched ? <div className={style.error}>{error}</div> : null}
        </div>
    );
};

export default CustomField;
