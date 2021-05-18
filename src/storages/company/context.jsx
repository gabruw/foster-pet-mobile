//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import COMPANY_FIELDS from 'utils/constants/fields/company';
import isInvalid from 'utils/functions/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { postRegister } from './services/send-data';

//#endregion

const CompanyContext = createContext();

const initialState = {
    [COMPANY_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const CompanyContextProvider = ({ children, defaultValues }) => {
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

    const register = useCallback(
        async (form) => {
            const data = await run(() => postRegister(form));
            setState((prevState) => ({ ...prevState, [COMPANY_FIELDS.THIS]: data.data, error: data.errors }));
        },
        [run, setState, requestState]
    );

    return <CompanyContext.Provider value={{ state, setIsLoading, register }}>{children}</CompanyContext.Provider>;
};

const useCompanyContext = () => {
    const { state, setIsLoading, register } = useContext(CompanyContext);

    return { setIsLoading, register, ...state };
};

export default useCompanyContext;
