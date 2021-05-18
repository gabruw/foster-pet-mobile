//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './services/send-data';
import isInvalid from 'utils/functions/isInvalid';

//#endregion

const AuthenticationContext = createContext();

const initialState = {
    [AUTHENTICATION_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AuthenticationContextProvider = ({ children, defaultValues }) => {
    const { run, requestState } = useRequestState();
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const setAuthentication = useCallback(
        (authentication) => setState((prevState) => ({ ...prevState, authentication })),
        [setState]
    );

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
            setState((prevState) => ({ ...prevState, [AUTHENTICATION_FIELDS.THIS]: data.data, error: data.errors }));
        },
        [run, setState, requestState]
    );

    return (
        <AuthenticationContext.Provider value={{ state, setAuthentication, setIsLoading, fetchLogin }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

const useAuthenticationContext = () => {
    const { state, setAuthentication, setIsLoading, fetchLogin } = useContext(AuthenticationContext);

    return { setAuthentication, setIsLoading, fetchLogin, ...state };
};

export default useAuthenticationContext;
