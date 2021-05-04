//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './services/send-data';
import AUTHENTICATION_FIELD from 'utils/constants/field/authentication';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';

//#endregion

const AuthenticationContext = createContext();

const initialState = {
    [AUTHENTICATION_FIELD.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AuthenticationContextProvider = ({ children, defaultValues }) => {
    const { run } = useRequestState();
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setIsLoading = useCallback(
        () =>
            setState((prevState) => ({
                ...prevState,
                isLoading: !prevState.isLoading
            })),
        [setState]
    );

    const login = useCallback(
        async (form) => {
            setIsLoading();

            await run(() => postLogin(form))
                .then(({ data }) => console.log(data))
                .finally(() => setIsLoading());
        },
        [setIsLoading, run, setState]
    );

    return (
        <AuthenticationContext.Provider value={{ state, setIsLoading, login }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

const useAuthenticationContext = () => {
    const { state, setIsLoading, login } = useContext(AuthenticationContext);

    return { setIsLoading, login, ...state };
};

export default useAuthenticationContext;
