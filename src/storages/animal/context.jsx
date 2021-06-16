//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import ANIMAL_FIELDS from 'utils/constants/fields/animal';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from 'utils/functions/isInvalid';
import useAnimalService from './service';

//#endregion

const AnimalContext = createContext();

const initialState = {
    [ANIMAL_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AnimalContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    const setAnimal = useCallback(
        (animal, errors = null) => setState((prevState) => ({ ...prevState, animal, errors })),
        [setState]
    );


    return (
        <AnimalContext.Provider
            value={{ state, setIsLoading, setAnimal}}
        >
            {children}
        </AnimalContext.Provider>
    );
};

const useAnimalContext = () => {
    const context = useContext(AnimalContext);
    const service = useAnimalService(context);

    const { state, setIsLoading, setAnimal} = context;

    return { setIsLoading, setAnimal, ...state, ...service };
};

export default useAnimalContext;
