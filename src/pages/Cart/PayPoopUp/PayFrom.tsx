import { Field, Formik, Form, FormikHelpers } from 'formik';
import { FC } from 'react';
import style from './payPoopUp.module.scss';
import payValidationScheme, { cities } from './validationScheme';
import Select from '../../../components/_commons/Select/Select';
import CustomFieldProps from '../../../components/_commons/CustomField/customFieldProps';
import CustomField from '../../../components/_commons/CustomField/CustomField';

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
        actions.resetForm();
        console.log(initialValues);

        // actions.setValues(initialValues);
    };

    //select controlsя
    return (
        <Formik initialValues={initialValues} onSubmit={submitForm} validationSchema={payValidationScheme}>
            {({ errors, touched, isValid, dirty, values, setFieldValue }) => {
                return (
                    <>
                        <Form className={style.form}>
                            <CustomField
                                type="text"
                                placeholder="firstName"
                                name="firstName"
                                error={errors.firstName}
                                touched={touched.firstName}
                                value={values.firstName}
                            />
                            <CustomField
                                type="text"
                                placeholder="lastName"
                                name="lastName"
                                error={errors.lastName}
                                touched={touched.lastName}
                                value={values.lastName}
                            />
                            <CustomField
                                type="number"
                                placeholder="phoneNumber"
                                name="phoneNumber"
                                error={errors.phoneNumber}
                                touched={touched.phoneNumber}
                                value={values.phoneNumber}
                            />
                            <Select
                                placeholder="Ваш город"
                                selectedOption={values.city}
                                name="city"
                                setSelectedOption={setFieldValue}
                                error={errors.city}
                                touched={touched.city}
                                options={cities}
                            />
                            <CustomField
                                type="text"
                                placeholder="address"
                                name="address"
                                error={errors.address}
                                touched={touched.address}
                                value={values.address}
                            />

                            <div className={style.card}>
                                <CustomField
                                    type="number"
                                    placeholder="cardNumber"
                                    name="cardNumber"
                                    error={errors.cardNumber}
                                    touched={touched.cardNumber}
                                    value={values.cardNumber}
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
                                        value={values.cvvCode}
                                        max={3}
                                    />
                                </div>
                                <CustomField
                                    type="text"
                                    placeholder="cardOwner"
                                    name="cardOwner"
                                    error={errors.cardOwner}
                                    touched={touched.cardOwner}
                                    value={values.cardOwner}
                                />
                            </div>
                            <button disabled={!(isValid && dirty)} type="submit">
                                Submit
                            </button>
                        </Form>
                    </>
                );
            }}
        </Formik>
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
