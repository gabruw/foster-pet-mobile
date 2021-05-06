//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import ADDRESS_FIELD from 'utils/constants/field/address';
import isInvalid from 'utils/function/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { getCep } from './services/send-data';
import formatFetchCep from './function/formatFetchCep';

//#endregion

const AddressContext = createContext();

const initialState = {
    [ADDRESS_FIELD.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AddressContextProvider = ({ children, defaultValues }) => {
    const { run, requestState } = useRequestState();
    const [state, setState] = useState({ ...initialState, ...defaultValues });

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
            setState((prevState) => ({ ...prevState, [ADDRESS_FIELD.THIS]: formatFetchCep(data), error: errors }));
        },
        [run, setState, requestState]
    );

    return <AddressContext.Provider value={{ state, setIsLoading, fetchCep }}>{children}</AddressContext.Provider>;
};

const useAddressContext = () => {
    const { state, setIsLoading, fetchCep } = useContext(AddressContext);

    return { setIsLoading, fetchCep, ...state };
};

export default useAddressContext;
