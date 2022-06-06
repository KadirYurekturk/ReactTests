import { useState } from "react";

export default function useForm(initialState) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}