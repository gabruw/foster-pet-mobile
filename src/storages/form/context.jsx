//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';

//#endregion

const FormContext = createContext();

export const FormContextProvider = ({ children, schema, formProperties, defaultValues = {} }) => {
    const form = useForm({
        shouldUnregister: true,
        reValidateMode: 'onBlur',
        defaultValues: defaultValues,
        resolver: yupResolver(schema),
        ...formProperties
    });

    return <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
    const { form } = useContext(FormContext);

    return { ...form };
};

export default useFormContext;
