//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import CITY_FIELD from 'utils/constants/field/city';
import isInvalid from 'utils/constants/function/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { getOptions } from './services/send-data';

//#endregion

const CityContext = createContext();

const initialState = {
    [CITY_FIELD.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const CityContextProvider = ({ children, defaultValues }) => {
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
            setState((prevState) => ({ ...prevState, [CITY_FIELD.THIS]: data, error: errors }));
        },
        [run, setState, requestState]
    );

    return <CityContext.Provider value={{ state, setIsLoading, fetchOptions }}>{children}</CityContext.Provider>;
};

const useCityContext = () => {
    const { state, setIsLoading, fetchOptions } = useContext(CityContext);

    return { setIsLoading, fetchOptions, ...state };
};

export default useCityContext;
