import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const cities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    'Нижний Новгород',
    'Челябинск',
    'Омск',
    'Самара',
    'Ростов-на-Дону',
    'Уфа',
    'Красноярск',
    'Пермь',
];

const requiredText = 'это обязательное поле!';

const payValidationScheme = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'минимальное число символов 2')
        .max(30, 'максимальное число символов 30')
        .required(requiredText),

    lastName: Yup.string()
        .min(2, 'минимальное число символов 2')
        .max(30, 'максимальное число символов 30')
        .required(requiredText),

    phoneNumber: Yup.string().matches(phoneRegExp, 'не правильный номер телефона ').required(requiredText),

    city: Yup.string().is(cities, 'мы не обслуживаем ваш город').required(requiredText),

    address: Yup.string().min(2, 'минимальное число символов 2').max(30, 'максимальное число символов 30').required(requiredText),

    cardNumber: Yup.string()
        .matches(/^[0-9]{13,19}$/, 'неверный формат')
        .required(requiredText),

    term: Yup.string()
        .typeError('Not a valid expiration date. Example: MM/YY')
        .matches(/([0-9]{2})\/([0-9]{2})/, 'Not a valid expiration date. Example: MM/YY')
        .required(requiredText),

    cardOwner: Yup.string()
        .min(2, 'минимальное число символов 2')
        .max(30, 'максимальное число символов 30')
        .required(requiredText),

    cvvCode: Yup.number().min(3).required(requiredText),
});

export default payValidationScheme;
