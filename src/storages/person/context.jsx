//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import PERSON_FIELDS from 'utils/constants/fields/person';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from 'utils/functions/isInvalid';
import usePersonService from './service';

//#endregion

const PersonContext = createContext();

const initialState = {
    [PERSON_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const PersonContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    return <PersonContext.Provider value={{ state, setIsLoading }}>{children}</PersonContext.Provider>;
};

const usePersonContext = () => {
    const context = useContext(PersonContext);
    const service = usePersonService(context);

    const { state, setIsLoading } = context;

    return { setIsLoading, ...state, ...service };
};

export default usePersonContext;
