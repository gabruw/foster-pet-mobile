//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import AUTHENTICATION_FIELD from 'utils/constants/field/authentication';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './services/send-data';
import isInvalid from 'utils/constants/function/isInvalid';

//#endregion

const AuthenticationContext = createContext();

const initialState = {
    [AUTHENTICATION_FIELD.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AuthenticationContextProvider = ({ children, defaultValues }) => {
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

    const fetchLogin = useCallback(
        async (form) => {
            const data = await run(() => postLogin(form));
            setState((prevState) => ({ ...prevState, [AUTHENTICATION_FIELD.THIS]: data.data, error: data.errors }));
        },
        [run, setState, requestState]
    );

    return (
        <AuthenticationContext.Provider value={{ state, setIsLoading, fetchLogin }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

const useAuthenticationContext = () => {
    const { state, setIsLoading, fetchLogin } = useContext(AuthenticationContext);

    return { setIsLoading, fetchLogin, ...state };
};

export default useAuthenticationContext;
