// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialFormValues) => {
    const [values, setValues] = useState(initialFormValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
    };

    const handleClear = () => {
        setValues(initialFormValues)
    }

    return([values, handleChanges, handleClear]);
}