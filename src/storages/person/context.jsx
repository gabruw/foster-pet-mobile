//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import PERSON_FIELD from 'utils/constants/field/person';
import isInvalid from 'utils/constants/function/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { postRegister } from './services/send-data';

//#endregion

const PersonContext = createContext();

const initialState = {
    [PERSON_FIELD.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const PersonContextProvider = ({ children, defaultValues }) => {
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
            setState((prevState) => ({ ...prevState, [PERSON_FIELD.THIS]: data.data, error: data.errors }));
        },
        [run, setState, requestState]
    );

    return <PersonContext.Provider value={{ state, setIsLoading, register }}>{children}</PersonContext.Provider>;
};

const usePersonContext = () => {
    const { state, setIsLoading, register } = useContext(PersonContext);

    return { setIsLoading, register, ...state };
};

export default usePersonContext;
