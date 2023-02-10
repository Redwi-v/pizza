import { Field, Formik, Form, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import style from './payPoopUp.module.scss';
import payValidationScheme from './validationScheme';

interface PayFormProps {}

interface IPayFromValues {
    firstName: string;
    lastName: string;
    phoneNumber: number | '';
    city: string;
    address: string;

    cardNumber: number | '';
    term: string;
    cardOwner: string;
    cvvCode: number | '';
}

const PayForm: FC<PayFormProps> = (props) => {
    const {} = props;

    const initialValues: IPayFromValues = {
        firstName: '',
        lastName: '',
        address: '',
        cardNumber: '',
        cardOwner: '',
        city: '',
        cvvCode: '',
        phoneNumber: '',
        term: '',
    };

    const submitForm = (params: IPayFromValues, actions: FormikHelpers<IPayFromValues>) => {
        console.log(params);
        console.log(actions);
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={submitForm} validationSchema={payValidationScheme}>
            {({ errors, touched, isValid, dirty, values }) => (
                <>
                    <Form className={style.form}>
                        <CustomField
                            type="text"
                            placeholder="firstName"
                            name="firstName"
                            error={errors.firstName}
                            touched={touched.firstName}
                        />
                        <CustomField
                            type="text"
                            placeholder="lastName"
                            name="lastName"
                            error={errors.lastName}
                            touched={touched.lastName}
                        />
                        <CustomField
                            type="number"
                            placeholder="phoneNumber"
                            name="phoneNumber"
                            error={errors.phoneNumber}
                            touched={touched.phoneNumber}
                        />
                        <CustomField type="text" placeholder="city" name="city" error={errors.city} touched={touched.city} />
                        <CustomField
                            type="text"
                            placeholder="address"
                            name="address"
                            error={errors.address}
                            touched={touched.address}
                        />

                        <div className={style.card}>
                            <CustomField
                                type="number"
                                placeholder="cardNumber"
                                name="cardNumber"
                                error={errors.cardNumber}
                                touched={touched.cardNumber}
                            />

                            <div className={style.middle_section}>
                                <TermField
                                    type="string"
                                    placeholder="Expiry MM/YY"
                                    name="term"
                                    error={errors.term}
                                    touched={touched.term}
                                    value={values.term}
                                />
                                <CustomField
                                    type="number"
                                    placeholder="CVV"
                                    name="cvvCode"
                                    error={errors.cvvCode}
                                    touched={touched.cvvCode}
                                />
                            </div>
                            <CustomField
                                type="text"
                                placeholder="cardOwner"
                                name="cardOwner"
                                error={errors.cardOwner}
                                touched={touched.cardOwner}
                            />
                        </div>
                        <button disabled={!(isValid && dirty)} type="submit">
                            Submit
                        </button>
                    </Form>
                </>
            )}
        </Formik>
    );
};

interface CustomFieldProps {
    error: string | undefined;
    touched: boolean | undefined;
    name: string;
    placeholder?: string;
    type: string;
}

const CustomField: FC<CustomFieldProps> = (props) => {
    const { error, touched, name, placeholder, type } = props;

    return (
        <div className={style.custom_field}>
            <Field
                className={`${style.field} ${error && touched && style.err_field}`}
                name={name}
                placeholder={placeholder || ''}
                type={type}
            />
            {error && touched ? <div className={style.error}>{error}</div> : null}
        </div>
    );
};

interface ITermField extends CustomFieldProps {
    value: string;
}

const TermField: FC<ITermField> = (props) => {
    const { error, touched, name, placeholder, type } = props;
    let { value } = props;

    if (value.length === 3) {
        const arr = value.split('');
        const thirdСharacter = arr[2];
        if (thirdСharacter !== '/') {
            arr[2] = '/';
            arr[3] = thirdСharacter;
        }
        value = arr.join('');
    }

    value = value.slice(0, 5);
    console.log(value);

    return (
        <div className={style.custom_field}>
            <Field
                className={`${style.field} ${error && touched && style.err_field}`}
                name={name}
                placeholder={placeholder || ''}
                type={type}
                value={value}
            />
            {error && touched ? <div className={style.error}>{error}</div> : null}
        </div>
    );
};

export default PayForm;
