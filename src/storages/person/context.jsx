//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from 'utils/functions/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { postRegister } from './services/send-data';

//#endregion

const PersonContext = createContext();

const initialState = {
    [PERSON_FIELDS.THIS]: null,
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
            if (form[PERSON_FIELDS.THIS]) {
                const data = await run(() => postRegister(form));
                setState((prevState) => ({ ...prevState, [PERSON_FIELDS.THIS]: data.data, error: data.errors }));
            }
        },
        [run, setState]
    );

    return <PersonContext.Provider value={{ state, setIsLoading, register }}>{children}</PersonContext.Provider>;
};

const usePersonContext = () => {
    const { state, setIsLoading, register } = useContext(PersonContext);

    return { setIsLoading, register, ...state };
};

export default usePersonContext;
