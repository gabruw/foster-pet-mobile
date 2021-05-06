//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import STATE_FIELD from 'utils/constants/field/state';
import isInvalid from 'utils/function/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { getOptions } from './services/send-data';

//#endregion

const StateContext = createContext();

const initialState = {
    [STATE_FIELD.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const StateContextProvider = ({ children, defaultValues }) => {
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

    const fetchOptions = useCallback(
        async (stateId) => {
            const { data, errors } = await run(() => getOptions(stateId));
            setState((prevState) => ({ ...prevState, [STATE_FIELD.THIS]: data, error: errors }));
        },
        [run, setState, requestState]
    );

    return <StateContext.Provider value={{ state, setIsLoading, fetchOptions }}>{children}</StateContext.Provider>;
};

const useStateContext = () => {
    const { state, setIsLoading, fetchOptions } = useContext(StateContext);

    return { setIsLoading, fetchOptions, ...state };
};

export default useStateContext;
