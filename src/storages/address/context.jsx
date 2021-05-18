//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from 'utils/functions/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import addressSchema from 'utils/validations/yup/schemas/address';
import formatFetchCep from './format/formatFetchCep';
import { getCep } from './services/send-data';

//#endregion

const AddressContext = createContext();

const initialState = {
    [ADDRESS_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AddressContextProvider = ({ children, defaultValues }) => {
    const { run, requestState } = useRequestState();
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const form = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(addressSchema)
    });

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    const fetchCep = useCallback(
        async (value) => {
            const { data, errors } = await run(() => getCep(value));
            setState((prevState) => ({ ...prevState, [ADDRESS_FIELDS.THIS]: formatFetchCep(data), error: errors }));
        },
        [run, setState, requestState]
    );

    return (
        <AddressContext.Provider value={{ state, form, setIsLoading, fetchCep }}>{children}</AddressContext.Provider>
    );
};

const useAddressContext = () => {
    const { state, form, setIsLoading, fetchCep } = useContext(AddressContext);

    return { form, setIsLoading, fetchCep, ...state };
};

export default useAddressContext;
