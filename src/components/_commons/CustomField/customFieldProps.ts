export default interface CustomFieldProps {
    error: string | undefined;
    touched: boolean | undefined;
    name: string;
    placeholder?: string;
    type: string;
    max?: number;
    value?: number | string;
    onBlur?: (value: any) => any;
    onSelect?: (value: any) => any;
}
