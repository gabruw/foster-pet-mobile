//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from 'utils/functions/isInvalid';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';
import useAuthenticationService from './service';

//#endregion

const AuthenticationContext = createContext();

const initialState = {
    [AUTHENTICATION_FIELDS.THIS]: null,
    isLogin: true,
    isFormRegister: true,
    ...CONTEXT_INITIAL_STATE
};

export const AuthenticationContextProvider = ({ children, defaultValues, schema = authenticationSchema }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    const setAuthentication = useCallback(
        (authentication, errors = null) => setState((prevState) => ({ ...prevState, authentication, errors })),
        [setState]
    );

    const setIsFormRegister = useCallback(
        (isFormRegister = false) => setState((prevState) => ({ ...prevState, isFormRegister })),
        [setState]
    );

    const setIsLogin = useCallback((isLogin = false) => setState((prevState) => ({ ...prevState, isLogin })), [
        setState
    ]);

    return (
        <AuthenticationContext.Provider
            value={{ state, setIsLoading, setAuthentication, setIsFormRegister, setIsLogin }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};

const useAuthenticationContext = () => {
    const context = useContext(AuthenticationContext);
    const service = useAuthenticationService(context);

    const { state, setIsLoading, setAuthentication, setIsFormRegister, setIsLogin } = context;

    return { setIsLoading, setAuthentication, setIsFormRegister, setIsLogin, ...state, ...service };
};

export default useAuthenticationContext;
