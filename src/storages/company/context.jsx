//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import COMPANY_FIELDS from 'utils/constants/fields/company';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from 'utils/functions/isInvalid';
import useCompanyService from './service';

//#endregion

const CompanyContext = createContext();

const initialState = {
    [COMPANY_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const CompanyContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    return <CompanyContext.Provider value={{ state, setIsLoading }}>{children}</CompanyContext.Provider>;
};

const useCompanyContext = () => {
    const context = useContext(CompanyContext);
    const service = useCompanyService(context);

    const { state, setIsLoading, register } = context;

    return { setIsLoading, register, ...state, ...service };
};

export default useCompanyContext;
